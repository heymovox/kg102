/**
 * Consent-controlled PostHog session replay.
 *
 * Plain ESM on purpose: the browser entry (`src/instrumentation-client.ts`) mounts
 * this module and the offline check (`posthog-replay.check.mjs`) imports this same
 * file directly with `node:test`, injecting a stubbed SDK, consent source and URL.
 *
 * Nothing here reads credentials from the environment: the public project token and
 * the US/EU host are passed in by the entry. Missing either one is a no-op.
 */

export const CONSENT_GRANTED = 'granted'
export const CONSENT_DENIED = 'denied'
export const CONSENT_UNKNOWN = 'unknown'

/**
 * Routes that are never recorded: auth, payment, admin/dashboard and form pages
 * where visitors type names, emails or free text. A trailing `/` or deeper path
 * under a prefix is blocked too.
 */
export const SENSITIVE_ROUTE_PREFIXES = [
  '/api',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/admin',
  '/dashboard',
  '/account',
  '/settings',
  '/checkout',
  '/payment',
  '/billing',
  '/add-business',
  '/post-requirement',
  '/contact',
]

/**
 * Sensitive DOM: `.ph-no-capture` stays the blocking class, plus explicit hooks
 * for password, payment fields and subtrees flagged by the app. Blocking removes
 * the subtree, so text masking cannot leak attributes or images of those nodes.
 */
export const REPLAY_BLOCK_SELECTOR = [
  '.ph-no-capture',
  '[data-ph-no-capture]',
  '[data-sensitive]',
  '[data-private]',
  'input[type="password"]',
  'input[autocomplete="cc-number"]',
  'input[autocomplete="cc-csc"]',
].join(', ')

const SAFE_PROTOCOLS = new Set(['http:', 'https:'])
const EMAIL_IN_PATH = /[^\s/@]+@[^\s/]+\.[a-z]{2,}/i

function originOf(url) {
  try {
    return new URL(url, 'http://localhost').origin
  } catch {
    return undefined
  }
}

/** True when a path belongs to the auth/payment/account/form surface. */
export function isSensitivePath(pathname) {
  if (typeof pathname !== 'string' || pathname.length === 0) return true
  const path = pathname.toLowerCase()
  return SENSITIVE_ROUTE_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  )
}

/** True when a URL may be rendered into a replay at all. */
export function isRecordableUrl(url) {
  if (typeof url !== 'string' || url.length === 0) return false
  let parsed
  try {
    parsed = new URL(url, 'http://localhost')
  } catch {
    return false
  }
  if (!SAFE_PROTOCOLS.has(parsed.protocol)) return false
  return !isSensitivePath(parsed.pathname)
}

/**
 * `session_recording.maskCapturedNetworkRequestFn`. PostHog calls it for network
 * requests *and* for replay page URLs, so it always drops the query string and
 * fragment, refuses unparseable/non-http(s) URLs (credentials, `data:`, `blob:`,
 * `javascript:`), drops sensitive routes and paths carrying an email identifier.
 * Returning `undefined` drops the entry entirely.
 */
export function redactReplayUrl(request, origin) {
  if (!request || typeof request !== 'object') return undefined
  const name = typeof request.name === 'string' ? request.name : undefined
  if (!name) return undefined
  // Whitespace means the value was never a real request/page URL.
  if (/\s/.test(name)) return undefined

  let parsed
  try {
    parsed = origin ? new URL(name, origin) : new URL(name)
  } catch {
    return undefined
  }

  if (!SAFE_PROTOCOLS.has(parsed.protocol)) return undefined
  if (parsed.username || parsed.password) return undefined
  if (isSensitivePath(parsed.pathname)) return undefined
  if (EMAIL_IN_PATH.test(parsed.pathname)) return undefined

  return { ...request, name: `${parsed.origin}${parsed.pathname}` }
}

/**
 * Every privacy channel is closed locally, so remote project enablement cannot
 * re-open one: canvas, JSON-LD, bodies, headers, console logs and performance.
 * Autocapture-style events stay off because this integration only replays.
 */
export function buildReplayConfig({ host, getOrigin } = {}) {
  const resolveOrigin = typeof getOrigin === 'function' ? getOrigin : () => undefined
  return {
    api_host: host,
    defaults: '2025-05-24',
    opt_out_capturing_by_default: true,
    disable_session_recording: true,
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    capture_dead_clicks: false,
    rageclick: false,
    capture_exceptions: false,
    capture_heatmaps: false,
    capture_performance: false,
    enable_recording_console_log: false,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: '*',
      recordBody: false,
      recordHeaders: false,
      captureCanvas: { recordCanvas: false },
      captureJsonLd: false,
      blockClass: 'ph-no-capture',
      blockSelector: REPLAY_BLOCK_SELECTOR,
      maskCapturedNetworkRequestFn: (request) => redactReplayUrl(request, resolveOrigin()),
    },
  }
}

// Initialization and recording survive remounts, so a remount never double-inits
// or double-starts against the same SDK instance.
const sdkStates = new WeakMap()

function stateFor(sdk) {
  let state = sdkStates.get(sdk)
  if (!state) {
    state = { initialized: false, recording: false }
    sdkStates.set(sdk, state)
  }
  return state
}

const NOOP_CONTROLLER = {
  sync() {},
  handleNavigation() {},
  stop() {},
  destroy() {},
  get started() {
    return false
  },
}

/**
 * Mount the consent-controlled replay.
 *
 * @param {object} options
 * @param {object} options.sdk            PostHog singleton (`posthog-js`), or a compatible stub.
 * @param {object} options.consent        Consent source: `{ get(), subscribe(listener) }`.
 * @param {string} [options.token]        Public project token; missing means no-op.
 * @param {string} [options.host]         `https://us.i.posthog.com` or `https://eu.i.posthog.com`.
 * @param {() => string} options.getUrl   Current absolute URL.
 */
export function mountPostHogReplay({ sdk, consent, token, host, getUrl } = {}) {
  if (!sdk || !consent || typeof consent.get !== 'function' || typeof getUrl !== 'function') {
    return NOOP_CONTROLLER
  }
  if (!token || !host) return NOOP_CONTROLLER

  const state = stateFor(sdk)
  let destroyed = false

  const currentUrl = () => {
    try {
      return getUrl() || ''
    } catch {
      return ''
    }
  }

  const ensureInitialized = () => {
    if (state.initialized) return true
    // An SDK that is already initialized keeps its own settings: no second init.
    if (sdk.__loaded === true) {
      state.initialized = true
      return true
    }
    try {
      sdk.init(token, buildReplayConfig({ host, getOrigin: () => originOf(currentUrl()) }))
      state.initialized = true
      return true
    } catch {
      return false
    }
  }

  const stopRecording = (optOut) => {
    if (state.recording) {
      try {
        sdk.stopSessionRecording()
      } catch {
        // SDK failures must not break page actions.
      }
      state.recording = false
    }
    if (optOut && state.initialized) {
      try {
        sdk.opt_out_capturing()
      } catch {
        // SDK failures must not break page actions.
      }
    }
  }

  const startRecording = () => {
    if (state.recording) return
    if (!ensureInitialized()) return
    try {
      sdk.opt_in_capturing()
    } catch {
      // SDK failures must not break page actions.
    }
    try {
      // Plain start: project enablement, sampling, triggers, minimum duration and
      // authorized domains stay in force.
      sdk.startSessionRecording()
      state.recording = true
    } catch {
      // SDK failures must not break page actions.
    }
  }

  const sync = () => {
    if (destroyed) return
    const consentState = consent.get()
    if (consentState !== CONSENT_GRANTED) {
      stopRecording(consentState === CONSENT_DENIED)
      return
    }
    if (!isRecordableUrl(currentUrl())) {
      stopRecording(false)
      return
    }
    startRecording()
  }

  const handleNavigation = (url) => {
    if (destroyed) return
    const target = typeof url === 'string' && url.length > 0 ? url : currentUrl()
    if (!isRecordableUrl(target)) {
      stopRecording(false)
      return
    }
    sync()
  }

  const unsubscribe =
    typeof consent.subscribe === 'function' ? consent.subscribe(() => sync()) : undefined
  sync()

  return {
    sync,
    handleNavigation,
    stop() {
      stopRecording(false)
    },
    destroy() {
      destroyed = true
      if (typeof unsubscribe === 'function') unsubscribe()
    },
    get started() {
      return state.recording
    },
  }
}
