import Link from 'next/link';

export default function HoldingPage() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center overflow-hidden text-center px-3 sm:px-6 pt-16 pb-24 sm:py-16 min-h-[480px] bg-[linear-gradient(180deg,#22224C_0%,#22224C_55%,#1B2B66_80%,#123C8A_100%)]">
      {/* Marquee glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full w-[560px] h-[380px] bottom-[-200px] md:w-[900px] md:h-[600px] md:bottom-[-320px] bg-[radial-gradient(closest-side,rgba(0,146,255,0.35),rgba(0,146,255,0)_70%)]"
      />

      <div className="animate-holding-in relative flex flex-col items-center">
        <h1 className="text-white font-black text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-[-0.02em] max-w-[1200px] [text-wrap:balance]">
          <span className="md:block">Career Launch is returning</span>{" "}
          <span className="md:block">for a new edition.</span>
        </h1>
        <p className="text-light-blue text-lg sm:text-xl md:text-2xl font-medium mt-6">Stay tuned!</p>
      </div>

      <div className="animate-holding-in-delayed relative mt-10 md:mt-12 flex flex-col items-center gap-[32px] md:gap-6 w-full">
        <a
          href="https://launchpad.myblueprint.ca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore LaunchPad (opens in new tab)"
          className="inline-flex items-center justify-center gap-2 bg-blue text-white text-base font-bold rounded-lg px-3 sm:px-6 py-2.5 min-h-[44px] shadow-[0_0_30px_rgba(0,146,255,0.3)] hover:bg-blue/90 hover:shadow-[0_0_45px_rgba(0,146,255,0.45)] active:scale-[0.98] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[3px]"
        >
          Explore LaunchPad
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </a>
        <Link
          href="/stats"
          className="inline-flex items-center justify-center min-h-[44px] text-light-blue text-[15px] font-medium hover:text-white hover:underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-light-blue focus-visible:outline-offset-[3px] rounded"
        >
          See the 2025 impact →
        </Link>
      </div>

      <p className="absolute bottom-4 md:bottom-5 left-0 right-0 px-3 sm:px-6 text-[13px] leading-normal text-light-blue">
        Registration data from Career Launch 2025 has been deleted.
      </p>
    </section>
  );
}
