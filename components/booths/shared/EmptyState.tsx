'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  /** Icon to display */
  icon: LucideIcon
  /** Main message */
  message: string
  /** Optional secondary message */
  description?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * EmptyState - Consistent empty state UI component
 *
 * Used to show empty states in a visually consistent way across the application.
 * Displays an icon, message, and optional description.
 *
 * @example
 * ```tsx
 * import { File } from 'lucide-react'
 *
 * <EmptyState
 *   icon={File}
 *   message="More resources coming soon"
 *   description="Check back later for additional materials"
 * />
 * ```
 */
export default function EmptyState({ icon: Icon, message, description, className = '' }: EmptyStateProps) {
  return (
    <div className={`border-2 border-dashed border-gray-200 rounded-xl p-6 text-center ${className}`}>
      <Icon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
      <p className="text-sm text-gray-500 font-medium">{message}</p>
      {description && (
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      )}
    </div>
  )
}
