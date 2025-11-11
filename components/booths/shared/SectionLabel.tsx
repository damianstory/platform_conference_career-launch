'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface SectionLabelProps {
  /** The text to display in the label */
  text: string
  /** Optional icon to display before the text */
  icon?: LucideIcon
  /** Optional additional CSS classes */
  className?: string
}

/**
 * SectionLabel - Reusable section label component with consistent styling
 *
 * Used to create consistent section headers across all booth components.
 * Follows the typography specification:
 * - text-xs: Small text size
 * - font-bold: Bold weight
 * - uppercase: All caps
 * - tracking-wider: Increased letter spacing
 * - text-gray-500: Medium gray color
 *
 * @example
 * ```tsx
 * import { Sparkles } from 'lucide-react'
 *
 * <SectionLabel text="Interactive Activity" icon={Sparkles} />
 * <SectionLabel text="Resources" />
 * ```
 */
export default function SectionLabel({ text, icon: Icon, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </span>
  )
}
