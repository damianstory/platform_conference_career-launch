'use client';

import type { Session, BlockNumber } from '@/types';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Accordion, { AccordionItem } from '@/components/Accordion';
import SessionTabs from '@/components/ui/SessionTabs';
import AllSessionsView from '@/components/sessions/AllSessionsView';
import ConferenceScheduleTable from '@/components/sessions/ConferenceScheduleTable';
import { allSessions } from '@/data/sample-sessions';

// Block color mapping
const BLOCK_COLORS: Record<BlockNumber, string> = {
  1: 'block1',
  2: 'block2',
  3: 'block3',
  4: 'block4',
};

// Helper function to get unique industries and create a preview string
function getIndustryPreview(sessions: Session[]): string {
  const allIndustries = sessions.flatMap(s => s.industries);
  const uniqueIndustries = Array.from(new Set(allIndustries));
  const preview = uniqueIndustries.slice(0, 3).join(', ');
  return preview;
}

type ViewType = 'conference' | 'all';

function SessionsContent() {
  const searchParams = useSearchParams();
  const viewParam = searchParams.get('view');
  const activeView: ViewType = viewParam === 'conference' ? 'conference' : 'all';

  // Use hardcoded session data
  const sessions = allSessions;

  // Group sessions by block_number
  const sessionsByBlock: Record<BlockNumber, Session[]> = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  (sessions || []).forEach((session) => {
    const blockNum = session.block_number as BlockNumber | null;
    if (blockNum && (blockNum === 1 || blockNum === 2 || blockNum === 3 || blockNum === 4)) {
      sessionsByBlock[blockNum as BlockNumber].push(session);
    }
  });

  // Create accordion items for each block
  const accordionItems: AccordionItem[] = ([1, 2, 3, 4] as BlockNumber[]).map((blockNum) => {
    const blockSessions = sessionsByBlock[blockNum] || [];
    const sessionCount = blockSessions.length;
    const industryPreview = getIndustryPreview(blockSessions);

    return {
      id: `block-${blockNum}`,
      title: `Block ${blockNum}`,
      subtitle: `${sessionCount} session${sessionCount !== 1 ? 's' : ''} • ${industryPreview}`,
      blockColor: BLOCK_COLORS[blockNum],
      content: (
        <div>
          {blockSessions.length > 0 ? (
            <div className="pt-4">
              <ConferenceScheduleTable sessions={blockSessions} />
            </div>
          ) : (
            <p className="text-white/80 italic">No sessions in this block yet.</p>
          )}
        </div>
      ),
    };
  });

  return (
    <div className="min-h-screen">
      {/* Mini Hero Section */}
      <section className="bg-blue text-white py-12">
        <div className="px-8 md:px-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Browse All Sessions
          </h1>
          <p className="text-lg text-light-blue">
            {activeView === 'all'
              ? 'Explore all sessions in one view'
              : 'Click on a block to explore sessions'}
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <SessionTabs activeView={activeView} />

      {/* Tab Content with Fade Transition */}
      <div className="animate-fadeIn">
        {activeView === 'conference' ? (
          <section
            role="tabpanel"
            id="conference-panel"
            aria-labelledby="conference-tab"
          >
            <Accordion items={accordionItems} variant="blocks" />
          </section>
        ) : (
          <AllSessionsView sessions={sessions} />
        )}
      </div>
    </div>
  );
}

export default function SessionsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <section className="bg-blue text-white py-12">
            <div className="px-8 md:px-16 text-center">
              <h1 className="text-3xl md:text-4xl font-black mb-3">
                Browse All Sessions
              </h1>
              <p className="text-lg text-light-blue">Loading...</p>
            </div>
          </section>
        </div>
      }
    >
      <SessionsContent />
    </Suspense>
  );
}
