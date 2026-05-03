'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { buttonHoverVariants } from '@/lib/animations'

type ButtonVariant = 'primary' | 'outline' | 'gold' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-midnight text-white hover:bg-steel border border-midnight',
  outline: 'border border-midnight text-midnight hover:bg-midnight hover:text-white',
  gold:    'border border-gold text-gold hover:bg-gold hover:text-midnight',
  ghost:   'text-ink-muted hover:text-midnight underline-offset-4 hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-[0.12em]',
  md: 'px-7 py-3.5 text-xs tracking-[0.12em]',
  lg: 'px-9 py-4 text-sm tracking-[0.12em]',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base = `inline-flex items-center font-body font-medium uppercase rounded-none transition-colors duration-200 min-h-[44px] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <motion.div
        variants={buttonHoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="inline-block"
      >
        <Link href={href} className={base}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      variants={buttonHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
    >
      {children}
    </motion.button>
  )
}
