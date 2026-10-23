import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Mail, Phone, MapPin, Globe, Clock, Shield, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Konnekt Globe',
  description: 'Get in touch with Konnekt Globe — support, sales, partnerships, and media inquiries.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'General Support',
    label: 'support@konnektglobe.com',
    href: 'mailto:support@konnektglobe.com',
    desc: 'General inquiries & account help',
  },
  {
    icon: Phone,
    title: 'Sales & Pricing',
    label: '+91 80000 00000',
    href: 'tel:+918000000000',
    desc: 'Listing plans & premium upgrade',
  },
  {
    icon: MapPin,
    title: 'Office',
    label: 'Mumbai, Maharashtra, India',
    href: '#',
    desc: 'Global operations HQ',
  },
  {
    icon: Clock,
    title: 'Hours',
    label: 'Mon – Sat, 10:00 AM – 7:00 PM IST',
    href: '#',
    desc: 'Business days only',
  },
]

const faqs = [
  {
    q: 'Is listing on Konnekt Globe free?',
    a: 'Yes, basic business listings are free. Premium plans offer featured placement and advanced analytics.',
  },
  {
    q: 'How long does verification take?',
    a: 'Standard verification is completed within 2-3 business days once documents are submitted.',
  },
  {
    q: 'Can I post a buying requirement?',
    a: 'Yes, buyers can post requirements and receive quotes from verified suppliers at no cost.',
  },
  {
    q: 'Which countries are supported?',
    a: 'We operate in 195+ countries with multi-currency support (INR, USD, EUR, GBP).',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      {/* Header */}
      <section className="border-b border-surface-border bg-surface-main">
        <div className="container-page py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-display-sm lg:text-display-xl font-bold text-brand-navy mb-6 leading-[1.15]">
              Contact Konnekt Globe
            </h1>
            <p className="text-body-lg text-text-secondary max-w-lg mx-auto">
              Have a question about listings, verification, or premium plans? Reach out to our team — we respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 space-y-8">
              <Card className="overflow-hidden shadow-sm border-surface-border">
                <CardHeader className="pb-5">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <CardTitle className="text-heading-sm font-bold text-brand-navy">
                      Send us a Message
                    </CardTitle>
                    <span className="ml-auto badge-primary px-2 py-0.5 text-[10px] font-medium uppercase">24-48 hrs response</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <form className="p-6 space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="label">Full Name <span className="text-status-error">*</span></label>
                        <Input placeholder="John Doe" required className="h-11" />
                      </div>
                      <div>
                        <label className="label">Email Address <span className="text-status-error">*</span></label>
                        <Input type="email" placeholder="john@company.com" required leftIcon={<Mail className="h-5 w-5" />} className="h-11 pl-10" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="label">Company / Organization <span className="text-status-error">*</span></label>
                        <Input placeholder="ABC Corporation" required className="h-11" />
                      </div>
                      <div>
                        <label className="label">Phone Number <span className="text-status-error">*</span></label>
                        <Input type="tel" placeholder="+91 98765 43210" required leftIcon={<Phone className="h-5 w-5" />} className="h-11 pl-10" />
                      </div>
                    </div>
                    <div>
                      <label className="label">Subject <span className="text-status-error">*</span></label>
                      <Select>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">General Support</SelectItem>
                          <SelectItem value="sales">Sales & Pricing</SelectItem>
                          <SelectItem value="partnership">Partnerships</SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="label">Message <span className="text-status-error">*</span></label>
                      <Textarea placeholder="How can we help you? Please include details about your inquiry..." rows={5} required className="h-48" />
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1 w-4 h-4 text-brand-primary border-surface-border rounded focus:ring-brand-primary"
                      />
                      <label htmlFor="terms" className="text-body-sm text-text-secondary leading-relaxed">
                        I agree to the <Link href="/terms" className="text-brand-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-brand-primary hover:underline">Privacy Policy</Link>. I consent to share my details with relevant suppliers.
                      </label>
                    </div>
                    <Button type="submit" className="w-full btn-gold-lg">
                      Send Message
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <Card className="relative overflow-hidden shadow-lg shadow-brand-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-primary/90 to-brand-secondary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent opacity-60" aria-hidden="true" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" aria-hidden="true" />
                <div className="relative z-10 p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-5 w-5 text-brand-gold" />
                    <h3 className="text-heading-sm font-bold text-white">Visit Our Office</h3>
                  </div>
                  <p className="text-body-sm text-white/80 leading-relaxed mb-6">
                    Konnekt Globe Headquarters<br />
                    Mumbai, Maharashtra, India<br />
                    Global Operations & Support Center
                  </p>
                  <div className="space-y-4">
                    {contactMethods.map((m) => {
                      const Icon = m.icon
                      return (
                        <div key={m.title} className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand-gold shadow-lg shadow-black/10">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-body-sm font-semibold text-white">{m.title}</p>
                            <p className="text-body-sm text-white/70">{m.desc}</p>
                            {m.href && m.href !== '#' ? (
                              <a href={m.href} className="text-body-sm text-brand-gold hover:text-white transition-colors underline underline-offset-4">
                                {m.label}
                              </a>
                            ) : (
                              <p className="text-body-sm text-white/70">{m.label}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden shadow-sm border-surface-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-brand-primary" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="space-y-0">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border-b border-surface-border/50 pb-5 last:border-0 last:pb-0">
                        <button className="w-full text-left flex items-center justify-between text-body font-semibold text-text-primary hover:text-brand-primary transition-colors">
                          {faq.q}
                        </button>
                        <p className="text-body-sm text-text-secondary mt-2">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden shadow-sm border-surface-border">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-primary to-brand-secondary" />
                <div className="relative z-10 p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4 text-brand-gold" />
                    <h3 className="text-heading-sm font-bold text-white">Join 500,000+ businesses</h3>
                  </div>
                  <p className="text-body-sm text-white/80 mb-6">
                    Connect with verified suppliers and buyers worldwide. Start your free listing today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/add-business" className="flex-1 btn btn-gold-lg whitespace-nowrap text-center">
                      List Your Business
                    </Link>
                    <Link href="/post-requirement" className="flex-1 btn border-2 border-white/25 bg-white/5 text-white hover:bg-white/10 whitespace-nowrap text-center">
                      Post Requirement
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-t border-surface-border bg-white/50 py-12 lg:py-16">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-heading-xl font-bold text-brand-navy">Trusted by businesses worldwide</h2>
              <p className="text-body text-text-secondary">Join our growing community of verified buyers and suppliers.</p>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex h-10 items-center justify-center rounded-full border border-surface-border bg-white px-4 shadow-sm">
                  <span className="text-body-sm text-text-muted font-medium">Partner {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
