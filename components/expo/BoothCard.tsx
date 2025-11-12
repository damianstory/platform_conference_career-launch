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

    // If only one word, return it on second line with empty first line for visual consistency
    if (words.length === 1) {
      return ['', title]
    }

    // For 2-word titles: Always split 1 word per line for visual consistency
    if (words.length === 2) {
      return [words[0], words[1]]
    }

    // Hardcoded exceptions for specific titles that should display on 2 lines
    const twoLineExceptions: { [key: string]: [string, string] } = {
      'Kids Help Phone': ['Kids Help', 'Phone'],
      'thinkAG & CAHRC': ['thinkAG &', 'CAHRC'],
      'Vox Pop Labs': ['Vox Pop', 'Labs'],
      'Ernst & Young': ['Ernst', '& Young']
    }

    if (twoLineExceptions[title]) {
      return twoLineExceptions[title]
    }

    // For 3+ word titles that are short enough to fit on one line (like "Cielle & Co.")
    // treat them like single-word titles for visual consistency
    const MAX_SINGLE_LINE_CHARS = 15
    if (title.length <= MAX_SINGLE_LINE_CHARS) {
      return ['', title]
    }

    // For 3+ word titles: Use character-based splitting to avoid ellipsis on first line
    // Max ~17-18 characters on first line to prevent truncation
    const MAX_FIRST_LINE_CHARS = 18

    let firstLineWords: string[] = []
    let currentLength = 0

    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length
      const spaceLength = firstLineWords.length > 0 ? 1 : 0
      const projectedLength = currentLength + spaceLength + wordLength

      // Check if adding this word would exceed the limit
      if (projectedLength >= MAX_FIRST_LINE_CHARS && firstLineWords.length > 0) {
        break
      }

      firstLineWords.push(words[i])
      currentLength = projectedLength
    }

    // Ensure we have at least one word on first line
    if (firstLineWords.length === 0) {
      firstLineWords.push(words[0])
    }

    // Ensure we don't put ALL words on first line (must split for 2-line consistency)
    if (firstLineWords.length === words.length && words.length > 2) {
      // Move last word(s) to second line to ensure 2-line display
      firstLineWords = words.slice(0, -1)
    }

    const firstLine = firstLineWords.join(' ')
    const secondLine = words.slice(firstLineWords.length).join(' ')

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
          glow: 'shadow-[0_4px_16px_rgba(0,146,255,0.12),0_2px_6px_rgba(34,34,76,0.06)] hover:shadow-[0_12px_32px_rgba(0,146,255,0.25),0_4px_12px_rgba(34,34,76,0.08)] transform hover:scale-[1.02]',
          animation: 'animate-float',
          priority: 1
        }
      case 'standard':
        return {
          wrapper: 'col-span-1',
          card: 'bg-white border-2 border-neutral-2/60 hover:border-primary-blue/30',
          badge: 'bg-neutral-4 text-white',
          glow: 'shadow-[0_2px_6px_rgba(34,34,76,0.04)] hover:shadow-[0_6px_20px_rgba(0,146,255,0.12),0_2px_8px_rgba(34,34,76,0.06)]',
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
        <div className={`bg-white rounded-lg flex items-center justify-center overflow-hidden relative w-20 h-20 shadow-sm ${booth.tier === 'standard' ? 'border border-primary-blue/20' : ''} ${booth.id === 'career-myth-buster' ? 'p-2' : ''}`}>
          {booth.logo && !isImageError ? (
            <Image
              src={booth.logo}
              alt={`${booth.name} logo`}
              width={80}
              height={80}
              className="object-contain w-full h-full"
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
          <div className="line-clamp-1">{titleLine1 || '\u00A0'}</div>
          <div className="line-clamp-1">{titleLine2 || '\u00A0'}</div>
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
