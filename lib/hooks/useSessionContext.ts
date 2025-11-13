'use client';

import { useEffect, useState } from 'react';

interface SessionContext {
  sessionSlug: string;
  sessionTitle: string;
  boothSlug: string;
  timestamp: string;
}

const STORAGE_KEY = 'booth_session_context';

export function useSessionContext() {
  const [context, setContext] = useState<SessionContext | null>(null);

  useEffect(() => {
    // Load context from sessionStorage on mount
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as SessionContext;
          setContext(parsed);
        }
      } catch (error) {
        console.error('Failed to parse session context:', error);
        // Clear invalid data
        sessionStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const saveContext = (sessionSlug: string, sessionTitle: string, boothSlug: string) => {
    if (typeof window !== 'undefined') {
      const contextData: SessionContext = {
        sessionSlug,
        sessionTitle,
        boothSlug,
        timestamp: new Date().toISOString(),
      };

      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(contextData));
        setContext(contextData);
      } catch (error) {
        console.error('Failed to save session context:', error);
      }
    }
  };

  const clearContext = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY);
      setContext(null);
    }
  };

  return { context, saveContext, clearContext };
}
