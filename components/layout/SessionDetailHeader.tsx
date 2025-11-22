'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { useSessionContext } from '@/lib/hooks/useSessionContext'

interface SessionDetailHeaderProps {
  sessionTitle: string
  sessionSlug: string
}

export default function SessionDetailHeader({
  sessionTitle,
  sessionSlug,
}: SessionDetailHeaderProps) {
  const { context, clearContext } = useSessionContext()

  // Only show "Back to Booth" if context exists AND matches current session
  const isFromBooth = context && context.sessionSlug === sessionSlug

  const backHref = isFromBooth
    ? `/booths/${context.boothSlug}`
    : '/sessions'

  const backLabel = isFromBooth ? 'Back to Booth' : 'All Sessions'

  const ariaLabel = isFromBooth
    ? `Return to booth: ${context.sessionTitle}` // sessionTitle stored is actually the booth name when coming from booth
    : 'Return to All Sessions'

  // Clear context when navigating back via contextual link (prevents infinite loop)
  const handleBackClick = () => {
    if (isFromBooth) {
      clearContext()
    }
  }
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
    >
      {/* Desktop Layout (>=1024px) */}
      <div className="hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 h-20">
          <div className="grid grid-cols-3 items-center h-full">
            {/* Left: Back Button */}
            <div>
              <Link
                href={backHref}
                onClick={handleBackClick}
                className="flex items-center gap-2 text-brand-navy font-medium hover:text-primary-blue hover:bg-primary-blue/5 px-3 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                aria-label={ariaLabel}
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>{backLabel}</span>
              </Link>
            </div>

            {/* Center: Logo */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="flex items-center hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
                aria-label="myBlueprint home"
              >
                <Image
                  src="/images/logo.png"
                  alt="myBlueprint"
                  width={240}
                  height={80}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Right: Empty spacer for balance */}
            <div aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Tablet Layout (768px-1023px) */}
      <div className="hidden md:block lg:hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 h-20">
          <div className="grid grid-cols-3 items-center h-full">
            {/* Left: Back Button */}
            <div>
              <Link
                href={backHref}
                onClick={handleBackClick}
                className="flex items-center gap-2 text-brand-navy font-medium hover:text-primary-blue hover:bg-primary-blue/5 px-2 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                aria-label={ariaLabel}
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span className="text-compact">{backLabel}</span>
              </Link>
            </div>

            {/* Center: Logo */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="flex items-center hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
                aria-label="myBlueprint home"
              >
                <Image
                  src="/images/logo.png"
                  alt="myBlueprint"
                  width={240}
                  height={80}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Right: Empty spacer for balance */}
            <div aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Mobile Layout (<768px) */}
      <div className="md:hidden">
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center h-20 px-4">
          {/* Left: Back arrow */}
          <Link
            href={backHref}
            onClick={handleBackClick}
            className="flex items-center text-brand-navy hover:text-primary-blue p-2 -ml-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            aria-label={ariaLabel}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Right: Logo */}
          <div className="flex items-center justify-end">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
              aria-label="myBlueprint home"
            >
              <Image
                src="/images/logo.png"
                alt="myBlueprint"
                width={240}
                height={80}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
