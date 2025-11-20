'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/types/booth'
import { getExternalLinkAriaLabel } from '@/lib/utils/accessibility'

interface BoothHeaderProps {
  name: string
  logo: string
  imageScale?: number
  tagline: string
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  website?: string
}

export default function BoothHeader({
  name,
  logo,
  imageScale,
  tagline,
  primaryCTA,
  secondaryCTA,
  website
}: BoothHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,146,255,0.12),0_2px_4px_rgba(34,34,76,0.06)] border-2 border-primary-blue/20 overflow-hidden transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,146,255,0.18),0_4px_8px_rgba(34,34,76,0.08)] col-span-12">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,146,255,0.08),0_2px_4px_rgba(34,34,76,0.05)] ring-2 ring-white flex items-center justify-center overflow-hidden">
              {logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-full h-full object-contain"
                  style={imageScale ? { transform: `scale(${imageScale})` } : undefined}
                />
              ) : (
                <div className="text-2xl font-bold text-neutral-3">
                  {name.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-1 min-w-0 max-w-2xl space-y-2">
            <h1 className="text-[36px] font-black text-brand-navy leading-tight tracking-tight max-w-[600px]">
              {name === 'Royal Canadian Air Force' ? (
                <>
                  Royal Canadian
                  <br />
                  Air Force
                </>
              ) : (
                name
              )}
            </h1>
            <p className="text-[18px] text-[#4A4A6C] font-normal leading-relaxed max-w-[600px]">
              {tagline}
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-shrink-0 w-full lg:w-auto">
            <a
              href={primaryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getExternalLinkAriaLabel(primaryCTA.text)}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full lg:w-auto lg:min-w-[180px]"
            >
              <span className="truncate">{primaryCTA.text}</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
