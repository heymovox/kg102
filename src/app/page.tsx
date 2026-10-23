import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import {
  Globe,
  Building2,
  Package,
  Search,
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  Factory,
  Truck,
  Globe as GlobeIcon,
  Star,
  Zap,
  Award,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Coffee,
  Shirt,
  Car,
  Building,
  Tractor,
  Pill,
  Briefcase,
  Box,
  Gem,
  FlaskConical,
  BarChart2,
  Sparkles,
} from 'lucide-react'

const categories = [
  { name: 'Machinery & Equipment', slug: 'machinery-equipment', icon: Factory, count: 12500 },
  { name: 'Electronics & Electrical', slug: 'electronics-electrical', icon: Zap, count: 9800 },
  { name: 'Chemicals & Materials', slug: 'chemicals-materials', icon: FlaskConical, count: 8200 },
  { name: 'Textiles & Apparel', slug: 'textiles-apparel', icon: Shirt, count: 15600 },
  { name: 'Food & Beverages', slug: 'food-beverages', icon: Coffee, count: 11300 },
  { name: 'Automotive & Parts', slug: 'automotive-parts', icon: Car, count: 7800 },
  { name: 'Construction & Building', slug: 'construction-building', icon: Building, count: 9100 },
  { name: 'Agriculture & Farming', slug: 'agriculture-farming', icon: Tractor, count: 6400 },
  { name: 'Pharmaceuticals', slug: 'pharmaceuticals', icon: Pill, count: 4200 },
  { name: 'Services', slug: 'services', icon: Briefcase, count: 18900 },
  { name: 'Packaging & Printing', slug: 'packaging-printing', icon: Box, count: 5600 },
  { name: 'Metals & Minerals', slug: 'metals-minerals', icon: Gem, count: 3800 },
]

const featuredBusinesses = [
  {
    name: 'Global Steel Industries',
    slug: 'global-steel-industries',
    logo: '/placeholder-logo-1.png',
    location: 'Mumbai, Maharashtra, India',
    category: 'Metals & Minerals',
    businessType: 'manufacturer',
    isVerified: true,
    completeness: 95,
  },
  {
    name: 'TechnoPower Electronics',
    slug: 'technopower-electronics',
    logo: '/placeholder-logo-2.png',
    location: 'Bangalore, Karnataka, India',
    category: 'Electronics & Electrical',
    businessType: 'supplier',
    isVerified: true,
    completeness: 88,
  },
  {
    name: 'AgriMax Solutions',
    slug: 'agrimax-solutions',
    logo: '/placeholder-logo-3.png',
    location: 'Pune, Maharashtra, India',
    category: 'Agriculture & Farming',
    businessType: 'manufacturer',
    isVerified: false,
    completeness: 72,
  },
  {
    name: 'MediCare Pharmaceuticals',
    slug: 'medicare-pharmaceuticals',
    logo: '/placeholder-logo-4.png',
    location: 'Hyderabad, Telangana, India',
    category: 'Pharmaceuticals',
    businessType: 'manufacturer',
    isVerified: true,
    completeness: 92,
  },
  {
    name: 'Textile Hub International',
    slug: 'textile-hub-international',
    logo: '/placeholder-logo-5.png',
    location: 'Surat, Gujarat, India',
    category: 'Textiles & Apparel',
    businessType: 'exporter',
    isVerified: true,
    completeness: 85,
  },
  {
    name: 'ChemPro Industries',
    slug: 'chempro-industries',
    logo: '/placeholder-logo-6.png',
    location: 'Vadodara, Gujarat, India',
    category: 'Chemicals & Materials',
    businessType: 'manufacturer',
    isVerified: false,
    completeness: 68,
  },
]

const trendingProducts = [
  {
    name: 'Industrial CNC Machine',
    slug: 'industrial-cnc-machine',
    image: '/placeholder-product-1.png',
    price: 450000,
    currency: 'INR',
    supplier: 'Global Steel Industries',
    supplierSlug: 'global-steel-industries',
    category: 'Machinery & Equipment',
    unit: 'per unit',
  },
  {
    name: 'LED Panel Lights 50W',
    slug: 'led-panel-lights-50w',
    image: '/placeholder-product-2.png',
    price: 850,
    currency: 'INR',
    supplier: 'TechnoPower Electronics',
    supplierSlug: 'technopower-electronics',
    category: 'Electronics & Electrical',
    unit: 'per piece',
  },
  {
    name: 'Organic Fertilizer NPK 20-20-20',
    slug: 'organic-fertilizer-npk',
    image: '/placeholder-product-3.png',
    price: 1200,
    currency: 'INR',
    supplier: 'AgriMax Solutions',
    supplierSlug: 'agrimax-solutions',
    category: 'Agriculture & Farming',
    unit: 'per kg',
  },
  {
    name: 'Paracetamol API Grade',
    slug: 'paracetamol-api-grade',
    image: '/placeholder-product-4.png',
    price: 3200,
    currency: 'INR',
    supplier: 'MediCare Pharmaceuticals',
    supplierSlug: 'medicare-pharmaceuticals',
    category: 'Pharmaceuticals',
    unit: 'per kg',
  },
  {
    name: 'Cotton Yarn 40s Combed',
    slug: 'cotton-yarn-40s-combed',
    image: '/placeholder-product-5.png',
    price: 420,
    currency: 'INR',
    supplier: 'Textile Hub International',
    supplierSlug: 'textile-hub-international',
    category: 'Textiles & Apparel',
    unit: 'per kg',
  },
  {
    name: 'Sulfuric Acid 98%',
    slug: 'sulfuric-acid-98',
    image: '/placeholder-product-6.png',
    price: 8500,
    currency: 'INR',
    supplier: 'ChemPro Industries',
    supplierSlug: 'chempro-industries',
    category: 'Chemicals & Materials',
    unit: 'per metric ton',
  },
]

const countries = [
  { name: 'India', code: 'IN', slug: 'india', businessCount: 450000, flag: '🇮🇳' },
  { name: 'United States', code: 'US', slug: 'united-states', businessCount: 280000, flag: '🇺🇸' },
  { name: 'China', code: 'CN', slug: 'china', businessCount: 320000, flag: '🇨🇳' },
  { name: 'United Kingdom', code: 'GB', slug: 'united-kingdom', businessCount: 95000, flag: '🇬🇧' },
  { name: 'Germany', code: 'DE', slug: 'germany', businessCount: 85000, flag: '🇩🇪' },
  { name: 'United Arab Emirates', code: 'AE', slug: 'united-arab-emirates', businessCount: 42000, flag: '🇦🇪' },
  { name: 'Singapore', code: 'SG', slug: 'singapore', businessCount: 38000, flag: '🇸🇬' },
  { name: 'Japan', code: 'JP', slug: 'japan', businessCount: 67000, flag: '🇯🇵' },
  { name: 'Australia', code: 'AU', slug: 'australia', businessCount: 28000, flag: '🇦🇺' },
  { name: 'Canada', code: 'CA', slug: 'canada', businessCount: 35000, flag: '🇨🇦' },
  { name: 'Brazil', code: 'BR', slug: 'brazil', businessCount: 41000, flag: '🇧🇷' },
  { name: 'South Africa', code: 'ZA', slug: 'south-africa', businessCount: 18000, flag: '🇿🇦' },
]

const businessTypes = [
  { type: 'manufacturer', label: 'Manufacturers', icon: Factory, count: 180000, description: 'Direct from factory production' },
  { type: 'wholesaler', label: 'Wholesalers', icon: Package, count: 95000, description: 'Bulk quantity suppliers' },
  { type: 'distributor', label: 'Distributors', icon: Truck, count: 72000, description: 'Regional distribution networks' },
  { type: 'exporter', label: 'Exporters', icon: GlobeIcon, count: 58000, description: 'International trade specialists' },
  { type: 'supplier', label: 'Suppliers', icon: Building2, count: 125000, description: 'Product & material providers' },
  { type: 'service_provider', label: 'Service Providers', icon: Briefcase, count: 45000, description: 'Business & industrial services' },
]

const howItWorks = [
  { step: 1, title: 'Search & Discover', description: 'Use our powerful search to find businesses, products, or services by keyword, category, or location.', icon: Search },
  { step: 2, title: 'Compare Options', description: 'Compare verified suppliers, check product specifications, and review business profiles side by side.', icon: CheckCircle },
  { step: 3, title: 'Connect Directly', description: 'Contact suppliers directly via phone, email, or WhatsApp. No middlemen, no hidden fees.', icon: Users },
  { step: 4, title: 'Request Quotes', description: 'Post your requirements and receive competitive quotations from multiple verified suppliers.', icon: Package },
]

const articles = [
  {
    title: 'How to Verify International Suppliers Before Trading',
    slug: 'verify-international-suppliers',
    excerpt: 'Essential due diligence steps to protect your business when sourcing from overseas suppliers.',
    category: 'Buyer Guides',
    readTime: '8 min read',
    publishedAt: '2024-01-15',
  },
  {
    title: 'Top 10 Emerging Markets for Indian Exporters in 2024',
    slug: 'emerging-markets-indian-exporters-2024',
    excerpt: 'Market analysis of high-growth destinations for Indian manufacturing and agricultural exports.',
    category: 'Market Insights',
    readTime: '12 min read',
    publishedAt: '2024-01-10',
  },
  {
    title: 'Digital Transformation in B2B Procurement',
    slug: 'digital-transformation-b2b-procurement',
    excerpt: 'How digital platforms are reshaping supplier discovery, negotiation, and supply chain management.',
    category: 'Industry Trends',
    readTime: '10 min read',
    publishedAt: '2024-01-05',
  },
]

function AnnouncementStrip() {
  const topCountries = [
    { flag: '🇮🇳', name: 'India' },
    { flag: '🇺🇸', name: 'USA' },
    { flag: '🇨🇳', name: 'China' },
    { flag: '🇬🇧', name: 'UK' },
    { flag: '🇦🇪', name: 'UAE' },
  ]

  return (
    <div
      className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-2.5 overflow-hidden"
    >
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 px-2">
        <p className="flex items-center gap-2 text-body-sm text-center sm:text-left">
          <Badge variant="gold" className="text-[10px] uppercase px-1.5 py-0.5">
            New
          </Badge>
          <span className="hidden sm:inline block">
            Business registration now open for international companies.
          </span>
          <Link
            href="/add-business"
            className="underline decoration-brand-gold underline-offset-2 decoration-2 hover:text-brand-gold font-semibold whitespace-nowrap"
          >
            List your business →
          </Link>
        </p>

        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
          {topCountries.map((country) => (
            <span
              key={country.name}
              className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 border border-white/10 hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-colors whitespace-nowrap"
            >
              <span>{country.flag}</span>
              <span className="hidden md:inline text-white/80 text-xs">{country.name}</span>
            </span>
          ))}
          <span className="ml-2 whitespace-nowrap text-brand-gold font-medium text-sm">
            +{190} more countries
          </span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const popularSearches = [
    'CNC Machines',
    'Stainless Steel',
    'LED Panel Lights',
    'Organic Fertilizer',
    'Cotton Yarn',
    'Pharmaceutical API',
  ]

  const stats = [
    { icon: Building2, value: '500K+', label: 'Verified Listings' },
    { icon: Shield, value: '50K+', label: 'Verified Businesses' },
    { icon: Globe, value: '195+', label: 'Countries' },
    { icon: TrendingUp, value: '1M+', label: 'Monthly Enquiries' },
  ]

  const trustFlags = [
    { flag: '🇮🇳', name: 'India' },
    { flag: '🇺🇸', name: 'USA' },
    { flag: '🇨🇳', name: 'China' },
    { flag: '🇬🇧', name: 'UK' },
    { flag: '🇦🇪', name: 'UAE' },
    { flag: '🇩🇪', name: 'Germany' },
    { flag: '🇸🇬', name: 'Singapore' },
  ]

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-primary to-brand-secondary" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,166,58,0.22),transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,90,168,0.5),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.06]" aria-hidden="true" />

      {/* soft light orbs */}
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-48 -right-40 h-[30rem] w-[30rem] rounded-full bg-brand-secondary/30 blur-3xl" aria-hidden="true" />

      <div className="container-page relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur animate-fade-in">
            <span className="flex items-center gap-0.5 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="text-white/90">Trusted by 500,000+ businesses worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-display-sm sm:text-display-md lg:text-display-xl font-bold leading-[1.1] tracking-tight text-white animate-slide-up">
            Discover Businesses.{' '}
            <span className="block sm:inline text-gradient-gold">Connect Globally.</span>
          </h1>

          <p className="mt-6 text-body-lg text-white/70 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Find trusted suppliers, explore products, and connect with verified businesses across India and around the world — your gateway to global trade.
          </p>

          {/* Search card */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-white/95 p-2 text-text-primary shadow-2xl shadow-black/25 ring-1 ring-white/30 backdrop-blur animate-slide-up animation-delay-300 sm:p-2.5">
            <form className="flex flex-col lg:flex-row gap-1.5" role="search" aria-label="Business search">
              <div className="flex-1">
                <Input
                  className="h-10 text-sm pl-10"
                  placeholder="Search products, companies, categories..."
                  aria-label="Search keyword"
                  leftIcon={<Search className="h-4 w-4" />}
                />
              </div>
              <div className="lg:w-40">
                <Select>
                  <SelectTrigger placeholder="All Categories" aria-label="Select category" className="h-10 text-sm">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.slug} value={cat.slug}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:w-40">
                <Select>
                  <SelectTrigger placeholder="All Locations" aria-label="Select location" className="h-10 text-sm">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    {countries.slice(0, 10).map((country) => (
                      <SelectItem key={country.slug} value={country.slug}>
                        {country.flag} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="h-10 w-full px-5 text-sm lg:w-auto whitespace-nowrap" aria-label="Search businesses">
                <Search className="h-4 w-4" /> Search
              </Button>
            </form>

            {/* Popular searches */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5 px-1 pt-2 border-t border-surface-border">
              <span className="text-[11px] font-semibold text-text-muted">Popular:</span>
              {popularSearches.map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="rounded-full bg-surface-light px-2.5 py-0.5 text-[11px] font-medium text-text-secondary transition-colors hover:bg-brand-gold/15 hover:text-brand-gold-hover"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/add-business" className="btn btn-gold" aria-label="List your business">
              <Building2 className="h-4 w-4" /> List Your Business
            </Link>
            <Link
              href="/post-requirement"
              className="btn border-2 border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10"
              aria-label="Post a requirement"
            >
              <Package className="h-4 w-4" /> Post a Requirement
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur transition-colors hover:border-brand-gold/30 hover:bg-white/10"
                >
                  <Icon className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                  <p className="mt-3 text-heading-sm font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              )
            })}
          </div>

          {/* Country trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-white/60">
            <span className="mr-1">Sourcing in</span>
            {trustFlags.map((country) => (
              <span
                key={country.name}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80"
              >
                <span aria-hidden="true">{country.flag}</span> {country.name}
              </span>
            ))}
            <span className="font-medium text-brand-gold">+188 more</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ category, index }: { category: typeof categories[0]; index: number }) {
  const Icon = category.icon
  return (
    <Link
      href={`/businesses/${category.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-surface-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-2xl bg-brand-primary/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-60" aria-hidden="true" />
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 text-brand-primary transition-all duration-300 group-hover:scale-105 group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
        </div>
        <h3 className="text-body font-semibold text-text-primary transition-colors group-hover:text-brand-primary">
          {category.name}
        </h3>
        <p className="mt-1 text-body-sm text-text-secondary">
          {category.count.toLocaleString()}+ businesses
        </p>
        <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          View businesses
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}

function CategoriesSection() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="categories-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-main via-surface-light to-surface-main" aria-hidden="true" />
      <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-primary/5 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
            Industries
          </span>
          <h2 id="categories-heading" className="mt-4 text-display-sm font-bold text-brand-navy">
            Explore Popular Industries
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Discover verified businesses across leading industries and connect with the right partners worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/categories" className="btn btn-primary">
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function BusinessCard({ business }: { business: typeof featuredBusinesses[0] }) {
  const initials = business.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <Link
      href={`/company/${business.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="flex flex-1 items-start gap-4 p-5">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
          <span className="text-heading-sm font-bold text-brand-primary">{initials}</span>
          {business.isVerified && (
            <span
              className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-status-success text-white shadow-lg shadow-status-success/30"
              aria-label="Verified business"
            >
              <CheckCircle className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-body font-semibold text-text-primary transition-colors group-hover:text-brand-primary line-clamp-1">
              {business.name}
            </h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-gold-hover">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Featured
            </span>
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-body-sm text-text-secondary">
            <Globe className="h-3.5 w-3.5 text-brand-primary" />
            <span className="truncate">{business.location}</span>
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-[11px]">
              {business.category}
            </Badge>
            <Badge variant="secondary" className="text-[11px] capitalize">
              {business.businessType.replace('_', ' ')}
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-surface-border px-5 py-3">
        <div className="flex flex-1 items-center gap-2 text-caption text-text-muted">
          <span className="whitespace-nowrap">Profile completeness</span>
          <div className="h-1.5 flex-1 rounded-full bg-surface-border">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
              style={{ width: `${business.completeness}%` }}
            />
          </div>
          <span className="font-medium text-text-primary">{business.completeness}%</span>
        </div>
        <div className="inline-flex items-center gap-1 text-xs font-medium text-brand-primary">
          View profile
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}

function FeaturedBusinessesSection() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="featured-businesses-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-main to-white" aria-hidden="true" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-brand-primary/5 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
              Top Rated
            </span>
            <h2 id="featured-businesses-heading" className="mt-4 text-display-sm font-bold text-brand-navy">
              Featured Businesses
            </h2>
            <p className="mt-3 text-body-lg text-text-secondary">
              Hand-picked, verified companies trusted by buyers worldwide
            </p>
          </div>
          <Link href="/businesses" className="btn btn-primary">
            View All Businesses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {featuredBusinesses.map((business) => (
            <BusinessCard key={business.slug} business={business} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof trendingProducts[0] }) {
  return (
    <Link href={`/products/${product.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="relative h-36 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 flex items-center justify-center">
          <Box className="h-12 w-12 text-brand-secondary" aria-hidden="true" />
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="gold" className="px-2 py-0.5 text-[10px]">
            Get Latest Price
          </Badge>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-body-sm font-semibold text-text-primary line-clamp-2">
          {product.name}
        </h3>
        <p className="text-caption text-text-secondary flex items-center gap-1">
          <Building2 className="h-3 w-3" />
          <span className="truncate">{product.supplier}</span>
        </p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="text-body font-bold text-brand-primary">
            {product.price.toLocaleString()} {product.currency}
          </span>
          <span className="text-[10px] text-text-muted uppercase tracking-wider">{product.unit}</span>
        </div>
        <Button variant="outline" className="w-full mt-1 px-3 py-1.5 text-xs font-medium" size="sm">
          Send Enquiry
          <ArrowRight className="h-3 w-3" />
        </Button>
      </div>
    </Link>
  )
}

function TrendingProductsSection() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="trending-products-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-surface-light" aria-hidden="true" />
      <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-brand-secondary/5 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
              Trending
            </span>
            <h2 id="trending-products-heading" className="mt-4 text-display-sm font-bold text-brand-navy">
              Trending Products
            </h2>
            <p className="mt-3 text-body-lg text-text-secondary">
              Popular products with competitive pricing from verified suppliers
            </p>
          </div>
          <Link href="/products" className="btn btn-primary">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {trendingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CountryCard({ country }: { country: typeof countries[0] }) {
  return (
    <Link
      href={`/businesses/${country.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="p-6 text-center">
        <span className="inline-flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-brand-primary/10 text-brand-navy text-3xl font-bold shadow-sm shadow-brand-primary/10 transition-all duration-300 group-hover:scale-110">
          {country.flag}
        </span>
        <h3 className="text-body font-semibold text-text-primary transition-colors group-hover:text-brand-primary">
          {country.name}
        </h3>
        <p className="mt-2 text-body-sm text-text-secondary">
          {country.businessCount.toLocaleString()}+ businesses
        </p>
      </div>
    </Link>
  )
}

function GlobalMarketsSection() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="global-markets-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-main to-white" aria-hidden="true" />
      <div className="absolute -top-24 right-0 h-64 w-72 rounded-full bg-brand-primary/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
            Global Markets
          </span>
          <h2 id="global-markets-heading" className="mt-4 text-display-sm font-bold text-brand-navy">
            Explore Global Markets
          </h2>
          <p className="mt-3 text-body-lg text-text-secondary">
            Discover businesses in 195+ countries. Select a country to explore local suppliers and markets.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mb-10">
          {countries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/countries" className="btn btn-primary">
            Explore All Countries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function BusinessTypeCard({ type }: { type: typeof businessTypes[0] }) {
  const Icon = type.icon
  return (
    <Link
      href={`/businesses?type=${type.type}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-gold-hover">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {type.label === 'Suppliers' ? 'Verified' : 'Trusted'}
          </span>
        </div>
        <h3 className="text-body font-semibold text-text-primary transition-colors group-hover:text-brand-primary line-clamp-1">
          {type.label}
        </h3>
        <p className="mt-2 text-body-sm text-text-secondary line-clamp-2">{type.description}</p>
        <div className="mt-auto pt-4 border-t border-surface-border flex items-center gap-1 text-xs font-medium text-brand-primary">
          {type.count.toLocaleString()}+ businesses
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}

function BusinessTypesSection() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="business-types-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-surface-light" aria-hidden="true" />
      <div className="absolute -top-24 left-0 h-64 w-72 rounded-full bg-brand-primary/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
            Partner Types
          </span>
          <h2 id="business-types-heading" className="mt-4 text-display-sm font-bold text-brand-navy">
            Find Your Business Partner
          </h2>
          <p className="mt-3 text-body-lg text-text-secondary">
            Connect with the right type of business partner for your specific needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((type) => (
            <BusinessTypeCard key={type.type} type={type} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="how-it-works-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-main to-white" aria-hidden="true" />
      <div className="absolute -top-24 right-0 h-64 w-72 rounded-full bg-brand-secondary/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
            How It Works
          </span>
          <h2 id="how-it-works-heading" className="mt-4 text-display-sm font-bold text-brand-navy">
            How Konnekt Globe Works
          </h2>
          <p className="mt-3 text-body-lg text-text-secondary">
            Four simple steps to find your ideal business partner
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 rounded-full bg-brand-primary/10 px-2 py-1 text-brand-primary font-bold">
                      <span className="text-xs">{`0${step.step}`}</span>
                      <span className="text-[10px] uppercase tracking-wider">Step</span>
                    </div>
                  </div>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4 transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-body font-semibold text-text-primary transition-colors group-hover:text-brand-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary">{step.description}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const trustItems = [
    { icon: Shield, title: 'Verified Identities', description: 'Multi-level verification including business registration, GST, and government documents.' },
    { icon: CheckCircle, title: 'Transparent Profiles', description: 'Complete business information with contact details, certifications, and product catalogs.' },
    { icon: Users, title: 'Direct Communication', description: 'Contact suppliers directly without intermediaries. No hidden fees or commissions.' },
    { icon: Award, title: 'Quality Assurance', description: 'Verified reviews, ratings, and transaction history to help you make informed decisions.' },
  ]

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-brand-navy via-brand-primary to-brand-secondary text-white" aria-labelledby="trust-heading">
      <div className="absolute -top-24 right-0 h-64 w-72 rounded-full bg-brand-gold/20 blur-3xl opacity-60" aria-hidden="true" />
      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Trust & Safety
          </span>
          <h2 id="trust-heading" className="mt-4 text-display-sm font-bold text-white">
            Trust & Verification
          </h2>
          <p className="mt-3 text-body-lg text-white/70">
            We ensure every business on our platform meets strict verification standards for your peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-white to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <div className="p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold shadow-lg shadow-brand-gold/20 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:bg-brand-gold">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-body font-semibold text-white transition-colors group-hover:text-brand-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-white/70">{item.description}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PremiumSection() {
  const features = [
    { icon: Sparkles, title: 'Featured in Search Results', description: 'Your listing appears at the top of relevant category and keyword searches.' },
    { icon: TrendingUp, title: 'Priority Enquiry Routing', description: 'Buyer enquiries reach you first before standard listings get visibility.' },
    { icon: BarChart2, title: 'Advanced Analytics Dashboard', description: 'Track profile views, enquiry sources, and buyer demographics in real time.' },
    { icon: Award, title: 'Verified Badge Display', description: 'A premium verified badge builds trust with buyers across all markets.' },
    { icon: Globe, title: 'Multi-country Visibility', description: 'Showcase your business in multiple countries from a single premium profile.' },
    { icon: Users, title: 'Dedicated Account Manager', description: 'Personalized support to optimize your listings and grow conversions.' },
  ]

  return (
    <section className="section relative overflow-hidden" aria-labelledby="premium-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-main via-white to-surface-main" aria-hidden="true" />
      <div className="absolute -top-32 right-0 h-72 w-80 rounded-full bg-brand-gold/20 blur-3xl opacity-60" aria-hidden="true" />
      <div className="absolute -bottom-40 left-0 h-64 w-72 rounded-full bg-brand-secondary/10 blur-3xl opacity-80" aria-hidden="true" />
      <div className="container-page relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <Badge variant="gold" className="mb-4">
              Premium Business Promotion
            </Badge>
            <h2 id="premium-heading" className="text-display-sm lg:text-display-xl font-bold text-brand-navy mb-6 leading-[1.15]">
              Grow Your Business with{' '}
              <span className="text-gradient-gold">Premium Spotlight</span>
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-lg leading-relaxed">
              Get featured at the top of search results, showcase your products prominently, and connect with more buyers globally.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing" className="btn-gold-lg whitespace-nowrap">
                View Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/add-business" className="btn border-2 border-brand-primary/40 bg-white text-brand-navy hover:bg-brand-primary hover:text-white border-brand-primary hover:border-brand-primary/60 whitespace-nowrap">
                List Your Business
              </Link>
            </div>
            <div className="mt-10 p-4 rounded-xl border border-surface-border bg-white">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-brand-primary shrink-0" />
                <div>
                  <p className="text-body font-semibold text-text-primary">Already have a listing?</p>
                  <p className="text-body-sm text-text-secondary">Claim your business profile in 60 seconds.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-full rounded-3xl border border-surface-border bg-white p-6 shadow-xl shadow-black/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5" aria-hidden="true" />
              <div className="relative z-10 space-y-4">
                {features.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <div key={i} className="group relative flex items-center gap-3 rounded-lg p-3 hover:bg-brand-primary/5 hover:border-brand-primary/20 border border-transparent transition-colors">
                      <div className="flex shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-body font-semibold text-text-primary transition-colors group-hover:text-brand-primary">
                          {feature.title}
                        </h4>
                        <p className="text-body-sm text-text-secondary">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArticlesSection() {
  return (
    <section className="section bg-surface-light" aria-labelledby="articles-heading">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 id="articles-heading" className="text-display-sm font-bold text-brand-navy mb-2">
              Latest Insights
            </h2>
            <p className="text-body text-text-secondary">
              Expert articles on global trade, supplier sourcing, and business growth
            </p>
          </div>
          <Link href="/blog" className="btn-outline">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card-hover card overflow-hidden h-full">
              <div className="aspect-video bg-brand-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-brand-primary/50 text-4xl">
                  📰
                </div>
                <span className="absolute top-3 left-3 badge-primary">{article.category}</span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-heading-sm font-semibold text-text-primary line-clamp-2 group-hover:text-brand-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-body-sm text-text-secondary line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-caption text-text-muted pt-2 border-t border-surface-border">
                  <span>{article.readTime}</span>
                  <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-primary to-brand-secondary" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,166,58,0.25),transparent_55%)]" aria-hidden="true" />
      <div className="absolute -top-24 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-brand-gold/20 blur-3xl opacity-40" aria-hidden="true" />
      <div className="container-page relative text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gold mb-5">
            <span className="flex items-center gap-1 text-brand-gold">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Get Started
            </span>
          </div>
          <h2 id="final-cta-heading" className="text-display-sm lg:text-display-xl font-bold text-white mb-4 leading-[1.15]">
            Ready to Grow Your Business Globally?
          </h2>
          <p className="text-body-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Join 500,000+ businesses already connecting on Konnekt Globe. Start your free listing today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/add-business" className="btn btn-gold-lg whitespace-nowrap">
              List Your Business Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/businesses" className="btn border-2 border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10 text-base px-8 py-3.5">
              Explore Businesses
            </Link>
          </div>
          <p className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-body-sm text-white/50">
            <span className="flex items-center gap-1 text-white/60">
              <CheckCircle className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
              No credit card required
            </span>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="text-white/60">Free forever for basic listings</span>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="text-white/60">Cancel anytime</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <AnnouncementStrip />
      <Hero />
      <CategoriesSection />
      <FeaturedBusinessesSection />
      <TrendingProductsSection />
      <GlobalMarketsSection />
      <BusinessTypesSection />
      <HowItWorksSection />
      <TrustSection />
      <PremiumSection />
      <ArticlesSection />
      <FinalCTA />
    </>
  )
}