'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Session } from '@/types';
import { cn } from '@/lib/utils';

interface SessionCrossLinkProps {
  session: Session;
  className?: string;
}

/**
 * SessionCrossLink - Full-width banner component for booth-to-session navigation
 *
 * Displays a single associated session from the sponsoring organization with:
 * - Block badge indicator
 * - Session thumbnail (desktop only)
 * - Session title and metadata
 * - "Watch Session" CTA
 *
 * Entire banner is clickable on desktop, button-only on mobile.
 * Positioned between Resources section and About Us/Get in Touch sections.
 */
export default function SessionCrossLink({ session, className }: SessionCrossLinkProps) {
  // Block color mapping (matches conference schedule design)
  const blockColors = {
    1: { bg: 'bg-[#FFE5CC]', text: 'text-[#8B4513]' },
    2: { bg: 'bg-[#E5F4FF]', text: 'text-[#0066CC]' },
    3: { bg: 'bg-[#E8F5E8]', text: 'text-[#2D5016]' },
    4: { bg: 'bg-[#FFF4E5]', text: 'text-[#CC6600]' },
  };

  const blockColor = blockColors[session.block as keyof typeof blockColors] || blockColors[1];

  return (
    <article
      className={cn(
        "w-full my-12",
        className
      )}
    >
      <Link
        href={`/sessions/${session.slug}`}
        className={cn(
          // Container styling
          "block relative overflow-hidden",
          "bg-gradient-to-br from-blue-50 to-white",
          "border border-neutral-200 rounded-xl",
          "p-6 sm:p-8 lg:p-8",
          "shadow-sm hover:shadow-md",
          "transition-shadow duration-200 ease-out",
          // Layout
          "grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-4 lg:gap-6",
          "items-center",
          // Interaction
          "group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-4"
        )}
        aria-label={`Watch career session: ${session.title} from Block ${session.block}`}
      >
        {/* Session Thumbnail - Desktop Only */}
        {session.thumbnail && (
          <div className="hidden lg:block relative w-[120px] h-[68px] flex-shrink-0 rounded-lg overflow-hidden border border-neutral-200">
            <Image
              src={session.thumbnail}
              alt={`${session.title} session thumbnail`}
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
        )}

        {/* Content Column */}
        <div className="flex flex-col gap-2 min-w-0">
          {/* Block Badge + Label Row */}
          <div className="flex items-center gap-3">
            {/* Block Badge */}
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0",
                blockColor.bg
              )}
            >
              <span className={cn(
                "font-museo font-bold text-xs uppercase tracking-wide",
                blockColor.text
              )}>
                BLK {session.block}
              </span>
            </div>

            {/* Context Label */}
            <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-neutral-500">
              Career Session from this Organization
            </span>
          </div>

          {/* Session Title */}
          <h3 className="font-museo font-bold text-lg sm:text-xl lg:text-2xl text-navy leading-tight line-clamp-2">
            {session.title}
          </h3>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600 font-sans">
            <span>Block {session.block}</span>
            <span className="text-neutral-400">·</span>
            <span>{session.duration} minutes</span>
            {session.industry && (
              <>
                <span className="text-neutral-400">·</span>
                <span>{session.industry}</span>
              </>
            )}
          </div>
        </div>

        {/* CTA Button - Desktop: Auto width, Mobile: Full width */}
        <div className="lg:flex-shrink-0 w-full lg:w-auto">
          <div
            className={cn(
              // Button styling
              "inline-flex items-center justify-center gap-2",
              "px-6 py-3 w-full lg:w-auto",
              "border-2 border-blue rounded-lg",
              "bg-white group-hover:bg-blue-50",
              "text-blue font-museo font-semibold text-[15px]",
              "transition-colors duration-200 ease-out",
              // Ensure minimum touch target
              "min-h-[44px]"
            )}
            role="button"
            aria-hidden="true" // Button styling only, actual link is parent
          >
            <span>Watch Session</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </article>
  );
}
