'use client'

import * as React from 'react'
import { Toaster } from 'sonner'

type Theme = 'light' | 'dark' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
  enableSystem?: boolean
}

const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (newTheme: Theme) => void
}>({ theme: 'light', setTheme: () => {} })

function getInitialTheme(defaultTheme: Theme, enableSystem: boolean): Theme {
  if (typeof window === 'undefined') return defaultTheme
  const stored = localStorage.getItem('konnekt-globe-theme') as Theme | null
  if (stored) return stored
  if (enableSystem && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return defaultTheme
}

function applyTheme(theme: Theme, attribute: string) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (theme === 'system') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    root.classList.remove('light', 'dark')
    root.classList.add(isDark ? 'dark' : 'light')
    root.setAttribute(attribute, 'system')
  } else {
    root.classList.remove('light', 'dark', 'system')
    root.classList.add(theme)
    root.setAttribute(attribute, theme)
  }
}

/** The client is always mounted once subscribed; the server snapshot is false. */
const subscribeToMount = () => () => {}

const getMountedSnapshot = () => true
const getServerMountedSnapshot = () => false

export function Providers({
  children,
  defaultTheme = 'light',
  attribute = 'class',
  enableSystem = true,
}: ThemeProviderProps) {
  // Hydration-safe mount flag from an external store: no setState inside an effect.
  const mounted = React.useSyncExternalStore(
    subscribeToMount,
    getMountedSnapshot,
    getServerMountedSnapshot
  )
  const [themeOverride, setThemeOverride] = React.useState<Theme | null>(null)

  // The server render and the first client render use `defaultTheme`; once mounted
  // the stored choice or the system preference takes over.
  const theme = themeOverride ?? (mounted ? getInitialTheme(defaultTheme, enableSystem) : defaultTheme)

  React.useEffect(() => {
    if (!mounted) return
    applyTheme(getInitialTheme(defaultTheme, enableSystem), attribute)

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'konnekt-globe-theme' && e.newValue) {
        setThemeOverride(e.newValue as Theme)
        applyTheme(e.newValue as Theme, attribute)
      }
    }
    window.addEventListener('storage', handleStorage)

    if (enableSystem) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleSystemChange = () => {
        const current = localStorage.getItem('konnekt-globe-theme')
        if (!current || current === 'system') {
          applyTheme('system', attribute)
        }
      }
      mediaQuery.addEventListener('change', handleSystemChange)
      return () => {
        window.removeEventListener('storage', handleStorage)
        mediaQuery.removeEventListener('change', handleSystemChange)
      }
    }
    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [mounted, attribute, defaultTheme, enableSystem])

  const setThemeValue = React.useCallback(
    (newTheme: Theme) => {
      setThemeOverride(newTheme)
      localStorage.setItem('konnekt-globe-theme', newTheme)
      applyTheme(newTheme, attribute)
    },
    [attribute]
  )

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: 'rounded-xl border border-surface-border bg-surface-main text-text-primary shadow-elevated',
            description: 'text-body-sm text-text-secondary',
            actionButton: 'btn-secondary text-body-sm',
            cancelButton: 'btn-ghost text-body-sm',
          },
        }}
      />
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a Providers component')
  }
  return context
}
