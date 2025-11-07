'use client'

import React from 'react'
import { PlatinumBoothData, StandardBoothData } from '@/types/booth'
import BoothHeader from './sections/BoothHeader'
import VideoSection from './sections/VideoSection'
import EngagementActivity from './sections/EngagementActivity'
import ResourceCards from './sections/ResourceCards'
import SessionSlides from './sections/SessionSlides'
import CompanyStory from './sections/CompanyStory'
import ContactInfo from './sections/ContactInfo'

interface BoothLayoutProps {
  booth: PlatinumBoothData | StandardBoothData
}

export default function BoothLayout({ booth }: BoothLayoutProps) {
  const isPlatinum = booth.tier === 'platinum'

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 12-column bento grid with consistent 24px gaps */}
      <div className="grid grid-cols-12 gap-6 w-full">

        {/* Booth Header - Always shown, full width */}
        <BoothHeader
          name={booth.name}
          logo={booth.logo}
          tagline={booth.tagline}
          primaryCTA={booth.primaryCTA}
          secondaryCTA={booth.secondaryCTA}
          website={booth.website}
        />

        {/* Video Section - Always shown */}
        <VideoSection video={booth.video} />

        {/* Engagement Activity - Platinum only */}
        {isPlatinum && booth.tier === 'platinum' && booth.engagementActivity && (
          <EngagementActivity
            activity={booth.engagementActivity}
            brandColors={booth.brandColors}
          />
        )}

        {/* Resources - Always shown */}
        <ResourceCards resources={booth.resources} />

        {/* Session Slides - Platinum only */}
        {isPlatinum && booth.tier === 'platinum' && booth.sessionSlides && (
          <SessionSlides slides={booth.sessionSlides} />
        )}

        {/* Company Story - Always shown */}
        <CompanyStory
          description={booth.description}
          quickFacts={booth.tier === 'platinum' ? booth.quickFacts : undefined}
        />

        {/* Contact Info - Always shown */}
        <ContactInfo contact={booth.contact} />

      </div>
    </div>
  )
}
