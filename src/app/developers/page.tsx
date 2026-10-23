import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Building2, Globe, Users, Shield, ArrowRight, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers | Konnekt Globe',
  description: 'Konnekt Globe API documentation for developers integrating with our B2B marketplace.',
}

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              API Documentation
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Developer Portal
            </h1>
            <p className="text-body-lg text-text-secondary">
              Integrate with Konnekt Globe&rsquo;s B2B marketplace using our REST API.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-brand-navy text-white p-6 relative overflow-hidden shadow-lg shadow-brand-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="text-heading-sm font-bold mb-4">Get API Access</h3>
                  <p className="text-body-sm text-white/70 leading-relaxed mb-6">
                    API access is available for verified business accounts. Contact us to request API credentials.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <a href="mailto:api@konnektglobe.com" className="text-body-sm text-brand-gold hover:text-white transition-colors underline underline-offset-4">api@konnektglobe.com</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-body-sm text-white/70">api-docs.konnektglobe.com</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="space-y-3 p-4">
                    {[
                      { name: 'API Reference', href: '#' },
                      { name: 'Authentication Guide', href: '#' },
                      { name: 'Webhooks', href: '#' },
                      { name: 'Rate Limits', href: '#' },
                      { name: 'SDK Libraries', href: '#' },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between p-2.5 rounded-lg border border-surface-border hover:border-brand-primary text-body-sm text-text-secondary hover:text-brand-primary transition-colors"
                      >
                        {item.name}
                        <ArrowRight className="h-3 w-3 text-text-muted" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-8">
              <Card className="overflow-hidden shadow-sm border-surface-border">
                <CardHeader className="pb-4">
                  <CardTitle>API Endpoints</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="space-y-4 p-4">
                    {[
                      { method: 'GET', path: '/api/v1/businesses', desc: 'List verified businesses with filters' },
                      { method: 'GET', path: '/api/v1/products', desc: 'Browse product catalog' },
                      { method: 'POST', path: '/api/v1/requirements', desc: 'Post a buying requirement' },
                      { method: 'GET', path: '/api/v1/enquiries', desc: 'Retrieve received enquiries' },
                    ].map((ep, i) => (
                      <div key={i} className="border-b border-surface-border/50 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-[11px] font-bold text-brand-primary">{ep.method}</span>
                          <span className="text-body-sm text-text-primary font-mono">{ep.path}</span>
                        </div>
                        <p className="text-body-sm text-text-secondary">{ep.desc}</p>
                      </div>
                    ))}
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
