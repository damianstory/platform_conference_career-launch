'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

type ColorScheme = 'blue' | 'red' | 'green' | 'purple' | 'yellow' | 'orange'

interface IconBoxProps {
  /** The Lucide icon component to display */
  icon: LucideIcon
  /** Color scheme for the icon and background */
  colorScheme?: ColorScheme
  /** Size of the icon box container */
  size?: 'sm' | 'md' | 'lg'
  /** Additional CSS classes */
  className?: string
}

/**
 * IconBox - Colored icon container component
 *
 * Provides consistent icon styling with coordinated backgrounds and icon colors.
 * Used throughout booth components for visual consistency and hierarchy.
 *
 * Color Schemes:
 * - blue: Primary brand color (default)
 * - red: Documents, PDFs, important items
 * - green: Success states, phone contacts
 * - purple: Secondary items, location
 * - yellow: Prizes, awards, highlights
 * - orange: Videos, media
 *
 * Sizes:
 * - sm: 32px container, 16px icon (w-8 h-8, w-4 h-4)
 * - md: 40px container, 20px icon (w-10 h-10, w-5 h-5) - default
 * - lg: 48px container, 24px icon (w-12 h-12, w-6 h-6)
 *
 * @example
 * ```tsx
 * import { FileText, Mail, Trophy } from 'lucide-react'
 *
 * // PDF icon
 * <IconBox icon={FileText} colorScheme="red" />
 *
 * // Email icon
 * <IconBox icon={Mail} colorScheme="blue" />
 *
 * // Prize icon
 * <IconBox icon={Trophy} colorScheme="yellow" size="lg" />
 * ```
 */
export default function IconBox({
  icon: Icon,
  colorScheme = 'blue',
  size = 'md',
  className = '',
}: IconBoxProps) {
  const colorSchemes = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-600',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
    },
  }

  const sizes = {
    sm: {
      container: 'w-8 h-8',
      icon: 'w-4 h-4',
    },
    md: {
      container: 'w-10 h-10',
      icon: 'w-5 h-5',
    },
    lg: {
      container: 'w-12 h-12',
      icon: 'w-6 h-6',
    },
  }

  const colors = colorSchemes[colorScheme]
  const sizeClasses = sizes[size]

  return (
    <div
      className={`${sizeClasses.container} ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <Icon className={`${sizeClasses.icon} ${colors.text}`} />
    </div>
  )
}
