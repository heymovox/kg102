'use client'

/**
 * Analytics consent source for the PostHog replay integration.
 *
 * Only an explicit choice is stored: anything else reads as `unknown`, and
 * `unknown` never records. There is no "treat missing value as allowed" fallback.
 *
 * The choice is mirrored through a window event and `storage` events so the
 * consent banner and the client instrumentation entry stay in sync even when the
 * bundler gives them separate module instances, and across tabs.
 */

export type ConsentState = 'granted' | 'denied' | 'unknown'

export const CONSENT_STORAGE_KEY = 'konnekt-globe-analytics-consent'
export const CONSENT_CHANGE_EVENT = 'konnekt-globe:analytics-consent'

type ConsentListener = (state: ConsentState) => void

const listeners = new Set<ConsentListener>()
let cached: ConsentState | null = null
let bridged = false

function readStored(): ConsentState {
  if (typeof window === 'undefined') return 'unknown'
  if (cached) return cached
  let stored: string | null = null
  try {
    stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
  } catch {
    stored = null
  }
  cached = stored === 'granted' || stored === 'denied' ? stored : 'unknown'
  return cached
}

function notify(state: ConsentState) {
  listeners.forEach((listener) => {
    try {
      listener(state)
    } catch {
      // A failing subscriber must not block the others.
    }
  })
}

function rereadAndNotify() {
  const previous = cached
  cached = null
  const next = readStored()
  if (next !== previous) notify(next)
}

function connectWindowBridge() {
  if (bridged || typeof window === 'undefined') return
  bridged = true
  window.addEventListener(CONSENT_CHANGE_EVENT, rereadAndNotify)
  window.addEventListener('storage', (event) => {
    if (event.key === CONSENT_STORAGE_KEY) rereadAndNotify()
  })
}

export const analyticsConsent = {
  get(): ConsentState {
    return readStored()
  },

  set(state: 'granted' | 'denied'): void {
    const changed = readStored() !== state
    cached = state
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, state)
      } catch {
        // Storage can be unavailable (private mode); the in-memory choice still applies.
      }
      window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT))
    }
    if (changed) notify(state)
  },

  subscribe(listener: ConsentListener): () => void {
    listeners.add(listener)
    connectWindowBridge()
    return () => {
      listeners.delete(listener)
    }
  },
}
