'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isSessionsActive = pathname === '/sessions';
  const isBoothsActive = pathname === '/booths';
  const showNavigation = isSessionsActive || isBoothsActive;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      {/* Desktop/Tablet Layout (≥1024px) */}
      <div className="hidden lg:block">
        {showNavigation ? (
          <div className="grid grid-cols-3 items-center h-20 px-8 md:px-16">
            {/* Left: Navigation Tabs */}
            <nav aria-label="Main navigation" className="flex items-center gap-2">
              <Link
                href="/sessions"
                className={`px-4 py-2 rounded-lg lg:rounded-full transition-all focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
                  isSessionsActive
                    ? 'text-brand-navy font-bold border-2 border-primary-blue'
                    : 'text-neutral-5 hover:text-primary-blue hover:bg-light-blue/30 border-2 border-transparent'
                }`}
                aria-current={isSessionsActive ? 'page' : undefined}
              >
                Sessions
              </Link>
              <Link
                href="/booths"
                className={`px-4 py-2 rounded-lg lg:rounded-full transition-all focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
                  isBoothsActive
                    ? 'text-brand-navy font-bold border-2 border-primary-blue'
                    : 'text-neutral-5 hover:text-primary-blue hover:bg-light-blue/30 border-2 border-transparent'
                }`}
                aria-current={isBoothsActive ? 'page' : undefined}
              >
                Booths
              </Link>
            </nav>

            {/* Center: Logo */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="flex items-center hover:opacity-90 transition-opacity"
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

            {/* Right: Spacer for balance */}
            <div></div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-20 px-8 md:px-16">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
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
        )}
      </div>

      {/* Mobile Layout (<1024px) */}
      <div className="block lg:hidden">
        {showNavigation ? (
          <div className="flex flex-col">
            {/* Logo at top */}
            <div className="flex items-center justify-center h-20 px-8">
              <Link
                href="/"
                className="flex items-center hover:opacity-90 transition-opacity"
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

            {/* Navigation tabs below with border separator */}
            <div className="border-t border-neutral-2">
              <nav aria-label="Main navigation" className="grid grid-cols-2">
                <Link
                  href="/sessions"
                  className={`py-3 text-center text-sm font-medium transition-all min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
                    isSessionsActive
                      ? 'bg-primary-blue text-white font-bold'
                      : 'bg-neutral-1 text-neutral-5 hover:bg-light-blue'
                  }`}
                  aria-current={isSessionsActive ? 'page' : undefined}
                >
                  Sessions
                </Link>
                <Link
                  href="/booths"
                  className={`py-3 text-center text-sm font-medium transition-all min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
                    isBoothsActive
                      ? 'bg-primary-blue text-white font-bold'
                      : 'bg-neutral-1 text-neutral-5 hover:bg-light-blue'
                  }`}
                  aria-current={isBoothsActive ? 'page' : undefined}
                >
                  Booths
                </Link>
              </nav>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-20 px-8">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
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
        )}
      </div>
    </header>
  );
}
