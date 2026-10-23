'use client'

import * as React from 'react'
import Link from 'next/link'
import { analyticsConsent, type ConsentState } from '@/lib/consent'

/**
 * Explicit consent control for PostHog session replay. Nothing is recorded until
 * "Accept analytics" is chosen, and withdrawing stops the recording again.
 */
export function ConsentBanner() {
  const subscribe = React.useCallback(
    (onChange: () => void) => analyticsConsent.subscribe(onChange),
    []
  )
  const getSnapshot = React.useCallback(() => analyticsConsent.get(), [])
  const getServerSnapshot = React.useCallback((): ConsentState => 'unknown', [])
  const consent = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (consent === 'unknown') {
    return (
      <div
        role="region"
        aria-label="Analytics consent"
        className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-xl border border-surface-border bg-surface-main p-4 shadow-elevated sm:left-auto sm:right-6 sm:mx-0"
      >
        <p className="text-body-sm font-semibold text-text-primary">Your privacy choices</p>
        <p className="mt-1 text-body-sm text-text-secondary">
          We would like to record a masked session replay so we can improve the directory. Inputs and text stay
          masked, and nothing is recorded before you agree. See our{' '}
          <Link href="/cookie-policy" className="text-brand-primary hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => analyticsConsent.set('granted')}
            className="rounded-lg bg-brand-gold px-4 py-2 text-body-sm font-semibold text-white transition-colors hover:bg-brand-gold-hover"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={() => analyticsConsent.set('denied')}
            className="rounded-lg border border-surface-border px-4 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            Decline
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-3 rounded-full border border-surface-border bg-surface-main px-3 py-1.5 shadow-elevated">
      <span className="text-caption text-text-muted">
        {consent === 'granted' ? 'Analytics on' : 'Analytics off'}
      </span>
      <button
        type="button"
        onClick={() => analyticsConsent.set(consent === 'granted' ? 'denied' : 'granted')}
        className="text-caption font-semibold text-brand-primary hover:underline"
      >
        {consent === 'granted' ? 'Withdraw' : 'Allow analytics'}
      </button>
    </div>
  )
}
