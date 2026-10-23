import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Users, Globe, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Listing Policy | Konnekt Globe',
  description: 'Konnekt Globe Listing Policy — rules and standards for business listings and product posts.',
}

export default function ListingPolicyPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Listing Policy
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Listing Policy
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
                  This Listing Policy sets out the standards and requirements for all business listings and product
                  posts on Konnekt Globe. By posting content on our platform, you agree to comply with these rules.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">1. Eligible Listings</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  Listings must represent genuine businesses, products, or services offered by the account holder.
                  Listings for illegal goods, prohibited items, or misrepresented products are not permitted.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">2. Listing Content Standards</h2>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mb-6">
                  <li>Use accurate titles and descriptions — no exaggeration or false claims.</li>
                  <li>Include real product images — no stock photos misrepresented as your own.</li>
                  <li>State clear pricing, MOQ, lead time, and payment terms where applicable.</li>
                  <li>Disclose certifications (ISO, GST, etc.) only if valid documentation is available.</li>
                </ul>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">3. Prohibited Content</h2>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mb-6">
                  <li>Illegal goods, weapons, counterfeit products, or controlled substances.</li>
                  <li>Adult content, gambling, or financially risky schemes.</li>
                  <li>Hate speech, discrimination, or defamatory material.</li>
                  <li>Personal data or contact details of third parties without consent.</li>
                </ul>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">4. Verification and Badges</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  Verification badges (Verified Business, GST Verified) are awarded after document review. Badges can
                  be revoked if documents are found fraudulent or expired.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">5. Moderation and Removal</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Konnekt Globe reserves the right to review, reject, or remove any listing that violates this Policy.
                  Repeated violations may result in account suspension or termination.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">6. Reporting Violations</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  To report a listing that violates this Policy, use the &ldquo;Report Listing&rdquo; button on the
                  listing page or contact <a href="mailto:support@konnektglobe.com" className="text-brand-primary hover:underline">support@konnektglobe.com</a>.
                </p>

                <div className="bg-brand-navy/5 rounded-xl p-6 border border-surface-border mt-8">
                  <h3 className="text-body font-semibold text-text-primary mb-3">Questions?</h3>
                  <p className="text-body-sm text-text-secondary">
                    Contact our policy team at <a href="mailto:policy@konnektglobe.com" className="text-brand-primary hover:underline">policy@konnektglobe.com</a>.
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
              Ready to List?
            </Badge>
            <h2 className="text-heading-xl font-bold text-brand-navy mb-4">List Your Business</h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Join 500,000+ verified businesses and start receiving buyer enquiries today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/add-business" className="btn btn-gold-lg">List Your Business</Link>
              <Link href="/help" className="btn border-2 border-brand-primary/40 bg-white text-brand-navy hover:bg-brand-primary hover:text-white">Help Center</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
