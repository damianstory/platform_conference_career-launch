'use client'

import React from 'react'
import { EngagementActivityData } from '@/types/booth'
import SkillsGapQuiz from './SkillsGapQuiz'

interface EngagementActivityProps {
  activity: EngagementActivityData
  boothId?: string
  boothSlug?: string
  boothName?: string
  sessionTitle?: string
  associatedSessionSlug?: string
}

export default function EngagementActivity({ activity, boothId, boothSlug, boothName, sessionTitle, associatedSessionSlug }: EngagementActivityProps) {
  // If this is a quiz activity, render the SkillsGapQuiz component
  if (activity.embedType === 'skills-gap-quiz' && activity.quizData) {
    return <SkillsGapQuiz quizData={activity.quizData} boothId={boothId} boothSlug={boothSlug} boothName={boothName} sessionTitle={sessionTitle} associatedSessionSlug={associatedSessionSlug} />
  }

  // If embedUrl is empty, show a placeholder
  if (!activity.embedUrl) {
    return (
      <div className="relative w-full h-full rounded-xl shadow-md border border-blue-200 overflow-hidden transition-all duration-200 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-navy/60 font-medium">{activity.title}</p>
          <p className="text-navy/40 text-sm mt-2">{activity.description}</p>
        </div>
      </div>
    )
  }

  // Otherwise, render the iframe embed (existing behavior)
  return (
    <div className="relative w-full h-full rounded-xl shadow-md border border-blue-200 overflow-hidden transition-all duration-200 bg-gradient-to-br from-blue-50 to-blue-100">
      <iframe
        src={activity.embedUrl}
        title={activity.title}
        className="w-full h-full absolute inset-0"
        style={{ border: 0 }}
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  )
}
