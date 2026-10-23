import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'gold' | 'success' | 'warning' | 'error' | 'outline' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-primary/10 text-brand-primary',
      gold: 'bg-brand-gold-light text-brand-gold-hover',
      success: 'bg-status-success/10 text-status-success',
      warning: 'bg-status-warning/10 text-status-warning',
      error: 'bg-status-error/10 text-status-error',
      outline: 'border border-surface-border bg-transparent',
      secondary: 'bg-surface-light text-text-secondary',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-caption',
      md: 'px-3 py-1 text-caption',
      lg: 'px-3.5 py-1.5 text-body-sm',
    }

    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center gap-1.5 rounded-full font-medium', variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }