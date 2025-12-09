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
    <div className="bg-primary-blue text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16">
        <a
          href={backUrl}
          className="flex items-center gap-2 py-3 hover:opacity-90 transition-opacity group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to myBlueprint</span>
        </a>
      </div>
    </div>
  );
}
