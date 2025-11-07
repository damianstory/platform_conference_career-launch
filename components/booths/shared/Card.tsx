'use client'

import React from 'react'

type CardVariant = 'default' | 'featured' | 'interactive'

interface CardProps {
  /** Content to display inside the card */
  children: React.ReactNode
  /** Card variant - affects styling */
  variant?: CardVariant
  /** Additional CSS classes */
  className?: string
  /** Whether the card should be clickable */
  onClick?: () => void
}

/**
 * Card - Base card component with consistent visual treatment
 *
 * Provides three variants:
 * - default: Standard white card with border and shadow
 * - featured: Enhanced styling for prominent content (gradient background, stronger shadow)
 * - interactive: Adds hover effects for clickable cards
 *
 * All variants follow the bento grid visual specification:
 * - Consistent rounded corners (rounded-xl)
 * - Proper shadows and borders
 * - Smooth transitions
 *
 * @example
 * ```tsx
 * // Default card
 * <Card>
 *   <h2>Title</h2>
 *   <p>Content</p>
 * </Card>
 *
 * // Featured card with gradient
 * <Card variant="featured">
 *   <h2>Important Content</h2>
 * </Card>
 *
 * // Interactive card with hover effects
 * <Card variant="interactive" onClick={() => console.log('clicked')}>
 *   <h2>Clickable Card</h2>
 * </Card>
 * ```
 */
export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
}: CardProps) {
  const baseClasses = 'bg-white rounded-xl transition-all duration-200'

  const variantClasses = {
    default: 'border border-gray-200 shadow-sm',
    featured: 'border border-blue-200 shadow-md bg-gradient-to-br from-blue-50 to-blue-100',
    interactive:
      'border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 cursor-pointer',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${classes} text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      >
        {children}
      </button>
    )
  }

  return <div className={classes}>{children}</div>
}
