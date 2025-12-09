import { Clock } from 'lucide-react';

interface PlaceholderContentProps {
  title: string;
  message?: string;
}

export default function PlaceholderContent({
  title,
  message = "This section is coming soon. Data integration in progress."
}: PlaceholderContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-xl border border-neutral-2 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-light-blue/50 flex items-center justify-center mb-6">
          <Clock className="w-8 h-8 text-brand-navy" />
        </div>
        <h2 className="text-xl font-bold text-brand-navy mb-3">
          {title}
        </h2>
        <p className="text-body-2 text-neutral-5 max-w-md">
          {message}
        </p>
      </div>
    </div>
  );
}
