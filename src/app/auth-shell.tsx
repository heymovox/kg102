'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export function AuthShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthRoute =
    pathname === '/login' ||
    pathname === '/register' ||
    pathname.startsWith('/forgot-password')

  return (
    <>
      {!isAuthRoute && <Header />}
      <main className="flex-1">
        {children}
      </main>
      {!isAuthRoute && <Footer />}
    </>
  )
}
