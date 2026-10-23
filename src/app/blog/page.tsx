import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Globe, Users, Award, Shield, ArrowRight, Clock, TrendingUp } from 'lucide-react'

const articles = [
  {
    slug: 'how-to-source-from-india',
    title: 'How to Source Products from India: A Complete Buyer Guide',
    excerpt: 'Step-by-step guide for international buyers looking to verify suppliers, negotiate MOQs, and arrange shipping from India.',
    category: 'Sourcing',
    date: 'Oct 15, 2024',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80',
  },
  {
    slug: 'gst-verification-for-exporters',
    title: 'GST Verification for Exporters: What You Need to Know',
    excerpt: 'Understanding GST registration, verification, and compliance for Indian exporters selling globally.',
    category: 'Compliance',
    date: 'Oct 10, 2024',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    slug: 'premium-placement-benefits',
    title: 'Premium Placement: Boost Your Listing Visibility',
    excerpt: 'How premium spotlight placements drive more enquiries and help you close deals faster on Konnekt Globe.',
    category: 'Marketing',
    date: 'Oct 5, 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    slug: 'writing-effective-buying-requirement',
    title: 'Writing an Effective Buying Requirement',
    excerpt: 'Tips for buyers to write clear, detailed requirements that attract qualified supplier quotes.',
    category: 'Buying',
    date: 'Sep 28, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-b8e06adc6f13?w=800&q=80',
  },
]

export const metadata: Metadata = {
  title: 'Blog | Konnekt Globe',
  description: 'Insights, guides, and news for global B2B trade — sourcing, compliance, marketing, and marketplace updates.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Latest Insights
            </Badge>
            <h1 className="text-display-sm lg:text-display-md font-bold text-brand-navy mb-6 leading-[1.15]">
              Konnekt Globe Blog
            </h1>
            <p className="text-body-lg text-text-secondary">
              Trade insights, sourcing guides, and marketplace updates for global buyers and suppliers.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                    <Card className="overflow-hidden border-surface-border hover:border-brand-primary/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5">
                      <div className="relative h-40 overflow-hidden">
                        <img src={article.image} alt={article.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <CardContent className="p-5 pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-primary">
                            {article.category}
                          </span>
                          <span className="text-[10px] text-text-muted uppercase tracking-wider">{article.date}</span>
                        </div>
                        <h3 className="text-body font-semibold text-text-primary mb-2 leading-tight group-hover:text-brand-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-body-sm text-text-secondary line-clamp-2">{article.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 pb-5 px-5 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <Card className="bg-brand-navy text-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="text-heading-sm font-bold mb-4">Why Konnekt Globe?</h3>
                  <ul className="space-y-3">
                    {[
                      { text: '500,000+ verified businesses worldwide', icon: Users },
                      { text: '195+ countries covered', icon: Globe },
                      { text: 'Multi-level GST & ID verification', icon: Shield },
                      { text: 'Premium spotlight placement', icon: Award },
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
                <CardHeader className="pb-4">
                  <CardTitle>Trade Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {[
                      'Machinery & Equipment',
                      'Electronics & Electrical',
                      'Chemicals & Materials',
                      'Textiles & Apparel',
                      'Food & Beverages',
                      'Automotive & Parts',
                      'Construction & Building',
                      'Pharmaceuticals',
                    ].map((cat) => (
                      <Link key={cat} href={`/businesses/${cat.toLowerCase().replace(' ', '-')}`} className="flex items-center justify-between p-2 rounded-lg border border-surface-border hover:border-brand-primary text-body-sm text-text-secondary hover:text-brand-primary transition-colors">
                        {cat}
                        <ArrowRight className="h-3 w-3 text-text-muted" />
                      </Link>
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
