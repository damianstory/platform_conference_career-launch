'use client'

import React from 'react'
import { GraduationCap, Briefcase, Lightbulb, Sparkles } from 'lucide-react'
import { Industry, OrganizationType } from '@/types/booth'

interface FilterBarProps {
  selectedIndustries: Industry[]
  organizationType: 'all' | OrganizationType
  onIndustriesChange: (industries: Industry[]) => void
  onOrganizationTypeChange: (type: 'all' | OrganizationType) => void
}

const INDUSTRIES: Industry[] = [
  'Agriculture',
  'Arts/Culture',
  'Aviation/Aerospace',
  'Business',
  'Construction',
  'Energy',
  'Environment',
  'Food Processing',
  'Forestry',
  'Health/Wellness',
  'Horticulture',
  'Hospitality/Tourism',
  'ICT',
  'Justice/Emergency',
  'Life Skills',
  'Manufacturing',
  'Mining',
  'Non-Profit/Education',
  'Sports',
  'Transportation'
]

export default function FilterBar({
  selectedIndustries,
  organizationType,
  onIndustriesChange,
  onOrganizationTypeChange
}: FilterBarProps) {
  return (
    <div>
      {/* Organization Type Filter */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">ORGANIZATION TYPE</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onOrganizationTypeChange('all')}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
              ${organizationType === 'all'
                ? 'bg-blue text-white shadow-md'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }
            `}
          >
            All Organizations
          </button>
          <button
            onClick={() => onOrganizationTypeChange('employer')}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'employer'
                ? 'bg-blue text-white shadow-md'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }
            `}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Employers Only
          </button>
          <button
            onClick={() => onOrganizationTypeChange('post-secondary')}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'post-secondary'
                ? 'bg-blue text-white shadow-md'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }
            `}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Post-Secondary Only
          </button>
          <button
            onClick={() => onOrganizationTypeChange('gap-year')}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'gap-year'
                ? 'bg-blue text-white shadow-md'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }
            `}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Gap Year Programs
          </button>
          <button
            onClick={() => onOrganizationTypeChange('activities')}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5
              ${organizationType === 'activities'
                ? 'bg-blue text-white shadow-md'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
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
        <h3 className="text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">INDUSTRY</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onIndustriesChange([])}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
              ${selectedIndustries.length === 0
                ? 'bg-blue text-white shadow-md'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
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
                px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${selectedIndustries.includes(industry)
                  ? 'bg-blue text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                }
              `}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
