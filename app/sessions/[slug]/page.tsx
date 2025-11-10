import { notFound } from 'next/navigation';
import { formatDuration } from '@/lib/utils';
import type { Session } from '@/types';
import { getSessionBySlug, allSessions } from '@/data/sample-sessions';
import VideoSection from '@/components/session/VideoSection';
import SpeakerSection from '@/components/session/SpeakerSection';
import DescriptionSection from '@/components/session/DescriptionSection';

interface SessionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all sessions at build time
export async function generateStaticParams() {
  return allSessions.map((session) => ({
    slug: session.slug,
  }));
}

export default async function SessionPage({ params }: SessionPageProps) {
  const { slug } = await params;

  // Get session from hardcoded data
  const session = getSessionBySlug(slug);

  if (!session) {
    notFound();
  }

  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center min-h-[200px]">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {session.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Video Section - Top Priority */}
          <VideoSection sessionSlug={session.slug} />

          {/* Description Section */}
          {session.description && (
            <DescriptionSection description={session.description} />
          )}

          {/* Speaker Section */}
          <SpeakerSection
            name={session.presenter_name || 'Speaker'}
            title={session.presenter_bio || ''}
            company={''}
          />
        </div>
      </section>
    </div>
  );
}
