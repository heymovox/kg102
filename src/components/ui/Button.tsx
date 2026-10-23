import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
    
    const variants = {
      primary: 'bg-gradient-to-r from-brand-gold to-brand-gold-hover text-white hover:from-brand-gold-hover hover:to-brand-gold focus-visible:ring-brand-gold shadow-lg shadow-brand-gold/20',
      secondary: 'bg-brand-gold/10 text-brand-gold-hover border-[1.5px] border-brand-gold/40 hover:bg-brand-gold/18 hover:border-brand-gold focus-visible:ring-brand-gold',
      gold: 'bg-gradient-to-r from-brand-gold to-brand-gold-hover text-white hover:from-brand-gold-hover hover:to-brand-gold focus-visible:ring-brand-gold shadow-lg shadow-brand-gold/20',
      outline: 'border-2 border-brand-gold text-brand-gold-hover bg-transparent hover:bg-brand-gold hover:text-white focus-visible:ring-brand-gold',
      ghost: 'text-text-secondary hover:text-brand-gold-hover hover:bg-brand-gold/10 focus-visible:ring-brand-gold',
      destructive: 'bg-status-error text-white hover:bg-status-error/90 focus-visible:ring-status-error',
    }

    const sizes = {
      sm: 'rounded-lg px-4 py-2 text-body-sm',
      md: 'rounded-xl px-6 py-3 text-body font-semibold',
      lg: 'rounded-xl px-8 py-3.5 text-body-lg font-semibold',
      xl: 'rounded-xl px-9 py-4 text-body-lg font-semibold',
      icon: 'rounded-xl p-2.5',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }