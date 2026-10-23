import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Users, Globe, Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Konnekt Globe',
  description: 'Konnekt Globe Privacy Policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Privacy Policy
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Privacy Policy
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
                  At Konnekt Globe, we respect your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our
                  platform and services.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">1. Information We Collect</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  We collect information you provide directly, such as your name, email, phone number, company details,
                  business registration documents, and preferences when you register, post a listing, or submit a buying
                  requirement.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mb-6">
                  <li>To operate and improve our platform and services.</li>
                  <li>To connect buyers with suppliers and facilitate enquiries.</li>
                  <li>To verify business identities and maintain trust and safety.</li>
                  <li>To send account updates, notifications, and marketing communications (you can opt out anytime).</li>
                </ul>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">3. Information Sharing</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  We do not sell your personal data. Your contact details are shared only with relevant suppliers when
                  you post a buying requirement or express interest in a listing. We may share data with service
                  providers who help us operate the platform under strict confidentiality obligations.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">4. Data Security</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  We use industry-standard encryption and access controls to protect your information. However, no
                  internet transmission is 100% secure, and you should keep your account credentials confidential.
                </p>

                <h2 className="text-heading-sm font-bold text-brand-navy mb-3">5. Your Rights</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  You may access, correct, or delete your personal data at any time by contacting us at
                  <a href="mailto:privacy@konnektglobe.com" className="text-brand-primary hover:underline">privacy@konnektglobe.com</a>.
                  You may also unsubscribe from marketing emails using the link in any promotional message.
                </p>

                <div className="bg-brand-navy/5 rounded-xl p-6 border border-surface-border mt-8">
                  <h3 className="text-body font-semibold text-text-primary mb-3">Questions?</h3>
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
              Have questions about your data or privacy rights? We&rsquo;re here to help.
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
