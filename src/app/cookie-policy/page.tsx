import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Users, Globe, Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Konnekt Globe',
  description: 'Konnekt Globe Cookie Policy — how we use cookies and similar technologies.',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Cookie Policy
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Cookie Policy
            </h1>
            <p className="text-caption text-text-muted uppercase tracking-wider mb-8">
              Last updated: October 22, 2024
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden shadow-sm border-surface-border">
              <CardContent className="p-6 lg:p-8">
                <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                  This Cookie Policy explains how Konnekt Globe uses cookies and similar technologies to recognize you
                  when you visit our website and platform.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">1. What Are Cookies</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  Cookies are small text files placed on your device when you visit a website. They help us remember
                  your preferences, enable functionality, and analyze how our platform is used.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">2. Types of Cookies We Use</h2>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mb-6">
                  <li><strong>Essential cookies:</strong> Required for site operation, authentication, and security.</li>
                  <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our site.</li>
                  <li><strong>Functional cookies:</strong> Remember your language, region, and display preferences.</li>
                  <li><strong>Marketing cookies:</strong> Used to show relevant promotions (you can opt out).</li>
                </ul>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">3. Managing Cookies</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  You can control or delete cookies through your browser settings. Disabling essential cookies may
                  prevent some features of Konnekt Globe from working properly.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">4. Third-Party Cookies</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  We may use trusted third-party services (analytics, payments, support) that set their own cookies.
                  These are subject to those providers&rsquo; privacy policies.
                </p>

                <div className="bg-brand-navy/5 rounded-xl p-6 border border-surface-border mt-8">
                  <h3 className="text-body font-semibold text-text-primary mb-3">Questions?</h3>
                  <p className="text-body-sm text-text-secondary">
                    Contact us at <a href="mailto:privacy@konnektglobe.com" className="text-brand-primary hover:underline">privacy@konnektglobe.com</a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-surface-border bg-surface-main py-12 lg:py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Need Assistance?
            </Badge>
            <h2 className="text-heading-xl font-bold text-brand-navy mb-4">Contact Our Team</h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Have questions about cookies or your data? We&rsquo;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="btn btn-gold-lg">Contact Support</Link>
              <Link href="/help" className="btn border-2 border-brand-primary/40 bg-white text-brand-navy hover:bg-brand-primary hover:text-white">Help Center</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
