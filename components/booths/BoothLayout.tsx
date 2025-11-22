'use client'

import React from 'react'
import { PlatinumBoothData, StandardBoothData } from '@/types/booth'
import BoothHeader from './sections/BoothHeader'
import VideoSection from './sections/VideoSection'
import EngagementActivity from './sections/EngagementActivity'
import ResourceCards from './sections/ResourceCards'
import SessionSlides from './sections/SessionSlides'
import SessionBanner from './sections/SessionBanner'
import CompanyStory from './sections/CompanyStory'
import ContactInfo from './sections/ContactInfo'

interface BoothLayoutProps {
  booth: PlatinumBoothData | StandardBoothData
}

export default function BoothLayout({ booth }: BoothLayoutProps) {
  const isPlatinum = booth.tier === 'platinum'

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 12-column bento grid with consistent gaps */}
      <div className="grid grid-cols-12 gap-4 sm:gap-6 w-full" style={{ isolation: 'isolate' }}>

        {/* Booth Header - Always shown, full width */}
        <BoothHeader
          name={booth.name}
          logo={booth.logo}
          imageScale={booth.imageScale}
          tagline={booth.tagline}
          primaryCTA={booth.primaryCTA}
          website={booth.website}
        />

        {/* Video Section - Always shown */}
        <div className={`col-span-12 h-[450px] lg:h-[500px] ${isPlatinum ? 'lg:col-span-4' : 'lg:col-span-8'}`}>
          <VideoSection video={booth.video} />
        </div>

        {/* Engagement Activity - Platinum only */}
        {isPlatinum && booth.tier === 'platinum' && booth.engagementActivity && (
          <div className="col-span-12 lg:col-span-8 h-[450px] lg:h-[500px]">
            <EngagementActivity />
          </div>
        )}

        {/* Resources - Always shown */}
        <ResourceCards
          resources={booth.resources}
          colSpan={isPlatinum ? 'lg:col-span-6' : 'lg:col-span-4'}
          layout={isPlatinum ? 'grid' : 'vertical'}
          secondaryCTA={booth.secondaryCTA}
        />

        {/* Session Slides - Platinum only */}
        {isPlatinum && booth.tier === 'platinum' && booth.sessionSlides && (
          <SessionSlides slides={booth.sessionSlides} />
        )}

        {/* Session Banner - Platinum only, if associated session exists */}
        {isPlatinum && booth.tier === 'platinum' && booth.associatedSessionSlug && (
          <SessionBanner sessionSlug={booth.associatedSessionSlug} />
        )}

        {/* Company Story - Always shown */}
        <CompanyStory
          description={booth.description}
          quickFacts={booth.tier === 'platinum' ? booth.quickFacts : undefined}
        />

        {/* Contact Info - Always shown */}
        <ContactInfo contact={{ ...booth.contact, website: booth.website }} />

      </div>
    </div>
  )
}
