'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { CheckCircle, ArrowRight, ChevronDown, Star } from 'lucide-react'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="border border-surface-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className="text-body-sm sm:text-body font-medium text-text-primary pr-4">{question}</span>
        <ChevronDown className={cn('h-4 sm:h-5 w-4 sm:w-5 text-text-muted transition-transform', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-body-sm sm:text-body text-text-secondary">{answer}</div>
      </div>
    </div>
  )
}

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <Card
      className={cn(
        'relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/5',
        plan.popular
          ? 'border-2 border-brand-gold bg-brand-gold/5 ring-1 ring-brand-gold/20 scale-105 z-10'
          : 'border border-surface-border hover:border-brand-primary/40',
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <Badge variant="gold" className="px-3 py-1 text-caption uppercase tracking-wider">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="text-center pb-4 pt-5">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${plan.popular ? 'bg-brand-gold text-brand-navy' : 'bg-brand-primary/10 text-brand-primary'}`}>
            {plan.name}
          </span>
        </div>
        <div className="flex items-baseline justify-center gap-1 mt-3">
          <span className="text-display-sm sm:text-display-md font-bold text-text-primary">{plan.price}</span>
          {plan.period && <span className="text-body-sm text-text-secondary">{plan.period}</span>}
        </div>
        <p className="text-body-sm sm:text-body text-text-secondary mt-2 max-w-md mx-auto">{plan.description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-5 sm:p-6">
        <ul className="space-y-2.5 mb-6 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-body-sm text-text-secondary">
              <CheckCircle
                className={cn(
                  'h-4 w-4 shrink-0 mt-0.5',
                  plan.color === 'gold' ? 'text-brand-gold' : plan.color === 'primary' ? 'text-brand-primary' : 'text-status-success',
                )}
              />
              <span className="leading-none">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button
            className="w-full"
            variant={plan.color === 'gold' ? 'gold' : plan.color === 'primary' ? 'primary' : 'outline'}
            size="md"
          >
            {plan.cta}
            {plan.cta !== 'Contact Sales' && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function AddOnCard({ addOn }: { addOn: typeof addOns[0] }) {
  return (
    <Card className="border border-surface-border hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-body font-semibold text-text-primary">{addOn.name}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-body font-bold text-text-primary">{addOn.price}</span>
            {addOn.period && <span className="text-body-sm text-text-secondary">{addOn.period}</span>}
          </div>
        </div>
        <p className="text-body-sm text-text-secondary mt-1">{addOn.description}</p>
      </CardHeader>
      <CardContent className="p-4 sm:p-5">
        <ul className="space-y-2">
          {addOn.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-body-sm text-text-secondary">
              <CheckCircle className="h-3.5 w-3.5 text-status-success" />
              <span className="leading-none">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Button variant="outline" className="w-full text-xs sm:text-body-sm px-3 sm:px-4 py-2 sm:py-2.5">
            Add to Plan
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    description: 'Perfect for getting started and testing the platform',
    features: [
      'Basic business listing',
      'Up to 5 products/services',
      'Basic profile analytics',
      'Receive enquiries',
      'Standard support (email)',
      'Mobile-responsive profile',
      'Basic SEO optimization',
    ],
    cta: 'Start Free',
    popular: false,
    color: 'secondary',
  },
  {
    name: 'Premium',
    price: '₹2,999',
    period: '/month',
    description: 'For growing businesses wanting more visibility and leads',
    features: [
      'Everything in Free, plus:',
      'Featured placement in search results',
      'Up to 50 products/services',
      'Advanced analytics dashboard',
      'Priority enquiry routing',
      'Verified badge display',
      'Multi-country visibility',
      'Priority support (email + chat)',
      'Custom URL for your profile',
      'Enhanced SEO & schema markup',
      'Lead notifications via WhatsApp',
      'Competitor insights',
    ],
    cta: 'Get Premium',
    popular: true,
    color: 'gold',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with advanced requirements',
    features: [
      'Everything in Premium, plus:',
      'Unlimited products/services',
      'Dedicated account manager',
      'API access for integrations',
      'Custom workflow automation',
      'White-label options',
      'Advanced reporting & BI',
      'Team collaboration tools',
      'Custom contract terms',
      'SLA guarantee (99.9% uptime)',
      'Onboarding & training sessions',
      'Quarterly business reviews',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'primary',
  },
]

const addOns = [
  {
    name: 'Verified Business',
    price: '₹9,999',
    period: '/year',
    description: 'Complete business verification with document validation',
    features: ['Identity verification', 'Document validation', 'Verified badge', 'Trust seal for website', 'Priority support'],
  },
  {
    name: 'Sponsored Placement',
    price: '₹15,000',
    period: '/month',
    description: 'Top placement in category and search results',
    features: ['Top 3 position', 'Category sponsorship', 'Homepage feature', 'Performance tracking', 'Flexible duration'],
  },
  {
    name: 'Featured Products',
    price: '₹4,999',
    period: '/month',
    description: 'Showcase up to 10 products on homepage and category pages',
    features: ['Homepage carousel', 'Category page top', 'Enhanced product cards', 'Click tracking', 'Monthly reporting'],
  },
]

const faqs = [
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle. No penalties or hidden fees.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex), UPI, Net Banking, and bank transfers for annual Enterprise plans. All payments are processed securely through our payment partners.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'Free and Premium plans are month-to-month with no long-term commitment. Enterprise plans typically require an annual contract but we offer flexibility based on your needs.',
  },
  {
    question: 'What happens when I exceed my product limit?',
    answer: "You'll receive a notification when you reach 80% of your limit. You can upgrade your plan or remove older listings to stay within limits. We never delete your data without notice.",
  },
  {
    question: 'How does the Verified Business add-on work?',
    answer: 'Our verification team reviews your business registration documents, GST certificate, and other credentials. Once approved, you get a Verified badge on your profile, a trust seal for your website, and priority placement in search results.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel anytime from your dashboard. Your plan remains active until the end of the current billing period. No refunds for partial months, but you can continue using premium features until the period ends.',
  },
]

export default function PricingClient() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge variant="gold" className="mb-4">
          Transparent Pricing
        </Badge>
        <h1 className="text-display-sm sm:text-display-md font-bold text-brand-navy mb-4 leading-[1.15]">
          Choose Your Plan
        </h1>
        <p className="text-body-lg text-text-secondary">
          Start with a free listing and upgrade as your business grows. No hidden fees.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <p className="text-body-sm text-text-secondary mb-4">All prices in INR. GST extra as applicable.</p>
        <Link href="/contact" className="text-brand-primary hover:text-brand-secondary underline-offset-2 hover:underline font-medium text-body-sm">
          Need a custom quote? Contact our sales team
        </Link>
      </div>

      {/* Add-Ons */}
      <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-surface-border">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-heading-lg sm:text-display-sm font-bold text-text-primary mb-3">
            Add-Ons to Boost Your Visibility
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Enhance your listing with targeted add-ons. Can be added to any plan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {addOns.map((addOn) => (
            <AddOnCard key={addOn.name} addOn={addOn} />
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-surface-border max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-heading-lg sm:text-display-sm font-bold text-text-primary mb-3">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* CTA section */}
      <section className="mt-14 sm:mt-20">
        <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-white p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-primary to-brand-secondary" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent opacity-80" aria-hidden="true" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" aria-hidden="true" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-gold mb-5">
              <span className="flex items-center gap-1 text-brand-gold">
                <Star className="h-3 w-3" aria-hidden="true" />
                Get Started
              </span>
            </div>
            <h2 className="text-heading-lg sm:text-display-sm font-bold mb-4 leading-[1.15]">
              Ready to Grow Your{' '}
              <span className="text-gradient-gold">Business?</span>
            </h2>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10">
              Join 500,000+ businesses already connecting on Konnekt Globe. Start your free listing today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/add-business" className="btn-gold-lg whitespace-nowrap">
                List Your Business Free
                <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
              </Link>
              <Link href="/contact" className="btn border-2 border-white/25 bg-white/5 text-white hover:bg-white/10 whitespace-nowrap text-base sm:text-body-lg px-6 sm:px-8 py-3 sm:py-4">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
