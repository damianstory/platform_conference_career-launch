'use client'

import { useState } from 'react';
import type { Session } from '@/types';
import IndustryBadge from './IndustryBadge';
import { formatDescription } from '@/lib/formatDescription';
import { useRouter } from 'next/navigation';
import { SessionAnalytics } from '@/lib/analytics';
import TrailerModal from '@/components/session/TrailerModal';
import { requestSessionPlayback } from '@/lib/sessionPlayback';

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
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  const handleToggleWithTracking = () => {
    // Track expand/collapse
    SessionAnalytics.expanded(session.id, session.title, !isExpanded);
    onToggle();
  };

  const handleWatchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Track watch click from table
    SessionAnalytics.watchClicked(session.id, session.title, 'table');
    requestSessionPlayback(session.slug);
    router.push(`/sessions/${session.slug}`);
  };

  const handleTrailerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Open trailer modal (analytics tracked inside modal)
    setIsTrailerModalOpen(true);
  };

  return (
    <>
      {/* Collapsed Row */}
      <tr
        className={`cursor-pointer transition-colors duration-200 ${
          session.isFeatured
            ? 'border-t-2 border-b-2 border-primary-blue'
            : variant === 'conference'
              ? 'border-b border-white/20 hover:bg-white/10'
              : 'border-b border-gray-200 hover:bg-neutral-1'
        } ${!session.isFeatured && (variant === 'conference' ? 'hover:bg-white/10' : 'hover:bg-neutral-1')}`}
        onClick={handleToggleWithTracking}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggleWithTracking();
          }
        }}
        aria-expanded={isExpanded}
        aria-label={`${session.title}. Click to ${isExpanded ? 'collapse' : 'expand'} details.`}
      >
        {/* Chevron Column (24px) */}
        <td className="py-5 pl-2 sm:pl-4 lg:pl-6 w-6">
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
          <div className="flex flex-col gap-1.5">
            {session.isFeatured && (
              <span className="inline-flex items-center gap-1.5 w-fit px-2.5 py-0.5 mb-1 bg-primary-blue text-white text-xs font-semibold uppercase tracking-wide rounded-full shadow-sm">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured Today
              </span>
            )}
            <span className={`text-lg font-semibold ${
              variant === 'conference' ? 'text-white' : 'text-navy'
            }`}>
              {session.title}
            </span>
          </div>
        </td>

        {/* Industry Column (140px) - Hidden on mobile */}
        <td className="py-5 hidden lg:table-cell text-center">
          <IndustryBadge industry={session.industries[0]} />
        </td>

        {/* Duration Column (100px) - Hidden on mobile */}
        <td className={`py-5 text-sm hidden lg:table-cell text-center ${
          variant === 'conference' ? 'text-white/80' : 'text-gray-600'
        }`}>
          {session.duration} min
        </td>

        {/* Grade Level Column (120px) - Hidden on mobile */}
        <td className={`py-5 text-sm hidden lg:table-cell text-center ${
          variant === 'conference' ? 'text-white/80' : 'text-gray-600'
        }`}>
          {formatGradeLevel(session.grade_level)}
        </td>

      </tr>

      {/* Expanded Row */}
      {isExpanded && (
        <tr>
          <td colSpan={5} className="p-0">
            <div
              className={`px-3 sm:px-6 lg:px-24 py-6 border-t animate-fadeIn ${
                variant === 'conference'
                  ? 'bg-white/5 border-white/20'
                  : 'bg-gray-50 border-gray-200'
              }`}
              role="region"
              aria-label={`Details for ${session.title}`}
            >
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
                <div className="mb-4 text-center sm:text-left">
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
              <div className="mb-4 lg:hidden text-center sm:text-left">
                <h4 className={`text-sm font-semibold mb-2 ${
                  variant === 'conference' ? 'text-white/90' : 'text-gray-700'
                }`}>Session Details</h4>
                <div className={`flex flex-col sm:flex-row gap-4 text-sm ${
                  variant === 'conference' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  <div>
                    <span className="font-medium">Industry:</span> {session.industries[0]}
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> {session.duration} minutes
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
                  aria-label={`Watch ${session.title}`}
                >
                  Watch Session
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerModalOpen}
        onClose={() => setIsTrailerModalOpen(false)}
        sessionTitle={session.title}
        sessionSlug={session.slug}
        trailerUrl={session.trailer_url || ''}
        sessionId={session.id}
      />
    </>
  );
}
