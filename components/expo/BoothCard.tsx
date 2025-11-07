'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

interface BoothCardProps {
  booth: PlatinumBoothData | StandardBoothData
  index?: number
  isHighlighted?: boolean
}

export default function BoothCard({ booth, index = 0, isHighlighted = false }: BoothCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isImageError, setIsImageError] = useState(false)

  // Scroll into view when highlighted
  useEffect(() => {
    if (isHighlighted && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [isHighlighted])

  const handleImageLoad = () => {
    setIsImageLoading(false)
    setIsImageError(false)
  }

  const handleImageError = () => {
    setIsImageLoading(false)
    setIsImageError(true)
  }

  // Tier-specific styles
  const getTierStyles = () => {
    switch (booth.tier) {
      case 'platinum':
        return {
          wrapper: 'col-span-2',
          card: `
            bg-gradient-to-br from-primary-blue/20 via-primary-blue/5 to-primary-blue/15
            border-2 border-primary-blue/20 hover:border-primary-blue
            relative overflow-hidden
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-primary-blue/15 before:via-primary-blue/10 before:to-primary-blue/15
            before:opacity-0 hover:before:opacity-100 before:transition-opacity
          `,
          badge: 'bg-gradient-to-r from-primary-blue to-brand-navy text-white shadow-lg shadow-primary-blue/30',
          glow: 'hover:shadow-2xl hover:shadow-primary-blue/25 transform hover:scale-[1.02]',
          animation: 'animate-float',
          priority: 1
        }
      case 'standard':
        return {
          wrapper: 'col-span-1',
          card: 'bg-white border-2 border-neutral-2 hover:border-neutral-3',
          badge: 'bg-neutral-4 text-white',
          glow: 'hover:shadow-lg',
          priority: 2
        }
      default:
        return {
          wrapper: 'col-span-1',
          card: 'bg-off-white border-2 border-neutral-2',
          badge: 'bg-neutral-5 text-white',
          glow: '',
        }
    }
  }

  const styles = getTierStyles()

  // Enhanced wrapper component for platinum cards only
  const PlatinumCardEnhancements = ({ children, tier }: { children: React.ReactNode, tier: string }) => {
    if (tier === 'platinum') {
      return (
        <div className="relative group">
          {/* Shimmer effect on hover - only CSS hover, no JS state */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-effect group-hover:animate-shimmer"></div>

          {children}
        </div>
      )
    }
    return <>{children}</>
  }

  return (
    <PlatinumCardEnhancements tier={booth.tier}>
      <div className={`${styles.wrapper} booth-card-wrapper`}>
        <Link href={`/booths/${booth.slug}`}>
          <motion.div
            ref={cardRef}
            className={`
              booth-card group relative rounded-xl pt-3 pb-4 px-5 cursor-pointer flex flex-col
              ${styles.card} ${styles.glow}
              ${booth.tier === 'platinum' ? 'animate-float' : ''}
              ${isHighlighted ? 'ring-4 ring-primary-blue ring-offset-4 ring-offset-background-light' : ''}
              h-[280px]
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: isHighlighted ? [1, 1.05, 1] : 1
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            whileHover={{
              scale: 1.02,
              rotateY: booth.tier === 'platinum' ? 2 : 1,
              rotateX: booth.tier === 'platinum' ? -1 : -0.5,
              transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          >
            {/* Sparkle icon for highlighted booth */}
            {isHighlighted && (
              <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue text-white shadow-lg">
                  <Sparkles size={18} />
                </div>
              </motion.div>
            )}

            {/* Logo */}
            <motion.div
              className="mb-2 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <div className={`
                bg-white rounded-lg flex items-center justify-center overflow-hidden relative
                w-20 h-20 shadow-sm
              `}>
                {/* Loading skeleton for image */}
                {isImageLoading && booth.logo && (
                  <div className="absolute inset-0 skeleton rounded-lg" />
                )}

                {booth.logo && !isImageError ? (
                  <motion.img
                    src={booth.logo}
                    alt={`${booth.name} logo`}
                    className="w-full h-full object-contain p-2"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isImageLoading ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.div
                    className="text-2xl font-bold text-neutral-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {booth.name.substring(0, 2).toUpperCase()}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div
              className="flex-grow flex flex-col space-y-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05 + 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <h3 className="text-body-1 font-black text-brand-navy line-clamp-2" title={booth.name}>
                {booth.name}
              </h3>
              <p className="text-body-2 font-light text-neutral-5 line-clamp-2" title={booth.tagline}>
                {booth.tagline}
              </p>
            </motion.div>

            {/* Hover CTA - Pure CSS hover */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-primary-blue text-white text-center py-2 px-4 rounded-lg font-medium text-sm shadow-lg hover:bg-brand-navy transition-colors">
                Visit Booth →
              </div>
            </div>

            {/* Decorative Elements for Platinum Tier - Pure CSS hover */}
            {booth.tier === 'platinum' && (
              <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-blue/15 to-primary-blue/10 rounded-full blur-3xl opacity-60 scale-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-primary-blue/10 to-primary-blue/5 rounded-full blur-3xl opacity-50 scale-100 group-hover:opacity-70 group-hover:scale-120 transition-all duration-400"></div>
              </div>
            )}
          </motion.div>
        </Link>
      </div>
    </PlatinumCardEnhancements>
  )
}
