'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, Loader2, X, Download, FileText } from 'lucide-react'
import { SessionSlidesData } from '@/types/booth'
import { BoothDetailAnalytics } from '@/lib/analytics'

interface SessionSlidesProps {
  slides: SessionSlidesData
  boothId?: string
  boothName?: string
}

/**
 * Converts sharing URLs to embed URLs
 * Supports Google Slides, Google Drive PDFs, Dropbox PPTX, and local PPTX files
 */
function convertToEmbedUrl(url: string, type?: 'google-slides' | 'google-drive-pdf' | 'dropbox-pptx' | 'local-pptx'): string {
  // If already an embed URL, return as is
  if (url.includes('/embed') || url.includes('/preview') || url.includes('view.officeapps.live.com')) {
    return url
  }

  // Auto-detect type if not provided
  let detectedType = type
  if (!detectedType) {
    if (url.includes('docs.google.com/presentation')) {
      detectedType = 'google-slides'
    } else if (url.includes('drive.google.com/file')) {
      detectedType = 'google-drive-pdf'
    } else if (url.includes('dropbox.com') && url.includes('.pptx')) {
      detectedType = 'dropbox-pptx'
    } else if (url.startsWith('/') && url.includes('.pptx')) {
      detectedType = 'local-pptx'
    }
  }

  // Convert Google Slides URLs
  if (detectedType === 'google-slides') {
    // Extract presentation ID from URLs like:
    // /d/{ID}/edit or /d/{ID}/edit?params
    const slideMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
    if (slideMatch && slideMatch[1]) {
      return `https://docs.google.com/presentation/d/${slideMatch[1]}/embed?start=false&loop=false`
    }
  }

  // Convert Google Drive PDF URLs
  if (detectedType === 'google-drive-pdf') {
    // Extract file ID from URLs like:
    // /d/{FILE_ID}/view or /file/d/{FILE_ID}/view
    const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`
    }
  }

  // Convert Dropbox PPTX URLs to Office Online viewer
  if (detectedType === 'dropbox-pptx') {
    // Convert Dropbox sharing URL to raw/direct link
    // Change dl=0 to raw=1 for direct access
    let rawUrl = url.replace(/dl=0/, 'raw=1').replace(/&e=\d+/, '')
    // Use Microsoft Office Online viewer to embed the PPTX
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(rawUrl)}`
  }

  // Local PPTX files - construct full URL for Office Online
  if (detectedType === 'local-pptx') {
    // In production, construct the full public URL
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin
      const fullUrl = `${baseUrl}${url}`
      // Only use Office Online in production (not localhost)
      if (!baseUrl.includes('localhost')) {
        return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fullUrl)}`
      }
    }
    // Return original URL for local dev (will show download option)
    return url
  }

  // If no conversion needed or format not recognized, return original
  return url
}

/**
 * Check if we're in local development
 */
function isLocalDev(): boolean {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  }
  return false
}

export default function SessionSlides({ slides, boothId, boothName }: SessionSlidesProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isLocal, setIsLocal] = useState(false)

  // Check if local dev on mount
  useEffect(() => {
    setIsLocal(isLocalDev())
  }, [])

  // Check if this is a local PPTX that can't be embedded in dev
  const isLocalPptxInDev = isLocal && slides.type === 'local-pptx'

  // Convert URL to proper embed format
  const embedUrl = convertToEmbedUrl(slides.embedUrl, slides.type)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleFullscreenToggle = () => {
    const newFullscreenState = !isFullscreen
    setIsFullscreen(newFullscreenState)
    // Track fullscreen toggle
    if (boothId && boothName) {
      BoothDetailAnalytics.slidesFullscreenToggled(boothId, boothName, newFullscreenState)
    }
  }

  // Handle component mount for portal
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle ESC key to close fullscreen
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscapeKey)
      // Prevent body scroll when fullscreen
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = ''
    }
  }, [isFullscreen])

  return (
    <div className="bg-white rounded-xl shadow-[0_3px_10px_rgba(34,34,76,0.08),0_1px_3px_rgba(34,34,76,0.04)] border border-gray-200/50 ring-1 ring-primary-blue/5 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-6">
      {/* Header */}
      <div className="px-6 py-2 border-b border-gray-200 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-gray-900 truncate min-w-0 flex-1">Session Deck</h3>

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
        {isLocalPptxInDev ? (
          /* Local dev fallback for PPTX files */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-1 p-8">
            <FileText className="w-16 h-16 text-neutral-4 mb-4" />
            <p className="text-neutral-5 text-center mb-4">
              PowerPoint preview is available in production.
            </p>
            <a
              href={slides.embedUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Presentation
            </a>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-1">
                <Loader2 className="w-10 h-10 text-primary-blue animate-spin" />
              </div>
            )}

            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              onLoad={handleIframeLoad}
              title={slides.title}
              allowFullScreen
              suppressHydrationWarning
            />
          </>
        )}
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

      {/* Fullscreen Modal - Rendered via Portal */}
      {mounted && isFullscreen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex flex-col"
          onClick={handleFullscreenToggle}
        >
          {/* Header */}
          <div className="p-4 bg-white/15 backdrop-blur-md flex items-center justify-between border-b border-white/20">
            <h3 className="text-body-1 font-bold text-white">myBlueprint Career Launch: Session Deck</h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleFullscreenToggle()
              }}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 text-white shadow-lg hover:shadow-xl flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Fullscreen Iframe */}
          <div className="flex-grow relative" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={embedUrl}
              className="w-full h-full"
              title={slides.title}
              allowFullScreen
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
