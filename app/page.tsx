import Link from 'next/link';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-light-blue py-20">
        <div className="container-custom">
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

      {/* Sessions & Booths Cards Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sessions Card */}
            <Link
              href="/sessions"
              className="group relative bg-blue text-white rounded-xl p-12 min-h-[16rem] flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <h2 className="text-4xl font-black mb-3">Sessions</h2>
              <p className="text-lg opacity-90">25+ Career Presentations</p>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                  className="w-6 h-6"
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
            </Link>

            {/* Booths Card */}
            <Link
              href="/booths"
              className="group relative bg-navy text-white rounded-xl p-12 min-h-[16rem] flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <h2 className="text-4xl font-black mb-3">Booths</h2>
              <p className="text-lg opacity-90">Interactive Sponsor Exhibits</p>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                  className="w-6 h-6"
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
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
