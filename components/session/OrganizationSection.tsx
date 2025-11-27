'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { PlatinumBoothData, StandardBoothData } from '@/types/booth';
import { useSessionContext } from '@/lib/hooks/useSessionContext';

interface OrganizationSectionProps {
  name: string;
  lessonPlanUrl: string | null;
  booth?: PlatinumBoothData | StandardBoothData;
  sessionSlug: string;
  sessionTitle: string;
  showBoothPlaceholder?: boolean;
}

export default function OrganizationSection({
  name,
  lessonPlanUrl,
  booth,
  sessionSlug,
  sessionTitle,
  showBoothPlaceholder = false,
}: OrganizationSectionProps) {
  const router = useRouter();
  const { saveContext } = useSessionContext();

  const handleVisitBooth = () => {
    if (booth) {
      // Store session context before navigating to booth
      saveContext(sessionSlug, sessionTitle, booth.slug);
      // Navigate to booth page
      router.push(`/booths/${booth.slug}`);
    }
  };

  const handleViewLessonPlan = () => {
    if (lessonPlanUrl) {
      window.open(lessonPlanUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Show booth card if booth exists OR if placeholder is requested
  const showBoothCard = booth || showBoothPlaceholder;

  return (
    <div className={`grid grid-cols-1 ${showBoothCard ? 'lg:grid-cols-2' : ''} gap-6 mb-6`}>
      {/* Left Card: Booth Discovery CTA (shown if booth exists or placeholder requested) */}
      {showBoothCard && (
        <div className="flex flex-col bg-gradient-to-br from-light-blue/20 to-blue/10 rounded-xl border border-primary-blue/20 p-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)] transition-all duration-300 hover:border-primary-blue hover:shadow-[0_8px_32px_rgba(0,146,255,0.2)] hover:-translate-y-0.5">
          {/* Header */}
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-blue mb-4">
            Explore Their Booth
          </h3>

          {/* Content */}
          <div className="flex flex-col flex-1 gap-4">
            {/* Value Proposition */}
            <p className="text-sm leading-relaxed text-navy/80">
              Visit their booth to explore additional resources from {name}.
            </p>

            {/* CTA Button - only functional if booth exists */}
            <button
              onClick={booth ? handleVisitBooth : undefined}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-base shadow-md hover:bg-brand-navy hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 mt-auto"
            >
              <span>Visit Booth</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </div>
      )}

      {/* Right Card: myBlueprint Lesson Plan */}
      <div className="flex flex-col bg-gradient-to-br from-light-blue/20 to-blue/10 rounded-xl border border-primary-blue/20 p-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)] transition-all duration-300 hover:border-primary-blue hover:shadow-[0_8px_32px_rgba(0,146,255,0.2)] hover:-translate-y-0.5">
        {/* Header */}
        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-blue mb-4">
          myBlueprint Lesson Plan
        </h3>

        {/* Content */}
        <div className="flex flex-col flex-1 gap-4">
          {/* Value Proposition */}
          <p className="text-sm leading-relaxed text-navy/80">
            Explore this pre- and post-resource that will support your students with further exploration and reflection.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleViewLessonPlan}
            disabled={!lessonPlanUrl}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-base shadow-md hover:bg-brand-navy hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 mt-auto"
          >
            <span>View Lesson Plan</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
