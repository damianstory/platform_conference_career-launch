'use client'

import type { Session } from '@/types';
import IndustryBadge from './IndustryBadge';
import { formatDescription } from '@/lib/formatDescription';
import { useRouter } from 'next/navigation';

interface SessionTableRowProps {
  session: Session;
  isExpanded: boolean;
  onToggle: () => void;
  variant?: 'default' | 'conference';
}

// Helper function to format grade level
const formatGradeLevel = (gradeLevel: string | null): string => {
  if (!gradeLevel) return 'All Grades';
  if (gradeLevel.includes('All')) return 'All Grades';
  if (gradeLevel.match(/7.*12/)) return '7-12';
  if (gradeLevel.match(/9.*10/)) return '9-10';
  if (gradeLevel.match(/11.*12/)) return '11-12';
  if (gradeLevel.match(/^(7|8|9|10|11|12)-/)) {
    return gradeLevel;
  }
  return 'All Grades';
};

export default function SessionTableRow({
  session,
  isExpanded,
  onToggle,
  variant = 'default',
}: SessionTableRowProps) {
  const router = useRouter();

  const handleWatchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/sessions/${session.slug}`);
  };

  const handleTrailerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Watch trailer:', session.id);
    // TODO: Implement trailer playback when needed
  };

  return (
    <>
      {/* Collapsed Row */}
      <tr
        className={`border-b cursor-pointer transition-colors duration-200 ${
          variant === 'conference'
            ? 'border-white/20 hover:bg-white/10'
            : 'border-gray-200 hover:bg-neutral-1'
        }`}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isExpanded}
        aria-label={`${session.title}. Click to ${isExpanded ? 'collapse' : 'expand'} details.`}
      >
        {/* Chevron Column (24px) */}
        <td className="py-5 pl-6 w-6">
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              variant === 'conference' ? 'text-white/60' : 'text-gray-400'
            } ${isExpanded ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </td>

        {/* Session Title Column (flex) */}
        <td className="py-5 pr-4">
          <span className={`text-lg font-semibold ${
            variant === 'conference' ? 'text-white' : 'text-navy'
          }`}>
            {session.title}
          </span>
        </td>

        {/* Industry Column (140px) - Hidden on mobile */}
        <td className="py-5 hidden md:table-cell text-center">
          <IndustryBadge industry={session.industries[0]} />
        </td>

        {/* Duration Column (100px) - Hidden on mobile */}
        <td className={`py-5 text-sm hidden md:table-cell text-center ${
          variant === 'conference' ? 'text-white/80' : 'text-gray-600'
        }`}>
          {session.duration} min
        </td>

        {/* Grade Level Column (120px) - Hidden on mobile */}
        <td className={`py-5 text-sm hidden md:table-cell text-center ${
          variant === 'conference' ? 'text-white/80' : 'text-gray-600'
        }`}>
          {formatGradeLevel(session.grade_level)}
        </td>

        {/* Action Column (180px) */}
        <td className="py-5 pr-6">
          <button
            className="btn-primary text-sm w-full md:w-28 px-4 py-2"
            onClick={handleWatchClick}
            aria-label={`Watch ${session.title} with your class`}
          >
            Watch
          </button>
        </td>
      </tr>

      {/* Expanded Row */}
      {isExpanded && (
        <tr>
          <td colSpan={6} className="p-0">
            <div
              className={`px-6 md:px-24 py-6 border-t animate-fadeIn ${
                variant === 'conference'
                  ? 'bg-white/5 border-white/20'
                  : 'bg-gray-50 border-gray-200'
              }`}
              role="region"
              aria-label={`Details for ${session.title}`}
            >
              {/* Mobile-only Industry Badge */}
              <div className="md:hidden mb-4">
                <IndustryBadge industry={session.industries[0]} />
              </div>

              {/* Description Section */}
              {session.description && (
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    variant === 'conference' ? 'text-white/90' : 'text-gray-700'
                  }`}>Description</h4>
                  <div className={`text-base leading-relaxed ${
                    variant === 'conference' ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {formatDescription(session.description)}
                  </div>
                </div>
              )}

              {/* Presenter Section */}
              {session.presenter_name && (
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    variant === 'conference' ? 'text-white/90' : 'text-gray-700'
                  }`}>Organization</h4>
                  <p className={`text-base ${variant === 'conference' ? 'text-white/80' : 'text-gray-600'}`}>
                    <span className="font-medium">{session.presenter_name}</span>
                    {session.presenter_bio && (
                      <span className={variant === 'conference' ? 'text-white/70' : 'text-gray-500'}> • {session.presenter_bio}</span>
                    )}
                  </p>
                </div>
              )}

              {/* Session Details (Mobile Duration) */}
              <div className="mb-4 md:hidden">
                <h4 className={`text-sm font-semibold mb-2 ${
                  variant === 'conference' ? 'text-white/90' : 'text-gray-700'
                }`}>Session Details</h4>
                <div className={`flex flex-wrap gap-4 text-sm ${
                  variant === 'conference' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  <div>
                    <span className="font-medium">Duration:</span> {session.duration} minutes
                  </div>
                  <div>
                    <span className="font-medium">Block:</span> {session.block_number}
                  </div>
                  <div>
                    <span className="font-medium">Grades:</span> {formatGradeLevel(session.grade_level)}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  className="btn-secondary text-sm px-4 py-2"
                  onClick={handleTrailerClick}
                  aria-label={`Watch trailer for ${session.title}`}
                >
                  Watch Trailer
                </button>
                <button
                  className="btn-primary text-sm w-full sm:w-36 px-4 py-2 whitespace-nowrap"
                  onClick={handleWatchClick}
                  aria-label={`Watch ${session.title} with your class`}
                >
                  Watch Session
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
