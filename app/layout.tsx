import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ConditionalHeader from '@/components/layout/ConditionalHeader';
import Footer from '@/components/Footer';
import BackToMyBlueprintBanner from '@/components/BackToMyBlueprintBanner';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
      {/* Google Analytics */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <BackToMyBlueprintBanner />
        <ConditionalHeader />
        <main className="flex-1 overflow-x-hidden flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
