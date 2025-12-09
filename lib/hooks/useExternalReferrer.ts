'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'clp_external_referrer';
const MYBLUEPRINT_APP_URL = 'https://app.myblueprint.ca/student/dashboard';

interface ExternalReferrerState {
  isFromMyBlueprintApp: boolean;
  backUrl: string | null;
}

/**
 * Hook to detect if user arrived from myBlueprint student app
 * and persist that state throughout their session.
 *
 * Detection methods (in order of priority):
 * 1. sessionStorage (already detected this session)
 * 2. URL query parameter (?ref=myblueprint) - fallback for testing/reliability
 * 3. document.referrer - automatic detection
 *
 * Uses sessionStorage so the back button persists as they navigate
 * within Career Launch, but resets when they close the tab/browser.
 */
export function useExternalReferrer(): ExternalReferrerState {
  const [state, setState] = useState<ExternalReferrerState>({
    isFromMyBlueprintApp: false,
    backUrl: null,
  });

  useEffect(() => {
    // Check if we already have a stored referrer from this session
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (stored) {
      // Already detected - use stored value
      setState({
        isFromMyBlueprintApp: true,
        backUrl: stored,
      });
      return;
    }

    // Check for query parameter fallback (?ref=myblueprint)
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');

    if (refParam === 'myblueprint') {
      // Store for the duration of their session
      sessionStorage.setItem(STORAGE_KEY, MYBLUEPRINT_APP_URL);
      setState({
        isFromMyBlueprintApp: true,
        backUrl: MYBLUEPRINT_APP_URL,
      });
      return;
    }

    // First page load - check document.referrer
    const referrer = document.referrer;

    if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        const referrerHost = referrerUrl.hostname.toLowerCase();

        // Check if coming from myBlueprint app (but NOT from careerlaunch or education subdomains)
        const isFromMyBlueprint =
          (referrerHost === 'app.myblueprint.ca' ||
           referrerHost === 'myblueprint.ca' ||
           referrerHost.endsWith('.myblueprint.ca')) &&
          !referrerHost.includes('careerlaunch') &&
          referrerHost !== 'education.myblueprint.ca';

        if (isFromMyBlueprint) {
          // Store for the duration of their session
          sessionStorage.setItem(STORAGE_KEY, MYBLUEPRINT_APP_URL);
          setState({
            isFromMyBlueprintApp: true,
            backUrl: MYBLUEPRINT_APP_URL,
          });
        }
      } catch {
        // Invalid URL in referrer - ignore
      }
    }
  }, []);

  return state;
}
