import { createClient } from '@/lib/supabase/server';
import type { Session } from '@/types';
import Accordion, { AccordionItem } from '@/components/Accordion';
import SessionCard from '@/components/SessionCard';

export const dynamic = 'force-dynamic';

// Category mapping for sessions
const CATEGORY_MAPPING: Record<string, string[]> = {
  'Healthcare & Medical Careers': ['Healthcare', 'Medicine', 'Nursing', 'Health'],
  'Technology & Engineering': ['Technology', 'Engineering', 'Computer Science', 'IT', 'Software'],
  'Skilled Trades & Construction': ['Trades', 'Construction', 'Manufacturing', 'Skilled Trades'],
  'Business, Creative & Sciences': ['Business', 'Finance', 'Arts', 'Design', 'Science', 'Creative', 'Entrepreneurship'],
};

export default async function SessionsPage() {
  const supabase = await createClient();

  // Fetch all sessions
  const { data: sessions, error } = await supabase
    .from('sessions')
    .select('*')
    .order('title', { ascending: true });

  if (error) {
    console.error('Error fetching sessions:', error);
    return (
      <div className="container-custom py-12">
        <p className="text-red-600">Failed to load sessions. Please try again later.</p>
      </div>
    );
  }

  // Group sessions by category
  const sessionsByCategory: Record<string, Session[]> = {};

  Object.keys(CATEGORY_MAPPING).forEach((category) => {
    sessionsByCategory[category] = (sessions || []).filter((session) => {
      const industryLower = session.industry.toLowerCase();
      return CATEGORY_MAPPING[category].some((keyword) =>
        industryLower.includes(keyword.toLowerCase())
      );
    });
  });

  // Create accordion items
  const accordionItems: AccordionItem[] = Object.keys(CATEGORY_MAPPING).map((category) => {
    const categorySessions = sessionsByCategory[category] || [];

    return {
      id: category.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: `${category} (${categorySessions.length})`,
      content: (
        <div>
          {categorySessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {categorySessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">No sessions in this category yet.</p>
          )}
        </div>
      ),
    };
  });

  return (
    <div className="bg-off-white min-h-screen">
      {/* Mini Hero Section */}
      <section className="bg-navy text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Browse All Sessions
          </h1>
          <p className="text-lg text-light-blue">
            Click on a category to explore sessions
          </p>
        </div>
      </section>

      {/* Category Accordion */}
      <section className="py-12">
        <div className="container-custom">
          <Accordion items={accordionItems} />
        </div>
      </section>
    </div>
  );
}
