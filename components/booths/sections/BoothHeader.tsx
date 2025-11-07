'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/types/booth'

interface BoothHeaderProps {
  name: string
  logo: string
  tagline: string
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
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
    <div className="bg-white rounded-xl shadow-lg border border-primary-blue overflow-hidden transition-all duration-300 hover:shadow-xl col-span-12">
      <div className="p-6 sm:p-8">
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
          <div className="flex-grow">
            <h1 className="text-header-3 sm:text-header-2 font-black text-brand-navy mb-2">
              {name}
            </h1>
            <p className="text-body-1 text-neutral-5 font-light">
              {tagline}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={primaryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
            >
              {primaryCTA.text}
              <ExternalLink className="w-4 h-4" />
            </a>

            {secondaryCTA && (
              <a
                href={secondaryCTA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
              >
                {secondaryCTA.text}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
