import {
  buildAutoplayUrl,
  consumeSessionPlaybackRequest,
  requestSessionPlayback,
  SESSION_PLAYBACK_STORAGE_KEY,
} from '@/lib/sessionPlayback';

describe('session playback requests', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('stores the requested session slug', () => {
    requestSessionPlayback('career-session');

    expect(sessionStorage.getItem(SESSION_PLAYBACK_STORAGE_KEY)).toBe('career-session');
  });

  it('consumes an exact slug match and clears the request', () => {
    sessionStorage.setItem(SESSION_PLAYBACK_STORAGE_KEY, 'career-session');

    expect(consumeSessionPlaybackRequest('career-session')).toBe(true);
    expect(sessionStorage.getItem(SESSION_PLAYBACK_STORAGE_KEY)).toBeNull();
  });

  it('clears a mismatched slug without starting playback', () => {
    sessionStorage.setItem(SESSION_PLAYBACK_STORAGE_KEY, 'different-session');

    expect(consumeSessionPlaybackRequest('career-session')).toBe(false);
    expect(sessionStorage.getItem(SESSION_PLAYBACK_STORAGE_KEY)).toBeNull();
  });
});

describe('buildAutoplayUrl', () => {
  it('adds autoplay while preserving Vimeo privacy parameters', () => {
    expect(buildAutoplayUrl('https://player.vimeo.com/video/123?h=private-hash')).toBe(
      'https://player.vimeo.com/video/123?h=private-hash&autoplay=1'
    );
  });

  it('returns null for an invalid URL', () => {
    expect(buildAutoplayUrl('not-a-url')).toBeNull();
  });
});
