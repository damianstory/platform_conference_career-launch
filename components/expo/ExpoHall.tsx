'use client'

import React, { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { allBooths } from '@/data/sample-booths'
import { Industry, OrganizationType } from '@/types/booth'
import BoothCard from './BoothCard'
import FilterBar from './FilterBar'
import BoothCardSkeleton from './BoothCardSkeleton'
import NetworkError from '@/components/ui/NetworkError'
import EmptyStateIllustration from '@/components/ui/EmptyStateIllustration'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { Sparkles, Building, Users, Briefcase } from 'lucide-react'

type LoadingState = 'initial' | 'loading' | 'success' | 'error'

export default function ExpoHall() {
  const router = useRouter()
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([])
  const [organizationType, setOrganizationType] = useState<'all' | OrganizationType>('all')
  const [loadingState, setLoadingState] = useState<LoadingState>('initial')
  const [isFilterChanging, setIsFilterChanging] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [highlightedBoothId, setHighlightedBoothId] = useState<string | null>(null)
  const boothRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [previousFilters, setPreviousFilters] = useState({
    industries: [] as Industry[],
    organizationType: 'all' as 'all' | OrganizationType
  })

  // Filter booths based on selected criteria
  const filteredBooths = useMemo(() => {
    let filtered = [...allBooths]

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
  }, [selectedIndustries, organizationType])

  // Group filtered booths by tier
  const boothsByTier = useMemo(() => {
    const platinum = filteredBooths.filter(b => b.tier === 'platinum')
    const standard = filteredBooths.filter(b => b.tier === 'standard')

    return { platinum, standard }
  }, [filteredBooths])

  // Count statistics
  const stats = useMemo(() => {
    return {
      postSecondary: allBooths.filter(b => b.organizationType === 'post-secondary').length,
      employers: allBooths.filter(b => b.organizationType === 'employer').length,
      gapYear: allBooths.filter(b => b.organizationType === 'gap-year').length,
      platinum: allBooths.filter(b => b.tier === 'platinum').length,
      standard: allBooths.filter(b => b.tier === 'standard').length
    }
  }, [])

  // Simulate initial loading
  useEffect(() => {
    if (loadingState === 'initial') {
      setLoadingState('loading')
      setTimeout(() => {
        setLoadingState('success')
      }, 100)
    }
  }, [loadingState])

  // Handle filter changes with loading animation
  useEffect(() => {
    const arraysEqual = (a: any[], b: any[]) => a.length === b.length && a.every(item => b.includes(item))

    const hasFiltersChanged = (
      !arraysEqual(previousFilters.industries, selectedIndustries) ||
      previousFilters.organizationType !== organizationType
    )

    if (hasFiltersChanged && loadingState === 'success') {
      setIsFilterChanging(true)
      setTimeout(() => {
        setPreviousFilters({
          industries: [...selectedIndustries],
          organizationType
        })
        setIsFilterChanging(false)
      }, 400)
    }
  }, [selectedIndustries, organizationType, previousFilters, loadingState])

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    setLoadingState('loading')
    setTimeout(() => {
      const shouldSucceed = Math.random() > 0.3 || retryCount >= 2
      setLoadingState(shouldSucceed ? 'success' : 'error')
    }, 1000)
  }

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

    // Select random booth
    const randomIndex = Math.floor(Math.random() * filteredBooths.length)
    const randomBooth = filteredBooths[randomIndex]

    // Clear any existing highlights
    setHighlightedBoothId(null)

    // Small delay to ensure highlight is cleared
    setTimeout(() => {
      setHighlightedBoothId(randomBooth.id)

      // Scroll to the booth
      const boothElement = boothRefs.current[randomBooth.id]
      if (boothElement) {
        boothElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        })

        // Navigate to booth after animation
        setTimeout(() => {
          router.push(`/booths/${randomBooth.slug}`)
        }, 2000) // 2 seconds for scroll + highlight animation
      } else {
        // Fallback: direct navigation if ref not found
        router.push(`/booths/${randomBooth.slug}`)
      }
    }, 100)
  }

  // Generate skeleton cards based on typical distribution
  const generateSkeletonCards = () => {
    const skeletons = []
    for (let i = 0; i < 12; i++) {
      const tier = i < 4 ? 'platinum' : 'standard'
      skeletons.push(<BoothCardSkeleton key={i} tier={tier} index={i} />)
    }
    return skeletons
  }

  // Wrapper component for booth highlighting
  const BoothCardWithHighlight = ({ booth, index }: { booth: any, index: number }) => {
    const isHighlighted = highlightedBoothId === booth.id

    return (
      <motion.div
        ref={(el) => {
          boothRefs.current[booth.id] = el
        }}
        className={`relative ${isHighlighted ? 'z-20' : ''}`}
        animate={isHighlighted ? {
          scale: [1, 1.05, 1],
          transition: {
            duration: 1.5,
            times: [0, 0.5, 1],
            repeat: 1,
            ease: "easeInOut"
          }
        } : {}}
      >
        {/* Pulse glow effect for highlighted booth */}
        {isHighlighted && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-blue/30 to-light-blue/30 blur-lg"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: 1,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Sparkle effects */}
        {isHighlighted && (
          <>
            <motion.div
              className="absolute -top-2 -left-2 z-30"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              <Sparkles className="w-6 h-6 text-primary-blue" />
            </motion.div>

            <motion.div
              className="absolute -top-2 -right-2 z-30"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, -180, -360],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut"
              }}
            >
              <Sparkles className="w-5 h-5 text-light-blue" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 z-30"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 90, 180],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-brand-navy" />
            </motion.div>
          </>
        )}

        <BoothCard booth={booth} index={index} isHighlighted={isHighlighted} />
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white">
      {/* Main Content */}
      <div id="booths" className="max-w-7xl mx-auto px-4 py-6">
        {/* Error State */}
        {loadingState === 'error' && (
          <NetworkError
            onRetry={handleRetry}
            retryCount={retryCount}
            maxRetries={3}
          />
        )}

        {/* Success State */}
        {loadingState === 'success' && (
          <>
            {/* Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <FilterBar
                selectedIndustries={selectedIndustries}
                organizationType={organizationType}
                onIndustriesChange={setSelectedIndustries}
                onOrganizationTypeChange={setOrganizationType}
                onRandomSelect={handleRandomSelect}
              />
            </motion.div>

            {/* Results Summary with Loading State */}
            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {isFilterChanging ? (
                <div className="flex items-center justify-center gap-2 text-neutral-4">
                  <LoadingSpinner size="sm" />
                  <span>Filtering booths...</span>
                </div>
              ) : (
                <p className="text-neutral-4">
                  Showing <span className="font-semibold text-brand-navy">{filteredBooths.length}</span>
                  {' '}of {allBooths.length} booths
                </p>
              )}
            </motion.div>

            {/* Booth Grid with Animation */}
            <AnimatePresence mode="wait">
              {isFilterChanging ? (
                <motion.div
                  key="filtering"
                  className="expo-booth-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {generateSkeletonCards()}
                </motion.div>
              ) : filteredBooths.length > 0 ? (
                <motion.div
                  key="results"
                  className="space-y-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Platinum Booths Section */}
                  {boothsByTier.platinum.length > 0 && (
                    <div>
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <h2 className="text-3xl font-bold animated-gradient-text mb-2">
                          Platinum Booths
                        </h2>
                        <div className="h-1.5 w-24 bg-primary-blue rounded-full"></div>
                      </motion.div>
                      <div className="expo-booth-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {boothsByTier.platinum.map((booth, index) => (
                          <motion.div
                            key={booth.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.05,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                          >
                            <BoothCardWithHighlight
                              booth={booth}
                              index={index}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Standard Booths Section */}
                  {boothsByTier.standard.length > 0 && (
                    <div>
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <h2 className="text-xl font-semibold text-neutral-5 mb-2">
                          Standard Booths
                        </h2>
                        <div className="h-0.5 w-16 bg-neutral-4 rounded-full"></div>
                      </motion.div>
                      <div className="expo-booth-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {boothsByTier.standard.map((booth, index) => (
                          <motion.div
                            key={booth.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: (boothsByTier.platinum.length + index) * 0.05,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                          >
                            <BoothCardWithHighlight
                              booth={booth}
                              index={boothsByTier.platinum.length + index}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
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
                          <motion.button
                            key={suggestion.label}
                            onClick={suggestion.action}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full hover:bg-primary-blue/20 transition-colors text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            {index === 0 && <Building className="w-4 h-4" />}
                            {index === 1 && <Users className="w-4 h-4" />}
                            {index === 2 && <Briefcase className="w-4 h-4" />}
                            {suggestion.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      onClick={clearAllFilters}
                      className="px-8 py-3 bg-primary-blue text-white rounded-lg hover:bg-brand-navy transition-colors font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      View All Booths
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Initial Loading State */}
        {loadingState === 'loading' && (
          <div className="expo-booth-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {generateSkeletonCards()}
          </div>
        )}
      </div>
    </div>
  )
}
