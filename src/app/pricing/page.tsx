import { Metadata } from 'next'
import PricingClient from '@/components/PricingClient'

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Choose the right plan for your business on Konnekt Globe. Free basic listing with premium upgrades for more visibility and leads.',
}

export default function PricingPage() {
  return <PricingClient />
}