'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { getSessionBySlug } from '@/data/sample-sessions'

interface SessionBannerProps {
  sessionSlug: string
}

export default function SessionBanner({ sessionSlug }: SessionBannerProps) {
  // Fetch session data
  const session = getSessionBySlug(sessionSlug)

  // If session not found, return null (defensive)
  if (!session) {
    console.warn(`SessionBanner: Session not found for slug "${sessionSlug}"`)
    return null
  }

  return (
    <Link
      href={`/sessions/${session.slug}`}
      className="col-span-12 block group"
      aria-label={`Watch career session: ${session.title} from Block ${session.block_number}`}
    >
      <div className="
        bg-white
        rounded-xl
        shadow-[0_4px_12px_rgba(0,146,255,0.12),0_2px_4px_rgba(34,34,76,0.06)]
        border-2
        border-primary-blue/30
        overflow-hidden
        transition-all
        duration-200
        hover:shadow-[0_8px_24px_rgba(0,146,255,0.18),0_4px_8px_rgba(34,34,76,0.08)]
        hover:border-primary-blue/40
        p-6
        min-h-[120px]
      ">
        {/* Subtle blue tint overlay */}
        <div className="absolute inset-0 bg-primary-blue/[0.02] pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left Content */}
          <div className="space-y-2 flex-1 min-w-0 max-w-3xl">
            {/* Label */}
            <div className="text-xs font-bold uppercase tracking-wider text-primary-blue">
              Career Launch Session from This Organization
            </div>

            {/* Session Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-navy leading-tight">
              {session.title}
            </h3>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full lg:w-auto lg:min-w-[180px]">
              <span className="truncate">Watch Session</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
