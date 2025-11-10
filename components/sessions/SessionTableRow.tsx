'use client'

import type { Session } from '@/types';
import IndustryBadge from './IndustryBadge';

interface SessionTableRowProps {
  session: Session;
  isExpanded: boolean;
  onToggle: () => void;
}

// Helper function to format grade level
const formatGradeLevel = (gradeLevel: string | null): string => {
  if (!gradeLevel) return 'All Grades';
  if (gradeLevel.includes('All')) return 'All Grades';
  if (gradeLevel.match(/9.*10/)) return 'Grades 9-10';
  if (gradeLevel.match(/11.*12/)) return 'Grades 11-12';
  if (gradeLevel.match(/^(9|10|11|12)-/)) {
    return `Grades ${gradeLevel}`;
  }
  return 'All Grades';
};

export default function SessionTableRow({
  session,
  isExpanded,
  onToggle,
}: SessionTableRowProps) {
  const handleWatchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Watch with class:', session.id);
    // TODO: Open registration modal when implemented
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
        className="border-b border-gray-200 hover:bg-neutral-1 cursor-pointer transition-colors duration-200"
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
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isExpanded ? 'rotate-90' : ''
            }`}
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
          <span className="text-lg font-semibold text-navy">
            {session.title}
          </span>
        </td>

        {/* Industry Column (140px) - Hidden on mobile */}
        <td className="py-5 hidden md:table-cell">
          <IndustryBadge industry={session.industry} />
        </td>

        {/* Duration Column (100px) - Hidden on mobile */}
        <td className="py-5 text-sm text-gray-600 hidden md:table-cell">
          {session.duration} min
        </td>

        {/* Grade Level Column (120px) */}
        <td className="py-5 text-sm text-gray-600">
          {formatGradeLevel(session.grade_level)}
        </td>

        {/* Action Column (180px) */}
        <td className="py-5 pr-6">
          <button
            className="btn-primary text-sm w-full md:w-auto px-4 py-2"
            onClick={handleWatchClick}
            aria-label={`Watch ${session.title} with your class`}
          >
            Watch with Class
          </button>
        </td>
      </tr>

      {/* Expanded Row */}
      {isExpanded && (
        <tr>
          <td colSpan={6} className="p-0">
            <div
              className="px-6 md:px-24 py-6 bg-gray-50 border-t border-gray-200 animate-fadeIn"
              role="region"
              aria-label={`Details for ${session.title}`}
            >
              {/* Mobile-only Industry Badge */}
              <div className="md:hidden mb-4">
                <IndustryBadge industry={session.industry} />
              </div>

              {/* Description Section */}
              {session.description && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {session.description}
                  </p>
                </div>
              )}

              {/* Learning Objectives Section */}
              {session.learning_objectives && session.learning_objectives.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Learning Objectives</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {session.learning_objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Presenter Section */}
              {session.presenter_name && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Presenter</h4>
                  <p className="text-gray-600">
                    <span className="font-medium">{session.presenter_name}</span>
                    {session.presenter_bio && (
                      <span className="text-gray-500"> • {session.presenter_bio}</span>
                    )}
                  </p>
                </div>
              )}

              {/* Session Details (Mobile Duration) */}
              <div className="mb-4 md:hidden">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Session Details</h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Duration:</span> {session.duration} minutes
                  </div>
                  <div>
                    <span className="font-medium">Block:</span> {session.block_number}
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
                  className="btn-primary text-sm px-4 py-2"
                  onClick={handleWatchClick}
                  aria-label={`Watch ${session.title} with your class`}
                >
                  Watch with Your Class
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
