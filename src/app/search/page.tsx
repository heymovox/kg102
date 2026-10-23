import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  Search,
  Globe,
  Building2,
  Package,
  Truck,
  Users,
  Shield,
  ArrowRight,
  Factory,
  Shirt,
  Car,
  Building,
  Pill,
  FlaskConical,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Search | Konnekt Globe',
  description: 'Search businesses, products, and suppliers across categories and countries on Konnekt Globe.',
}

const categories = [
  { name: 'Machinery & Equipment', slug: 'machinery-equipment', icon: Factory, count: 12500 },
  { name: 'Electronics & Electrical', slug: 'electronics-electrical', icon: Package, count: 8900 },
  { name: 'Chemicals & Materials', slug: 'chemicals-materials', icon: FlaskConical, count: 6400 },
  { name: 'Textiles & Apparel', slug: 'textiles-apparel', icon: Shirt, count: 9300 },
  { name: 'Food & Beverages', slug: 'food-beverages', icon: Car, count: 7200 },
  { name: 'Automotive & Parts', slug: 'automotive-parts', icon: Truck, count: 5800 },
  { name: 'Construction & Building', slug: 'construction-building', icon: Building, count: 6700 },
  { name: 'Pharmaceuticals', slug: 'pharmaceuticals', icon: Pill, count: 4100 },
]

export default function SearchPage({ searchParams }: { searchParams: { q?: string; category?: string; country?: string } }) {
  const query = searchParams.q || ''
  const category = searchParams.category || ''
  const country = searchParams.country || ''

  const listings = [
    { name: 'Global Steel Industries', category: 'Metals & Minerals', location: 'Mumbai, India', verified: true, completeness: 95 },
    { name: 'TechnoPower Electronics', category: 'Electronics & Electrical', location: 'Bangalore, India', verified: true, completeness: 88 },
    { name: 'AgriGrow Fertilizers', category: 'Agriculture & Farming', location: 'Pune, India', verified: false, completeness: 72 },
    { name: 'PharmaPure API', category: 'Pharmaceuticals', location: 'Hyderabad, India', verified: true, completeness: 90 },
    { name: 'TexWeave Mills', category: 'Textiles & Apparel', location: 'Tirupur, India', verified: false, completeness: 65 },
    { name: 'AutoGear Components', category: 'Automotive & Parts', location: 'Chennai, India', verified: true, completeness: 82 },
  ]

  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="gold" className="px-3 py-1 text-xs">
                {query ? 'Search results' : 'Browse All'}
              </Badge>
            </div>
            <h1 className="text-heading-xl font-bold text-brand-navy mb-4">
              {query ? `Search results for "${query}"` : 'Browse Businesses & Products'}
            </h1>
            <p className="text-body text-text-secondary mb-6">
              Find verified suppliers, manufacturers, and products across 195+ countries.
            </p>

            <div className="rounded-xl border border-surface-border bg-white p-4 shadow-sm">
              <form className="flex flex-col sm:flex-row gap-3" noValidate>
                <div className="flex-1">
                  <Input
                    placeholder="Search products, companies, categories..."
                    value={query}
                    leftIcon={<Search className="h-5 w-5" />}
                    className="h-11 pl-10"
                  />
                </div>
                <div className="w-64">
                  <Select>
                    <SelectTrigger placeholder="All Categories" className="h-11">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat.slug} value={cat.slug}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-64">
                  <Select>
                    <SelectTrigger placeholder="All Countries" className="h-11">
                      <SelectValue placeholder="All Countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Countries</SelectItem>
                      <SelectItem value="india">🇮🇳 India</SelectItem>
                      <SelectItem value="united-states">🇺🇸 United States</SelectItem>
                      <SelectItem value="china">🇨🇳 China</SelectItem>
                      <SelectItem value="united-kingdom">🇬🇧 United Kingdom</SelectItem>
                      <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                      <SelectItem value="united-arab-emirates">🇦🇪 UAE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="btn-gold-lg h-11 w-full sm:w-auto whitespace-nowrap">
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
            <div className="lg:col-span-3">
              <aside className="space-y-6 sticky top-24">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle>Filter by Category</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-0">
                    <div className="space-y-3 p-4">
                      {categories.map((cat) => {
                        const Icon = cat.icon
                        return (
                          <Link
                            key={cat.slug}
                            href={`/search?q=${encodeURIComponent(query)}&category=${cat.slug}&country=${country}`}
                            className="flex items-center justify-between p-2.5 rounded-lg border border-surface-border hover:border-brand-primary text-body-sm text-text-secondary hover:text-brand-primary transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4 text-text-muted" />
                              {cat.name}
                            </div>
                            <span className="text-[10px] text-text-muted">{cat.count}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>

            <div className="lg:col-span-9">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-body-sm text-text-secondary">
                    Showing businesses for {category || 'all categories'}
                  </p>
                </div>
                <div className="flex gap-2 text-[11px] uppercase tracking-wider text-text-muted">
                  <span className="text-brand-primary font-medium">Relevance</span>
                  <span>/</span>
                  <Link href="#" className="hover:text-brand-primary">Newest</Link>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {listings.map((biz, i) => (
                  <Link
                    key={i}
                    href={`/company/${biz.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden border-surface-border hover:border-brand-primary/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5">
                      <div className="relative h-40 bg-surface-border">
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
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-body font-semibold text-text-primary group-hover:text-brand-primary transition-colors line-clamp-1">
                            {biz.name}
                          </h3>
                          {biz.verified && (
                            <Badge variant="gold" className="px-2 py-1 text-[10px]">Verified</Badge>
                          )}
                        </div>
                        <p className="text-body-sm text-text-secondary flex items-center gap-1 mb-3">
                          <Globe className="h-3.5 w-3.5" />
                          <span className="truncate max-w-[180px]">{biz.location}</span>
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
