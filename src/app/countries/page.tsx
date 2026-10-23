import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Globe, Building2, Package, Truck, Factory, Shirt, Car, Pill } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Countries | Konnekt Globe',
  description: 'Browse businesses by country on Konnekt Globe.',
}

const countries = [
  { name: 'India', slug: 'india', flag: '🇮🇳', count: 125000 },
  { name: 'United States', slug: 'united-states', flag: '🇺🇸', count: 98000 },
  { name: 'China', slug: 'china', flag: '🇨🇳', count: 87000 },
  { name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧', count: 54000 },
  { name: 'Germany', slug: 'germany', flag: '🇩🇪', count: 48000 },
  { name: 'UAE', slug: 'united-arab-emirates', flag: '🇦🇪', count: 42000 },
  { name: 'Singapore', slug: 'singapore', flag: '🇸🇬', count: 35000 },
  { name: 'Japan', slug: 'japan', flag: '🇯🇵', count: 31000 },
  { name: 'Australia', slug: 'australia', flag: '🇦🇺', count: 28000 },
  { name: 'Brazil', slug: 'brazil', flag: '🇧🇷', count: 24000 },
  { name: 'Canada', slug: 'canada', flag: '🇨🇦', count: 22000 },
  { name: 'South Africa', slug: 'south-africa', flag: '🇿🇦', count: 19000 },
]

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Global Markets
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Explore by Country
            </h1>
            <p className="text-body-lg text-text-secondary">
              Discover verified businesses and suppliers in 195+ countries worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/businesses/${c.slug}`}
                className="group block"
              >
                <Card className="overflow-hidden border-surface-border hover:border-brand-primary/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5">
                  <div className="p-6 text-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                      {c.flag}
                    </span>
                    <h3 className="text-body font-semibold text-text-primary mb-1 group-hover:text-brand-primary transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-body-sm text-text-secondary">{c.count.toLocaleString()}+ businesses</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
