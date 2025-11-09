'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight } from 'lucide-react'

interface BoothDetailHeaderProps {
  boothName: string
  boothSlug: string
}

export default function BoothDetailHeader({
  boothName,
  boothSlug,
}: BoothDetailHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`
        sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ease-out
        ${
          isScrolled
            ? 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
            : 'border-b border-neutral-2'
        }
      `}
    >
      {/* Desktop Layout (>=1024px) */}
      <div className="hidden lg:block">
        <div
          className={`
            max-w-[1400px] mx-auto px-8 transition-all duration-300 ease-out
            ${isScrolled ? 'h-14' : 'h-16'}
          `}
        >
          <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-center h-full">
            {/* Left: Back Button */}
            <Link
              href="/booths"
              className="flex items-center gap-2 text-brand-navy font-medium hover:text-primary-blue hover:bg-primary-blue/5 px-3 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              aria-label="Return to All Booths"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>All Booths</span>
            </Link>

            {/* Center: Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-compact text-neutral-5 justify-center"
              aria-label="Breadcrumb"
            >
              <ol role="list" className="flex items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary-blue transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <Link
                    href="/booths"
                    className="hover:text-primary-blue transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
                  >
                    All Booths
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <span
                    className="text-brand-navy font-semibold truncate max-w-[300px]"
                    title={boothName}
                    aria-current="page"
                  >
                    {boothName}
                  </span>
                </li>
              </ol>
            </nav>

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
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? 'h-9' : 'h-10'
                  }`}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (768px-1023px) */}
      <div className="hidden md:block lg:hidden">
        <div
          className={`
            max-w-[1400px] mx-auto px-6 transition-all duration-300 ease-out
            ${isScrolled ? 'h-14' : 'h-16'}
          `}
        >
          <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center h-full">
            {/* Left: Back Button */}
            <Link
              href="/booths"
              className="flex items-center gap-2 text-brand-navy font-medium hover:text-primary-blue hover:bg-primary-blue/5 px-2 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              aria-label="Return to All Booths"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span className="text-compact">All Booths</span>
            </Link>

            {/* Center: Breadcrumb (condensed) */}
            <nav
              className="flex items-center gap-2 text-compact text-neutral-5 justify-center overflow-hidden"
              aria-label="Breadcrumb"
            >
              <ol role="list" className="flex items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary-blue transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <span
                    className="text-brand-navy font-semibold truncate max-w-[200px]"
                    title={boothName}
                    aria-current="page"
                  >
                    {boothName}
                  </span>
                </li>
              </ol>
            </nav>

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
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? 'h-8' : 'h-9'
                  }`}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (<768px) */}
      <div className="md:hidden">
        {!isScrolled ? (
          // Default Mobile State: 2 rows stacked
          <div className="flex flex-col">
            {/* Row 1: Back arrow + Logo */}
            <div className="flex items-center justify-between h-14 px-4 border-b border-neutral-2">
              <Link
                href="/booths"
                className="flex items-center gap-2 text-brand-navy font-medium hover:text-primary-blue hover:bg-primary-blue/5 p-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                aria-label="Return to All Booths"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span className="text-compact">All Booths</span>
              </Link>

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
                  className="h-6 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Row 2: Breadcrumb */}
            <div className="h-10 px-4 flex items-center">
              <nav
                className="flex items-center gap-2 text-compact text-neutral-5"
                aria-label="Breadcrumb"
              >
                <ol role="list" className="flex items-center gap-2">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary-blue transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li>
                    <Link
                      href="/booths"
                      className="hover:text-primary-blue transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded"
                    >
                      All Booths
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li>
                    <span
                      className="text-brand-navy font-semibold truncate max-w-[150px]"
                      title={boothName}
                      aria-current="page"
                    >
                      {boothName}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        ) : (
          // Scrolled Mobile State: Single row with booth name
          <div className="flex items-center justify-between h-14 px-4">
            <Link
              href="/booths"
              className="flex items-center text-brand-navy hover:text-primary-blue p-2 -ml-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              aria-label="Return to All Booths"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>

            <div className="flex-1 mx-3 overflow-hidden">
              <h1
                className="text-compact font-semibold text-brand-navy truncate text-center"
                title={boothName}
              >
                {boothName}
              </h1>
            </div>

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
                className="h-6 w-auto"
                priority
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
