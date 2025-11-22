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
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter uppercase">
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
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:group-hover:translate-x-2">
              <div className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200">
                <ArrowRight className="w-4 h-4 text-navy" aria-hidden="true" />
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
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter uppercase">
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
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:group-hover:translate-x-2">
              <div className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200">
                <ArrowRight className="w-4 h-4 text-navy" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="bg-off-white py-6 text-center">
        <p className="text-sm text-gray-500">
          ↓ FAQs Below ↓
        </p>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
