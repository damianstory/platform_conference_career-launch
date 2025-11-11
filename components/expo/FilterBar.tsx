'use client'

import React from 'react'
import { GraduationCap, Briefcase, Lightbulb, Dices, Sparkles } from 'lucide-react'
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
    <div className="relative bg-white rounded-xl shadow-[0_4px_16px_rgba(34,34,76,0.08),0_2px_6px_rgba(34,34,76,0.04)] border border-gray-100/50 p-6 mb-8">
      {/* Action Buttons Container - Responsive positioning */}
      <div className="flex gap-3 mb-4 min-[800px]:absolute min-[800px]:top-4 min-[800px]:right-4 min-[800px]:mb-0">
        {/* Random Booth Selector */}
        <div className="relative group/tooltip">
          <button
            onClick={onRandomSelect}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ease-out group bg-white hover:bg-gradient-to-r hover:from-primary-blue hover:to-brand-navy border-2 border-primary-blue/20 hover:border-transparent shadow-[0_2px_8px_rgba(0,146,255,0.12)] hover:shadow-[0_4px_16px_rgba(0,146,255,0.35)] hover:-translate-y-1 hover:rotate-12 z-10"
            title="Visit a random booth"
          >
            <Dices className="w-5 h-5 transition-all duration-300 text-primary-blue group-hover:text-white group-hover:scale-110" />
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
              px-3 py-1.5 rounded-full text-compact font-light transition-all duration-200
              ${organizationType === 'all'
                ? 'bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white shadow-[0_2px_8px_rgba(0,146,255,0.25)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.35)] hover:-translate-y-0.5'
                : 'bg-neutral-2 text-neutral-6 hover:bg-primary-blue/10 hover:text-primary-blue border border-transparent hover:border-primary-blue/20'
              }
            `}
          >
            All Organizations
          </button>
          <button
            onClick={() => onOrganizationTypeChange('employer')}
            className={`
              px-3 py-1.5 rounded-full text-compact font-light transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'employer'
                ? 'bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white shadow-[0_2px_8px_rgba(0,146,255,0.25)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.35)] hover:-translate-y-0.5'
                : 'bg-neutral-2 text-neutral-6 hover:bg-primary-blue/10 hover:text-primary-blue border border-transparent hover:border-primary-blue/20'
              }
            `}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Employers Only
          </button>
          <button
            onClick={() => onOrganizationTypeChange('post-secondary')}
            className={`
              px-3 py-1.5 rounded-full text-compact font-light transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'post-secondary'
                ? 'bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white shadow-[0_2px_8px_rgba(0,146,255,0.25)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.35)] hover:-translate-y-0.5'
                : 'bg-neutral-2 text-neutral-6 hover:bg-primary-blue/10 hover:text-primary-blue border border-transparent hover:border-primary-blue/20'
              }
            `}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Post-Secondary Only
          </button>
          <button
            onClick={() => onOrganizationTypeChange('gap-year')}
            className={`
              px-3 py-1.5 rounded-full text-compact font-light transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'gap-year'
                ? 'bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white shadow-[0_2px_8px_rgba(0,146,255,0.25)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.35)] hover:-translate-y-0.5'
                : 'bg-neutral-2 text-neutral-6 hover:bg-primary-blue/10 hover:text-primary-blue border border-transparent hover:border-primary-blue/20'
              }
            `}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Gap Year Programs
          </button>
          <button
            onClick={() => onOrganizationTypeChange('activities')}
            className={`
              px-3 py-1.5 rounded-full text-compact font-light transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'activities'
                ? 'bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white shadow-[0_2px_8px_rgba(0,146,255,0.25)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.35)] hover:-translate-y-0.5'
                : 'bg-neutral-2 text-neutral-6 hover:bg-primary-blue/10 hover:text-primary-blue border border-transparent hover:border-primary-blue/20'
              }
            `}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Activities
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
              px-3 py-1.5 rounded-full text-compact font-light transition-all duration-200
              ${selectedIndustries.length === 0
                ? 'bg-primary-blue text-white shadow-[0_2px_6px_rgba(0,146,255,0.2)]'
                : 'bg-neutral-2 text-neutral-6 hover:bg-neutral-3 hover:text-brand-navy border border-neutral-2 hover:border-neutral-4'
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
                px-3 py-1.5 rounded-full text-compact font-light transition-all duration-200
                ${selectedIndustries.includes(industry)
                  ? 'bg-primary-blue text-white shadow-[0_2px_6px_rgba(0,146,255,0.2)] hover:shadow-[0_3px_8px_rgba(0,146,255,0.3)] hover:-translate-y-0.5'
                  : 'bg-neutral-2 text-neutral-6 hover:bg-neutral-3 hover:text-brand-navy border border-neutral-2 hover:border-neutral-4'
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
              <span className="px-3 py-1.5 bg-primary-blue/10 text-primary-blue rounded-full border border-primary-blue/20 font-medium text-xs shadow-[0_1px_3px_rgba(0,146,255,0.08)]">
                {organizationType === 'employer' ? 'Employers' :
                 organizationType === 'post-secondary' ? 'Post-Secondary' :
                 organizationType === 'gap-year' ? 'Gap Year' :
                 'Activities'}
              </span>
            )}
            {selectedIndustries.map(industry => (
              <span key={industry} className="px-3 py-1.5 bg-primary-blue/10 text-primary-blue rounded-full border border-primary-blue/20 font-medium text-xs shadow-[0_1px_3px_rgba(0,146,255,0.08)]">
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
