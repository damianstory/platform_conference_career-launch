'use client';

import { ArrowLeft } from 'lucide-react';
import { useExternalReferrer } from '@/lib/hooks/useExternalReferrer';

/**
 * Prominent banner that appears when users arrive from the myBlueprint student app.
 * Provides a clear, obvious way to return to their dashboard.
 *
 * Appears above the header on all pages when detected.
 */
export default function BackToMyBlueprintBanner() {
  const { isFromMyBlueprintApp, backUrl } = useExternalReferrer();

  if (!isFromMyBlueprintApp || !backUrl) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 bg-primary-blue text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 h-20 flex items-center">
        <a
          href={backUrl}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to myBlueprint Account</span>
        </a>
      </div>
    </div>
  );
}
