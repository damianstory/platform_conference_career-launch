'use client'

import React from 'react'
import { Trophy } from 'lucide-react'

interface PrizeBoxProps {
  /** Prize title/name */
  title: string
  /** Prize description */
  description: string
  /** Prize value (optional) */
  value?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * PrizeBox - Display component for prizes/incentives
 *
 * Shows prize information with a trophy icon on yellow background
 * within a blue-themed container for visual prominence.
 *
 * @example
 * ```tsx
 * <PrizeBox
 *   title="Win a Tech Prize Pack"
 *   description="Complete the quiz for a chance to win"
 *   value="Worth $500"
 * />
 * ```
 */
export default function PrizeBox({ title, description, value, className = '' }: PrizeBoxProps) {
  return (
    <div className={`bg-blue-100 border border-blue-300 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
          <Trophy className="w-6 h-6 text-yellow-900" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-700">{description}</p>
          {value && (
            <p className="text-xs text-gray-600">{value}</p>
          )}
        </div>
      </div>
    </div>
  )
}
