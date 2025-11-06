import Link from 'next/link';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-light-blue min-h-[50vh] md:min-h-[60vh] lg:min-h-[65vh] flex items-center py-24">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-navy mb-6">
                Explore Careers, Inspire Futures
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Join Ontario's largest virtual career education event. December 1-5, 2025.
                Bringing industry professionals directly to your classroom.
              </p>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-light-blue to-off-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-24 h-24 mx-auto text-navy/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-navy/40 mt-4">Hero Image</p>
                </div>
              </div>
            </div>
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
