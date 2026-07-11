import { fireEvent, render, screen } from '@testing-library/react';
import SessionTableRow from '@/components/sessions/SessionTableRow';
import TrailerModal from '@/components/session/TrailerModal';
import SessionBanner from '@/components/booths/sections/SessionBanner';
import type { Session } from '@/types';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/data/sample-sessions', () => ({
  getSessionBySlug: jest.fn(),
}));

jest.mock('@/lib/hooks/useSessionContext', () => ({
  useSessionContext: jest.fn(),
}));

jest.mock('@/lib/analytics', () => ({
  SessionAnalytics: {
    expanded: jest.fn(),
    watchClicked: jest.fn(),
    trailerViewed: jest.fn(),
    trailerClosed: jest.fn(),
    trailerToSessionClicked: jest.fn(),
  },
  BoothDetailAnalytics: {
    sessionBannerClicked: jest.fn(),
  },
}));

const { useRouter: mockUseRouter } = jest.requireMock('next/navigation');
const { getSessionBySlug: mockGetSessionBySlug } = jest.requireMock('@/data/sample-sessions');
const { useSessionContext: mockUseSessionContext } = jest.requireMock('@/lib/hooks/useSessionContext');
const { SessionAnalytics: mockSessionAnalytics, BoothDetailAnalytics: mockBoothAnalytics } =
  jest.requireMock('@/lib/analytics');

const mockPush = jest.fn();
const mockSaveContext = jest.fn();

const mockSession: Session = {
  id: 'session-1',
  slug: 'career-session',
  title: 'Career Session',
  description: 'A session about careers.',
  learning_objectives: null,
  presenter_name: 'Presenter',
  presenter_bio: null,
  presenter_photo_url: null,
  thumbnail_url: null,
  trailer_url: 'https://example.com/trailer',
  full_video_url: 'https://player.vimeo.com/video/123',
  duration: 30,
  block_number: 1,
  industries: ['Technology'],
  grade_level: '9-12',
  created_at: '2025-01-01',
  updated_at: '2025-01-01',
  display_order: 1,
  lesson_plan_url: null,
};

describe('cross-page session playback entry points', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sessionStorage.clear();
    mockUseRouter.mockReturnValue({ push: mockPush });
    mockGetSessionBySlug.mockReturnValue(mockSession);
    mockUseSessionContext.mockReturnValue({ saveContext: mockSaveContext });
  });

  it('requests playback when Watch Session is clicked from the sessions list', () => {
    render(
      <table>
        <tbody>
          <SessionTableRow
            session={mockSession}
            isExpanded
            onToggle={jest.fn()}
          />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Watch Career Session' }));

    expect(sessionStorage.getItem('play_full_session')).toBe('career-session');
    expect(mockPush).toHaveBeenCalledWith('/sessions/career-session');
    expect(mockSessionAnalytics.watchClicked).toHaveBeenCalledWith(
      'session-1',
      'Career Session',
      'table'
    );
  });

  it('requests playback when a sessions-list trailer converts to the full session', async () => {
    render(
      <TrailerModal
        isOpen
        onClose={jest.fn()}
        sessionTitle="Career Session"
        sessionSlug="career-session"
        trailerUrl="https://example.com/trailer"
        sessionId="session-1"
      />
    );

    fireEvent.click(await screen.findByRole('button', { name: 'Watch Full Session' }));

    expect(sessionStorage.getItem('play_full_session')).toBe('career-session');
    expect(mockPush).toHaveBeenCalledWith('/sessions/career-session');
  });

  it('preserves booth context while requesting playback from a booth banner', () => {
    render(
      <SessionBanner
        sessionSlug="career-session"
        boothSlug="career-booth"
        boothName="Career Company"
        boothId="booth-1"
      />
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Watch career session: Career Session from Block 1',
      })
    );

    expect(mockSaveContext).toHaveBeenCalledWith(
      'career-session',
      'Career Session',
      'career-booth'
    );
    expect(sessionStorage.getItem('play_full_session')).toBe('career-session');
    expect(mockBoothAnalytics.sessionBannerClicked).toHaveBeenCalledWith(
      'booth-1',
      'Career Company',
      'career-session'
    );
    expect(mockPush).toHaveBeenCalledWith('/sessions/career-session');
  });
});
