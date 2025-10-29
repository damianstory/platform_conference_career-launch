import { createClient } from '@/lib/supabase/server';
import type { Session, SessionsByBlock } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { formatDuration } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const supabase = await createClient();

  // Fetch all sessions ordered by block and display_order
  const { data: sessions, error } = await supabase
    .from('sessions')
    .select('*')
    .order('block_number', { ascending: true })
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching sessions:', error);
    return (
      <div className="container-custom py-12">
        <p className="text-red-600">Failed to load sessions. Please try again later.</p>
      </div>
    );
  }

  // Group sessions by block number
  const sessionsByBlock: SessionsByBlock = (sessions || []).reduce((acc, session) => {
    if (!acc[session.block_number]) {
      acc[session.block_number] = [];
    }
    acc[session.block_number].push(session);
    return acc;
  }, {} as SessionsByBlock);

  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Career Launch 2025
          </h1>
          <p className="text-xl md:text-2xl text-light-blue mb-6">
            December 1-5, 2025
          </p>
          <p className="text-lg max-w-3xl">
            Explore 25 inspiring career sessions from leading Ontario professionals. Show your students the exciting possibilities that await them across technology, healthcare, skilled trades, creative arts, finance, and science.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Browse All Sessions
            </h2>
            <p className="text-lg text-gray-700">
              Sessions are organized into 4 time blocks to match your school schedule. Click any session to learn more.
            </p>
          </div>

          {/* Render each block */}
          {[1, 2, 3, 4].map((blockNumber) => {
            const blockSessions = sessionsByBlock[blockNumber] || [];
            return (
              <div key={blockNumber} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue text-white px-4 py-2 rounded-md font-bold text-lg">
                    Block {blockNumber}
                  </div>
                  <div className="ml-4 text-gray-600">
                    {blockSessions.length} {blockSessions.length === 1 ? 'session' : 'sessions'}
                  </div>
                </div>

                {/* Sessions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blockSessions.map((session) => (
                    <SessionCard key={session.id} session={session} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function SessionCard({ session }: { session: Session }) {
  return (
    <Link
      href={`/sessions/${session.slug}`}
      className="card hover:scale-[1.02] transition-transform"
    >
      {/* Thumbnail */}
      <div className="h-48 bg-gradient-to-br from-blue to-navy flex items-center justify-center text-white relative">
        {session.thumbnail_url ? (
          <Image
            src={session.thumbnail_url}
            alt={session.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-center p-6">
            <p className="text-sm font-semibold">{session.industry}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-navy mb-2 line-clamp-2">
          {session.title}
        </h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">{session.speaker_name}</span>
            {session.speaker_title && (
              <span className="text-gray-600"> • {session.speaker_title}</span>
            )}
          </p>
          {session.company && (
            <p className="text-sm text-gray-600">{session.company}</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-blue">
            {session.industry}
          </span>
          <span className="text-sm text-gray-600">
            {formatDuration(session.duration_minutes)}
          </span>
        </div>
      </div>
    </Link>
  );
}
