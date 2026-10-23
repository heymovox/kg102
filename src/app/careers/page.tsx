import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Building2, Package, Mail, Truck, Users, Shield, ArrowRight, Globe, Award, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Konnekt Globe',
  description: 'Join the Konnekt Globe team — we&rsquo;re hiring across engineering, sales, and operations.',
}

const roles = [
  { title: 'Frontend Engineer', location: 'Mumbai, India', type: 'Full-time', desc: 'Build responsive UIs with Next.js and Tailwind.' },
  { title: 'Backend Engineer', location: 'Remote (India)', type: 'Full-time', desc: 'Design scalable APIs with Node.js and Drizzle ORM.' },
  { title: 'Sales Manager', location: 'Delhi, India', type: 'Full-time', desc: 'Drive supplier onboarding and partnerships.' },
  { title: 'Operations Associate', location: 'Bangalore, India', type: 'Full-time', desc: 'Support verification and quality assurance.' },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Careers at Konnekt Globe
            </h1>
            <p className="text-body-lg text-text-secondary">
              Help us build the future of global B2B trade. We&rsquo;re hiring across engineering, sales, and operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              {roles.map((role) => (
                <Card key={role.title} className="overflow-hidden border-surface-border shadow-sm hover:border-brand-primary/40 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-body font-semibold text-text-primary">{role.title}</h3>
                        <p className="text-body-sm text-text-secondary">{role.location} • {role.type}</p>
                      </div>
                      <Badge variant="outline" className="text-caption px-2 py-1">Open</Badge>
                    </div>
                    <p className="text-body-sm text-text-secondary mb-4">{role.desc}</p>
                    <Button variant="outline" className="w-full text-[11px] font-semibold uppercase tracking-wider py-2">
                      Apply Now
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-brand-navy text-white p-6 relative overflow-hidden shadow-lg shadow-brand-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="text-heading-sm font-bold mb-4">Why Join Us?</h3>
                  <ul className="space-y-3">
                    {[
                      { text: 'Remote-first culture', icon: Globe },
                      { text: 'Impact-driven product', icon: Shield },
                      { text: 'Global team across 10+ countries', icon: Users },
                      { text: 'Competitive compensation', icon: Award },
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.text} className="flex items-start gap-2 text-white/90 text-body-sm">
                          <Icon className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                          {item.text}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Recruiting</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="space-y-4 p-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-semibold text-text-muted uppercase">Email</p>
                        <a href="mailto:careers@konnektglobe.com" className="text-body-sm text-brand-primary hover:underline">careers@konnektglobe.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-semibold text-text-muted uppercase">Phone</p>
                        <a href="tel:+918000000000" className="text-body-sm text-brand-primary hover:underline">+91 80000 00000</a>
                      </div>
                    </div>
                    <Button className="w-full btn-gold-lg mt-4">Submit Resume</Button>
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
