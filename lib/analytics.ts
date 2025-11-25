/**
 * Google Analytics 4 Tracking Utility
 * Provides typed event tracking helpers for the Career Launch Platform
 */

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Check if GA is available
const isGAAvailable = (): boolean => {
  return isBrowser && typeof window.gtag === 'function';
};

// Debug mode - logs to console in development instead of sending to GA
const isDebugMode = process.env.NODE_ENV === 'development';

/**
 * Core tracking function
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean | undefined>
): void {
  // Filter out undefined values
  const cleanProperties = properties
    ? Object.fromEntries(
        Object.entries(properties).filter(([, v]) => v !== undefined)
      )
    : undefined;

  if (isDebugMode) {
    console.log('[GA4 Event]', eventName, cleanProperties);
    return;
  }

  if (isGAAvailable()) {
    window.gtag('event', eventName, cleanProperties);
  }
}

/**
 * Registration Flow Events
 */
export const RegistrationAnalytics = {
  started: (sessionId: string, sessionTitle: string) => {
    trackEvent('registration_started', {
      session_id: sessionId,
      session_title: sessionTitle,
    });
  },

  userTypeSelected: (userType: 'educator' | 'student') => {
    trackEvent('registration_user_type_selected', {
      user_type: userType,
    });
  },

  stepCompleted: (step: number, userType: string) => {
    trackEvent('registration_step_completed', {
      step,
      user_type: userType,
    });
  },

  submitted: (data: {
    userType: string;
    sessionId: string;
    sessionTitle: string;
    board?: string;
    school?: string;
    classSize?: string;
    gradeLevel?: string;
  }) => {
    trackEvent('registration_submitted', {
      user_type: data.userType,
      session_id: data.sessionId,
      session_title: data.sessionTitle,
      board: data.board,
      school: data.school,
      class_size: data.classSize,
      grade_level: data.gradeLevel,
    });
  },

  cancelled: (step: number, userType?: string) => {
    trackEvent('registration_cancelled', {
      step,
      user_type: userType,
    });
  },

  returningUserDetected: (sessionId: string) => {
    trackEvent('registration_returning_user', {
      session_id: sessionId,
    });
  },
};

/**
 * Session Video Events
 */
export const SessionAnalytics = {
  watchClicked: (sessionId: string, sessionTitle: string, location: string = 'detail') => {
    trackEvent('session_watch_clicked', {
      session_id: sessionId,
      session_title: sessionTitle,
      button_location: location,
    });
  },

  videoStarted: (sessionId: string, sessionTitle: string, userType?: string) => {
    trackEvent('session_video_started', {
      session_id: sessionId,
      session_title: sessionTitle,
      user_type: userType,
    });
  },

  trailerViewed: (sessionId: string, sessionTitle: string) => {
    trackEvent('session_trailer_viewed', {
      session_id: sessionId,
      session_title: sessionTitle,
    });
  },

  expanded: (sessionId: string, sessionTitle: string, isExpanded: boolean) => {
    trackEvent('session_expanded', {
      session_id: sessionId,
      session_title: sessionTitle,
      is_expanded: isExpanded,
    });
  },

  viewChanged: (view: 'conference' | 'all', previousView?: string) => {
    trackEvent('sessions_view_changed', {
      view,
      previous_view: previousView,
    });
  },
};

/**
 * Session Filter Events
 */
export const SessionFilterAnalytics = {
  searched: (query: string, resultsCount: number) => {
    trackEvent('session_searched', {
      query,
      results_count: resultsCount,
    });
  },

  filterApplied: (filterType: string, value: string) => {
    trackEvent('session_filter_applied', {
      filter_type: filterType,
      value,
    });
  },

  filtersCleared: () => {
    trackEvent('session_filters_cleared');
  },

  filterDrawerToggled: (isOpen: boolean, activeFiltersCount: number) => {
    trackEvent('session_filter_drawer_toggled', {
      is_open: isOpen,
      active_filters_count: activeFiltersCount,
    });
  },
};

/**
 * Booth Events
 */
export const BoothAnalytics = {
  visited: (boothId: string, boothName: string, tier: string, industries?: string[]) => {
    trackEvent('booth_visited', {
      booth_id: boothId,
      booth_name: boothName,
      booth_tier: tier,
      booth_industries: industries?.join(','),
    });
  },

  filterApplied: (filterType: 'industry' | 'tier', value: string) => {
    trackEvent('booth_filter_applied', {
      filter_type: filterType,
      value,
    });
  },

  filtersCleared: () => {
    trackEvent('booth_filters_cleared');
  },

  randomSelected: (boothId: string, boothName: string) => {
    trackEvent('booth_random_selected', {
      booth_id: boothId,
      booth_name: boothName,
    });
  },

  filterDrawerToggled: (isOpen: boolean) => {
    trackEvent('booth_filter_drawer_toggled', {
      is_open: isOpen,
    });
  },
};

/**
 * Resource Events
 */
export const ResourceAnalytics = {
  downloaded: (boothId: string, resourceTitle: string, resourceType: string) => {
    trackEvent('resource_downloaded', {
      booth_id: boothId,
      resource_title: resourceTitle,
      resource_type: resourceType,
    });
  },
};

/**
 * Navigation Events
 */
export const NavigationAnalytics = {
  clicked: (destination: string, sourcePage: string) => {
    trackEvent('nav_clicked', {
      destination,
      source_page: sourcePage,
    });
  },

  homepageSectionClicked: (section: 'sessions' | 'booths') => {
    trackEvent('homepage_section_clicked', {
      section,
    });
  },
};

/**
 * Booth Detail Page Events
 */
export const BoothDetailAnalytics = {
  // Track booth card click from expo hall
  cardClicked: (boothId: string, boothName: string, tier: string) => {
    trackEvent('booth_card_clicked', {
      booth_id: boothId,
      booth_name: boothName,
      booth_tier: tier,
    });
  },

  // Track primary CTA button click
  ctaClicked: (boothId: string, boothName: string, ctaText: string, ctaUrl: string) => {
    trackEvent('booth_cta_clicked', {
      booth_id: boothId,
      booth_name: boothName,
      cta_text: ctaText,
      cta_url: ctaUrl,
    });
  },

  // Track video viewed
  videoViewed: (boothId: string, boothName: string, videoType: string) => {
    trackEvent('booth_video_viewed', {
      booth_id: boothId,
      booth_name: boothName,
      video_type: videoType,
    });
  },

  // Track session slides fullscreen toggle
  slidesFullscreenToggled: (boothId: string, boothName: string, isFullscreen: boolean) => {
    trackEvent('booth_slides_fullscreen_toggled', {
      booth_id: boothId,
      booth_name: boothName,
      is_fullscreen: isFullscreen,
    });
  },

  // Track session banner click (navigate to session)
  sessionBannerClicked: (boothId: string, boothName: string, sessionSlug: string) => {
    trackEvent('booth_session_banner_clicked', {
      booth_id: boothId,
      booth_name: boothName,
      session_slug: sessionSlug,
    });
  },

  // Track contact link clicks
  contactClicked: (boothId: string, boothName: string, contactType: 'website' | 'email' | 'phone') => {
    trackEvent('booth_contact_clicked', {
      booth_id: boothId,
      booth_name: boothName,
      contact_type: contactType,
    });
  },

  // Track social link clicks
  socialClicked: (boothId: string, boothName: string, platform: string) => {
    trackEvent('booth_social_clicked', {
      booth_id: boothId,
      booth_name: boothName,
      platform: platform,
    });
  },

  // Track story expand/collapse
  storyToggled: (boothId: string, boothName: string, isExpanded: boolean) => {
    trackEvent('booth_story_toggled', {
      booth_id: boothId,
      booth_name: boothName,
      is_expanded: isExpanded,
    });
  },
};
