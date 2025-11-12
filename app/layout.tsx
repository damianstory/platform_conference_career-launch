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
    '25+ engaging career focused sessions bringing Canadian industry professionals directly into your classroom. Start watching now.',
  keywords: [
    'career education',
    'Ontario high schools',
    'career exploration',
    'student engagement',
    'myBlueprint',
    'career videos',
    'guidance counselors',
  ],
  icons: {
    icon: '/favicon.png',
  },
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
