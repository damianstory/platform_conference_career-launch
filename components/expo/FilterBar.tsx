'use client'

import React from 'react'
import { GraduationCap, Briefcase, Lightbulb, Dices } from 'lucide-react'
import { Industry, OrganizationType } from '@/types/booth'

interface FilterBarProps {
  selectedIndustries: Industry[]
  organizationType: 'all' | OrganizationType
  onIndustriesChange: (industries: Industry[]) => void
  onOrganizationTypeChange: (type: 'all' | OrganizationType) => void
  onRandomSelect: () => void
}

const INDUSTRIES: Industry[] = [
  'Technology',
  'Healthcare',
  'Finance',
  'Engineering',
  'Education',
  'Manufacturing',
  'Retail',
  'Energy',
  'Marketing',
  'Consulting',
  'Skilled Trades',
  'Arts & Media',
  'Government',
  'Non-Profit'
]

export default function FilterBar({
  selectedIndustries,
  organizationType,
  onIndustriesChange,
  onOrganizationTypeChange,
  onRandomSelect
}: FilterBarProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Action Buttons Container - Responsive positioning */}
      <div className="flex gap-3 mb-4 min-[800px]:absolute min-[800px]:top-4 min-[800px]:right-4 min-[800px]:mb-0">
        {/* Random Booth Selector */}
        <div className="relative group/tooltip">
          <button
            onClick={onRandomSelect}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-out group bg-transparent hover:bg-gradient-to-r hover:from-primary-blue hover:to-brand-navy border border-neutral-3 hover:border-transparent z-10 hover:shadow-lg"
            title="Visit a random booth"
          >
            <Dices className="w-5 h-5 transition-colors duration-200 text-neutral-4 group-hover:text-white" />
          </button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-brand-navy text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            Surprise me!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-navy"></div>
          </div>
        </div>
      </div>

      {/* Organization Type Filter */}
      <div className="mb-6">
        <h3 className="text-subtitle-2 font-bold uppercase text-neutral-4 mb-3">ORGANIZATION TYPE</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onOrganizationTypeChange('all')}
            className={`
              px-4 py-2 rounded-full text-compact font-light transition-all
              ${organizationType === 'all'
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            All Organizations
          </button>
          <button
            onClick={() => onOrganizationTypeChange('employer')}
            className={`
              px-4 py-2 rounded-full text-compact font-light transition-all flex items-center gap-2
              ${organizationType === 'employer'
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            <Briefcase className="w-4 h-4" />
            Employers Only
          </button>
          <button
            onClick={() => onOrganizationTypeChange('post-secondary')}
            className={`
              px-4 py-2 rounded-full text-compact font-light transition-all flex items-center gap-2
              ${organizationType === 'post-secondary'
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            <GraduationCap className="w-4 h-4" />
            Post-Secondary Only
          </button>
          <button
            onClick={() => onOrganizationTypeChange('gap-year')}
            className={`
              px-4 py-2 rounded-full text-compact font-light transition-all flex items-center gap-2
              ${organizationType === 'gap-year'
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            <Lightbulb className="w-4 h-4" />
            Gap Year Programs
          </button>
        </div>
      </div>

      {/* Industry Filters */}
      <div>
        <h3 className="text-subtitle-2 font-bold uppercase text-neutral-4 mb-3">INDUSTRY</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onIndustriesChange([])}
            className={`
              px-3 py-1.5 rounded-full text-compact font-light transition-all
              ${selectedIndustries.length === 0
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            All Industries
          </button>
          {INDUSTRIES.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                const isSelected = selectedIndustries.includes(industry)
                const newIndustries = isSelected
                  ? selectedIndustries.filter(i => i !== industry)
                  : [...selectedIndustries, industry]
                onIndustriesChange(newIndustries)
              }}
              className={`
                px-3 py-1.5 rounded-full text-compact font-light transition-all
                ${selectedIndustries.includes(industry)
                  ? 'bg-primary-blue text-white'
                  : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
                }
              `}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedIndustries.length > 0 || organizationType !== 'all') && (
        <div className="mt-4 pt-4 border-t border-neutral-2">
          <div className="flex items-center gap-2 text-compact text-neutral-4 flex-wrap">
            <span>Active filters:</span>
            {organizationType !== 'all' && (
              <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {organizationType === 'employer' ? 'Employers' :
                 organizationType === 'post-secondary' ? 'Post-Secondary' :
                 'Gap Year'}
              </span>
            )}
            {selectedIndustries.map(industry => (
              <span key={industry} className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {industry}
              </span>
            ))}
            <button
              onClick={() => {
                onIndustriesChange([])
                onOrganizationTypeChange('all')
              }}
              className="ml-auto text-primary-blue hover:text-brand-navy font-light"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
