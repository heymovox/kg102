import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Users, Globe, Shield, Award, Clock, ArrowRight, MapPin, Mail, Phone } from 'lucide-react'

interface Article {
  title: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  content: string[]
}

const articles: Record<string, Article> = {
  'how-to-source-from-india': {
    title: 'How to Source Products from India: A Complete Buyer Guide',
    category: 'Sourcing',
    date: 'Oct 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=1200&q=80',
    author: 'Konnekt Globe Editorial',
    content: [
      'Sourcing from India offers access to a vast manufacturing base across textiles, machinery, chemicals, and more. But finding verified suppliers and navigating quality standards can be challenging for first-time buyers.',
      'This guide walks you through the complete sourcing process — from identifying product categories and verifying supplier credentials to negotiating MOQs, arranging quality inspections, and managing international shipping.',
      '<strong>Step 1: Define your product requirements.</strong> Be specific about specifications, grades, certifications, packaging, and target pricing before contacting suppliers.',
      '<strong>Step 2: Verify supplier identity.</strong> Use Konnekt Globe&rsquo;s verified badge, GST registration, and business registration documents to confirm legitimacy.',
      '<strong>Step 3: Request samples and quotes.</strong> Always request product samples and compare MOQ, lead time, and payment terms across at least three suppliers.',
      '<strong>Step 4: Arrange inspection and shipping.</strong> Use third-party inspection services and Incoterms (FOB, CIF) to protect your shipment.',
    ],
  },
  'gst-verification-for-exporters': {
    title: 'GST Verification for Exporters: What You Need to Know',
    category: 'Compliance',
    date: 'Oct 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: 'Konnekt Globe Editorial',
    content: [
      'GST (Goods and Services Tax) verification is a critical step when dealing with Indian exporters. It confirms that a supplier is registered, tax-compliant, and eligible to export goods.',
      'On Konnekt Globe, suppliers marked with the GST Verified badge have submitted valid GSTIN documents that our team cross-checks against official records.',
      '<strong>Why it matters:</strong> Working with GST-verified exporters reduces the risk of fraud, ensures proper documentation for customs, and supports input tax credit claims where applicable.',
      '<strong>How to verify:</strong> Check the supplier profile for the GST Verified badge, or request their GSTIN certificate directly before placing an order.',
    ],
  },
  'premium-placement-benefits': {
    title: 'Premium Placement: Boost Your Listing Visibility',
    category: 'Marketing',
    date: 'Oct 5, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    author: 'Konnekt Globe Editorial',
    content: [
      'With hundreds of thousands of listings on Konnekt Globe, standing out requires more than a basic profile. Premium Spotlight placement puts your business at the top of category and search results.',
      'Premium benefits include featured placement, priority enquiry routing, advanced analytics dashboard, verified badge display, multi-country visibility, and a dedicated account manager.',
      'Sellers using Premium Spotlight typically see 3-5x more enquiries within the first 30 days compared to free listings.',
    ],
  },
  'writing-effective-buying-requirement': {
    title: 'Writing an Effective Buying Requirement',
    category: 'Buying',
    date: 'Sep 28, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-b8e06adc6f13?w=1200&q=80',
    author: 'Konnekt Globe Editorial',
    content: [
      'A well-written buying requirement attracts qualified suppliers and reduces back-and-forth. The key is specificity — suppliers need to know exactly what you&rsquo;re looking for to give accurate quotes.',
      'Include: product name and specifications, quantity and unit, target budget, required delivery date, delivery location, quality standards/certifications, and packaging preferences.',
      'Avoid vague terms like &ldquo;good quality&rdquo; or &ldquo;cheap price.&rdquo; Instead, reference grades, standards (ISO, ASTM, etc.), and target price ranges.',
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export const metadata: Metadata = {
  title: 'Blog | Konnekt Globe',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-heading-xl lg:text-display-sm font-bold text-brand-navy mb-6 leading-[1.15]">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-body-sm text-text-secondary">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-main via-white" aria-hidden="true" />
        <div className="container-page relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8 prose prose-lg max-w-none">
              <div className="relative mb-8 rounded-xl overflow-hidden border border-surface-border shadow-sm">
                <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
              </div>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                {article.content.map((p: string, i: number) => (
                  <p key={i} className="text-body" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-8">
              <Card className="bg-brand-navy text-white p-6 relative overflow-hidden shadow-lg shadow-brand-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="text-heading-sm font-bold mb-4">Related Resources</h3>
                  <ul className="space-y-3">
                    {[
                      { text: 'Verified Businesses', icon: Shield },
                      { text: 'GST Verified Exporters', icon: Globe },
                      { text: '500K+ Members Network', icon: Users },
                      { text: 'Premium Spotlight', icon: Award },
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

              <Card className="overflow-hidden shadow-sm border-surface-border">
                <CardHeader className="pb-4">
                  <CardTitle>Share This Article</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="grid grid-cols-4 gap-2 p-4">
                    {['LinkedIn', 'Twitter', 'Facebook', 'Email'].map((network) => (
                      <Button
                        key={network}
                        variant="outline"
                        className="w-full justify-center p-2 text-[10px] font-medium border-surface-border hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5 transition-colors"
                      >
                        {network}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-surface-border bg-surface-main py-12 lg:py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Need Help?
            </Badge>
            <h2 className="text-heading-xl font-bold text-brand-navy mb-4">Start Sourcing Globally</h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Join 500,000+ verified businesses. Post your buying requirement or list your company today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/post-requirement" className="btn btn-gold-lg">Post a Requirement</Link>
              <Link href="/add-business" className="btn border-2 border-brand-primary/40 bg-white text-brand-navy hover:bg-brand-primary hover:text-white">List Your Business</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
