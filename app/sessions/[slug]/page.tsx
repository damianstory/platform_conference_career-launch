import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formatDuration } from '@/lib/utils';
import type { Session } from '@/types';

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

  // Fetch other sessions in the same block for recommendations
  const { data: relatedSessions } = await supabase
    .from('sessions')
    .select('*')
    .eq('block_number', session.block_number)
    .neq('id', session.id)
    .order('display_order', { ascending: true })
    .limit(3);

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
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue px-3 py-1 rounded-md text-sm font-semibold">
                Block {session.block_number}
              </span>
              {session.industry && (
                <span className="bg-light-blue text-navy px-3 py-1 rounded-md text-sm font-semibold">
                  {session.industry}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {session.title}
            </h1>

            <div className="space-y-2">
              {session.speaker_name && (
                <p className="text-xl">
                  <span className="font-semibold">{session.speaker_name}</span>
                  {session.speaker_title && (
                    <span className="text-light-blue"> • {session.speaker_title}</span>
                  )}
                </p>
              )}
              {session.company && (
                <p className="text-lg text-light-blue">{session.company}</p>
              )}
              {session.duration_minutes && (
                <p className="text-lg">
                  Duration: {formatDuration(session.duration_minutes)}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              {session.description && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    About This Session
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {session.description}
                  </p>
                </div>
              )}

              {/* Video Placeholder */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Watch with Your Class
                </h2>
                <div className="bg-gradient-to-br from-blue to-navy rounded-lg h-96 flex items-center justify-center text-white">
                  <div className="text-center">
                    <p className="text-xl mb-4">Video player coming soon</p>
                    <button
                      onClick={() => console.log('Watch button clicked for session:', session.slug)}
                      className="btn-primary"
                    >
                      Watch with Your Class
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Click &ldquo;Watch with Your Class&rdquo; to register and start the video. You&rsquo;ll be able to track your students&rsquo; engagement and report on reach.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Session Details Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg text-navy mb-4">
                  Session Details
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-semibold text-gray-600">Block</dt>
                    <dd className="text-base text-navy">Block {session.block_number}</dd>
                  </div>
                  {session.industry && (
                    <div>
                      <dt className="text-sm font-semibold text-gray-600">Industry</dt>
                      <dd className="text-base text-navy">{session.industry}</dd>
                    </div>
                  )}
                  {session.duration_minutes && (
                    <div>
                      <dt className="text-sm font-semibold text-gray-600">Duration</dt>
                      <dd className="text-base text-navy">
                        {formatDuration(session.duration_minutes)}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Related Sessions */}
              {relatedSessions && relatedSessions.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-lg text-navy mb-4">
                    Other Sessions in Block {session.block_number}
                  </h3>
                  <div className="space-y-3">
                    {relatedSessions.map((related) => (
                      <Link
                        key={related.id}
                        href={`/sessions/${related.slug}`}
                        className="block p-3 rounded-md hover:bg-light-blue transition-colors"
                      >
                        <p className="font-semibold text-navy text-sm mb-1">
                          {related.title}
                        </p>
                        {related.speaker_name && (
                          <p className="text-xs text-gray-600">
                            {related.speaker_name}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
