'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import {
  Building2,
  Package,
  Mail,
  Phone,
  ArrowRight,
  Shield,
  MapPin,
  Globe,
  Users,
  Clock,
  Star,
  CheckCircle,
  Link as LinkIcon,
  Share2,
  MessageCircle,
  ChevronLeft,
  TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const company = {
  name: 'Global Steel Industries',
  slug: 'global-steel-industries',
  tagline: 'Leading stainless steel manufacturer for construction & industrial applications',
  type: 'Manufacturer',
  country: 'India',
  flag: '🇮🇳',
  location: 'Mumbai, Maharashtra, India',
  established: 1995,
  employees: '201-500',
  verified: true,
  memberSince: '2018',
  responseRate: '98%',
  responseTime: '< 4 hrs',
  countriesServed: '20+',
  rating: 4.8,
  reviewCount: 124,
  enquiriesHandled: '5.2K+',
  description:
    'Global Steel Industries is a leading manufacturer of stainless steel products for construction and industrial applications. With over 25 years of experience, we supply to buyers across 20+ countries, offering export-grade materials with full certification and competitive pricing.',
  certifications: ['ISO 9001', 'GST Verified', 'IEC Certificate', 'BIS Certified'],
  products: [
    { name: 'Stainless Steel 304 Sheets', image: 'https://images.unsplash.com/photo-1589456929384-f2205e442265?w=600&q=80', price: '₹185/kg', unit: 'Per KG', minOrder: '500 kg' },
    { name: 'Stainless Steel Pipes', image: 'https://images.unsplash.com/photo-1601372269781-590092890e03?w=600&q=80', price: '₹240/kg', unit: 'Per KG', minOrder: '1000 kg' },
    { name: 'Industrial Coils', image: 'https://images.unsplash.com/photo-1584280989815-0871c6d62561?w=600&q=80', price: '₹210/kg', unit: 'Per KG', minOrder: '2000 kg' },
    { name: 'Steel Fasteners', image: 'https://images.unsplash.com/photo-1558095512-d2297d220e05?w=600&q=80', price: '₹320/kg', unit: 'Per KG', minOrder: '200 kg' },
  ],
  reviews: [
    { name: 'Rajesh Kumar', company: 'BuildRight Constructions', rating: 5, date: '15 Oct 2024', text: 'Excellent quality stainless steel sheets. Delivery was on time and packaging was secure. Highly recommended.' },
    { name: 'Sarah Chen', company: 'Asia Pacific Trading', rating: 4, date: '28 Sep 2024', text: 'Great communication and competitive pricing. The product samples met our specifications exactly.' },
    { name: 'David Miller', company: 'Global Exports Ltd', rating: 5, date: '5 Sep 2024', text: 'Smooth export process with proper documentation. Will definitely place repeat orders.' },
  ],
  similar: [
    { name: 'TechnoPower Electronics', category: 'Electronics & Electrical', location: 'Bangalore, India', verified: true },
    { name: 'AgriGrow Fertilizers', category: 'Agriculture & Farming', location: 'Pune, India', verified: false },
    { name: 'PharmaPure API', category: 'Pharmaceuticals', location: 'Hyderabad, India', verified: true },
  ],
}

const tabs = [
  { id: 'about', label: 'About', icon: Building2 },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'reviews', label: `Reviews (${company.reviewCount})`, icon: Star },
  { id: 'contact', label: 'Contact', icon: MessageCircle },
]

export default function CompanyClient() {
  const [activeTab, setActiveTab] = useState('about')
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="min-h-screen bg-surface-main">
      {/* Announcement-aware header */}
      <section className="border-b border-surface-border bg-white/60 backdrop-blur sticky top-0 z-40">
        <div className="container-page py-3 lg:py-5">
          <div className="flex items-center justify-between gap-4">
            <LinkBack />
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="whitespace-nowrap flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Share Profile
              </Button>
              <Button
                className={`btn-gold-lg whitespace-nowrap flex items-center gap-2 ${isSaved ? 'text-brand-navy bg-white border-transparent' : ''}`}
                onClick={() => setIsSaved(!isSaved)}
              >
                {isSaved ? (
                  <>
                    <CheckCircle className="h-4 w-4" /> Saved
                  </>
                ) : (
                  <>
                    <Star className="h-4 w-4" /> Save Profile
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

              {/* Cover banner */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-primary/90 to-brand-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent" aria-hidden="true" />
        <div className="container-page relative pt-12 lg:pt-20 pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Logo + Brand */}
              <div className="lg:col-span-12 flex flex-col items-start gap-6">
                <div className="relative flex h-48 w-48 shrink-0 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-black/30 group">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                    alt={`${company.name} logo`}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-status-success" />
                    <span className="text-xs font-bold text-text-primary">Verified</span>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-brand-gold font-semibold text-sm uppercase tracking-wider">{company.type}</p>
                  <h1 className="text-heading-lg lg:text-heading-xl font-bold text-white mb-2 leading-tight">{company.name}</h1>
                  <p className="text-white/90 text-body-lg">{company.tagline}</p>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
                    <span className="flex items-center gap-1.5 text-brand-gold/90 text-sm font-medium">
                      <Star className="h-4 w-4 fill-yellow-400" />
                      {company.rating}
                    </span>
                    <span className="text-white/60 text-sm">({company.reviewCount} reviews)</span>
                    <span className="flex items-center gap-1 text-white/60 text-sm">
                      <MapPin className="h-3.5 w-3.5" /> {company.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab navigation */}
      <section className="border-b border-surface-border bg-white/60 backdrop-blur sticky top-14 z-30">
        <div className="container-page py-3">
          <div className="flex items-center gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer"
                  aria-pressed={isActive}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-brand-gold' : 'text-text-muted'}`} />
                  <span className={`font-medium ${isActive ? 'text-brand-navy' : 'text-text-secondary'}`}>
                    {tab.label}
                  </span>
                  {isActive && (
                    <span className="h-0.5 w-4 rounded-full bg-brand-gold mt-1.5" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section className="section">
        <div className="container-page">
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'products' && <ProductsSection />}
          {activeTab === 'reviews' && <ReviewsSection />}
          {activeTab === 'contact' && <ContactSection />}
        </div>
      </section>

      {/* Similar companies */}
      <section className="border-t border-surface-border bg-white/50 py-12 lg:py-16">
        <div className="container-page">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-heading-xl font-bold text-brand-navy">Similar Companies</h2>
            <Link href="/businesses" className="btn-outline text-sm px-4 py-2 whitespace-nowrap">
              Browse All
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {company.similar.map((biz, i) => (
              <Link
                key={i}
                href={`/company/${biz.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="group block"
              >
                <Card className="overflow-hidden border-surface-border hover:border-brand-primary/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5">
                  <div className="relative h-44 bg-surface-border">
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/10 text-text-muted">
                      <Building2 className="h-12 w-12" />
                    </div>
                    {biz.verified && (
                      <span className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-status-success text-white shadow-lg">
                        <Shield className="h-2.5 w-2.5" />
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4 pt-3">
                    <h3 className="text-body font-semibold text-text-primary group-hover:text-brand-primary transition-colors line-clamp-1 mb-1">
                      {biz.name}
                    </h3>
                    <p className="text-body-sm text-text-secondary flex items-center gap-1 mb-3">
                      <Globe className="h-3.5 w-3.5" />
                      <span className="truncate">{biz.location}</span>
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-surface-border">
                      <span className="text-body-sm font-medium text-text-primary">Free listing</span>
                      <ArrowRight className="h-4 w-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-8">
        <Card className="overflow-hidden border-surface-border shadow-sm">
          <CardHeader className="pb-5">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-brand-primary" />
              <CardTitle>Company Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0 pt-0">
            <div className="p-6">
              <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                {company.description}
              </p>
              {/* Stat cards - compact */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {[
                  { value: '29+', label: 'Years', icon: Clock },
                  { value: company.responseRate, label: 'Response Rate', icon: TrendingUp },
                  { value: company.responseTime, label: 'Avg. Response', icon: Clock },
                  { value: company.enquiriesHandled, label: 'Enquiries', icon: Users },
                ].map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={i} className={cn(
                      'relative overflow-hidden rounded-xl p-3 text-center transition-all duration-300 group border border-surface-border bg-white/50',
                    )}>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary mb-1.5 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <p className="text-body-sm font-bold text-text-primary mb-0.5">{stat.value}</p>
                        <p className="text-[10px] text-text-muted uppercase tracking-wider">{stat.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoRow label="Business Type" value={company.type} icon={Building2} />
                <InfoRow label="Country" value={`${company.flag} ${company.country}`} icon={Globe} />
                <InfoRow label="Established" value={String(company.established)} icon={Clock} />
                <InfoRow label="Employees" value={company.employees} icon={Users} />
                <InfoRow label="Member Since" value={company.memberSince} icon={CheckCircle} />
                <InfoRow label="Countries Served" value={company.countriesServed} icon={LinkIcon} />
              </div>
              <div className="mt-8">
                <h4 className="text-body font-semibold text-text-primary mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-3">
                  {company.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-border bg-white text-body-sm text-text-primary hover:border-brand-primary/50 hover:text-brand-primary transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 text-brand-gold" /> {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <TrustCard />
        <ContactCard />
      </div>
    </div>
  )
}

function InfoRow({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl border border-surface-border bg-white/50">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div>
        <p className="text-[11px] font-semibold text-text-muted uppercase">{label}</p>
        <p className="text-body-sm text-text-primary">{value}</p>
      </div>
    </div>
  )
}

function TrustCard() {
  return (
    <Card className="relative overflow-hidden shadow-lg shadow-brand-primary/20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-primary/90 to-brand-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" aria-hidden="true" />

      <div className="relative z-10 p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold text-brand-navy">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-heading-sm font-bold text-white">Trust & Verification</h3>
            <p className="text-xs text-brand-gold/90 uppercase tracking-wider font-semibold">Platform Verified</p>
          </div>
        </div>

        {/* Trust score */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Trust Score</p>
            <p className="text-heading-xl font-bold text-white">4.8<span className="text-sm font-normal text-brand-gold/90"> / 5</span></p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-gold">
            <Star className="h-5 w-5 fill-yellow-400" />
          </div>
        </div>

        {/* Progress bar for response rate */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-white/80">Response Rate</span>
            <span className="text-xs font-bold text-brand-gold">{company.responseRate}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-gold to-brand-primary" style={{ width: '98%' }} />
          </div>
        </div>

        {/* Verification metrics grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Avg. Response Time', value: company.responseTime, icon: Clock },
            { label: 'Enquiries Handled', value: company.enquiriesHandled, icon: Users },
            { label: 'Member Since', value: company.memberSince, icon: Clock },
            { label: 'Countries Served', value: company.countriesServed, icon: Globe },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:border-brand-gold/30 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-brand-gold">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <span className="text-xs text-white/70">{item.label}</span>
                </div>
                <span className="text-xs font-bold text-white">{item.value}</span>
              </div>
            )
          })}
        </div>

        {/* Verified document badges */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">Verified Documents</p>
          <div className="flex flex-wrap gap-2">
            {company.certifications.map((cert) => (
              <span key={cert} className="px-3 py-1.5 rounded-lg border border-brand-gold/30 bg-brand-gold/5 text-[10px] font-semibold text-brand-gold/90 uppercase tracking-wider">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Verified badge strip */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/30">
            <CheckCircle className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Konnekt Globe Verified</p>
            <p className="text-xs text-brand-gold/90">Identity and documents verified on {company.memberSince}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

function ContactCard() {
  return (
    <Card className="overflow-hidden shadow-sm border-surface-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-brand-primary" />
          Contact Company
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 pt-0">
        <div className="space-y-4 p-4">
          <div className="flex items-start gap-3">
            <Mail className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold text-text-muted uppercase">Email</p>
              <a href="mailto:contact@globalsteel.com" className="text-body-sm text-brand-primary hover:underline">
                contact@globalsteel.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold text-text-muted uppercase">Phone</p>
              <a href="tel:+912240001234" className="text-body-sm text-brand-primary hover:underline">
                +91 22 4000 1234
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold text-text-muted uppercase">Location</p>
              <p className="text-body-sm text-text-primary">{company.location}</p>
            </div>
          </div>
          <Button className="w-full btn-gold-lg mt-2">Send Enquiry</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ProductsSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-heading-xl font-bold text-brand-navy">Products</h2>
        <Badge variant="gold" className="text-[10px] px-2 py-1">{company.products.length} products</Badge>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {company.products.map((p, i) => (
          <Card key={i} className="overflow-hidden border-surface-border shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="relative h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="gold" className="px-2 py-1 text-[9px]">In Stock</Badge>
              </div>
            </div>
            <CardContent className="p-4 pt-3">
              <p className="text-[11px] font-semibold text-text-muted uppercase mb-1">{company.type}</p>
              <h3 className="text-body font-semibold text-text-primary group-hover:text-brand-primary transition-colors line-clamp-2 mb-2">{p.name}</h3>
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <span className="text-heading-sm font-bold text-brand-primary">{p.price}</span>
                <span className="text-[10px] text-text-muted uppercase tracking-wider">{p.unit}</span>
              </div>
              <div className="flex items-start gap-2 mb-4">
                <span className="text-[10px] font-semibold text-text-muted uppercase mr-1">MOQ:</span>
                <span className="text-body-sm text-text-primary">{p.minOrder}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-surface-border">
                <Button variant="outline" size="sm" className="w-full text-[11px] px-3 py-2">
                  Send Enquiry
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ReviewsSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-heading-xl font-bold text-brand-navy">Customer Reviews</h2>
          <p className="text-body-sm text-text-secondary">
            {company.reviewCount} verified buyer reviews
          </p>
        </div>
        <div className="flex items-center gap-2 text-brand-gold">
          <span className="text-heading-lg font-bold">{company.rating}</span>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className={`h-4 w-4 ${i <= Math.floor(company.rating) ? 'fill-yellow-400' : 'text-gray-300'}`} />
          ))}
        </div>
      </div>
      <div className="space-y-5">
        {company.reviews.map((r, i) => (
          <Card key={i} className="p-5 border-surface-border shadow-sm hover:border-brand-primary/30 transition-colors">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-body font-semibold text-text-primary">{r.name}</p>
                  <p className="text-[11px] text-text-muted">{r.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-brand-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-3.5 w-3.5 ${star <= r.rating ? 'fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
            <p className="text-body-sm text-text-secondary leading-relaxed mb-3">{r.text}</p>
            <span className="text-[11px] text-text-muted">{r.date}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6">
        <Card className="overflow-hidden shadow-sm border-surface-border">
          <CardHeader className="pb-5">
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-primary" />
              Send Enquiry
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 pt-0">
            <form className="p-6 space-y-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="label">Full Name <span className="text-status-error">*</span></label>
                  <Input placeholder="John Doe" required className="h-11" />
                </div>
                <div>
                  <label className="label">Email Address <span className="text-status-error">*</span></label>
                  <Input type="email" placeholder="john@company.com" required leftIcon={<Mail className="h-5 w-5" />} className="h-11 pl-10" />
                </div>
              </div>
              <div>
                <label className="label">Message <span className="text-status-error">*</span></label>
                <Textarea placeholder="Tell us about your requirements, quantity, and delivery timeline..." rows={4} required className="h-48" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="label">Quantity Required</label>
                  <Input type="number" placeholder="e.g. 1000 kg" className="h-11" />
                </div>
                <div>
                  <label className="label">Target Budget (Optional)</label>
                  <div className="flex gap-3">
                    <Input type="number" placeholder="Amount" className="flex-1 h-11" />
                    <Select>
                      <SelectTrigger className="h-11 w-32">
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">INR (₹)</SelectItem>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full btn-gold-lg">
                Send Enquiry
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-6 space-y-6">
        <ContactCard />
        <MapCard />
      </div>
    </div>
  )
}

function MapCard() {
  return (
    <Card className="overflow-hidden shadow-sm border-surface-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-primary" />
          Company Location
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 pt-0">
        <div className="h-64 bg-surface-border flex items-center justify-center">
          <div className="text-center">
            <Globe className="h-16 w-16 text-text-muted mb-3" />
            <p className="text-body-sm text-text-secondary">Interactive map coming soon</p>
            <p className="text-body-sm text-text-primary font-medium">{company.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function LinkBack() {
  return (
    <Link className="inline-flex items-center gap-2 text-body-sm text-text-secondary hover:text-brand-primary transition-colors" href="/businesses">
      <ChevronLeft className="h-4 w-4" />
      Browse Businesses
    </Link>
  )
}
