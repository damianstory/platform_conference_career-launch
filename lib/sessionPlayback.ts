export const SESSION_PLAYBACK_STORAGE_KEY = 'play_full_session';

export function requestSessionPlayback(sessionSlug: string): void {
  if (typeof window === 'undefined') return;

  try {
    window.sessionStorage.setItem(SESSION_PLAYBACK_STORAGE_KEY, sessionSlug);
  } catch (error) {
    console.error('Failed to save session playback request:', error);
  }
}

export function consumeSessionPlaybackRequest(sessionSlug: string): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const requestedSlug = window.sessionStorage.getItem(SESSION_PLAYBACK_STORAGE_KEY);
    window.sessionStorage.removeItem(SESSION_PLAYBACK_STORAGE_KEY);
    return requestedSlug === sessionSlug;
  } catch (error) {
    console.error('Failed to read session playback request:', error);
    return false;
  }
}

export function buildAutoplayUrl(videoUrl: string): string | null {
  try {
    const url = new URL(videoUrl);
    url.searchParams.set('autoplay', '1');
    return url.toString();
  } catch {
    return null;
  }
}
