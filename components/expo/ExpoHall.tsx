'use client'

import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Industry, OrganizationType, PlatinumBoothData, StandardBoothData } from '@/types/booth'
import BoothCard from './BoothCard'
import FilterBar from './FilterBar'
import EmptyStateIllustration from '@/components/ui/EmptyStateIllustration'
import { Building, Users, Briefcase } from 'lucide-react'

interface ExpoHallProps {
  booths: (PlatinumBoothData | StandardBoothData)[]
}

export default function ExpoHall({ booths }: ExpoHallProps) {
  const router = useRouter()
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([])
  const [organizationType, setOrganizationType] = useState<'all' | OrganizationType>('all')

  // Filter booths based on selected criteria
  const filteredBooths = useMemo(() => {
    let filtered = [...booths]

    // Filter by organization type
    if (organizationType !== 'all') {
      filtered = filtered.filter(booth => booth.organizationType === organizationType)
    }

    // Filter by industries
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter(booth => selectedIndustries.includes(booth.industry))
    }

    // Sort by tier priority: platinum > standard
    filtered.sort((a, b) => {
      const tierOrder = { platinum: 0, standard: 1 }
      return tierOrder[a.tier] - tierOrder[b.tier]
    })

    return filtered
  }, [booths, selectedIndustries, organizationType])

  // Group filtered booths by tier
  const boothsByTier = useMemo(() => {
    const platinum = filteredBooths.filter(b => b.tier === 'platinum')
    const standard = filteredBooths.filter(b => b.tier === 'standard')

    return { platinum, standard }
  }, [filteredBooths])

  const clearAllFilters = () => {
    setSelectedIndustries([])
    setOrganizationType('all')
  }

  const getPopularFilterSuggestions = () => [
    {
      label: 'Technology & Engineering',
      action: () => {
        setSelectedIndustries(['Technology', 'Engineering'])
        setOrganizationType('all')
      }
    },
    {
      label: 'University Programs',
      action: () => {
        setOrganizationType('post-secondary')
        setSelectedIndustries([])
      }
    },
    {
      label: 'Employer Opportunities',
      action: () => {
        setOrganizationType('employer')
        setSelectedIndustries([])
      }
    }
  ]

  const handleRandomSelect = () => {
    if (filteredBooths.length === 0) return

    // Select random booth and navigate directly
    const randomIndex = Math.floor(Math.random() * filteredBooths.length)
    const randomBooth = filteredBooths[randomIndex]
    router.push(`/booths/${randomBooth.slug}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white">
      {/* Main Content */}
      <div id="booths" className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter Bar */}
        <div className="animate-fade-in">
          <FilterBar
            selectedIndustries={selectedIndustries}
            organizationType={organizationType}
            onIndustriesChange={setSelectedIndustries}
            onOrganizationTypeChange={setOrganizationType}
            onRandomSelect={handleRandomSelect}
          />
        </div>

        {/* Results Summary */}
        <div className="mb-6 text-center">
          <p className="text-neutral-5 text-base">
            Showing <span className="font-bold text-brand-navy text-lg">{filteredBooths.length}</span>
            {' '}of <span className="font-medium">{booths.length}</span> booths
          </p>
        </div>

        {/* Booth Grid */}
        {filteredBooths.length > 0 ? (
          <div className="space-y-12">
            {/* Platinum Booths Section */}
            {boothsByTier.platinum.length > 0 && (
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">
                    Platinum Booths
                  </h2>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-primary-blue to-primary-blue/20 rounded-full shadow-[0_2px_4px_rgba(0,146,255,0.15)]"></div>
                </div>
                <div className="expo-booth-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {boothsByTier.platinum.map((booth, index) => (
                    <BoothCard
                      key={booth.id}
                      booth={booth}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Standard Booths Section */}
            {boothsByTier.standard.length > 0 && (
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-neutral-6 mb-2">
                    Standard Booths
                  </h2>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-neutral-5 to-neutral-3 rounded-full"></div>
                </div>
                <div className="expo-booth-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {boothsByTier.standard.map((booth, index) => (
                    <BoothCard
                      key={booth.id}
                      booth={booth}
                      index={boothsByTier.platinum.length + index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-lg mx-auto">
              <EmptyStateIllustration type="no-results" className="mb-6" />
              <h3 className="text-2xl font-semibold text-brand-navy mb-3">No booths match your filters</h3>
              <p className="text-neutral-4 mb-8">
                We couldn&apos;t find any organizations that match your current filter combination.
                Try adjusting your filters or explore some popular categories below.
              </p>

              {/* Popular Filter Suggestions */}
              <div className="mb-8">
                <p className="text-sm font-medium text-neutral-5 mb-4">Try these popular combinations:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {getPopularFilterSuggestions().map((suggestion, index) => (
                    <button
                      key={suggestion.label}
                      onClick={suggestion.action}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full hover:bg-primary-blue/20 transition-all hover:scale-105 active:scale-95 text-sm font-medium"
                    >
                      {index === 0 && <Building className="w-4 h-4" />}
                      {index === 1 && <Users className="w-4 h-4" />}
                      {index === 2 && <Briefcase className="w-4 h-4" />}
                      {suggestion.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={clearAllFilters}
                className="px-8 py-3 bg-primary-blue text-white rounded-lg font-semibold shadow-[0_4px_12px_rgba(0,146,255,0.25)] hover:bg-brand-navy hover:shadow-[0_6px_20px_rgba(0,146,255,0.35)] hover:-translate-y-1 transition-all duration-300 ease-out active:scale-98"
              >
                View All Booths
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
