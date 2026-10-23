'use client'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { Globe, Loader2, Mail, CheckCircle, ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [step, setStep] = useState<'email' | 'sent'>('email')
  const [errors, setErrors] = useState<{ email?: string; form?: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = () => {
    if (!email) {
      setErrors({ email: 'Email is required' })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: 'Invalid email address' })
      return false
    }
    setErrors({})
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail()) return
    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStep('sent')
    } catch (error) {
      setErrors({ form: 'Failed to send reset email. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
    } finally {
      setIsLoading(false)
    }
  }

  if (step === 'sent') {
    return (
      <div className="min-h-screen bg-surface-light flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8" aria-label="Konnekt Globe Home">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand">
              <Globe className="h-6 w-6 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-white">
                K
              </span>
            </div>
            <span className="text-heading-lg font-bold text-brand-navy">Konnekt Globe</span>
          </Link>

          <Card>
            <CardContent className="py-10 px-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-status-success/10 mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-status-success" />
              </div>
              <h1 className="text-heading-lg font-bold text-text-primary mb-2">Check Your Email</h1>
              <p className="text-body text-text-secondary mb-6">
                We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions to reset your password.
              </p>
              <div className="space-y-4">
                <Button variant="outline" onClick={handleResend} isLoading={isLoading} className="w-full">
                  Resend Email
                </Button>
                <Link href="/login" className="block text-body-sm text-brand-primary hover:text-brand-secondary underline-offset-2 hover:underline">
                  Back to Sign In
                </Link>
              </div>
              <p className="text-caption text-text-muted mt-6">
                Didn&apos;t receive the email? Check your spam folder or{' '}
                <Link href="/contact" className="text-brand-primary hover:underline">contact support</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface-light flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6" aria-label="Konnekt Globe Home">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand">
              <Globe className="h-6 w-6 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-white">
                K
              </span>
            </div>
            <span className="text-heading-lg font-bold text-brand-navy">Konnekt Globe</span>
          </Link>
          <h1 className="text-heading-lg font-bold text-text-primary">Forgot Password</h1>
          <p className="text-body text-text-secondary mt-2">Enter your email and we&apos;ll send you a reset link</p>
        </div>

        <Card>
          <CardHeader className="text-center pb-4">
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>Enter your registered email address</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {errors.form && (
                <div className="p-3 rounded-lg bg-status-error/10 text-status-error text-body-sm" role="alert">
                  {errors.form}
                </div>
              )}

              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                error={errors.email}
                placeholder="you@company.com"
                autoComplete="email"
                leftIcon={<Mail className="h-5 w-5" />}
                disabled={isLoading}
              />

              <Button type="submit" className="w-full btn-gold-lg" isLoading={isLoading}>
                Send Reset Link
              </Button>
            </form>

            <p className="text-center text-body-sm text-text-secondary mt-6">
              <Link href="/login" className="flex items-center justify-center gap-1.5 text-brand-primary hover:text-brand-secondary">
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}