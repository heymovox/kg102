import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Globe, Users, Shield, Award, ArrowRight, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Konnekt Globe',
  description: 'Admin panel for managing listings, users, and verification on Konnekt Globe.',
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-surface-main">
      <section className="border-b border-surface-border bg-white">
        <div className="container-page py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-white">
                <Shield className="h-4 w-4" />
              </div>
              <span className="text-heading-sm font-bold text-brand-navy">Admin Console</span>
            </div>
            <div className="flex gap-3">
              <Link href="/dashboard" className="btn btn-outline whitespace-nowrap">Back to Dashboard</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-heading-xl font-bold text-brand-navy mb-8">Admin Overview</h2>
          <p className="text-body text-text-secondary mb-8">
            Admin features are being configured. Manage verified listings, user accounts, and content moderation from here.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <AdminCard
              title="Pending Verifications"
              value="24"
              icon={Shield}
              desc="Listings awaiting document review"
              href="/dashboard/verifications"
            />
            <AdminCard
              title="Active Listings"
              value="12,450"
              icon={Building2}
              desc="Live business and product listings"
              href="/dashboard/listings"
            />
            <AdminCard
              title="Total Users"
              value="500K+"
              icon={Users}
              desc="Registered buyers and suppliers"
              href="/dashboard/users"
            />
          </div>

          <Card className="mt-8 overflow-hidden shadow-sm border-surface-border">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-surface-border">
                {[
                  { actor: 'Global Steel Industries', action: 'submitted verification documents', time: '10 min ago' },
                  { actor: 'TechnoPower Electronics', action: 'updated product catalog', time: '45 min ago' },
                  { actor: 'New buyer account', action: 'registered from United States', time: '2 hours ago' },
                  { actor: 'PharmaPure API', action: 'premium plan activated', time: '5 hours ago' },
                ].map((item, i) => (
                  <div key={i} className="p-4 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm font-medium text-text-primary">{item.actor}</p>
                        <p className="text-body-sm text-text-secondary">{item.action}</p>
                      </div>
                      <span className="text-[11px] text-text-muted">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

function AdminCard({ title, value, icon: Icon, desc, href }: { title: string; value: string; icon: LucideIcon; desc: string; href: string }) {
  return (
    <Card className="p-5 border-surface-border shadow-sm hover:border-brand-primary/40 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-body-sm text-text-secondary">{title}</p>
          <p className="text-heading-sm font-bold text-brand-navy">{value}</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
      <p className="text-body-sm text-text-secondary">{desc}</p>
      <Link href={href} className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-primary hover:underline uppercase tracking-wider">
        Manage
        <ArrowRight className="h-3 w-3" />
      </Link>
    </Card>
  )
}
