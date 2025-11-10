'use client'

import { useState } from 'react';

export interface FilterState {
  industry: string;
  gradeLevel: string;
  duration: string;
  search: string;
}

interface SessionFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  sessionCount: number;
  totalCount: number;
}

export default function SessionFilters({
  filters,
  onFilterChange,
  sessionCount,
  totalCount,
}: SessionFiltersProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hasActiveFilters = filters.industry || filters.gradeLevel || filters.duration || filters.search;

  const handleReset = () => {
    onFilterChange({
      industry: '',
      gradeLevel: '',
      duration: '',
      search: '',
    });
  };

  const removeFilter = (key: keyof FilterState) => {
    onFilterChange({
      ...filters,
      [key]: '',
    });
  };

  const activeFilterCount = [
    filters.industry,
    filters.gradeLevel,
    filters.duration,
    filters.search,
  ].filter(Boolean).length;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 md:px-8 lg:px-16 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap gap-3 items-center">
          {/* Left side: Filter dropdowns + Reset button */}
          <div className="flex gap-3 flex-1">
            {/* Industry Dropdown */}
            <div className="relative">
              <select
                value={filters.industry}
                onChange={(e) => onFilterChange({ ...filters, industry: e.target.value })}
                className="appearance-none w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                aria-label="Filter by industry"
              >
                <option value="">All Industries</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Technology">Technology</option>
                <option value="Skilled Trades">Skilled Trades</option>
                <option value="Business">Business</option>
                <option value="Public Service">Public Service</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Grade Level Dropdown */}
            <div className="relative">
              <select
                value={filters.gradeLevel}
                onChange={(e) => onFilterChange({ ...filters, gradeLevel: e.target.value })}
                className="appearance-none w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                aria-label="Filter by grade level"
              >
                <option value="">All Grades</option>
                <option value="9-10">Grades 9-10</option>
                <option value="11-12">Grades 11-12</option>
                <option value="All Grades">All Grades</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Duration Dropdown */}
            <div className="relative">
              <select
                value={filters.duration}
                onChange={(e) => onFilterChange({ ...filters, duration: e.target.value })}
                className="appearance-none w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                aria-label="Filter by duration"
              >
                <option value="">All Durations</option>
                <option value="under-20">Under 20 min</option>
                <option value="20-30">20-30 min</option>
                <option value="over-30">Over 30 min</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Reset Button (conditional) */}
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm text-blue hover:text-blue/70 font-medium transition-colors"
                aria-label="Reset all filters"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Right side: Search input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search sessions..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              aria-label="Search sessions"
            />
            <svg
              className="absolute left-3.5 top-3 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden gap-3 items-center">
          {/* Filter Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-navy bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            aria-label="Open filters"
          >
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-blue text-white rounded-full text-xs font-semibold">
                  {activeFilterCount}
                </span>
              )}
            </div>
          </button>

          {/* Search input on mobile */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              aria-label="Search sessions"
            />
            <svg
              className="absolute left-3.5 top-3 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Active Filter Pills (Desktop and Mobile) */}
        {activeFilterCount > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {filters.industry && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                Industry: {filters.industry}
                <button
                  onClick={() => removeFilter('industry')}
                  className="hover:text-blue/70 transition-colors"
                  aria-label={`Remove ${filters.industry} filter`}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            )}
            {filters.gradeLevel && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                Grades: {filters.gradeLevel}
                <button
                  onClick={() => removeFilter('gradeLevel')}
                  className="hover:text-blue/70 transition-colors"
                  aria-label={`Remove ${filters.gradeLevel} filter`}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            )}
            {filters.duration && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                Duration: {filters.duration === 'under-20' ? 'Under 20 min' : filters.duration === '20-30' ? '20-30 min' : 'Over 30 min'}
                <button
                  onClick={() => removeFilter('duration')}
                  className="hover:text-blue/70 transition-colors"
                  aria-label={`Remove duration filter`}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        <div className="text-sm text-gray-600 mt-3">
          Showing {sessionCount} of {totalCount} sessions
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 md:hidden animate-slideUp"
            role="dialog"
            aria-modal="true"
            aria-label="Filter sessions"
          >
            {/* Drawer Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full" aria-hidden="true" />
            </div>

            {/* Drawer Content */}
            <div className="px-6 pb-6">
              <h2 className="text-lg font-bold text-navy mb-4">Filter Sessions</h2>

              <div className="space-y-4">
                {/* Industry Dropdown */}
                <div>
                  <label htmlFor="mobile-industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Industry
                  </label>
                  <div className="relative">
                    <select
                      id="mobile-industry"
                      value={filters.industry}
                      onChange={(e) => onFilterChange({ ...filters, industry: e.target.value })}
                      className="appearance-none w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    >
                      <option value="">All Industries</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Technology">Technology</option>
                      <option value="Skilled Trades">Skilled Trades</option>
                      <option value="Business">Business</option>
                      <option value="Public Service">Public Service</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Grade Level Dropdown */}
                <div>
                  <label htmlFor="mobile-grade" className="block text-sm font-medium text-gray-700 mb-1">
                    Grade Level
                  </label>
                  <div className="relative">
                    <select
                      id="mobile-grade"
                      value={filters.gradeLevel}
                      onChange={(e) => onFilterChange({ ...filters, gradeLevel: e.target.value })}
                      className="appearance-none w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    >
                      <option value="">All Grades</option>
                      <option value="9-10">Grades 9-10</option>
                      <option value="11-12">Grades 11-12</option>
                      <option value="All Grades">All Grades</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Duration Dropdown */}
                <div>
                  <label htmlFor="mobile-duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <div className="relative">
                    <select
                      id="mobile-duration"
                      value={filters.duration}
                      onChange={(e) => onFilterChange({ ...filters, duration: e.target.value })}
                      className="appearance-none w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    >
                      <option value="">All Durations</option>
                      <option value="under-20">Under 20 min</option>
                      <option value="20-30">20-30 min</option>
                      <option value="over-30">Over 30 min</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-navy bg-white hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex-1 px-4 py-3 rounded-md text-sm font-medium text-white bg-blue hover:bg-opacity-90 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add slide-up animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
