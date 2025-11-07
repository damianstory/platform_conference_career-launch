'use client'

import React, { useState } from 'react'
import { Sparkles, Loader2 } from 'lucide-react'
import { EngagementActivityData } from '@/types/booth'
import SectionLabel from '../shared/SectionLabel'
import PrizeBox from '../shared/PrizeBox'

interface EngagementActivityProps {
  activity: EngagementActivityData
  brandColors?: {
    primary: string
    secondary?: string
  }
}

export default function EngagementActivity({ activity, brandColors }: EngagementActivityProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Create gradient background using brand colors or defaults
  const gradientStyle = brandColors
    ? {
        background: `linear-gradient(135deg, ${brandColors.primary}15 0%, ${brandColors.secondary || brandColors.primary}25 50%, ${brandColors.primary}15 100%)`
      }
    : {
        background: 'linear-gradient(135deg, #0092FF15 0%, #22224C25 50%, #0092FF15 100%)'
      }

  return (
    <div
      className="relative rounded-xl shadow-md border border-blue-200 overflow-hidden transition-all duration-200 col-span-12 lg:col-span-8 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      {/* Content Container */}
      <div className="relative h-full flex flex-col p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 z-10">
          <div className="flex-grow">
            {/* Section Label */}
            <div className="mb-3">
              <SectionLabel text="Interactive Activity" icon={Sparkles} />
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                {activity.title}
              </h2>
              <p className="text-base leading-relaxed text-gray-600 line-clamp-2">
                {activity.description}
              </p>
              {activity.duration && (
                <p className="text-sm text-gray-500">
                  Duration: {activity.duration}
                </p>
              )}
            </div>
          </div>

          {/* Prize Box (if available) */}
          {activity.prize && (
            <div className="ml-4 max-w-[200px] flex-shrink-0">
              <PrizeBox
                title={activity.prize.title}
                description={activity.prize.description}
              />
            </div>
          )}
        </div>

        {/* Activity Embed */}
        <div className="flex-grow relative bg-white rounded-lg overflow-hidden shadow-md">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-1">
              <Loader2 className="w-10 h-10 text-primary-blue animate-spin" />
            </div>
          )}

          {activity.embedType === 'google-form' && (
            <iframe
              src={activity.embedUrl}
              className="w-full h-full"
              onLoad={handleIframeLoad}
              title={activity.title}
              suppressHydrationWarning
            >
              Loading...
            </iframe>
          )}

          {activity.embedType === 'skills-gap-quiz' && (
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary-blue" />
                </div>
                <h4 className="text-header-4 font-bold text-brand-navy mb-2">
                  {activity.title}
                </h4>
                <p className="text-body-2 text-neutral-5 mb-4">
                  {activity.description}
                </p>
                <button
                  className="px-6 py-3 bg-white text-brand-navy border-2 border-brand-navy rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition-all duration-200"
                  onClick={() => window.open(activity.embedUrl, '_blank')}
                >
                  Start Activity
                </button>
              </div>
            </div>
          )}

          {activity.embedType === 'iframe' && (
            <iframe
              src={activity.embedUrl}
              className="w-full h-full"
              onLoad={handleIframeLoad}
              title={activity.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              suppressHydrationWarning
            />
          )}
        </div>
      </div>
    </div>
  )
}
