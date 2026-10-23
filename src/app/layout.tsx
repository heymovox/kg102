import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { AuthShell } from '@/app/auth-shell'
import { ConsentBanner } from '@/components/ConsentBanner'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Konnekt Globe — Global Business Directory & B2B Marketplace',
    template: '%s | Konnekt Globe',
  },
  description: 'Discover trusted suppliers, explore products, and connect with businesses across India and around the world. The premier B2B marketplace for global trade.',
  keywords: ['B2B marketplace', 'business directory', 'suppliers', 'manufacturers', 'wholesalers', 'exporters', 'global trade', 'business listings'],
  authors: [{ name: 'Konnekt Globe' }],
  creator: 'Konnekt Globe',
  publisher: 'Konnekt Globe',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Konnekt Globe',
    title: 'Konnekt Globe — Global Business Directory & B2B Marketplace',
    description: 'Discover trusted suppliers, explore products, and connect with businesses across India and around the world.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Konnekt Globe - Global Business Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konnekt Globe — Global Business Directory & B2B Marketplace',
    description: 'Discover trusted suppliers, explore products, and connect with businesses globally.',
    images: ['/og-image.png'],
    creator: '@konnektglobe',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pub-xxx.r2.dev" />
      </head>
      <body className="min-h-full flex flex-col bg-surface-main text-text-primary">
        <Providers>
          <Suspense fallback={<main className="flex-1">{children}</main>}>
            <AuthShell>{children}</AuthShell>
          </Suspense>
        </Providers>
        <ConsentBanner />
      </body>
    </html>
  )
}
