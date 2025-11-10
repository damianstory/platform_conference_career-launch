import type { Session, BlockNumber } from '@/types';
import Accordion, { AccordionItem } from '@/components/Accordion';
import SessionCard from '@/components/SessionCard';
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
  const uniqueIndustries = Array.from(new Set(sessions.map(s => s.industry)));
  const preview = uniqueIndustries.slice(0, 3).join(', ');
  return preview;
}

export default function SessionsPage() {
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4 pt-4">
              {blockSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
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
      <section className="bg-navy text-white py-12">
        <div className="px-8 md:px-16">
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Browse All Sessions
          </h1>
          <p className="text-lg text-light-blue">
            Click on a block to explore sessions
          </p>
        </div>
      </section>

      {/* Block Accordion - Full Width */}
      <section>
        <Accordion items={accordionItems} variant="blocks" />
      </section>
    </div>
  );
}
