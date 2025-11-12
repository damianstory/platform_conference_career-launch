'use client'

import { formatDescription } from '@/lib/formatDescription';

interface DescriptionSectionProps {
  description: string
}

export default function DescriptionSection({
  description,
}: DescriptionSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E9F1] p-6 mb-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
      {/* Header */}
      <h3 className="text-lg font-bold text-navy mb-4">About This Session</h3>

      {/* Description with formatted text, line breaks, and bullet points */}
      <div className="text-navy leading-[1.8]">
        {formatDescription(description)}
      </div>
    </div>
  )
}
