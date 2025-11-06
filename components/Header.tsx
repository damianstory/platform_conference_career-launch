import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md text-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="flex items-center">
              <span className="text-2xl font-bold">myBlueprint</span>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/sessions"
              className="text-light-blue font-medium hover:text-white transition-colors"
            >
              Agenda
            </Link>
            <div className="bg-blue text-white px-4 py-2 rounded-md font-semibold">
              Career Launch 2025
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
