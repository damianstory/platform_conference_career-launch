'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Loader2 } from 'lucide-react'
import { VideoContent } from '@/types/booth'

interface VideoSectionProps {
  video: VideoContent
}

export default function VideoSection({ video }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handlePlayClick = () => {
    setIsPlaying(true)
    setIsLoading(true)
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Convert video URL to embed URL
  const getEmbedUrl = (url: string, type: string): string => {
    switch (type) {
      case 'youtube': {
        const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url
      }
      case 'vimeo': {
        const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
        return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : url
      }
      case 'google-drive': {
        const fileId = url.match(/\/file\/d\/([^/]+)/)?.[1]
        return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url
      }
      default:
        return url
    }
  }

  const embedUrl = getEmbedUrl(video.url, video.type)

  return (
    <div
      ref={videoRef}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl col-span-12 sm:col-span-6 lg:col-span-4 h-[300px] sm:h-[400px] lg:h-[500px]"
    >
      <div className="relative w-full h-full">
        {!isPlaying ? (
          <>
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-2 to-neutral-3">
              {video.thumbnail && isVisible ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-6xl mb-4">🎥</div>
                    <h3 className="text-header-4 font-bold text-brand-navy mb-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-body-2 text-neutral-5 line-clamp-2">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
              <button
                onClick={handlePlayClick}
                className="group w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-4"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-primary-blue ml-1 group-hover:text-brand-navy transition-colors" fill="currentColor" />
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-1">
                <Loader2 className="w-12 h-12 text-primary-blue animate-spin" />
              </div>
            )}

            {/* Video Iframe */}
            {isVisible && (
              <iframe
                src={embedUrl}
                title={video.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleIframeLoad}
                suppressHydrationWarning
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}
