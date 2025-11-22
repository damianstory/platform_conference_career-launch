'use client'

import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Industry, OrganizationType, PlatinumBoothData, StandardBoothData } from '@/types/booth'
import BoothCard from './BoothCard'
import FilterBar from './FilterBar'
import { Dices } from 'lucide-react'

interface ExpoHallProps {
  booths: (PlatinumBoothData | StandardBoothData)[]
}

export default function ExpoHall({ booths }: ExpoHallProps) {
  const router = useRouter()
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([])
  const [organizationType, setOrganizationType] = useState<'all' | OrganizationType>('all')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Filter booths based on selected criteria
  const filteredBooths = useMemo(() => {
    let filtered = [...booths]

    // Filter by organization type
    if (organizationType !== 'all') {
      filtered = filtered.filter(booth => booth.organizationType === organizationType)
    }

    // Filter by industries
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter(booth =>
        booth.industries.some(industry => selectedIndustries.includes(industry))
      )
    }

    // Sort logic: tier priority + industry priority
    if (selectedIndustries.length === 0) {
      // No industry filter: sort by tier, then alphabetically
      filtered.sort((a, b) => {
        const tierOrder = { platinum: 0, standard: 1 }
        const tierDiff = tierOrder[a.tier] - tierOrder[b.tier]
        if (tierDiff !== 0) return tierDiff
        return a.name.localeCompare(b.name)
      })
    } else {
      // Industry filter active: apply priority sorting within each tier
      const platinumBooths = filtered.filter(b => b.tier === 'platinum')
      const standardBooths = filtered.filter(b => b.tier === 'standard')

      // Helper to sort by industry priority
      const sortByPriority = (booths: typeof filtered) => {
        const primaryMatches = booths.filter(booth =>
          selectedIndustries.includes(booth.industries[0])
        )
        const secondaryMatches = booths.filter(booth =>
          !selectedIndustries.includes(booth.industries[0])
        )

        primaryMatches.sort((a, b) => a.name.localeCompare(b.name))
        secondaryMatches.sort((a, b) => a.name.localeCompare(b.name))

        return [...primaryMatches, ...secondaryMatches]
      }

      const sortedPlatinum = sortByPriority(platinumBooths)
      const sortedStandard = sortByPriority(standardBooths)

      filtered = [...sortedPlatinum, ...sortedStandard]
    }

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

  const handleRandomSelect = () => {
    if (filteredBooths.length === 0) return

    // Exclude specific booths from random selection
    const excludedBoothIds = ['career-myth-buster', 'industry-immersion-series']
    const selectableBooths = filteredBooths.filter(booth => !excludedBoothIds.includes(booth.id))

    // If no selectable booths after exclusions, do nothing
    if (selectableBooths.length === 0) return

    // Select random booth from selectable booths and navigate directly
    const randomIndex = Math.floor(Math.random() * selectableBooths.length)
    const randomBooth = selectableBooths[randomIndex]

    // Check if this is an external booth
    const isExternalBooth = randomBooth.tier === 'standard' && 'externalUrl' in randomBooth && randomBooth.externalUrl

    if (isExternalBooth && 'externalUrl' in randomBooth && randomBooth.externalUrl) {
      // Open external URL in new tab
      window.open(randomBooth.externalUrl, '_blank', 'noopener,noreferrer')
    } else {
      // Navigate to internal booth page
      router.push(`/booths/${randomBooth.slug}`)
    }
  }

  const activeFilterCount =
    selectedIndustries.length +
    (organizationType !== 'all' ? 1 : 0);

  const removeIndustry = (industry: Industry) => {
    setSelectedIndustries(selectedIndustries.filter(i => i !== industry))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white">
      {/* Main Content */}
      <div id="booths" className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter Controls */}
        <div className="bg-off-white border-t sticky top-0 z-10 mb-6 md:mb-8 rounded-lg" style={{ borderTopColor: 'rgba(34, 34, 76, 0.12)' }}>
          <div className="px-4 md:px-8 lg:px-16 py-4 md:py-6">
            {/* Top Row: Filter Button, Random Button, Results Count */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                {/* Filter Toggle Button */}
                <button
                  onClick={() => {
                    // Mobile: open drawer, Desktop: toggle expansion
                    if (window.innerWidth < 768) {
                      setIsDrawerOpen(true)
                    } else {
                      setIsExpanded(!isExpanded)
                    }
                  }}
                  className={`
                    inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 w-full sm:w-auto
                    ${activeFilterCount > 0
                      ? 'bg-blue text-white hover:bg-blue/90'
                      : 'bg-white border-2 border-blue text-blue hover:bg-blue/5'
                    }
                  `}
                  aria-expanded={isExpanded}
                  aria-controls="booth-filter-panel"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                  </svg>
                  Filter Booths
                  {activeFilterCount > 0 && (
                    <span className={`
                      text-xs px-1.5 py-0.5 rounded-full font-bold
                      ${activeFilterCount > 0 ? 'bg-white text-blue' : 'bg-blue text-white'}
                    `}>
                      {activeFilterCount}
                    </span>
                  )}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>

                {/* Random Button */}
                <div className="relative group/tooltip w-full sm:w-auto">
                  <button
                    onClick={handleRandomSelect}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-out bg-white text-primary-blue hover:bg-gradient-to-r hover:from-primary-blue hover:to-brand-navy hover:text-white shadow-[0_2px_8px_rgba(0,146,255,0.12),0_0_0_2px_rgba(0,146,255,0.2)] hover:shadow-[0_4px_16px_rgba(0,146,255,0.35),0_0_0_0px_transparent] hover:-translate-y-0.5 w-full sm:w-auto"
                    title="Visit a random booth"
                  >
                    <Dices className="w-4 h-4 transition-all duration-300" />
                    Random
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-brand-navy text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    Surprise me!
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-navy"></div>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-xs sm:text-sm text-gray-600 text-center md:text-left">
                Showing <span className="font-semibold">{filteredBooths.length}</span> of <span className="font-semibold">{booths.length}</span> booths
              </div>
            </div>

          {/* Expandable Filter Panel - Desktop Only */}
          <div
            id="booth-filter-panel"
            className={`
              hidden md:block overflow-hidden transition-all duration-300 ease-out
              ${isExpanded ? 'max-h-[500px] opacity-100 mb-3' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <FilterBar
                selectedIndustries={selectedIndustries}
                organizationType={organizationType}
                onIndustriesChange={setSelectedIndustries}
                onOrganizationTypeChange={setOrganizationType}
              />
            </div>
          </div>

          {/* Active Filter Pills - Always Visible When Filters Applied */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap mt-4">
              <span className="text-xs text-gray-500 font-medium">Active:</span>
              {organizationType !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {organizationType === 'employer' ? 'Employers' :
                   organizationType === 'post-secondary' ? 'Post-Secondary' :
                   organizationType === 'gap-year' ? 'Gap Year' :
                   'Activities'}
                  <button
                    onClick={() => setOrganizationType('all')}
                    className="hover:text-blue/70 transition-colors"
                    aria-label="Remove organization type filter"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              )}
              {selectedIndustries.map(industry => (
                <span key={industry} className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {industry}
                  <button
                    onClick={() => removeIndustry(industry)}
                    className="hover:text-blue/70 transition-colors"
                    aria-label={`Remove ${industry} filter`}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              ))}
              <button
                onClick={clearAllFilters}
                className="text-xs text-blue hover:text-blue/70 font-medium ml-2"
              >
                Clear all
              </button>
            </div>
          )}
          </div>
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
              <h3 className="text-2xl font-semibold text-brand-navy mb-3">No booths match your filters</h3>
              <p className="text-neutral-4 mb-8">
                We couldn&apos;t find any organizations that match your current filter combination.
              </p>

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

      {/* Mobile Filter Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 md:hidden animate-slideUp max-h-[85vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Filter booths"
          >
            {/* Drawer Handle */}
            <div className="flex justify-center pt-3 pb-2 sticky top-0 bg-white">
              <div className="w-12 h-1 bg-gray-300 rounded-full" aria-hidden="true" />
            </div>

            {/* Drawer Content */}
            <div className="px-6 pb-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close filters"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-lg font-bold text-navy mb-4">Filter Booths</h2>

              <div className="space-y-6">
                <FilterBar
                  selectedIndustries={selectedIndustries}
                  organizationType={organizationType}
                  onIndustriesChange={setSelectedIndustries}
                  onOrganizationTypeChange={setOrganizationType}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-navy bg-white hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex-1 px-4 py-3 rounded-md text-sm font-medium text-white bg-blue hover:bg-opacity-90 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add slide-up animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
