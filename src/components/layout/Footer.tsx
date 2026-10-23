'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/components/providers'
import { Mail, Phone, Globe, MapPin, Clock, Shield, CheckCircle, Users, ArrowRight } from 'lucide-react'
import { LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons'

const footerLinks = {
  explore: [
    { name: 'All Businesses', href: '/businesses' },
    { name: 'All Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Countries', href: '/countries' },
    { name: 'Post Requirement', href: '/post-requirement' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press & Media', href: '/press' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'FAQs', href: '/help#faqs' },
    { name: 'Safety Guidelines', href: '/help#safety' },
    { name: 'Report a Listing', href: '/help#report' },
    { name: 'API Docs', href: '/developers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Listing Policy', href: '/listing-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'GDPR', href: '/gdpr' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
  { name: 'Facebook', href: '/facebook.com', icon: FacebookIcon },
  { name: 'Instagram', href: '/instagram.com', icon: InstagramIcon },
]

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="relative bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-secondary text-white" role="contentinfo">
      {/* Top accent glow */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-gold via-brand-primary to-brand-navy" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" aria-hidden="true" />

      <div className="container-page relative py-16 lg:py-24">
        {/* Brand + Newsletter top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/logo-light.png"
                alt="Konnekt Globe"
                width={950}
                height={391}
                className="h-8 w-auto"
                priority
              />
            </div>
            <p className="text-body text-white/70 max-w-md leading-relaxed">
              Connecting verified businesses with buyers across 195+ countries. Your trusted partner for global trade.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 hover:bg-brand-gold hover:text-brand-navy transition-colors border border-white/10"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/30">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="max-w-md">
                  <h3 className="text-body font-semibold text-white mb-2">Subscribe to Trade Insights</h3>
                  <p className="text-body-sm text-white/60 leading-relaxed">
                    Get verified leads, market trends, and new supplier alerts straight to your inbox.
                  </p>
                </div>
                <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-80" action="#" method="POST">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-brand-gold focus:outline-none transition-colors"
                  />
                  <button
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-5 py-3 text-brand-navy font-semibold hover:bg-brand-gold-hover transition-colors whitespace-nowrap"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <p className="mt-4 text-[10px] text-white/40 uppercase tracking-wider">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-heading-sm font-semibold text-white mb-2">
              Explore
              <span className="h-1 w-1.5 rounded-full bg-brand-gold" />
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-heading-sm font-semibold text-white mb-2">
              Company
              <span className="h-1 w-1.5 rounded-full bg-brand-gold" />
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-heading-sm font-semibold text-white mb-2">
              Support
              <span className="h-1 w-1.5 rounded-full bg-brand-gold" />
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-heading-sm font-semibold text-white mb-2">
              Legal
              <span className="h-1 w-1.5 rounded-full bg-brand-gold" />
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-heading-sm font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              {[{
                icon: Mail,
                label: 'support@konnektglobe.com',
                href: 'mailto:support@konnektglobe.com',
              }, {
                icon: Phone,
                label: '+91 80000 00000',
                href: 'tel:+918000000000',
              }, {
                icon: MapPin,
                label: 'Mumbai, Maharashtra, India',
              }].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-gold">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      {item.href ? (
                        <a href={item.href} className="text-body-sm text-white/70 hover:text-brand-gold transition-colors">
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-body-sm text-white/70">{item.label}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { icon: Shield, label: 'Verified Businesses', desc: 'Multi-level identity & GST verification' },
              { icon: CheckCircle, label: 'GST Verified', desc: 'Tax-compliant supplier listings' },
              { icon: Users, label: '500K+ Members', desc: 'Buyers and sellers worldwide' },
              { icon: Globe, label: '195+ Countries', desc: 'Global trade coverage' },
            ].map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.label} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-body-sm font-medium text-white">{badge.label}</p>
                    <p className="text-[10px] text-white/50">{badge.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] text-white/40 uppercase tracking-wider">
          {/* Copyright + Crafted By + Made row */}
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <p>© 2024 Konnekt Globe. All rights reserved.</p>
            <p className="mt-1 lg:mt-0 text-white/60 text-[10px]">
              Crafted by MovoX - Beyond Digital with <span className="text-brand-gold">♥</span>
            </p>
            <p className="mt-1 lg:mt-0 text-white/60 text-[10px]">
              Made with precision for global business
            </p>
          </div>
          <hr className="mt-4 lg:mt-0 border-t border-white/10 border-b border-white/10 w-full lg:w-auto uppercase text-white/40 text-xs"/>
          {/* Disclaimer row - always full width */}
          <p className="mt-4 lg:mt-0 text-white/60 text-[10px]">
            The information, purchasing guidelines, and company details provided on this platform are for reference purposes only and do not constitute official endorsement, verification, or guarantee by Konnekt Globe. Users are advised to conduct their own due diligence.
          </p>
        </div>
      </div>
    </footer>
  )
}
