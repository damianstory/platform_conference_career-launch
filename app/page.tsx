import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[65vh] flex items-center">
        {/* Background Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/Hero_Launch_Sky with clouds.jpg"
            alt="Career Launch Platform Hero"
            fill
            className="object-cover"
            style={{ objectPosition: '60% calc(70% + 15px)' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/40" />
        </div>

        {/* Content Layer */}
        <div className="relative w-full container-custom">
          <div className="max-w-2xl lg:-ml-32">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Explore Careers,<br />Inspire Futures
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Join Ontario&apos;s largest virtual career education<br />
              event. December 1-5, 2025. Bringing industry<br />
              professionals directly to your classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Sessions & Booths Full-Width Hero Sections */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Sessions Section */}
        <Link
          href="/sessions"
          className="group relative block w-full md:w-1/2 bg-blue text-white overflow-hidden"
        >
          <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[65vh] flex flex-col justify-center items-center text-center px-8 py-24 transition-all duration-300 group-hover:py-[calc(6rem+8px)]">
            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                Sessions
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-90 font-medium">
                25+ Career Presentations
              </p>

              {/* Decorative Element */}
              <div className="mt-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300 md:hidden">
                <svg
                  className="w-12 h-12 mx-auto animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Subtle Background Pattern/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Link>

        {/* Booths Section */}
        <Link
          href="/booths"
          className="group relative block w-full md:w-1/2 bg-navy text-white overflow-hidden"
        >
          <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[65vh] flex flex-col justify-center items-center text-center px-8 py-24 transition-all duration-300 group-hover:py-[calc(6rem+8px)]">
            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                Booths
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-90 font-medium">
                Interactive Sponsor Exhibits
              </p>

              {/* Decorative Element */}
              <div className="mt-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300 md:hidden">
                <svg
                  className="w-12 h-12 mx-auto animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Subtle Background Pattern/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Link>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
