import Link from 'next/link';

export default function BoothsPage() {
  return (
    <div className="bg-navy min-h-screen flex items-center justify-center text-white py-20">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          {/* Icon */}
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-light-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Virtual Expo Hall
          </h1>
          <p className="text-2xl text-light-blue font-bold mb-6">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Connect with industry sponsors and explore interactive booth experiences.
            Virtual expo booths will feature downloadable resources, career information,
            and opportunities to engage with leading organizations.
          </p>

          {/* Back Button */}
          <Link
            href="/sessions"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Sessions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
