import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import {
  Package,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Tag,
  Clock,
  Users,
  TrendingUp,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Post Buying Requirement',
  description: 'Post your buying requirement and get competitive quotes from verified suppliers on Konnekt Globe. Free for buyers.',
}

const categories = [
  { value: '', label: 'Select Category' },
  { value: 'machinery-equipment', label: 'Machinery & Equipment' },
  { value: 'electronics-electrical', label: 'Electronics & Electrical' },
  { value: 'chemicals-materials', label: 'Chemicals & Materials' },
  { value: 'textiles-apparel', label: 'Textiles & Apparel' },
  { value: 'food-beverages', label: 'Food & Beverages' },
  { value: 'automotive-parts', label: 'Automotive & Parts' },
  { value: 'construction-building', label: 'Construction & Building' },
  { value: 'agriculture-farming', label: 'Agriculture & Farming' },
  { value: 'pharmaceuticals', label: 'Pharmaceuticals' },
  { value: 'packaging-printing', label: 'Packaging & Printing' },
  { value: 'metals-minerals', label: 'Metals & Minerals' },
  { value: 'services', label: 'Services' },
]

const countries = [
  { value: '', label: '🇮🇳 India' },
  { value: 'united-states', label: '🇺🇸 United States' },
  { value: 'china', label: '🇨🇳 China' },
  { value: 'united-kingdom', label: '🇬🇧 United Kingdom' },
  { value: 'germany', label: '🇩🇪 Germany' },
  { value: 'united-arab-emirates', label: '🇦🇪 UAE' },
  { value: 'singapore', label: '🇸🇬 Singapore' },
  { value: 'japan', label: '🇯🇵 Japan' },
  { value: 'australia', label: '🇦🇺 Australia' },
]

const units = [
  { value: '', label: 'Select Unit' },
  { value: 'per_unit', label: 'Per Unit' },
  { value: 'per_kg', label: 'Per KG' },
  { value: 'per_ton', label: 'Per Metric Ton' },
  { value: 'per_piece', label: 'Per Piece' },
  { value: 'per_meter', label: 'Per Meter' },
  { value: 'per_liter', label: 'Per Liter' },
  { value: 'project_based', label: 'Project Based' },
]

const currencies = [
  { value: 'INR', label: 'INR (₹)' },
  { value: 'USD', label: 'USD ($)' },
  { value: 'EUR', label: 'EUR (€)' },
  { value: 'GBP', label: 'GBP (£)' },
]

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="flex items-center gap-1 text-body-sm font-medium text-text-primary mb-2 block">
      {label}
      {required && <span className="text-status-error">*</span>}
    </label>
  )
}

export default function PostRequirementPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      {/* Header */}
      <section className="border-b border-surface-border bg-white/60 backdrop-blur py-4 lg:py-6">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link className="inline-flex items-center gap-2 text-body-sm text-text-secondary hover:text-brand-primary transition-colors" href="/businesses">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Browse Suppliers
            </Link>
            <div className="max-w-3xl text-center sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-primary mb-3 sm:mb-4">
                Free for Buyers
              </div>
              <h1 className="text-heading-xl font-bold text-brand-navy leading-tight sm:text-heading-xl lg:text-display-sm sm:mb-4 mb-3">
                Post Your Buying &{' '}
                <span className="text-gradient-gold">Requirement.</span>
              </h1>
              <p className="text-body-sm sm:text-body text-text-secondary max-w-xs sm:max-w-none mx-auto sm:mx-0 leading-relaxed">
                Describe what you need and receive competitive quotes from verified suppliers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-8 space-y-8">
              <RequirementForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <WhyPostCard />
              <HowItWorksCard />
              <RecentRequirementsCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function RequirementForm() {
  return (
    <Card className="overflow-hidden shadow-sm border-surface-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5 text-brand-primary" />
          Requirement Details
        </CardTitle>
        <CardDescription>Tell suppliers exactly what you need</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-6" noValidate>
          <div>
            <FieldLabel label="Product / Service Name" required />
            <Input
              placeholder="e.g., Industrial CNC Machine, Stainless Steel 304 Sheets"
              leftIcon={<Package className="h-5 w-5" />}
              required
              className="h-11 pl-10"
            />
          </div>

          <div>
            <FieldLabel label="Category" required />
              <Select>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </div>

          <div>
            <FieldLabel label="Detailed Description" required />
            <Textarea
              placeholder="Specifications, quality standards, certifications, packaging, grading, and any special requirements..."
              rows={6}
              required
              className="h-48"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FieldLabel label="Quantity Required" />
              <Input type="number" placeholder="100" min="1" className="h-11" />
            </div>
            <div>
              <FieldLabel label="Unit" />
              <Select>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select Unit" />
                </SelectTrigger>
                <SelectContent>
                  {units.map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FieldLabel label="Target Budget (Optional)" />
              <div className="flex gap-3">
                <Input type="number" placeholder="100000" min="0" className="flex-1 h-11" />
                <Select>
                  <SelectTrigger className="h-11 w-48">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((c) => (
                      <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <FieldLabel label="Required By Date (Optional)" />
              <Input type="date" className="h-11" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FieldLabel label="Delivery Country" required />
              <Select>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <FieldLabel label="City / Address Details" required />
              <Input placeholder="City, State, Postal Code" leftIcon={<MapPin className="h-5 w-5" />} required className="h-11 pl-10" />
            </div>
          </div>

          <div className="border-t border-surface-border pt-6">
            <h3 className="text-heading-sm font-semibold text-text-primary mb-4">Your Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <FieldLabel label="Full Name" required />
                <Input placeholder="John Doe" required className="h-11" />
              </div>
              <div>
                <FieldLabel label="Company / Organization" required />
                <Input placeholder="ABC Corporation" required className="h-11" />
              </div>
              <div className="md:col-span-2">
                <FieldLabel label="Email Address" required />
                <Input type="email" placeholder="john@company.com" leftIcon={<Mail className="h-5 w-5" />} required className="h-11 pl-10" />
              </div>
              <div className="md:col-span-2">
                <FieldLabel label="Phone Number" required />
                <Input type="tel" placeholder="+91 98765 43210" leftIcon={<Phone className="h-5 w-5" />} required className="h-11 pl-10" />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 w-4 h-4 text-brand-primary border-surface-border rounded focus:ring-brand-primary"
            />
            <label htmlFor="terms" className="text-body-sm text-text-secondary leading-relaxed">
              I agree to the <Link href="/terms" className="text-brand-primary hover:underline">Terms of Service</Link> and{' '}
              <Link href="/privacy" className="text-brand-primary hover:underline">Privacy Policy</Link>. I consent to share my details with relevant suppliers.
            </label>
          </div>

          <Button type="submit" className="w-full btn-gold-lg">
            <ArrowRight className="h-5 w-5" />
            Post Requirement
          </Button>

          <p className="text-center text-body-sm text-text-muted">
            By posting, you&apos;ll receive quotes from verified suppliers. Your contact details are shared only with interested suppliers.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

function WhyPostCard() {
  const benefits = [
    { text: 'Reach 500,000+ verified suppliers globally' },
    { text: 'Receive competitive quotes within 24-48 hours' },
    { text: 'Completely free for buyers - no hidden charges' },
    { text: 'Secure communication through our platform' },
    { text: 'Verified supplier profiles with ratings & reviews' },
    { text: 'Dedicated support for complex requirements' },
  ]

  return (
    <Card className="bg-gradient-to-b from-brand-navy via-brand-primary to-brand-secondary text-white overflow-hidden relative shadow-lg shadow-brand-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-brand-gold" />
          <h3 className="text-heading-sm font-bold">Why Post on Konnekt Globe?</h3>
        </div>
        <ul className="space-y-3">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-white/90 text-body-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold mt-0.5">
                <CheckCircle className="h-3 w-3" />
              </span>
              {b.text}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

function HowItWorksCard() {
  const steps = [
    { num: '01', title: 'Post Requirement', desc: 'Describe your product or service need in detail.' },
    { num: '02', title: 'Supplier Match', desc: 'We notify verified suppliers matching your category.' },
    { num: '03', title: 'Receive Quotes', desc: 'Compare quotes, MOQ, and lead times side by side.' },
    { num: '04', title: 'Connect & Buy', desc: 'Contact suppliers directly and close the deal.' },
  ]

  return (
    <Card className="overflow-hidden shadow-sm border-surface-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-brand-primary" />
          How It Works
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 p-0 pb-6">
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start gap-3 p-4 border-b border-surface-border/50 last:border-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs">
                {step.num}
              </div>
              <div>
                <p className="text-body font-semibold text-text-primary">{step.title}</p>
                <p className="text-body-sm text-text-secondary">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function RecentRequirementsCard() {
  const reqs = [
    { title: 'Stainless Steel 316 Pipes', category: 'Metals & Minerals', location: 'Mumbai, India', responses: 12 },
    { title: 'Industrial LED Lighting', category: 'Electronics & Electrical', location: 'Bangalore, India', responses: 8 },
    { title: 'Organic Fertilizer NPK', category: 'Agriculture & Farming', location: 'Pune, India', responses: 15 },
    { title: 'Pharmaceutical API Grade', category: 'Pharmaceuticals', location: 'Hyderabad, India', responses: 6 },
    { title: 'CNC Milling Machine', category: 'Machinery & Equipment', location: 'Chennai, India', responses: 9 },
  ]

  return (
    <Card className="overflow-hidden shadow-sm border-surface-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-brand-primary" />
          Recent Requirements
        </CardTitle>
        <CardDescription>What other buyers are sourcing</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {reqs.map((req, i) => (
            <div
              key={i}
              className={cn('p-4 border-b border-surface-border/50 last:border-0', i % 2 === 0 && 'bg-white/50')}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-body font-medium text-text-primary">{req.title}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-body-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {req.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {req.location}
                    </span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-caption shrink-0">
                  {req.responses} quotes
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
