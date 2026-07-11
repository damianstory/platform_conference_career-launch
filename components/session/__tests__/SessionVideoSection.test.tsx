import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import VideoSection from '@/components/session/VideoSection';

const { renderToString } = require('react-dom/server.node') as {
  renderToString: (element: React.ReactNode) => string;
};

const mockPlayerHandlers: Record<string, (data?: any) => void | Promise<void>> = {};
const mockPlayerOff = jest.fn();
const mockGetDuration = jest.fn().mockResolvedValue(120);

let mockSession = {
  id: 'session-1',
  slug: 'career-session',
  title: 'Career Session',
  full_video_url: 'https://player.vimeo.com/video/123?h=private-hash' as string | null,
  trailer_url: 'https://example.com/trailer',
};

jest.mock('@vimeo/player', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    on: jest.fn((event: string, handler: (data?: any) => void | Promise<void>) => {
      mockPlayerHandlers[event] = handler;
    }),
    off: mockPlayerOff,
    getDuration: mockGetDuration,
  })),
}));

jest.mock('@/data/sample-sessions', () => ({
  getSessionBySlug: () => mockSession,
}));

jest.mock('@/lib/analytics', () => ({
  SessionAnalytics: {
    detailViewed: jest.fn(),
    watchClicked: jest.fn(),
    videoStarted: jest.fn(),
    videoProgress: jest.fn(),
    videoCompleted: jest.fn(),
  },
}));

jest.mock('@/components/session/TrailerModal', () => ({
  __esModule: true,
  default: ({ isOpen, onWatchFullSession }: { isOpen: boolean; onWatchFullSession?: () => void }) =>
    isOpen ? <button onClick={onWatchFullSession}>Watch Full Session</button> : null,
}));

const { SessionAnalytics: mockAnalytics } = jest.requireMock('@/lib/analytics');

describe('session VideoSection', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    jest.clearAllMocks();
    Object.keys(mockPlayerHandlers).forEach((event) => delete mockPlayerHandlers[event]);
    sessionStorage.clear();
    mockSession = {
      id: 'session-1',
      slug: 'career-session',
      title: 'Career Session',
      full_video_url: 'https://player.vimeo.com/video/123?h=private-hash',
      trailer_url: 'https://example.com/trailer',
    };
    global.fetch = jest.fn();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('shows a neutral frame until the playback request check finishes', async () => {
    const serverMarkup = renderToString(<VideoSection sessionSlug="career-session" />);
    expect(serverMarkup).toContain('Loading session...');

    render(<VideoSection sessionSlug="career-session" />);
    expect((await screen.findAllByRole('button', { name: 'Watch Session' }))[0]).toBeTruthy();
  });

  it('loads the Vimeo player directly and tracks actual playback once', async () => {
    const { container } = render(<VideoSection sessionSlug="career-session" />);
    fireEvent.click((await screen.findAllByRole('button', { name: 'Watch Session' }))[0]);

    const iframe = await waitFor(() => {
      const element = container.querySelector('iframe');
      expect(element).toBeTruthy();
      return element as HTMLIFrameElement;
    });

    expect(iframe.src).toBe('https://player.vimeo.com/video/123?h=private-hash&autoplay=1');
    expect(iframe.getAttribute('allow')).toBe('autoplay; fullscreen; picture-in-picture');
    expect(mockAnalytics.watchClicked).toHaveBeenCalledWith('session-1', 'Career Session', 'detail');
    expect(mockAnalytics.videoStarted).not.toHaveBeenCalled();
    expect(screen.queryByText('Click “Watch Session” to open the video.')).toBeNull();

    await waitFor(() => expect(mockPlayerHandlers.play).toBeDefined());
    act(() => {
      mockPlayerHandlers.play();
      mockPlayerHandlers.play();
    });

    expect(mockAnalytics.videoStarted).toHaveBeenCalledTimes(1);
    expect(mockAnalytics.videoStarted).toHaveBeenCalledWith('session-1', 'Career Session');
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('keeps progress and completion analytics attached to Vimeo events', async () => {
    render(<VideoSection sessionSlug="career-session" />);
    fireEvent.click((await screen.findAllByRole('button', { name: 'Watch Session' }))[0]);

    await waitFor(() => expect(mockPlayerHandlers.timeupdate).toBeDefined());
    await act(async () => {
      await mockPlayerHandlers.timeupdate({ percent: 0.8, seconds: 96 });
    });

    expect(mockAnalytics.videoProgress).toHaveBeenCalledWith('session-1', 'Career Session', 25, 96);
    expect(mockAnalytics.videoProgress).toHaveBeenCalledWith('session-1', 'Career Session', 50, 96);
    expect(mockAnalytics.videoProgress).toHaveBeenCalledWith('session-1', 'Career Session', 75, 96);
    expect(mockAnalytics.videoCompleted).toHaveBeenCalledWith('session-1', 'Career Session', 96, 120);
  });

  it('starts from a matching cross-page request and clears it', async () => {
    sessionStorage.setItem('play_full_session', 'career-session');
    const { container } = render(<VideoSection sessionSlug="career-session" />);

    await waitFor(() => expect(container.querySelector('iframe')).toBeTruthy());
    expect(sessionStorage.getItem('play_full_session')).toBeNull();
  });

  it('clears a mismatched request and leaves the Watch button available', async () => {
    sessionStorage.setItem('play_full_session', 'different-session');
    render(<VideoSection sessionSlug="career-session" />);

    expect((await screen.findAllByRole('button', { name: 'Watch Session' }))[0]).toBeTruthy();
    expect(sessionStorage.getItem('play_full_session')).toBeNull();
  });

  it('opens the full player from the detail-page trailer', async () => {
    const { container } = render(<VideoSection sessionSlug="career-session" />);
    fireEvent.click((await screen.findAllByRole('button', { name: 'Watch Trailer' }))[0]);
    fireEvent.click(screen.getByRole('button', { name: 'Watch Full Session' }));

    await waitFor(() => expect(container.querySelector('iframe')).toBeTruthy());
  });

  it('shows unavailable without a Watch button when the full video URL is missing', async () => {
    mockSession.full_video_url = null;
    render(<VideoSection sessionSlug="career-session" />);

    expect(await screen.findByText('Video unavailable')).toBeTruthy();
    expect(screen.queryAllByRole('button', { name: 'Watch Session' })).toHaveLength(0);
  });
});
