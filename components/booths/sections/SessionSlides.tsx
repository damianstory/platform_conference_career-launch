'use client'

import React, { useState } from 'react'
import { Maximize2, Loader2 } from 'lucide-react'
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-6">
      {/* Header */}
      <div className="px-6 py-2 border-b border-gray-200 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-gray-900 truncate min-w-0 flex-1">Your Session Deck Here</h3>

        {/* Fullscreen Toggle Button */}
        <button
          onClick={handleFullscreenToggle}
          className="p-2 hover:bg-neutral-1 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 flex-shrink-0"
          aria-label="Toggle fullscreen"
        >
          <Maximize2 className="w-3.5 h-3.5 text-neutral-4 hover:text-primary-blue transition-colors" />
        </button>
      </div>

      {/* Slides Embed */}
      <div className="relative aspect-[16/10]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-1">
            <Loader2 className="w-10 h-10 text-primary-blue animate-spin" />
          </div>
        )}

        <iframe
          src={slides.embedUrl}
          className="absolute inset-0 w-full h-full"
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
