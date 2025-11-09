import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import ConditionalHeader from '@/components/layout/ConditionalHeader';
import Footer from '@/components/Footer';

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
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <ConditionalHeader />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
