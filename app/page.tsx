import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Top Branding Bar */}
      <div className="bg-navy py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-wide">
            Career Launch
          </h1>
        </div>
      </div>

      {/* Diagonal Split Hero Sections */}
      <div className="diagonal-split-container flex flex-col md:flex-row w-full relative">
        {/* Sessions Section */}
        <Link
          href="/sessions"
          className="group relative block w-full bg-blue text-white overflow-hidden diagonal-split-left"
        >
          <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center items-start text-left md:pl-16 md:pr-[45%] px-8 py-24 transition-all duration-300">
            {/* Content Container */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase">
                Sessions
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 font-semibold mb-4">
                27 Career Videos
              </p>
              <p className="text-lg md:text-xl opacity-90 font-normal">
                For Ontario Classrooms
              </p>
            </div>

            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Arrow Button */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:top-auto md:bottom-12 md:translate-y-0 md:left-16 md:right-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:group-hover:translate-x-2">
              <div className="bg-white/60 md:bg-white/90 md:hover:bg-white rounded-full p-2.5 shadow-md md:shadow-lg md:hover:shadow-xl border border-white/40 md:border-0 transition-all duration-200 active:scale-95">
                <ArrowRight className="w-5 h-5 text-navy" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Link>

        {/* Booths Section */}
        <Link
          href="/booths"
          className="group relative block w-full bg-navy text-white overflow-hidden diagonal-split-right"
        >
          <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center items-end text-right md:pr-16 md:pl-[45%] px-8 py-24 transition-all duration-300">
            {/* Content Container */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase">
                Booths
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 font-semibold mb-4">
                Interactive Exhibits
              </p>
              <p className="text-lg md:text-xl opacity-90 font-normal">
                Resources For Students
              </p>
            </div>

            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Arrow Button */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:top-auto md:bottom-12 md:translate-y-0 md:right-16 md:left-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:group-hover:translate-x-2">
              <div className="bg-white/60 md:bg-white/90 md:hover:bg-white rounded-full p-2.5 shadow-md md:shadow-lg md:hover:shadow-xl border border-white/40 md:border-0 transition-all duration-200 active:scale-95">
                <ArrowRight className="w-5 h-5 text-navy" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
