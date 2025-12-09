interface StatsHeroProps {
  title?: string;
  subtitle?: string;
}

export function StatsHero({
  title = "Platform Analytics",
  subtitle = "Internal dashboard for Career Launch metrics"
}: StatsHeroProps) {
  return (
    <section className="bg-navy text-white py-12">
      <div className="px-8 md:px-16 text-center">
        <h1 className="text-3xl md:text-4xl font-black mb-3">
          {title}
        </h1>
        <p className="text-lg text-light-blue">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
