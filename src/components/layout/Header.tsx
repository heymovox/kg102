'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import {
  Menu, X, Globe, Building2, Package, Search, LogIn,
  Zap, UserPlus, ChevronDown, Factory, FlaskConical, Shirt, Car,
  Truck, Pill, LayoutGrid, ArrowRight, Rocket, Headphones, Coins,
} from 'lucide-react'

const navigation = [
  { name: 'Businesses', href: '/businesses', icon: Building2, badge: '500K+' },
  { name: 'Products', href: '/products', icon: Package, badge: '2M+' },
  { name: 'Countries', href: '/countries', icon: Globe, badge: '195+' },
]

const categories = [
  { slug: 'machinery-equipment', name: 'Machinery & Equipment', icon: Factory, count: 12500 },
  { slug: 'electronics-electrical', name: 'Electronics & Electrical', icon: Package, count: 8900 },
  { slug: 'chemicals-materials', name: 'Chemicals & Materials', icon: FlaskConical, count: 6400 },
  { slug: 'textiles-apparel', name: 'Textiles & Apparel', icon: Shirt, count: 9300 },
  { slug: 'food-beverages', name: 'Food & Beverages', icon: Car, count: 7200 },
  { slug: 'automotive-parts', name: 'Automotive & Parts', icon: Truck, count: 5800 },
  { slug: 'construction-building', name: 'Construction & Building', icon: Building2, count: 6700 },
  { slug: 'pharmaceuticals', name: 'Pharmaceuticals', icon: Pill, count: 4100 },
]

const searchSuggestions = [
  'Stainless Steel 304', 'Industrial CNC Machine', 'LED Panel Lights',
  'Organic Fertilizer', 'Pharmaceutical API', 'Cotton Yarn 40s',
]

function Topbar() {
  return (
    <div className="bg-brand-navy text-white/75">
      <div className="container-page flex h-9 items-center justify-between text-caption">
        <p className="flex items-center gap-2 truncate">
          <Zap className="h-3.5 w-3.5 shrink-0 text-brand-gold" aria-hidden="true" />
          <span className="truncate">Trusted by 500,000+ verified businesses across 195+ countries</span>
        </p>
        <nav className="hidden shrink-0 items-center gap-5 sm:flex" aria-label="Quick links">
          <Link href="/post-requirement" className="flex items-center gap-1.5 transition-colors hover:text-brand-gold">
            <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
            Post a Requirement
          </Link>
          <Link href="/pricing" className="flex items-center gap-1.5 transition-colors hover:text-brand-gold">
            <Coins className="h-3.5 w-3.5" aria-hidden="true" />
            Pricing
          </Link>
          <Link href="/help" className="flex items-center gap-1.5 transition-colors hover:text-brand-gold">
            <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
            Help
          </Link>
        </nav>
      </div>
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [isCategoriesOpen, setIsCategoriesOpen] = React.useState(false)

  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const isMac = React.useSyncExternalStore(
    () => () => {},
    () => /mac|iphone|ipad/i.test(navigator.userAgent),
    () => true
  )

  // Close transient UI when the route changes (setState during render is the
  // React-sanctioned pattern here; an effect would cause an extra render).
  const [prevPathname, setPrevPathname] = React.useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setIsSearchOpen(false)
    setIsMobileMenuOpen(false)
    setIsCategoriesOpen(false)
  }

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setIsMobileMenuOpen(false)
        setIsCategoriesOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const goToSearch = (query: string) => {
    setIsSearchOpen(false)
    setIsMobileMenuOpen(false)
    router.push(`/search?q=${encodeURIComponent(query.trim() || 'all')}`)
  }

  const openCategories = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsCategoriesOpen(true)
  }

  const scheduleCloseCategories = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setIsCategoriesOpen(false), 120)
  }

  const isCategoriesActive = pathname.startsWith('/categories')
  const isBusinessesActive = pathname.startsWith('/businesses')

  return (
    <div className="sticky top-0 z-50">
      <Topbar />

      {/* Main Header */}
      <header
        className={cn(
          'relative transition-all duration-300',
          isScrolled
            ? 'bg-surface-main/98 backdrop-blur-md border-b border-surface-border shadow-sm'
            : 'bg-surface-main border-b border-surface-border'
        )}
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between gap-2">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Konnekt Globe Home"
            >
              <Image
                src="/logo-dark.png"
                alt="Konnekt Globe"
                width={950}
                height={391}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center" role="navigation" aria-label="Main navigation">
              {/* Categories dropdown */}
              {/* modal={false}: a modal menu locks body pointer-events on open,
                  so a cursor resting on the trigger fires phantom mouseleave /
                  mouseenter events — an endless open/close flicker loop. */}
              <DropdownMenu.Root
                open={isCategoriesOpen}
                onOpenChange={setIsCategoriesOpen}
                modal={false}
              >
                <DropdownMenu.Trigger asChild>
                  <button
                    onMouseEnter={openCategories}
                    onMouseLeave={scheduleCloseCategories}
                    className={cn(
                      'relative flex items-center gap-1.5 rounded-xl px-3 py-2 text-body-sm font-medium transition-all duration-200 whitespace-nowrap',
                      isCategoriesOpen || isCategoriesActive
                        ? 'bg-brand-primary/10 text-brand-primary shadow-sm'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
                    )}
                    aria-current={isCategoriesActive ? 'page' : undefined}
                  >
                    <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                    <span>Categories</span>
                    <ChevronDown
                      className={cn('h-3.5 w-3.5 transition-transform duration-200', isCategoriesOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                    {(isCategoriesOpen || isCategoriesActive) && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-brand-gold" />
                    )}
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    sideOffset={12}
                    align="start"
                    onMouseEnter={openCategories}
                    onMouseLeave={scheduleCloseCategories}
                    className="z-[60] w-[34rem] max-w-[calc(100vw-2rem)] animate-scale-in rounded-2xl border border-surface-border bg-surface-main p-3 shadow-elevated"
                  >
                    <p className="px-2 pb-2 text-caption font-medium text-text-muted">Browse by industry</p>
                    <div className="grid grid-cols-2 gap-1">
                      {categories.map((cat) => {
                        const Icon = cat.icon
                        return (
                          <DropdownMenu.Item key={cat.slug} asChild>
                            <Link
                              href={`/businesses/${cat.slug}`}
                              className="flex cursor-pointer items-center gap-3 rounded-xl p-2.5 text-body-sm text-text-secondary outline-none transition-colors hover:bg-brand-primary/10 hover:text-brand-primary focus:bg-brand-primary/10 focus:text-brand-primary"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                              </span>
                              <span className="min-w-0">
                                <span className="block truncate font-medium text-text-primary">{cat.name}</span>
                                <span className="block text-caption text-text-muted">{cat.count.toLocaleString()}+ businesses</span>
                              </span>
                            </Link>
                          </DropdownMenu.Item>
                        )
                      })}
                    </div>
                    <DropdownMenu.Separator className="my-2 h-px bg-surface-border" />
                    <DropdownMenu.Item asChild>
                      <Link
                        href="/categories"
                        className="flex cursor-pointer items-center justify-between rounded-xl p-2.5 text-body-sm font-medium text-brand-primary outline-none transition-colors hover:bg-brand-primary/10 focus:bg-brand-primary/10"
                      >
                        View all categories
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = item.href === '/businesses' ? isBusinessesActive : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setIsCategoriesOpen(false)}
                    className={cn(
                      'relative flex items-center gap-1.5 rounded-xl px-3 py-2 text-body-sm font-medium transition-all duration-200 whitespace-nowrap',
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary shadow-sm'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className={cn('hidden xl:block h-4 w-4 transition-transform', isActive && 'scale-110')} aria-hidden="true" />
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-brand-gold" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Search & Actions */}
            <div className="hidden lg:flex lg:items-center lg:gap-1.5">
              <div className="relative" data-search>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={cn(
                    'flex items-center gap-2 rounded-xl px-4 py-2.5 text-text-secondary transition-all duration-200 hover:bg-surface-light hover:text-text-primary',
                    isSearchOpen && 'bg-brand-primary/10 text-brand-primary shadow-lg'
                  )}
                  aria-label="Search"
                  aria-expanded={isSearchOpen}
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden 2xl:inline">Search</span>
                  <kbd className="hidden rounded-md border border-surface-border bg-surface-light px-1.5 py-0.5 text-[10px] font-medium text-text-muted 2xl:inline">
                    {isMac ? '⌘' : 'Ctrl'} K
                  </kbd>
                </button>

                {isSearchOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSearchOpen(false)} aria-hidden="true" />
                    <div className="absolute right-0 top-full z-50 mt-2 w-80 animate-scale-in md:w-96">
                      <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface-main shadow-elevated">
                        <div className="p-3">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                            <input
                              type="search"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') goToSearch(searchQuery)
                              }}
                              placeholder="Search products, companies, categories..."
                              className="w-full rounded-xl border border-surface-border bg-surface-light py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                              autoFocus
                            />
                          </div>
                        </div>
                        <div className="border-t border-surface-border p-3">
                          <p className="mb-2 px-2 text-caption font-medium text-text-muted">Popular searches</p>
                          <div className="flex flex-wrap gap-2">
                            {searchSuggestions.map((suggestion) => (
                              <button
                                key={suggestion}
                                onClick={() => goToSearch(suggestion)}
                                className="rounded-lg bg-surface-light px-3 py-1.5 text-body-sm text-text-secondary transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-surface-border p-3">
                          <Button
                            variant="gold"
                            size="sm"
                            className="w-full"
                            onClick={() => goToSearch(searchQuery)}
                          >
                            <Search className="h-4 w-4" />
                            View All Results
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Auth & CTA */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <Link
                href="/login"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:bg-surface-light hover:text-brand-primary"
              >
                <LogIn className="hidden xl:block h-4 w-4" aria-hidden="true" />
                Login
              </Link>
              <Link
                href="/register"
                className="btn-gold flex items-center gap-1.5 rounded-xl px-4 py-2 text-body-sm font-medium text-white"
              >
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                Sign Up
              </Link>
              <Link
                href="/add-business"
                className="hidden items-center gap-1.5 rounded-xl border-2 border-brand-gold px-4 py-1.5 text-body-sm font-medium text-brand-gold-hover transition-colors hover:bg-brand-gold hover:text-white xl:flex"
              >
                <Building2 className="h-4 w-4" aria-hidden="true" />
                List Your Business
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex shrink-0 items-center gap-1 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="btn-ghost p-2"
                aria-label="Search"
                aria-expanded={isSearchOpen}
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn-ghost p-2"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="animate-slide-down border-t border-surface-border py-4 lg:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') goToSearch(searchQuery)
                  }}
                  placeholder="Search products, companies, categories..."
                  className="w-full rounded-xl border border-surface-border bg-surface-light py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  autoFocus
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {searchSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => goToSearch(suggestion)}
                    className="rounded-lg bg-surface-light px-3 py-1.5 text-body-sm text-text-secondary transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <Button variant="gold" size="sm" className="mt-3 w-full" onClick={() => goToSearch(searchQuery)}>
                <Search className="h-4 w-4" />
                View All Results
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={cn(
              'overflow-hidden transition-all duration-300 lg:hidden',
              isMobileMenuOpen ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'
            )}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 border-t border-surface-border py-4">
              <Link
                href="/categories"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-colors',
                  isCategoriesActive ? 'bg-brand-primary/10 text-brand-primary' : 'text-text-secondary hover:bg-surface-light hover:text-text-primary'
                )}
              >
                <LayoutGrid className="h-5 w-5" aria-hidden="true" />
                <span className="text-body">Categories</span>
                <Badge variant="gold" className="ml-auto text-[10px]">500+</Badge>
              </Link>
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = item.href === '/businesses' ? isBusinessesActive : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-colors',
                      isActive ? 'bg-brand-primary/10 text-brand-primary' : 'text-text-secondary hover:bg-surface-light hover:text-text-primary'
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="text-body">{item.name}</span>
                    <Badge variant="gold" className="ml-auto text-[10px]">{item.badge}</Badge>
                  </Link>
                )
              })}

              <div className="my-2 h-px bg-surface-border" />

              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-body font-medium text-text-secondary transition-colors hover:bg-surface-light hover:text-text-primary"
              >
                <LogIn className="h-5 w-5" aria-hidden="true" />
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gold mt-2 flex items-center justify-center gap-2 rounded-xl py-3 text-body font-medium text-white"
              >
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                Sign Up
              </Link>
              <Link
                href="/add-business"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border-2 border-brand-gold py-2.5 text-body font-medium text-brand-gold-hover transition-colors hover:bg-brand-gold hover:text-white"
              >
                <Building2 className="h-4 w-4" aria-hidden="true" />
                List Your Business
              </Link>

              <div className="mt-3 flex items-center justify-center gap-4 px-4 text-caption text-text-muted">
                <Link href="/post-requirement" className="transition-colors hover:text-brand-primary">Post a Requirement</Link>
                <Link href="/pricing" className="transition-colors hover:text-brand-primary">Pricing</Link>
                <Link href="/help" className="transition-colors hover:text-brand-primary">Help</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
