import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Globe, Users, Award, Shield, ArrowRight, Building2, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Press | Konnekt Globe',
  description: 'Press releases, media kit, and press contact for Konnekt Globe.',
}

export default function PressPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Press & Media
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Press Center
            </h1>
            <p className="text-body-lg text-text-secondary">
              Press releases, media coverage, and contact information for journalists.
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
                    <Award className="h-5 w-5 text-brand-gold" />
                    Press Releases
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="divide-y divide-surface-border">
                    {[
                      { title: 'Konnekt Globe Launches in 195+ Countries', date: 'Oct 10, 2024', desc: 'Global B2B marketplace connects verified buyers and suppliers worldwide.' },
                      { title: 'Premium Spotlight Program Drives 5x More Enquiries', date: 'Sep 20, 2024', desc: 'New premium placement option helps sellers stand out in search results.' },
                      { title: 'Konnekt Globe Surpasses 500,000 Verified Businesses', date: 'Aug 15, 2024', desc: 'Milestone reached as platform expands supplier verification program.' },
                    ].map((item, i) => (
                      <div key={i} className="p-4 last:pb-0">
                        <p className="text-body font-semibold text-text-primary mb-1">{item.title}</p>
                        <p className="text-body-sm text-text-secondary">{item.desc}</p>
                        <span className="text-[11px] text-text-muted">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-brand-navy text-white p-6 relative overflow-hidden shadow-lg shadow-brand-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="text-heading-sm font-bold mb-4">Media Contact</h3>
                  <p className="text-body-sm text-white/70 leading-relaxed mb-6">
                    For press inquiries, interviews, and media kits, contact our communications team.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <a href="mailto:press@konnektglobe.com" className="text-body-sm text-brand-gold hover:text-white transition-colors underline underline-offset-4">press@konnektglobe.com</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <a href="tel:+918000000000" className="text-body-sm text-brand-gold hover:text-white transition-colors underline underline-offset-4">+91 80000 00000</a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media Kit</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="space-y-3 p-4">
                    {[
                      { name: 'Company Logos', icon: Building2 },
                      { name: 'Brand Guidelines', icon: Shield },
                      { name: 'Executive Bios', icon: Users },
                      { name: 'Product Screenshots', icon: Globe },
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href="#"
                          className="flex items-center gap-3 p-3 rounded-lg border border-surface-border hover:border-brand-primary text-body-sm text-text-secondary hover:text-brand-primary transition-colors"
                        >
                          <Icon className="h-4 w-4 text-text-muted" />
                          {item.name}
                          <ArrowRight className="h-3 w-3 text-text-muted ml-auto" />
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
