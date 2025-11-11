'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Building2, Users, Target, TrendingUp, Award, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import { QuickFact } from '@/types/booth'
import SectionLabel from '../shared/SectionLabel'

interface CompanyStoryProps {
  description: string
  quickFacts?: QuickFact[]
}

export default function CompanyStory({ description, quickFacts }: CompanyStoryProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsExpansion, setNeedsExpansion] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if content overflows the max height
    const checkOverflow = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight
        // Use different max heights based on screen size
        // Mobile: 140px, Tablet+: 180px
        const isMobile = window.innerWidth < 768
        const maxHeight = isMobile ? 140 : 180
        setNeedsExpansion(contentHeight > maxHeight)
      }
    }

    checkOverflow()

    // Re-check on window resize
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [description, quickFacts])
  // Map icon names to Lucide icons
  const getIcon = (iconName?: string) => {
    switch (iconName?.toLowerCase()) {
      case 'building':
        return Building2
      case 'users':
        return Users
      case 'target':
        return Target
      case 'trending':
      case 'trendingup':
        return TrendingUp
      case 'award':
        return Award
      case 'globe':
        return Globe
      default:
        return Building2
    }
  }

  return (
    <div className={`bg-white rounded-xl shadow-[0_2px_8px_rgba(34,34,76,0.04)] border border-gray-200/60 overflow-hidden transition-all duration-300 hover:shadow-[0_4px_16px_rgba(34,34,76,0.06)] hover:border-gray-300/80 col-span-12 lg:col-span-8 ${isExpanded ? 'h-auto' : 'h-auto lg:h-64'}`}>
      <div className={`p-4 space-y-2 relative ${!isExpanded && needsExpansion ? 'pb-12' : 'pb-3'}`}>
        {/* Section Label */}
        <div className="-mt-2">
          <SectionLabel text="About Us" />
        </div>

        <div
          ref={contentRef}
          className={`space-y-2 ${!isExpanded && needsExpansion ? 'max-h-[140px] md:max-h-[180px] overflow-hidden' : ''}`}
        >
          {/* Description */}
          <p className="text-base leading-relaxed text-gray-600 whitespace-pre-line">
            {description}
          </p>

          {/* Quick Facts (if available) */}
          {quickFacts && quickFacts.length > 0 && (
            <>
              <div className="border-t border-neutral-2" />

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Quick Facts</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quickFacts.map((fact, index) => {
                    const Icon = getIcon(fact.icon)

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-neutral-1 rounded-lg hover:bg-primary-blue/5 transition-colors"
                      >
                        <div className="flex-shrink-0 p-2 bg-primary-blue/10 rounded-lg">
                          <Icon className="w-4 h-4 text-primary-blue" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-0.5">
                            {fact.label}
                          </p>
                          <p className="text-lg font-semibold text-gray-900 truncate">
                            {fact.value}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Gradient overlay when collapsed */}
        {!isExpanded && needsExpansion && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />
        )}

        {/* View More / View Less button */}
        {needsExpansion && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 text-sm font-semibold text-primary-blue hover:text-brand-navy transition-colors flex items-center justify-center gap-1 mt-2"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                View Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
