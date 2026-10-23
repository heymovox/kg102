import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Users, Globe, Award, Truck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Konnekt Globe',
  description: 'Konnekt Globe Terms of Service governing use of the platform by buyers and suppliers.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Terms of Service
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Terms of Service
            </h1>
            <p className="text-caption text-text-muted uppercase tracking-wider mb-8">
              Effective: October 22, 2024
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
                  Welcome to Konnekt Globe. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of our website
                  and platform. By accessing or using Konnekt Globe, you agree to these Terms and our
                  <Link href="/privacy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">1. Acceptance of Terms</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  By creating an account or using the platform, you agree to be bound by these Terms. If you do not
                  agree, you may not use the service. You must be at least 18 years old to register.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">2. User Accounts</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all
                  activities under your account. Provide accurate and complete information during registration.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">3. Listings and Requirements</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  Suppliers are solely responsible for the accuracy of their business listings and product details.
                  Buyers are responsible for the accuracy of their buying requirements. Konnekt Globe does not
                  endorse or guarantee any listing or requirement posted on the platform.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">4. Transactions</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  All transactions, payments, and contracts are negotiated directly between buyers and suppliers.
                  Konnekt Globe is not a party to any transaction and is not liable for any losses, damages, or
                  disputes arising from dealings between users.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">5. Verification</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Verification badges indicate that submitted documents were reviewed at the time of submission.
                  Verification does not guarantee ongoing compliance or the quality of products/services offered.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">6. Prohibited Conduct</h2>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mb-6">
                  <li>Posting false, misleading, or illegal listings.</li>
                  <li>Harassment, spam, or fraudulent behavior.</li>
                  <li>Attempting to bypass platform fees or communications.</li>
                  <li>Violating intellectual property or privacy rights.</li>
                </ul>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">7. Limitation of Liability</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Konnekt Globe and its affiliates are not liable for indirect, incidental, or consequential damages
                  arising from your use of the platform, to the fullest extent permitted by law.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">8. Termination</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  We may suspend or terminate accounts that violate these Terms, without prior notice. Upon
                  termination, your right to use the platform immediately ceases.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">9. Governing Law</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  These Terms are governed by the laws of India, and disputes are subject to the jurisdiction of
                  courts in Mumbai, Maharashtra.
                </p>

                <div className="bg-brand-navy/5 rounded-xl p-6 border border-surface-border mt-8">
                  <h3 className="text-body font-semibold text-text-primary mb-3">Questions?</h3>
                  <p className="text-body-sm text-text-secondary">
                    Contact us at <a href="mailto:legal@konnektglobe.com" className="text-brand-primary hover:underline">legal@konnektglobe.com</a>.
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
              Need Help?
            </Badge>
            <h2 className="text-heading-xl font-bold text-brand-navy mb-4">Contact Our Team</h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Have questions about these terms? Reach out and we&rsquo;ll respond promptly.
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
