import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Career Launch 2025 | myBlueprint',
  description:
    'Explore 25 career sessions from leading Ontario professionals. December 1-5, 2025. Show your students the exciting possibilities that await them.',
  keywords: [
    'career education',
    'Ontario high schools',
    'career exploration',
    'student engagement',
    'myBlueprint',
    'career videos',
    'guidance counselors',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-navy text-off-white py-6">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">
                © 2025 myBlueprint Education Inc. All rights reserved.
              </p>
              <p className="text-sm">
                Questions? Contact{' '}
                <a
                  href="mailto:damian.matheson@myblueprint.ca"
                  className="text-light-blue hover:underline"
                >
                  damian.matheson@myblueprint.ca
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
