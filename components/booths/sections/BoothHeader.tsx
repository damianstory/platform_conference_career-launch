'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/types/booth'
import { getExternalLinkAriaLabel } from '@/lib/utils/accessibility'

interface BoothHeaderProps {
  name: string
  logo: string
  tagline: string
  primaryCTA: CTAButton
  secondaryCTA: CTAButton
  website?: string
}

export default function BoothHeader({
  name,
  logo,
  tagline,
  primaryCTA,
  secondaryCTA,
  website
}: BoothHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-2 border-primary-blue overflow-hidden transition-all duration-200 hover:shadow-md col-span-12">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
              {logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <div className="text-2xl font-bold text-neutral-3">
                  {name.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-grow space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {name}
            </h1>
            <p className="text-base text-gray-600">
              {tagline}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={primaryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getExternalLinkAriaLabel(primaryCTA.text)}
              className="inline-flex items-center justify-center gap-2 px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 flex-1 sm:flex-initial sm:min-w-[220px] whitespace-nowrap"
            >
              {primaryCTA.text}
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>

            <a
              href={secondaryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getExternalLinkAriaLabel(secondaryCTA.text)}
              className="inline-flex items-center justify-center gap-2 px-6 h-[56px] bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 flex-1 sm:flex-initial sm:min-w-[220px] whitespace-nowrap"
            >
              {secondaryCTA.text}
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
