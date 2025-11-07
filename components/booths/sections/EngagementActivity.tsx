'use client'

import React, { useState } from 'react'
import { Sparkles, Loader2, Trophy } from 'lucide-react'
import { EngagementActivityData } from '@/types/booth'

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
      className="relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-rotate-1 col-span-12 sm:col-span-6 lg:col-span-8 h-[400px] sm:h-[450px] lg:h-[500px]"
      style={gradientStyle}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl backdrop-blur-sm" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-navy/15 rounded-full blur-3xl backdrop-blur-sm" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 z-10">
          <div className="flex-grow">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md mb-3">
              <Sparkles className="w-4 h-4 text-primary-blue" />
              <span className="text-compact font-semibold text-brand-navy">
                Interactive Activity
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-header-4 font-bold text-brand-navy mb-2">
              {activity.title}
            </h3>
            <p className="text-body-2 text-neutral-5 line-clamp-2">
              {activity.description}
            </p>
            {activity.duration && (
              <p className="text-compact text-neutral-4 mt-1">
                Duration: {activity.duration}
              </p>
            )}
          </div>

          {/* Prize Card (if available) */}
          {activity.prize && (
            <div className="ml-4 bg-white rounded-lg p-3 shadow-md max-w-[180px] flex-shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-compact font-semibold text-brand-navy">Prize</span>
              </div>
              <p className="text-subtitle-1 font-bold text-primary-blue line-clamp-2">
                {activity.prize.title}
              </p>
              <p className="text-subtitle-2 text-neutral-4 line-clamp-2 mt-0.5">
                {activity.prize.description}
              </p>
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
