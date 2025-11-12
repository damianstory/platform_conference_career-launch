'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

type ViewType = 'conference' | 'all';

interface SessionTabsProps {
  activeView: ViewType;
  className?: string;
}

export default function SessionTabs({ activeView, className = '' }: SessionTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTabChange = (view: ViewType) => {
    // Create new URLSearchParams with the updated view
    const params = new URLSearchParams(searchParams.toString());

    if (view === 'all') {
      // Remove the view param for "all" since it's now the default
      params.delete('view');
    } else {
      // Set view=conference explicitly
      params.set('view', view);
    }

    // Update URL without page refresh
    const queryString = params.toString();
    router.push(queryString ? `/sessions?${queryString}` : '/sessions', { scroll: false });
  };

  const handleKeyDown = (e: React.KeyboardEvent, view: ViewType) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(view);
    }
    // Arrow key navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const newView = view === 'conference' ? 'all' : 'conference';
      handleTabChange(newView);
    }
  };

  return (
    <div className={cn('bg-white border-b border-gray-200', className)}>
      <div className="px-8 md:px-16">
        <div
          role="tablist"
          aria-label="Session views"
          className="flex justify-center space-x-1"
        >
          {/* Conference Schedule Tab */}
          <button
            role="tab"
            aria-selected={activeView === 'conference'}
            aria-controls="conference-panel"
            id="conference-tab"
            tabIndex={activeView === 'conference' ? 0 : -1}
            onClick={() => handleTabChange('conference')}
            onKeyDown={(e) => handleKeyDown(e, 'conference')}
            className={cn(
              'py-4 px-6 text-base font-medium transition-all duration-200 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2',
              activeView === 'conference'
                ? 'text-navy bg-light-blue border-blue font-bold'
                : 'text-gray-600 bg-transparent border-transparent hover:text-navy hover:bg-neutral-1'
            )}
          >
            {/* Full label on desktop, shortened on mobile */}
            <span className="hidden sm:inline">Conference Schedule</span>
            <span className="sm:hidden">Conference</span>
          </button>

          {/* All Sessions Tab */}
          <button
            role="tab"
            aria-selected={activeView === 'all'}
            aria-controls="all-sessions-panel"
            id="all-sessions-tab"
            tabIndex={activeView === 'all' ? 0 : -1}
            onClick={() => handleTabChange('all')}
            onKeyDown={(e) => handleKeyDown(e, 'all')}
            className={cn(
              'py-4 px-6 text-base font-medium transition-all duration-200 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2',
              activeView === 'all'
                ? 'text-navy bg-light-blue border-blue font-bold'
                : 'text-gray-600 bg-transparent border-transparent hover:text-navy hover:bg-neutral-1'
            )}
          >
            All Sessions
          </button>
        </div>
      </div>
    </div>
  );
}
