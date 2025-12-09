import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface StatsPageHeaderProps {
  title: string;
  description?: string;
  backHref?: string;
}

export function StatsPageHeader({
  title,
  description,
  backHref = '/stats'
}: StatsPageHeaderProps) {
  return (
    <section className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-light-blue hover:text-white transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Analytics</span>
        </Link>

        {/* Title and description */}
        <h1 className="text-2xl md:text-3xl font-black mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-base text-light-blue">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
