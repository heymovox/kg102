import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Users, Globe, Award, Truck, Mail, Phone, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center | Konnekt Globe',
  description: 'Help center, FAQs, safety guidelines, and support resources for buyers and suppliers on Konnekt Globe.',
}

const faqs = [
  {
    q: 'How do I register as a buyer or supplier?',
    a: 'Visit /register to create a free account. You can register as a buyer, supplier, or both. Email verification is required to activate your account.',
  },
  {
    q: 'Is posting a buying requirement free?',
    a: 'Yes, posting buying requirements is completely free for buyers. You can receive and compare quotes from verified suppliers at no cost.',
  },
  {
    q: 'How does business verification work?',
    a: 'Suppliers can submit business registration, GST certificate, PAN, IEC, or ISO documents. Our team verifies documents within 2-3 business days and awards a verified badge.',
  },
  {
    q: 'Are there any commissions on transactions?',
    a: 'Konnekt Globe does not charge commissions on transactions between buyers and suppliers. All communication and deals happen directly on the platform.',
  },
  {
    q: 'How do I report a suspicious listing?',
    a: 'Use the &ldquo;Report Listing&rdquo; button on any company or product page, or email support@konnektglobe.com with details.',
  },
  {
    q: 'Which countries does Konnekt Globe support?',
    a: 'We operate in 195+ countries with multi-currency support (INR, USD, EUR, GBP) and localized category listings.',
  },
]

const safetyGuidelines = [
  { icon: Shield, title: 'Verify Before You Pay', desc: 'Always check for the Verified badge and GST registration before making advance payments to suppliers.' },
  { icon: Users, title: 'Communicate on Platform', desc: 'Keep all negotiations and document sharing within Konnekt Globe messaging for safety and dispute resolution.' },
  { icon: Globe, title: 'Check Trade References', desc: 'Request references and review ratings, reviews, and transaction history before placing bulk orders.' },
  { icon: Truck, title: 'Use Secure Shipping', desc: 'Use Incoterms (FOB, CIF) and third-party inspection services for international shipments.' },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Help & Support
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Help Center
            </h1>
            <p className="text-body-lg text-text-secondary">
              Find answers to common questions about buying, selling, verification, and safety on Konnekt Globe.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <Card className="overflow-hidden shadow-sm border-surface-border">
                <CardHeader className="pb-5">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-brand-primary" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-0 pt-0">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-surface-border/50 pb-5 last:border-0 last:pb-0">
                      <p className="text-body font-semibold text-text-primary mb-2">{faq.q}</p>
                      <p className="text-body-sm text-text-secondary leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <Card className="bg-brand-navy text-white p-6 relative overflow-hidden shadow-lg shadow-brand-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="text-heading-sm font-bold mb-4">Contact Support</h3>
                  <p className="text-body-sm text-white/70 leading-relaxed mb-6">
                    Still need help? Our support team is ready to assist you.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <a href="mailto:support@konnektglobe.com" className="text-body-sm text-brand-gold hover:text-white transition-colors underline underline-offset-4">
                        support@konnektglobe.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <a href="tel:+918000000000" className="text-body-sm text-brand-gold hover:text-white transition-colors underline underline-offset-4">
                        +91 80000 00000
                      </a>
                    </div>
                    <p className="text-[11px] text-white/50 uppercase tracking-wider mt-4">
                      Mon – Sat, 10:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-brand-gold" />
                    Safety Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="space-y-4 p-4">
                    {safetyGuidelines.map((g) => {
                      const Icon = g.icon
                      return (
                        <div key={g.title} className="flex items-start gap-3 p-3 rounded-xl border border-surface-border hover:border-brand-primary/30 transition-colors">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-body-sm font-semibold text-text-primary">{g.title}</p>
                            <p className="text-body-sm text-text-secondary">{g.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-surface-border bg-surface-main py-12 lg:py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Still Need Help?
            </Badge>
            <h2 className="text-heading-xl font-bold text-brand-navy mb-4">Contact Our Team</h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Can&rsquo;t find what you&rsquo;re looking for? Reach out directly and we&rsquo;ll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="btn btn-gold-lg">Contact Support</Link>
              <Link href="/post-requirement" className="btn border-2 border-brand-primary/40 bg-white text-brand-navy hover:bg-brand-primary hover:text-white">Post a Requirement</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
