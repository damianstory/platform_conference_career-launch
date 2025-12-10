import { TrendingUp } from 'lucide-react';

interface StatsHeroProps {
  title?: string;
  subtitle?: string;
}

export function StatsHero({
  title = "Career Launch 2025 Analytics",
  subtitle = "Explore your event performance and engagement metrics"
}: StatsHeroProps) {
  return (
    <section className="relative bg-brand-navy text-white py-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-light-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative px-8 md:px-16 text-center">
        <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg text-light-blue max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
