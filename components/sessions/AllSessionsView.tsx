'use client'

import { useState, useMemo } from 'react';
import type { Session } from '@/types';
import SessionFilters, { FilterState } from './SessionFilters';
import SessionTableRow from './SessionTableRow';

interface AllSessionsViewProps {
  sessions: Session[];
}

// Helper function to normalize grade level for filtering
const normalizeGradeLevel = (gradeLevel: string | null): string => {
  if (!gradeLevel) return 'All Grades';
  if (gradeLevel.includes('All')) return 'All Grades';
  if (gradeLevel.match(/9.*10/)) return '9-10';
  if (gradeLevel.match(/11.*12/)) return '11-12';
  return 'All Grades';
};

// Helper function to format grade level for display
const formatGradeLevel = (gradeLevel: string | null): string => {
  const normalized = normalizeGradeLevel(gradeLevel);
  return normalized === 'All Grades' ? 'All Grades' : `Grades ${normalized}`;
};

export default function AllSessionsView({ sessions }: AllSessionsViewProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    industry: '',
    gradeLevel: '',
    duration: '',
    search: '',
  });

  // Filter and sort sessions
  const filteredSessions = useMemo(() => {
    return sessions
      .filter((session) => {
        // Search filter (case-insensitive, searches title and description)
        if (filters.search) {
          const searchLower = filters.search.toLowerCase();
          const titleMatch = session.title.toLowerCase().includes(searchLower);
          const descriptionMatch = session.description?.toLowerCase().includes(searchLower);
          const presenterMatch = session.presenter_name?.toLowerCase().includes(searchLower);

          if (!titleMatch && !descriptionMatch && !presenterMatch) {
            return false;
          }
        }

        // Industry filter
        if (filters.industry && session.industry !== filters.industry) {
          return false;
        }

        // Grade level filter
        if (filters.gradeLevel) {
          const normalized = normalizeGradeLevel(session.grade_level);
          if (normalized !== filters.gradeLevel) {
            return false;
          }
        }

        // Duration filter
        if (filters.duration && session.duration) {
          const duration = session.duration;
          if (filters.duration === 'under-20' && duration >= 20) return false;
          if (filters.duration === '20-30' && (duration < 20 || duration > 30)) return false;
          if (filters.duration === 'over-30' && duration <= 30) return false;
        }

        return true;
      })
      .sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical sort
  }, [sessions, filters]);

  // Handle row toggle
  const handleToggleRow = (sessionId: string) => {
    setExpandedId(expandedId === sessionId ? null : sessionId);
  };

  // Empty state component
  const EmptyState = ({ onReset }: { onReset: () => void }) => (
    <div className="text-center py-16 px-4">
      <svg
        className="w-16 h-16 text-gray-300 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-gray-500 text-lg mb-2">
        No sessions match your filters
      </p>
      <p className="text-gray-400 text-sm mb-6">
        Try adjusting your search or filter criteria
      </p>
      <button
        onClick={onReset}
        className="text-blue hover:text-blue/70 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 rounded px-4 py-2"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <div
      role="tabpanel"
      id="all-sessions-panel"
      aria-labelledby="all-sessions-tab"
      className="min-h-screen bg-white"
    >
      {/* Filter Bar */}
      <SessionFilters
        filters={filters}
        onFilterChange={setFilters}
        sessionCount={filteredSessions.length}
        totalCount={sessions.length}
      />

      {/* Table */}
      <div className="px-4 md:px-8 lg:px-16 py-6">
        {filteredSessions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-gray-200">
                <tr>
                  <th className="w-6" aria-label="Expand row"></th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    {/* Empty - session titles column */}
                  </th>
                  <th className="text-left py-3 text-sm font-semibold text-gray-700 w-36 hidden md:table-cell">
                    Industry
                  </th>
                  <th className="text-left py-3 text-sm font-semibold text-gray-700 w-24 hidden md:table-cell">
                    Duration
                  </th>
                  <th className="text-left py-3 text-sm font-semibold text-gray-700 w-32">
                    Grade Level
                  </th>
                  <th className="w-44" aria-label="Actions"></th>
                </tr>
              </thead>
              <tbody>
                {filteredSessions.map((session) => (
                  <SessionTableRow
                    key={session.id}
                    session={session}
                    isExpanded={expandedId === session.id}
                    onToggle={() => handleToggleRow(session.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            onReset={() =>
              setFilters({
                industry: '',
                gradeLevel: '',
                duration: '',
                search: '',
              })
            }
          />
        )}
      </div>
    </div>
  );
}
