import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Building2, Shield, ArrowRight, MapPin } from 'lucide-react'

const countries: Record<string, { name: string; flag: string; count: number }> = {
  india: { name: 'India', flag: '🇮🇳', count: 125000 },
  'united-states': { name: 'United States', flag: '🇺🇸', count: 98000 },
  china: { name: 'China', flag: '🇨🇳', count: 87000 },
  'united-kingdom': { name: 'United Kingdom', flag: '🇬🇧', count: 54000 },
  germany: { name: 'Germany', flag: '🇩🇪', count: 48000 },
  'united-arab-emirates': { name: 'UAE', flag: '🇦🇪', count: 42000 },
}

export function generateStaticParams() {
  return Object.keys(countries).map((slug) => ({ slug }))
}

export const metadata: Metadata = {
  title: 'Businesses by Country | Konnekt Globe',
}

export default function BusinessesCountryPage({ params }: { params: { slug: string } }) {
  const country = countries[params.slug]
  if (!country) return null

  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-white/60 backdrop-blur">
        <div className="container-page py-6 lg:py-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <Badge variant="gold" className="mb-3">
                  {country.flag} {country.name}
                </Badge>
                <h1 className="text-heading-xl lg:text-display-sm font-bold text-brand-navy leading-[1.15] mb-2">
                  Businesses in {country.name}
                </h1>
                <p className="text-body text-text-secondary">
                  {country.count.toLocaleString()}+ verified businesses operating in {country.name}.
                </p>
              </div>
              <Link href="/add-business" className="btn btn-gold-lg whitespace-nowrap">
                List Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
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
                      <span className="truncate">{biz.location}</span>
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
      </section>
    </div>
  )
}
