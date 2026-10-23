'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import {
  Building2,
  Globe,
  Factory,
  Truck,
  Package,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Upload,
  Image as ImageIcon,
  CheckCircle,
  Shield,
  Users,
  ChevronRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const businessTypes = [
  { value: 'manufacturer', label: 'Manufacturer', icon: Factory, description: 'Produce goods from raw materials' },
  { value: 'wholesaler', label: 'Wholesaler', icon: Package, description: 'Sell in bulk to retailers/distributors' },
  { value: 'distributor', label: 'Distributor', icon: Truck, description: 'Distribute products in specific regions' },
  { value: 'exporter', label: 'Exporter', icon: Globe, description: 'Sell products internationally' },
  { value: 'supplier', label: 'Supplier', icon: Building2, description: 'Supply products/materials to businesses' },
  { value: 'service_provider', label: 'Service Provider', icon: Briefcase, description: 'Provide business/industrial services' },
]

const employeeRanges = [
  { value: '', label: 'Select Employee Range' },
  { value: '1-10', label: '1-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '201-500', label: '201-500' },
  { value: '501-1000', label: '501-1000' },
  { value: '1000+', label: '1000+' },
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

const steps = [
  { id: 1, title: 'Business Info', desc: 'Tell us about your company' },
  { id: 2, title: 'Contact & Location', desc: 'How buyers reach you' },
  { id: 3, title: 'Media & Documents', desc: 'Logo, banner & verification' },
  { id: 4, title: 'Review & Submit', desc: 'Finalize your listing' },
]

function StepBadge({ step, current }: { step: number; current: number }) {
  const isDone = step < current
  const isActive = step === current
  const isPending = step > current
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all">
      <div
        className={cn(
          'h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs transition-all',
          isDone
            ? 'bg-brand-gold text-brand-navy'
            : isActive
            ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25'
            : 'bg-white/5 text-white/40 border border-white/10',
        )}
      >
        {isDone ? (
          <CheckCircle className="h-3 w-3" />
        ) : (
          step
        )}
      </div>
      <span className={cn('font-medium leading-none', isPending ? 'text-white/40' : 'text-white')}>
        {steps[step - 1]?.title}
      </span>
    </div>
  )
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="flex items-center gap-1 text-body-sm font-medium text-text-primary mb-2 block">
      {label}
      {required && <span className="text-status-error">*</span>}
    </label>
  )
}

export default function AddBusinessForm() {
  const [currentStep, setCurrentStep] = useState(1)

  const isLastStep = currentStep === steps.length
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <div className="min-h-screen bg-surface-main">
      {/* Header */}
      <section className="border-b border-surface-border bg-white/50 backdrop-blur sticky top-0 z-40">
        <div className="container-page py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <LinkBack />
            <div className="max-w-3xl text-center sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-primary mb-3 sm:mb-4">
                Free Basic Listing
              </div>
              <h1 className="text-heading-xl font-bold text-brand-navy leading-tight sm:text-display-sm md:text-display-md lg:text-display-xl sm:mb-4 mb-3">
                List Your Business &{' '}
                <span className="text-gradient-gold">Connect Globally.</span>
              </h1>
              <p className="text-body-sm sm:text-body text-text-secondary max-w-xs sm:max-w-none mx-auto sm:mx-0 leading-relaxed">
                Join 500,000+ verified businesses trading globally. List free and unlock premium visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="section">
        <div className="container-page">
          {/* Stepper */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-heading-xl font-bold text-brand-navy">
                  {steps[currentStep - 1].title}
                </h2>
                <p className="text-body-sm text-text-secondary">{steps[currentStep - 1].desc}</p>
              </div>
              <Badge variant="outline" className="text-caption px-2 py-1">
                Step {currentStep} of {steps.length}
              </Badge>
            </div>
            <div className="h-1 w-full rounded-full bg-surface-border overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-hover transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-8 space-y-8">
              {currentStep === 1 && <BusinessInfoStep />}
              {currentStep === 2 && <ContactLocationStep />}
              {currentStep === 3 && <MediaDocumentsStep />}
              {currentStep === 4 && <ReviewSubmitStep />}

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-8 border-t border-surface-border">
                <div className="flex items-center gap-2 text-body-sm text-text-secondary">
                  {currentStep > 1 && (
                    <Button variant="outline" size="sm" onClick={() => setCurrentStep((p) => p - 1)}>
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      Previous
                    </Button>
                  )}
                  {currentStep === 1 && <span>Start your listing</span>}
                </div>
                <div className="flex gap-3">
                  {currentStep < steps.length && (
                    <Button className="btn-primary px-8" onClick={() => setCurrentStep((p) => p + 1)}>
                      Next Step
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                  {isLastStep && (
                    <Button className="btn-gold-lg px-9">
                      Publish Business
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Preview Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <BusinessPreviewCard />
              <BenefitsCard />
              <PlansCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function LinkBack() {
  return (
    <Link className="inline-flex items-center gap-2 text-body-sm text-text-secondary hover:text-brand-primary transition-colors" href="/businesses">
      <ArrowRight className="h-4 w-4 rotate-180" />
      Browse Businesses
    </Link>
  )
}

// ===== Step 1: Business Info =====
function BusinessInfoStep() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-brand-primary" />
          Business Information
        </CardTitle>
        <CardDescription>Basic details about your company</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FieldLabel label="Business Name" required />
            <Input placeholder="e.g., Global Steel Industries" required className="h-11" />
          </div>
          <div>
            <FieldLabel label="Business Type" required />
            <Select>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select Business Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Select Business Type</SelectItem>
                {businessTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <SelectItem key={type.value} value={type.value} className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-text-muted" />
                      {type.label}
                      <span className="ml-auto text-[10px] text-text-muted uppercase">{type.description}</span>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FieldLabel label="Year Established" />
            <Input type="number" placeholder="1995" min="1800" max={2026} className="h-11" />
          </div>
          <div>
            <FieldLabel label="Employee Range" />
            <Select>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select Employee Range" />
              </SelectTrigger>
              <SelectContent>
                {employeeRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <FieldLabel label="Website" />
          <Input type="url" placeholder="https://www.yourcompany.com" className="h-11" />
        </div>
      </CardContent>
    </Card>
  )
}

// ===== Step 2: Contact & Location =====
function ContactLocationStep() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-brand-primary" />
          Contact & Location
        </CardTitle>
        <CardDescription>How buyers can reach you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FieldLabel label="Email" required />
            <Input type="email" placeholder="contact@yourcompany.com" leftIcon={<Mail className="h-5 w-5" />} required className="h-11 pl-10" />
          </div>
          <div>
            <FieldLabel label="Phone" required />
            <Input type="tel" placeholder="+91 22 4000 1234" leftIcon={<Phone className="h-5 w-5" />} required className="h-11 pl-10" />
          </div>
        </div>
        <div>
          <FieldLabel label="WhatsApp Business (Optional)" />
          <Input type="tel" placeholder="+91 98765 43210" leftIcon={<Phone className="h-5 w-5" />} className="h-11 pl-10" />
        </div>
        <div>
          <FieldLabel label="Country" required />
          <Select>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>{country.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <FieldLabel label="Full Address" required />
          <Input placeholder="City, State, Postal Code, Full Address" leftIcon={<MapPin className="h-5 w-5" />} required className="h-11 pl-10" />
        </div>
      </CardContent>
    </Card>
  )
}

// ===== Step 3: Media & Documents =====
function MediaDocumentsStep() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5 text-brand-primary" />
          Media & Documents
        </CardTitle>
        <CardDescription>Logo, banner & verification documents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <UploadTile label="Company Logo" hint="PNG/JPG, max 2MB, 1:1 ratio" />
          <UploadTile label="Banner Image" hint="PNG/JPG, max 5MB, 16:9 ratio" />
        </div>
        <div className="border-t border-surface-border pt-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-body font-medium text-text-primary">Verification Documents (Optional)</h4>
              <p className="text-body-sm text-text-secondary">Upload documents to get verified and build buyer trust.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Business Registration', 'GST Certificate', 'PAN Card', 'IEC Certificate', 'ISO Certificate', 'Other'].map((doc) => (
              <label key={doc} className="flex items-center gap-3 p-3 rounded-lg border border-surface-border hover:border-brand-primary/50 transition-colors cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-brand-primary border-surface-border rounded focus:ring-brand-primary peer" />
                <span className="text-body-sm text-text-primary peer-checked:text-brand-primary peer-checked:font-medium">{doc}</span>
              </label>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function UploadTile({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="border-2 border-dashed border-surface-border rounded-2xl p-6 text-center hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-colors group">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
        <ImageIcon className="h-5 w-5" />
      </div>
      <p className="text-body-sm font-medium text-text-primary mb-1">{label}</p>
      <p className="text-caption text-text-muted">{hint}</p>
    </div>
  )
}

// ===== Step 4: Review & Submit =====
function ReviewSubmitStep() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-brand-primary" />
          Review & Submit
        </CardTitle>
        <CardDescription>Finalize your listing before publishing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ReviewRow label="Business Name" value="Global Steel Industries" icon={Building2} />
        <ReviewRow label="Business Type" value="Manufacturer" icon={Factory} />
        <ReviewRow label="Country" value="🇮🇳 India" icon={Globe} />
        <ReviewRow label="Email" value="contact@yourcompany.com" icon={Mail} />
        <ReviewRow label="Phone" value="+91 22 4000 1234" icon={Phone} />
        <div className="pt-4 border-t border-surface-border">
          <p className="text-body-sm text-text-secondary">
            By publishing, you agree to our <Link href="/listing-policy" className="text-brand-primary hover:underline">Listing Policy</Link> and{' '}
            <Link href="/terms" className="text-brand-primary hover:underline">Terms of Service</Link>.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function ReviewRow({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 rounded-xl border border-surface-border hover:border-brand-primary/30 transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-body-sm text-text-secondary">{label}</p>
          <p className="text-body font-medium text-text-primary truncate max-w-xs">{value}</p>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-text-muted" />
    </div>
  )
}

// ===== Preview Sidebar =====
function BusinessPreviewCard() {
  return (
    <Card className="overflow-hidden shadow-xl shadow-black/10">
      <div className="relative h-48 bg-surface-border">
        <div className="absolute inset-0 bg-brand-primary/10 flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-text-muted" />
        </div>
        <div className="absolute -bottom-2 left-2 flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full shadow-lg shadow-black/20 border border-white/50">
          <span className="h-2 w-2 rounded-full bg-status-success" />
          <span className="text-[10px] font-medium text-brand-gold">Verified</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-body font-semibold text-text-primary truncate">Global Steel Industries</h3>
            <p className="text-caption text-text-secondary">Manufacturer • 🇮🇳 India</p>
          </div>
        </div>
        <p className="text-body-sm text-text-secondary leading-relaxed mb-4">
          Leading manufacturer of stainless steel products for construction and industrial applications.
        </p>
        <div className="space-y-2">
          <PreviewMeta icon={Mail} label="contact@yourcompany.com" />
          <PreviewMeta icon={Phone} label="+91 22 4000 1234" />
          <PreviewMeta icon={MapPin} label="Mumbai, Maharashtra, India" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="gold" className="px-2 py-1 text-[10px]">Featured</Badge>
          <Badge variant="outline" className="px-2 py-1 text-[10px]">Premium Ready</Badge>
        </div>
      </div>
    </Card>
  )
}

function PreviewMeta({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 text-text-muted" />
      <span className="text-body-sm text-text-secondary truncate">{label}</span>
    </div>
  )
}

function BenefitsCard() {
  return (
    <Card className="bg-gradient-to-b from-brand-navy via-brand-primary to-brand-secondary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative p-6">
        <h3 className="text-heading-sm font-bold mb-4 flex items-center gap-2">
          <Users className="h-4 w-4 text-brand-gold" />
          Why List on Konnekt Globe?
        </h3>
        <ul className="space-y-3">
          {[
            '500,000+ monthly visitors from 195+ countries',
            'Free basic listing - no credit card required',
            'Direct enquiries from verified buyers',
            'Showcase products with detailed specifications',
            'Get verified to build trust and credibility',
          ].map((benefit, i) => (
            <li key={i} className="flex items-start gap-2.5 text-white/90 text-body-sm">
              <CheckCircle className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

function PlansCard() {
  const plans = [
    { name: 'Free', price: '₹0', popular: false, features: ['Basic listing', '5 products', 'Basic analytics'] },
    { name: 'Premium', price: '₹2,999/mo', popular: true, features: ['Featured placement', '50 products', 'Advanced analytics', 'Verified badge'] },
    { name: 'Enterprise', price: 'Custom', popular: false, features: ['Unlimited products', 'Dedicated manager', 'API access'] },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Premium Plans</CardTitle>
        <CardDescription>Upgrade for more visibility</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-0 pb-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'p-4 rounded-xl border transition-all duration-300 cursor-pointer',
              plan.popular
                ? 'border-brand-gold bg-brand-gold/5 ring-1 ring-brand-gold/20'
                : 'border-surface-border hover:border-brand-primary/50',
            )}
          >
            <div className="flex items-baseline justify-between gap-3 mb-3">
              <h4 className={cn('text-heading-sm font-semibold text-text-primary', plan.popular && 'text-brand-gold')}>
                {plan.name}
              </h4>
              {plan.popular && (
                <Badge variant="gold" className="text-[10px] shrink-0">Popular</Badge>
              )}
            </div>
            <p className="text-display-sm font-bold text-text-primary">{plan.price}</p>
            <ul className="mt-3 space-y-1.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs text-text-secondary">
                  <CheckCircle className="h-3 w-3 text-status-success shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Button className="w-full btn-gold px-6 py-3" variant="gold">
          View All Plans
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
