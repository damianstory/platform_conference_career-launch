'use client'

import React from 'react'

interface SkeletonCardProps {
  /** Card variant matching Card component */
  variant?: 'default' | 'featured'
  /** Number of text lines to show */
  lines?: number
  /** Whether to show a title skeleton */
  showTitle?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * SkeletonCard - Loading skeleton for card components
 *
 * Displays animated skeleton matching card layouts for better loading UX.
 * Supports different variants to match the Card component.
 *
 * @example
 * ```tsx
 * // Default card skeleton
 * <SkeletonCard lines={3} showTitle />
 *
 * // Featured card skeleton
 * <SkeletonCard variant="featured" lines={4} showTitle />
 * ```
 */
export default function SkeletonCard({
  variant = 'default',
  lines = 2,
  showTitle = true,
  className = '',
}: SkeletonCardProps) {
  const baseClasses = 'rounded-xl p-6 animate-pulse'
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    featured: 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200',
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {showTitle && (
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
      )}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 rounded ${i === lines - 1 ? 'w-5/6' : 'w-full'}`}
          />
        ))}
      </div>
    </div>
  )
}
