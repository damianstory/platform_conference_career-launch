'use client'

import React, { useState, useRef, useEffect } from 'react'
import { VideoContent } from '@/types/booth'

interface VideoSectionProps {
  video: VideoContent
}

export default function VideoSection({ video }: VideoSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const currentRef = videoRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Convert video URL to embed URL
  const getEmbedUrl = (url: string, type: string): string => {
    switch (type) {
      case 'youtube': {
        const videoId = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&]+)/)?.[1]
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url
      }
      case 'vimeo': {
        const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
        return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : url
      }
      case 'google-drive': {
        const fileId = url.match(/\/file\/d\/([^/]+)/)?.[1]
        return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url
      }
      case 'instagram': {
        // Match both /reel/{id} and /p/{id} formats
        const contentId = url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/)?.[1]
        if (contentId) {
          // Determine if it's a reel or post based on URL
          const isReel = url.includes('/reel/')
          const contentType = isReel ? 'reel' : 'p'
          return `https://www.instagram.com/${contentType}/${contentId}/embed/`
        }
        return url
      }
      default:
        return url
    }
  }

  const embedUrl = getEmbedUrl(video.url, video.type)

  return (
    <div
      ref={videoRef}
      className="bg-gray-800 rounded-xl shadow-[0_3px_10px_rgba(34,34,76,0.08),0_1px_3px_rgba(34,34,76,0.04)] border border-gray-200/50 ring-1 ring-primary-blue/5 overflow-hidden transition-all duration-200 hover:shadow-md h-full"
    >
      <div className="relative w-full h-full">
        {/* Video Iframe - loads immediately when visible */}
        {isVisible && (
          <iframe
            src={embedUrl}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            suppressHydrationWarning
          />
        )}
      </div>
    </div>
  )
}
