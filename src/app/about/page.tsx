import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  Building2,
  Users,
  Shield,
  Globe,
  Truck,
  BarChart3,
  Award,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Konnekt Globe',
  description: 'Learn about Konnekt Globe — the trusted B2B marketplace connecting verified buyers and suppliers across 195+ countries.',
}

const stats = [
  { value: '500K+', label: 'Verified Businesses', icon: Building2 },
  { value: '195+', label: 'Countries', icon: Globe },
  { value: '1M+', label: 'Monthly Enquiries', icon: BarChart3 },
  { value: '50K+', label: 'Product Categories', icon: Truck },
]

const features = [
  {
    icon: Shield,
    title: 'Verified Identities',
    desc: 'Multi-level verification including business registration, GST, and government documents.',
  },
  {
    icon: Users,
    title: 'Direct Communication',
    desc: 'Contact suppliers directly without intermediaries. No hidden fees or commissions.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    desc: 'Verified reviews, ratings, and transaction history to help you make informed decisions.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    desc: 'Seamless shipping and delivery coordination across borders with trusted partners.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              About Konnekt Globe
            </h1>
            <p className="text-body-lg text-text-secondary max-w-xl mx-auto leading-relaxed mb-8">
              Konnekt Globe is a global B2B marketplace connecting verified buyers and suppliers across industries.
              Whether you&rsquo;re sourcing raw materials, finished goods, or industrial services — we help you find,
              connect, and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="absolute -top-24 right-0 h-64 w-72 rounded-full bg-brand-primary/10 blur-3xl" aria-hidden="true" />
        <div className="container-page relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-heading-xl font-bold text-brand-navy">Our Mission</h2>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                We believe trade should be simple, transparent, and accessible to businesses of all sizes. Konnekt Globe
                was built to remove the friction from global sourcing — connecting small manufacturers with international
                buyers, and helping verified suppliers scale beyond local markets.
              </p>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                Today, our platform hosts hundreds of thousands of business listings across machinery, electronics,
                chemicals, textiles, agriculture, pharmaceuticals, and more — spanning 195+ countries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((f) => {
                  const Icon = f.icon
                  return (
                    <Card key={f.title} className="p-5 border-surface-border hover:border-brand-primary/40 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-brand-gold" />
                          <CardTitle className="text-body font-semibold">{f.title}</CardTitle>
                        </div>
                        <CardDescription className="text-body-sm">{f.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="rounded-xl border border-surface-border bg-white p-4 text-center">
                      <Icon className="h-6 w-6 mx-auto text-brand-primary mb-2" aria-hidden="true" />
                      <p className="text-heading-sm font-bold text-brand-navy">{s.value}</p>
                      <p className="text-body-sm text-text-secondary">{s.label}</p>
                    </div>
                  )
                })}
              </div>
              <Card className="bg-gradient-to-br from-brand-navy via-brand-primary to-brand-secondary text-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="text-heading-sm font-bold mb-3">Join 500,000+ businesses</h3>
                  <p className="text-body-sm text-white/80 mb-6">List your business or post a buying requirement today.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/add-business" className="flex-1 btn btn-gold-lg">List Your Business</Link>
                    <Link href="/post-requirement" className="flex-1 btn border-2 border-white/25 bg-white/5 text-white hover:bg-white/10">Post Requirement</Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
