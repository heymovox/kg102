import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Users, Globe, Award, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GDPR | Konnekt Globe',
  description: 'Konnekt Globe GDPR compliance and data protection rights for EU users.',
}

export default function GdprPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              GDPR Compliance
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              GDPR & Data Protection
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
                  Konnekt Globe is committed to protecting the personal data of our users in accordance with the
                  General Data Protection Regulation (GDPR) and applicable data protection laws.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">1. Your Rights</h2>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mb-6">
                  <li><strong>Access:</strong> Request a copy of your personal data.</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
                  <li><strong>Erasure:</strong> Request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
                  <li><strong>Restriction:</strong> Limit how we process your data.</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format.</li>
                  <li><strong>Objection:</strong> Object to processing for marketing or profiling.</li>
                </ul>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">2. Lawful Basis</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  We process your data based on your consent, contractual necessity, legal obligations, and our
                  legitimate interests in operating and improving the platform.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">3. Data Retention</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  We retain your data for as long as necessary to fulfill the purposes for which it was collected,
                  including legal, tax, and reporting requirements.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">4. International Transfers</h2>
                                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Your data may be transferred to countries outside the EEA. We ensure appropriate safeguards are in
                  place, including standard contractual clauses where required.
                </p>

                <div className="bg-brand-navy/5 rounded-xl p-6 border border-surface-border mt-8">
                  <h3 className="text-body font-semibold text-text-primary mb-3">Exercise Your Rights</h3>
                  <p className="text-body-sm text-text-secondary">
                    Contact our Data Protection Officer at <a href="mailto:privacy@konnektglobe.com" className="text-brand-primary hover:underline">privacy@konnektglobe.com</a>.
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
              Have questions about GDPR or your data rights? We&rsquo;re here to help.
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
