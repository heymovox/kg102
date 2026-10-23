import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  Globe,
  Users,
  Award,
  Shield,
  ArrowRight,
  Building2,
  Mail,
  Truck,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard | Konnekt Globe',
  description: 'Manage your business listings, enquiries, and profile on Konnekt Globe.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-white">
        <div className="container-page py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
                <Globe className="h-4 w-4" />
              </div>
              <span className="text-heading-sm font-bold text-brand-navy">Konnekt Globe</span>
            </div>
            <div className="flex gap-3">
              <Link href="/add-business" className="btn btn-gold-lg whitespace-nowrap">
                List Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/post-requirement" className="btn border-2 border-brand-primary/40 bg-white text-brand-navy hover:bg-brand-primary hover:text-white whitespace-nowrap">
                Post Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 space-y-6 shrink-0">
              <Card className="p-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-body font-semibold text-text-primary">Business Owner</p>
                    <p className="text-body-sm text-text-secondary">profile@konnektglobe.com</p>
                  </div>
                </div>
                <nav className="space-y-2">
                  {[
                    { name: 'Dashboard', href: '/dashboard', icon: Globe },
                    { name: 'My Listings', href: '/dashboard/listings', icon: Building2 },
                    { name: 'Enquiries', href: '/dashboard/enquiries', icon: Mail },
                    { name: 'Orders', href: '/dashboard/orders', icon: Truck },
                    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
                    { name: 'Profile', href: '/dashboard/profile', icon: Users },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-colors"
                      >
                        <Icon className="h-4 w-4 text-text-muted" />
                        <span className="text-body-sm text-text-secondary hover:text-brand-primary transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    )
                  })}
                </nav>
              </Card>
            </aside>

            <main className="flex-1 space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                <StatCard title="Total Listings" value="12" icon={Building2} change="+2 this month" />
                <StatCard title="Enquiries Received" value="34" icon={Mail} change="+12 this week" />
                <StatCard title="Quote Response Rate" value="94%" icon={Shield} change="+5% vs last month" />
              </div>

              <Card className="overflow-hidden shadow-sm border-surface-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-brand-gold" />
                    Recent Enquiries
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-0">
                  <div className="divide-y divide-surface-border">
                    {[
                      { buyer: 'ABC Manufacturing', product: 'Stainless Steel 304 Sheets', qty: '500 kg', date: '2 hours ago', status: 'New' },
                      { buyer: 'Global Exports Ltd', product: 'Industrial LED Lighting', qty: '2000 units', date: '5 hours ago', status: 'Quoted' },
                      { buyer: 'BuildRight Construction', product: 'CNC Milling Machine', qty: '2 units', date: '1 day ago', status: 'Pending' },
                    ].map((e, i) => (
                      <div key={i} className="p-4 last:pb-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-body font-medium text-text-primary">{e.buyer}</p>
                            <p className="text-body-sm text-text-secondary">{e.product} • {e.qty}</p>
                          </div>
                          <Badge variant={e.status === 'New' ? 'gold' : 'secondary'} className="text-[10px]">
                            {e.status}
                          </Badge>
                        </div>
                        <p className="text-[11px] text-text-muted">{e.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatCard({ title, value, icon: Icon, change }: { title: string; value: string; icon: LucideIcon; change: string }) {
  return (
    <Card className="p-5 border-surface-border shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-body-sm text-text-secondary">{title}</p>
          <p className="text-heading-sm font-bold text-brand-navy">{value}</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-3 text-[10px] font-medium text-status-success">{change}</p>
    </Card>
  )
}
