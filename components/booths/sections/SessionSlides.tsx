'use client'

import React, { useState } from 'react'
import { Presentation, Maximize2, Loader2 } from 'lucide-react'
import { SessionSlidesData } from '@/types/booth'

interface SessionSlidesProps {
  slides: SessionSlidesData
}

export default function SessionSlides({ slides }: SessionSlidesProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl col-span-12 sm:col-span-6 lg:col-span-6 h-[400px] sm:h-[450px]">
      {/* Header */}
      <div className="px-4 py-2 border-b border-neutral-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="p-1.5 bg-primary-blue/10 rounded-lg flex-shrink-0">
            <Presentation className="w-4 h-4 text-primary-blue" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-subtitle-1 font-bold text-brand-navy truncate">{slides.title}</h3>
            {slides.description && (
              <p className="text-subtitle-2 text-neutral-4 line-clamp-1">{slides.description}</p>
            )}
          </div>
        </div>

        {/* Fullscreen Toggle Button - maintains 44px touch target */}
        <button
          onClick={handleFullscreenToggle}
          className="p-3.5 hover:bg-neutral-1 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 flex-shrink-0"
          aria-label="Toggle fullscreen"
        >
          <Maximize2 className="w-4 h-4 text-neutral-4 hover:text-primary-blue transition-colors" />
        </button>
      </div>

      {/* Slides Embed */}
      <div className="relative h-[calc(100%-56px)]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-1">
            <Loader2 className="w-10 h-10 text-primary-blue animate-spin" />
          </div>
        )}

        <iframe
          src={slides.embedUrl}
          className="w-full h-full"
          onLoad={handleIframeLoad}
          title={slides.title}
          allowFullScreen
          suppressHydrationWarning
        />
      </div>

      {/* Metadata Footer (if available) */}
      {slides.metadata && (
        <div className="px-6 py-3 border-t border-neutral-2 flex items-center gap-4 text-subtitle-1 text-neutral-4">
          {slides.metadata.date && (
            <span>📅 {slides.metadata.date}</span>
          )}
          {slides.metadata.duration && (
            <span>⏱ {slides.metadata.duration}</span>
          )}
          {slides.metadata.attendeeCount && (
            <span>👥 {slides.metadata.attendeeCount} attendees</span>
          )}
          {slides.status && (
            <span className={`ml-auto px-2 py-1 rounded-full text-subtitle-2 font-semibold ${
              slides.status === 'live' ? 'bg-green-100 text-green-700' :
              slides.status === 'recorded' ? 'bg-blue-100 text-blue-700' :
              'bg-neutral-2 text-neutral-5'
            }`}>
              {slides.status.toUpperCase()}
            </span>
          )}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          onClick={handleFullscreenToggle}
        >
          {/* Header */}
          <div className="p-4 bg-white/10 backdrop-blur-sm flex items-center justify-between">
            <h3 className="text-body-1 font-bold text-white">{slides.title}</h3>
            <button
              onClick={handleFullscreenToggle}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              aria-label="Close fullscreen"
            >
              ✕
            </button>
          </div>

          {/* Fullscreen Iframe */}
          <div className="flex-grow relative" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={slides.embedUrl}
              className="w-full h-full"
              title={slides.title}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}
