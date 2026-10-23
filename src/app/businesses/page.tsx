import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Users, Globe, Award, Truck, ArrowRight, Building2, Search, MapPin, Mail } from 'lucide-react'

const businessTypes = [
  { type: 'manufacturer', label: 'Manufacturers', icon: Shield, count: 85000, desc: 'Producers of goods across all industries' },
  { type: 'wholesaler', label: 'Wholesalers', icon: Truck, count: 62000, desc: 'Bulk suppliers to retailers' },
  { type: 'distributor', label: 'Distributors', icon: Globe, count: 41000, desc: 'Regional product distributors' },
  { type: 'exporter', label: 'Exporters', icon: Award, count: 28000, desc: 'International trade specialists' },
  { type: 'supplier', label: 'Suppliers', icon: Users, count: 94000, desc: 'Materials and components suppliers' },
  { type: 'service_provider', label: 'Service Providers', icon: Users, count: 33000, desc: 'Business and industrial services' },
]

const countries = [
  { name: 'India', slug: 'india', flag: '🇮🇳', count: 125000 },
  { name: 'United States', slug: 'united-states', flag: '🇺🇸', count: 98000 },
  { name: 'China', slug: 'china', flag: '🇨🇳', count: 87000 },
  { name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧', count: 54000 },
  { name: 'Germany', slug: 'germany', flag: '🇩🇪', count: 48000 },
  { name: 'UAE', slug: 'united-arab-emirates', flag: '🇦🇪', count: 42000 },
]

export const metadata: Metadata = {
  title: 'Businesses | Konnekt Globe',
  description: 'Browse verified businesses across all categories and countries on Konnekt Globe.',
}

export default function BusinessesPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      {/* Header */}
      <section className="border-b border-surface-border bg-white/60 backdrop-blur">
        <div className="container-page py-6 lg:py-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="max-w-3xl">
                <Badge variant="gold" className="mb-3">
                  Business Directory
                </Badge>
                <h1 className="text-heading-xl lg:text-display-sm font-bold text-brand-navy leading-[1.15] mb-2">
                  Find Verified &{' '}
                  <span className="text-gradient-gold">Businesses.</span>
                </h1>
                <p className="text-body text-text-secondary">
                  Discover manufacturers, suppliers, exporters, and service providers across 195+ countries.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/add-business" className="btn btn-gold-lg whitespace-nowrap">
                  List Your Business
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Quick filter bar */}
            <div className="rounded-xl border border-surface-border bg-white p-3 shadow-sm">
              <form className="flex flex-col sm:flex-row gap-2" noValidate>
                <div className="flex-1">
                  <Input
                    placeholder="Search businesses, products, or services..."
                    leftIcon={<Search className="h-4 w-4" />}
                    className="h-10 text-sm pl-9"
                  />
                </div>
                <div className="w-64">
                  <SelectCountry />
                </div>
                <Button type="submit" className="btn-gold-lg h-10 w-full sm:w-auto whitespace-nowrap text-sm px-5">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar filters */}
            <aside className="lg:col-span-3 space-y-6 shrink-0">
              <Card className="sticky top-24 overflow-hidden border-surface-border shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-brand-primary" />
                    Filter by Country
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {countries.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/businesses/${c.slug}`}
                        className="group relative overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/5"
                      >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                        <div className="p-4 flex flex-col items-center text-center">
                          <span className="text-4xl mb-2 block transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                            {c.flag}
                          </span>
                          <div className="flex items-center justify-between w-full">
                            <h4 className="text-body font-semibold text-text-primary group-hover:text-brand-primary transition-colors truncate">
                              {c.name}
                            </h4>
                            <span className="text-[10px] font-medium text-brand-primary">
                              {c.count.toLocaleString()}
                            </span>
                          </div>
                          <p className="mt-1 text-[10px] text-text-muted uppercase tracking-wider">
                            businesses
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="sticky top-[calc(24px+1rem+24px)] overflow-hidden border-surface-border shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-brand-primary" />
                    Business Type
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="space-y-3 p-4">
                    {businessTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <Link
                          key={type.type}
                          href={`/businesses?type=${type.type}`}
                          className="flex items-center justify-between p-2.5 rounded-lg border border-surface-border hover:border-brand-primary transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                            </div>
                            <span className="text-body-sm text-text-secondary">{type.label}</span>
                          </div>
                          <span className="text-[10px] font-medium text-brand-primary">{type.count.toLocaleString()}</span>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Main listings */}
            <div className="lg:col-span-9">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-heading-xl font-bold text-brand-navy">Featured Businesses</h2>
                  <p className="text-body-sm text-text-secondary">Verified companies ready to connect</p>
                </div>
                <Link href="/categories" className="btn-outline text-sm px-4 py-2 whitespace-nowrap">
                  View All Categories
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { name: 'Global Steel Industries', category: 'Metals & Minerals', location: 'Mumbai, India', verified: true, completeness: 95 },
                  { name: 'TechnoPower Electronics', category: 'Electronics & Electrical', location: 'Bangalore, India', verified: true, completeness: 88 },
                  { name: 'AgriGrow Fertilizers', category: 'Agriculture & Farming', location: 'Pune, India', verified: false, completeness: 72 },
                  { name: 'PharmaPure API', category: 'Pharmaceuticals', location: 'Hyderabad, India', verified: true, completeness: 90 },
                  { name: 'TexWeave Mills', category: 'Textiles & Apparel', location: 'Tirupur, India', verified: false, completeness: 65 },
                  { name: 'AutoGear Components', category: 'Automotive & Parts', location: 'Chennai, India', verified: true, completeness: 82 },
                ].map((biz, i) => (
                  <Link
                    key={i}
                    href={`/company/${biz.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden border-surface-border hover:border-brand-primary/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                      <div className="relative h-40 bg-surface-border">
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/10 text-text-muted">
                          <Building2 className="h-14 w-14" />
                        </div>
                        {biz.verified && (
                          <span className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-status-success text-white shadow-lg">
                            <Shield className="h-2.5 w-2.5" />
                          </span>
                        )}
                      </div>
                      <CardContent className="p-4 pt-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-body font-semibold text-text-primary group-hover:text-brand-primary transition-colors line-clamp-1">
                            {biz.name}
                          </h3>
                          {biz.verified && (
                            <Badge variant="gold" className="px-2 py-1 text-[10px]">Verified</Badge>
                          )}
                        </div>
                        <p className="text-body-sm text-text-secondary flex items-center gap-1 mb-3">
                          <MapPin className="h-3.5 w-3.5" />
                          <span className="truncate max-w-[160px]">{biz.location}</span>
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-primary">
                            {biz.category}
                          </span>
                          <span className="text-[10px] text-text-muted">{biz.completeness}% complete</span>
                        </div>
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
          </div>
        </div>
      </section>
    </div>
  )
}

function SelectCountry() {
  return (
    <select className="select border border-surface-border rounded-lg bg-white px-3 py-2 text-sm text-text-primary focus:border-brand-primary focus:outline-none transition-colors h-10 w-full">
      <option value="">All Countries</option>
      {countries.map((c) => (
        <option key={c.slug} value={c.slug}>
          {c.flag} {c.name}
        </option>
      ))}
    </select>
  )
}
