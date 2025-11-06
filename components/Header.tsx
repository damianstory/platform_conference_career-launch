import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between h-20 px-8 md:px-16">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
            <Image
              src="/images/logo.png"
              alt="myBlueprint"
              width={240}
              height={80}
              className="h-10 w-auto"
              priority
            />
          </Link>

        <Link
          href="/"
          className="text-navy font-medium hover:text-blue transition-colors duration-150"
        >
          Agenda
        </Link>
      </div>
    </header>
  );
}
