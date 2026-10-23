import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Package, Globe, Building2, Truck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products | Konnekt Globe',
  description: 'Browse products from verified suppliers across all categories on Konnekt Globe.',
}

const products = [
  { name: 'Stainless Steel 304 Sheets', supplier: 'Global Steel Industries', price: '185', currency: '₹', unit: 'Per KG', image: 'https://images.unsplash.com/photo-1589456929384-f2205e442265?w=600&q=80' },
  { name: 'Industrial LED Lighting', supplier: 'TechnoPower Electronics', price: '450', currency: '₹', unit: 'Per Unit', image: 'https://images.unsplash.com/photo-1507463728775-52790390a1cb?w=600&q=80' },
  { name: 'Organic Fertilizer NPK', supplier: 'AgriGrow Fertilizers', price: '28', currency: '₹', unit: 'Per KG', image: 'https://images.unsplash.com/photo-1593279028488-40a297878024?w=600&q=80' },
  { name: 'Pharmaceutical API', supplier: 'PharmaPure API', price: '2400', currency: '₹', unit: 'Per KG', image: 'https://images.unsplash.com/photo-1584280989815-0871c6d62561?w=600&q=80' },
  { name: 'CNC Milling Machine', supplier: 'AutoGear Components', price: '450000', currency: '₹', unit: 'Per Unit', image: 'https://images.unsplash.com/photo-1601372269781-590092890e03?w=600&q=80' },
  { name: 'Cotton Yarn', supplier: 'TexWeave Mills', price: '320', currency: '₹', unit: 'Per KG', image: 'https://images.unsplash.com/photo-1558095512-d2297d220e05?w=600&q=80' },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Product Catalog
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Explore Products
            </h1>
            <p className="text-body-lg text-text-secondary">
              Discover products from verified suppliers worldwide. Send enquiries directly to suppliers.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <Link key={i} href={`/products/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group block">
                <Card className="overflow-hidden border-surface-border hover:border-brand-primary/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5">
                  <div className="relative h-40 overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-1 right-1">
                      <Badge variant="gold" className="px-2 py-0.5 text-[9px]">In Stock</Badge>
                    </div>
                  </div>
                  <CardContent className="p-3 pt-2">
                    <p className="text-[10px] font-semibold text-text-muted uppercase mb-1">{p.supplier}</p>
                    <h3 className="text-body-sm font-semibold text-text-primary group-hover:text-brand-primary transition-colors line-clamp-2 mb-1">{p.name}</h3>
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <span className="text-body font-bold text-brand-primary">{p.currency}{p.price}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider">{p.unit}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-surface-border">
                      <span className="text-xs font-medium text-text-primary">Send Enquiry</span>
                      <ArrowRight className="h-3 w-3 text-brand-gold group-hover:translate-x-1 transition-transform" />
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
