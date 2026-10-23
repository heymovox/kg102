import { Metadata } from 'next'
import CompanyClient from './CompanyClient'

export const metadata: Metadata = {
  title: 'Global Steel Industries | Konnekt Globe',
  description: 'Leading stainless steel manufacturer for construction & industrial applications. Verified Manufacturer based in Mumbai, Maharashtra, India.',
}

export function generateStaticParams() {
  return [{ slug: 'global-steel-industries' }]
}

export default function CompanyPage() {
  return <CompanyClient />
}
