'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

interface BoothCardProps {
  booth: PlatinumBoothData | StandardBoothData
  index?: number
}

export default function BoothCard({ booth, index = 0 }: BoothCardProps) {
  const [isImageError, setIsImageError] = useState(false)

  const handleImageError = () => {
    setIsImageError(true)
  }

  // Split title into two lines for consistent display
  const splitTitle = (title: string): [string, string] => {
    const words = title.split(' ')

    // If only one word, return it on first line with empty second line
    if (words.length === 1) {
      return [title, '']
    }

    // Find the midpoint to split
    const midpoint = Math.ceil(words.length / 2)
    const firstLine = words.slice(0, midpoint).join(' ')
    const secondLine = words.slice(midpoint).join(' ')

    return [firstLine, secondLine]
  }

  const [titleLine1, titleLine2] = splitTitle(booth.name)

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

  // Check if this is an external booth (only StandardBoothData can have externalUrl)
  const isExternalBooth = booth.tier === 'standard' && 'externalUrl' in booth && booth.externalUrl
  const linkUrl = (isExternalBooth && 'externalUrl' in booth && booth.externalUrl) ? booth.externalUrl : `/booths/${booth.slug}`
  const ctaText = 'Visit Booth →'

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

  // Card content wrapper
  const CardContent = () => (
    <div className={`
      booth-card group relative rounded-xl pt-3 pb-4 px-5 cursor-pointer flex flex-col
      ${styles.card} ${styles.glow}
      h-[280px]
      transition-all duration-200 hover:scale-102 active:scale-98
    `}>
      {/* Logo */}
      <div className="mb-2 flex-shrink-0">
        <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden relative w-20 h-20 shadow-sm">
          {booth.logo && !isImageError ? (
            <Image
              src={booth.logo}
              alt={`${booth.name} logo`}
              width={80}
              height={80}
              className="object-contain"
              onError={handleImageError}
              unoptimized
            />
          ) : (
            <div className="text-2xl font-bold text-neutral-3">
              {booth.name.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
      </div>

      {/* Company Info */}
      <div className="flex-grow flex flex-col space-y-2">
        <h3 className="text-body-1 font-black text-brand-navy" title={booth.name}>
          <div className="line-clamp-1">{titleLine1}</div>
          {titleLine2 && <div className="line-clamp-1">{titleLine2}</div>}
        </h3>
        <p className="text-body-2 font-light text-neutral-5 line-clamp-2" title={booth.tagline}>
          {booth.tagline}
        </p>
      </div>

      {/* Hover CTA - Pure CSS hover */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-primary-blue text-white text-center py-2 px-4 rounded-lg font-medium text-sm shadow-lg hover:bg-brand-navy transition-colors">
          {ctaText}
        </div>
      </div>

      {/* Decorative Elements for Platinum Tier - Pure CSS hover */}
      {booth.tier === 'platinum' && (
        <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-blue/15 to-primary-blue/10 rounded-full blur-3xl opacity-60 scale-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-primary-blue/10 to-primary-blue/5 rounded-full blur-3xl opacity-50 scale-100 group-hover:opacity-70 group-hover:scale-120 transition-all duration-400"></div>
        </div>
      )}
    </div>
  )

  return (
    <PlatinumCardEnhancements tier={booth.tier}>
      <div className={`${styles.wrapper} booth-card-wrapper`}>
        {isExternalBooth ? (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <CardContent />
          </a>
        ) : (
          <Link href={linkUrl}>
            <CardContent />
          </Link>
        )}
      </div>
    </PlatinumCardEnhancements>
  )
}
