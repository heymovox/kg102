import posthog from 'posthog-js'
import { analyticsConsent } from '@/lib/consent'
import { mountPostHogReplay } from '@/lib/posthog-replay.mjs'

// Public project token and US/EU host only, read from the client environment.
// Missing either one makes the whole integration a no-op.
const replay = mountPostHogReplay({
  sdk: posthog,
  consent: analyticsConsent,
  token: process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  getUrl: () => (typeof window === 'undefined' ? '' : window.location.href),
})

// App Router navigations: stop on auth/payment/account routes, resume on safe ones.
export function onRouterTransitionStart(url: string) {
  replay.handleNavigation(url)
}
