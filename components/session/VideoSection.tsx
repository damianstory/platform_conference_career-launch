'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import TrailerModal from '@/components/session/TrailerModal';
import { getSessionBySlug } from '@/data/sample-sessions';
import { SessionAnalytics } from '@/lib/analytics';
import { buildAutoplayUrl, consumeSessionPlaybackRequest } from '@/lib/sessionPlayback';

interface VideoSectionProps {
  sessionSlug: string;
}

type VideoState = 'checking' | 'initial' | 'playing' | 'error';

export default function VideoSection({ sessionSlug }: VideoSectionProps) {
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [videoState, setVideoState] = useState<VideoState>('checking');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const session = getSessionBySlug(sessionSlug);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const milestonesTracked = useRef<Set<25 | 50 | 75>>(new Set());
  const hasTrackedStart = useRef(false);
  const hasTrackedCompletion = useRef(false);

  const startPlayback = useCallback(() => {
    const autoplayUrl = session?.full_video_url
      ? buildAutoplayUrl(session.full_video_url)
      : null;

    if (!autoplayUrl) {
      setVideoUrl(null);
      setVideoState('error');
      return;
    }

    setVideoUrl(autoplayUrl);
    setVideoState('playing');
  }, [session]);

  useEffect(() => {
    if (!session) return;

    const referrer = document.referrer || undefined;
    SessionAnalytics.detailViewed(session.id, session.title, referrer);

    const shouldStartPlayback = consumeSessionPlaybackRequest(session.slug);
    if (!session.full_video_url || !buildAutoplayUrl(session.full_video_url)) {
      setVideoState('error');
    } else if (shouldStartPlayback) {
      startPlayback();
    } else {
      setVideoState('initial');
    }
  }, [session, startPlayback]);

  useEffect(() => {
    if (videoState !== 'playing' || !iframeRef.current || !session || playerRef.current) {
      return;
    }

    try {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      player.on('play', () => {
        if (!hasTrackedStart.current) {
          hasTrackedStart.current = true;
          SessionAnalytics.videoStarted(session.id, session.title);
        }
      });

      player.on('timeupdate', async (data) => {
        const percent = data.percent * 100;
        const watchDuration = Math.round(data.seconds);
        const milestones: (25 | 50 | 75)[] = [25, 50, 75];

        for (const milestone of milestones) {
          if (percent >= milestone && !milestonesTracked.current.has(milestone)) {
            milestonesTracked.current.add(milestone);
            SessionAnalytics.videoProgress(session.id, session.title, milestone, watchDuration);
          }
        }

        if (percent >= 80 && !hasTrackedCompletion.current) {
          hasTrackedCompletion.current = true;
          const duration = await player.getDuration();
          SessionAnalytics.videoCompleted(session.id, session.title, watchDuration, Math.round(duration));
        }
      });

      player.on('ended', async () => {
        if (!hasTrackedCompletion.current) {
          hasTrackedCompletion.current = true;
          const duration = await player.getDuration();
          SessionAnalytics.videoCompleted(
            session.id,
            session.title,
            Math.round(duration),
            Math.round(duration)
          );
        }
      });
    } catch (error) {
      console.error('Failed to initialize Vimeo player:', error);
      setVideoState('error');
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.off('play');
        playerRef.current.off('timeupdate');
        playerRef.current.off('ended');
        playerRef.current = null;
      }
    };
  }, [videoState, session]);

  if (!session) return null;

  const handleWatchClick = () => {
    SessionAnalytics.watchClicked(session.id, session.title, 'detail');
    startPlayback();
  };

  const handleWatchFullSessionFromTrailer = () => {
    setIsTrailerModalOpen(false);
    startPlayback();
  };

  const showButtons = videoState === 'initial';

  return (
    <>
      <div className="bg-white rounded-xl border border-[#E5E9F1] p-4 sm:p-6 md:p-8 mb-6 lg:mb-8 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 text-center">
          Watch Session
        </h2>

        <div className={`aspect-video rounded-lg overflow-hidden relative ${videoState === 'playing' ? 'bg-black' : 'bg-gradient-to-br from-blue to-navy'}`}>
          {videoState === 'playing' && videoUrl && (
            <iframe
              ref={iframeRef}
              src={videoUrl}
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title="Session Video"
            />
          )}

          {videoState !== 'playing' && (
            <div className="flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6">
              {videoState === 'checking' && (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent" />
                  <span className="sr-only">Loading session...</span>
                </div>
              )}

              {showButtons && (
                <div className="hidden md:flex flex-col items-center gap-3">
                  <button onClick={handleWatchClick} className="btn-primary md:min-w-[280px]">
                    Watch Session
                  </button>
                  <button
                    onClick={() => setIsTrailerModalOpen(true)}
                    className="btn-secondary md:min-w-[280px]"
                  >
                    Watch Trailer
                  </button>
                </div>
              )}

              {videoState === 'error' && (
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-4xl" aria-hidden="true">⚠️</div>
                  <p className="text-lg">Video unavailable</p>
                </div>
              )}
            </div>
          )}
        </div>

        {showButtons && (
          <div className="mt-4 md:hidden space-y-3">
            <button onClick={handleWatchClick} className="btn-primary w-full">
              Watch Session
            </button>
            <button
              onClick={() => setIsTrailerModalOpen(true)}
              className="btn-secondary w-full"
            >
              Watch Trailer
            </button>
          </div>
        )}

        {videoState === 'initial' && (
          <p className="text-sm text-gray-600 mt-4 md:mt-6 text-center">
            Click &ldquo;Watch Session&rdquo; to open the video.
          </p>
        )}
      </div>

      <TrailerModal
        isOpen={isTrailerModalOpen}
        onClose={() => setIsTrailerModalOpen(false)}
        sessionTitle={session.title}
        sessionSlug={session.slug}
        trailerUrl={session.trailer_url || ''}
        sessionId={session.id}
        onWatchFullSession={handleWatchFullSessionFromTrailer}
      />
    </>
  );
}
