import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Building2, Package, Truck, Globe, Factory, Shirt, Car, Pill, FlaskConical } from 'lucide-react'

const categories = [
  { slug: 'machinery-equipment', name: 'Machinery & Equipment', icon: Factory, count: 12500 },
  { slug: 'electronics-electrical', name: 'Electronics & Electrical', icon: Package, count: 8900 },
  { slug: 'chemicals-materials', name: 'Chemicals & Materials', icon: FlaskConical, count: 6400 },
  { slug: 'textiles-apparel', name: 'Textiles & Apparel', icon: Shirt, count: 9300 },
  { slug: 'food-beverages', name: 'Food & Beverages', icon: Car, count: 7200 },
  { slug: 'automotive-parts', name: 'Automotive & Parts', icon: Truck, count: 5800 },
  { slug: 'construction-building', name: 'Construction & Building', icon: Building2, count: 6700 },
  { slug: 'pharmaceuticals', name: 'Pharmaceuticals', icon: Pill, count: 4100 },
]

export const metadata: Metadata = {
  title: 'Categories | Konnekt Globe',
  description: 'Browse all business categories on Konnekt Globe.',
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Product Categories
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Explore Categories
            </h1>
            <p className="text-body-lg text-text-secondary">
              Browse verified businesses organized by industry and product type.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.slug}
                  href={`/businesses/${cat.slug}`}
                  className="group block"
                >
                  <Card className="overflow-hidden border-surface-border hover:border-brand-primary/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5">
                    <div className="p-6 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mx-auto mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <h3 className="text-body font-semibold text-text-primary mb-1 group-hover:text-brand-primary transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-body-sm text-text-secondary">{cat.count.toLocaleString()}+ businesses</p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
