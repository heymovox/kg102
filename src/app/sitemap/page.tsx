import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Globe, Users, Shield, Award, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap | Konnekt Globe',
  description: 'Sitemap and navigation for Konnekt Globe B2B marketplace.',
}

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Businesses', href: '/businesses' },
  { name: 'All Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'Countries', href: '/countries' },
  { name: 'Add Business', href: '/add-business' },
  { name: 'Post Requirement', href: '/post-requirement' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
]

const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'FAQs', href: '/help#faqs' },
  { name: 'Safety Guidelines', href: '/help#safety' },
  { name: 'Report Listing', href: '/help#report' },
  { name: 'API Docs', href: '/developers' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Listing Policy', href: '/listing-policy' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'GDPR', href: '/gdpr' },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Sitemap
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Site Navigation
            </h1>
            <p className="text-body-lg text-text-secondary">
              Browse all sections of Konnekt Globe.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid md:grid-cols-4 gap-10">
            {[mainLinks, companyLinks, supportLinks, legalLinks].map((group, i) => {
              const title = ['Platform', 'Company', 'Support', 'Legal'][i]
              return (
                <div key={title} className="space-y-4">
                  <h3 className="text-heading-sm font-semibold text-brand-navy">
                    {title}
                    <span className="h-1 w-2 rounded-full bg-brand-gold inline-block ml-1.5" />
                  </h3>
                  <ul className="space-y-2.5">
                    {group.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-body-sm text-text-secondary hover:text-brand-primary transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
