'use client'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User, Globe, ShieldCheck, Building2, Sparkles, Rocket } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'registered',
    termsAccepted: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    else if (!/[A-Z]/.test(formData.password)) newErrors.password = 'Password must contain at least one uppercase letter'
    else if (!/[a-z]/.test(formData.password)) newErrors.password = 'Password must contain at least one lowercase letter'
    else if (!/[0-9]/.test(formData.password)) newErrors.password = 'Password must contain at least one number'
    else if (!/[^A-Za-z0-9]/.test(formData.password)) newErrors.password = 'Password must contain at least one special character'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      router.push('/login?registered=true')
      router.refresh()
    } catch {
      setErrors({ form: 'Registration failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const passwordToggle = (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-surface-light hover:text-text-primary"
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
    </button>
  )

  return (
    <div className="min-h-screen bg-surface-light lg:grid lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex min-h-screen flex-col px-6 py-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Konnekt Globe Home">
            <Image
              src="/logo-dark.png"
              alt="Konnekt Globe"
              width={950}
              height={391}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:bg-surface-main hover:text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to site
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-heading-lg font-bold text-text-primary">Create Your Account</h1>
              <p className="mt-2 text-body text-text-secondary">
                Join 500,000+ businesses connecting globally
              </p>
            </div>

            <Card>
              <CardHeader className="pb-4 text-center">
                <CardTitle>Register</CardTitle>
                <CardDescription>Enter your details to create an account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errors.form && (
                    <div className="p-3 rounded-lg bg-status-error/10 text-status-error text-body-sm" role="alert">
                      {errors.form}
                    </div>
                  )}

                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => validateForm()}
                    error={errors.name}
                    placeholder="John Doe"
                    autoComplete="name"
                    leftIcon={<User className="h-5 w-5" />}
                    disabled={isLoading}
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => validateForm()}
                    error={errors.email}
                    placeholder="you@company.com"
                    autoComplete="email"
                    leftIcon={<Mail className="h-5 w-5" />}
                    disabled={isLoading}
                  />

                  <Input
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onBlur={() => validateForm()}
                    error={errors.password}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    leftIcon={<Lock className="h-5 w-5" />}
                    rightAction={passwordToggle}
                    disabled={isLoading}
                  />

                  <Input
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    onBlur={() => validateForm()}
                    error={errors.confirmPassword}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    leftIcon={<Lock className="h-5 w-5" />}
                    rightAction={passwordToggle}
                    disabled={isLoading}
                  />

                  <div className="space-y-3">
                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-surface-border p-3 transition-colors hover:border-brand-primary/50">
                      <input
                        type="radio"
                        name="role"
                        value="registered"
                        checked={formData.role === 'registered'}
                        onChange={(e) => handleChange('role', e.target.value)}
                        className="mt-1 w-4 h-4 text-brand-primary border-surface-border focus:ring-brand-primary"
                      />
                      <div>
                        <p className="text-body font-medium text-text-primary">Buyer / Individual</p>
                        <p className="text-body-sm text-text-secondary">Browse products, post requirements, and connect with suppliers</p>
                      </div>
                    </label>
                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-surface-border p-3 transition-colors hover:border-brand-primary/50">
                      <input
                        type="radio"
                        name="role"
                        value="business_owner"
                        checked={formData.role === 'business_owner'}
                        onChange={(e) => handleChange('role', e.target.value)}
                        className="mt-1 w-4 h-4 text-brand-primary border-surface-border focus:ring-brand-primary"
                      />
                      <div>
                        <p className="text-body font-medium text-text-primary">Business Owner</p>
                        <p className="text-body-sm text-text-secondary">List your business, manage products, and receive enquiries</p>
                      </div>
                    </label>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => handleChange('termsAccepted', e.target.checked)}
                      className="mt-1 w-4 h-4 text-brand-primary border-surface-border focus:ring-brand-primary"
                    />
                    <div className="text-body-sm text-text-secondary">
                      I agree to the <Link href="/terms" className="text-brand-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-brand-primary hover:underline">Privacy Policy</Link>
                      {errors.termsAccepted && <span className="text-status-error ml-1">*</span>}
                    </div>
                  </label>

                  <Button type="submit" className="w-full btn-gold-lg" isLoading={isLoading}>
                    Create Account
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-surface-border" />
                  </div>
                  <div className="relative flex justify-center text-body-sm">
                    <span className="px-4 bg-surface-main text-text-muted">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" type="button" className="gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="gap-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-body-sm text-text-secondary">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-brand-primary hover:text-brand-secondary underline-offset-2 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right: brand panel */}
      <aside className="relative hidden overflow-hidden bg-brand-navy p-12 text-white lg:flex lg:flex-col lg:justify-center xl:p-16">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-primary/50 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-md">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-caption font-medium text-brand-gold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Free to join — no credit card required
          </span>

          <h2 className="mt-6 text-display-sm font-bold leading-[1.15] text-white">
            Start trading with the world in minutes.
          </h2>
          <p className="mt-4 text-body-lg text-white/70">
            Create your free account and unlock verified suppliers, global buyers, and powerful listing tools.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Free business listing</p>
                <p className="text-body-sm text-white/60">Claim your profile and reach buyers instantly.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Buyer or business owner</p>
                <p className="text-body-sm text-white/60">Choose the account type that fits how you trade.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Verified &amp; secure</p>
                <p className="text-body-sm text-white/60">Your details stay private until you choose to share.</p>
              </div>
            </li>
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <dt className="text-caption text-white/50">Businesses</dt>
              <dd className="text-heading-md font-bold text-white">500K+</dd>
            </div>
            <div>
              <dt className="text-caption text-white/50">Products</dt>
              <dd className="text-heading-md font-bold text-white">2M+</dd>
            </div>
            <div>
              <dt className="text-caption text-white/50">Countries</dt>
              <dd className="text-heading-md font-bold text-white">195+</dd>
            </div>
          </dl>

          <p className="mt-8 flex items-center gap-2 text-body-sm text-white/50">
            <Rocket className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            Already with us? Sign in to pick up where you left off.
          </p>
        </div>
      </aside>
    </div>
  )
}
