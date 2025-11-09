'use client'

import React from 'react'
import { Building2, Users, Target, TrendingUp, Award, Globe } from 'lucide-react'
import { QuickFact } from '@/types/booth'
import SectionLabel from '../shared/SectionLabel'

interface CompanyStoryProps {
  description: string
  quickFacts?: QuickFact[]
}

export default function CompanyStory({ description, quickFacts }: CompanyStoryProps) {
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-8 h-64">
      <div className="p-4 space-y-2 h-full overflow-y-auto">
        {/* Section Label */}
        <SectionLabel text="About Us" />

        {/* Description */}
        <p className="text-base leading-relaxed text-gray-600">
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
    </div>
  )
}
