import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formatDuration } from '@/lib/utils';
import type { Session } from '@/types';
import VideoSection from '@/components/session/VideoSection';
import SpeakerSection from '@/components/session/SpeakerSection';
import DescriptionSection from '@/components/session/DescriptionSection';

export const dynamic = 'force-dynamic';

interface SessionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SessionPage({ params }: SessionPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  // Fetch session by slug
  const { data: session, error } = await supabase
    .from('sessions')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !session) {
    notFound();
  }

  return (
    <div className="bg-off-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <Link
            href="/"
            className="text-blue hover:text-navy font-medium transition-colors"
          >
            ← Back to Schedule
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-navy text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue px-3 py-1 rounded-md text-sm font-semibold">
                Block {session.block_number}
              </span>
              {session.industry && (
                <span className="bg-light-blue text-navy px-3 py-1 rounded-md text-sm font-semibold">
                  {session.industry}
                </span>
              )}
            </div>

            {session.duration_minutes && (
              <p className="text-sm text-light-blue mb-4">
                {formatDuration(session.duration_minutes)}
              </p>
            )}

            <h1 className="text-4xl md:text-5xl font-bold">
              {session.title}
            </h1>
          </div>
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
            name={session.speaker_name || 'Speaker'}
            title={session.speaker_title || ''}
            company={session.company || 'Company'}
          />
        </div>
      </section>
    </div>
  );
}
