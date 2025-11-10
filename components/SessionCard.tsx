import Link from 'next/link';
import { formatDuration } from '@/lib/utils';
import type { Session } from '@/types';

interface SessionCardProps {
  session: Session;
  className?: string;
}

export default function SessionCard({ session, className = '' }: SessionCardProps) {
  // Industry color mapping using myBlueprint colors
  const getIndustryColor = (industry: string | null) => {
    const colors: Record<string, string> = {
      'Healthcare': 'from-[#0092FF]/90 to-[#C6E7FF]/40',
      'Technology': 'from-[#22224C]/90 to-[#0092FF]/40',
      'Business': 'from-[#0092FF]/80 to-[#22224C]/40',
      'Arts': 'from-[#C6E7FF]/90 to-[#0092FF]/40',
      'Engineering': 'from-[#22224C]/80 to-[#C6E7FF]/40',
      'Education': 'from-[#0092FF]/70 to-[#F6F6FF]/40',
      'default': 'from-[#22224C]/70 to-[#0092FF]/30'
    };
    return colors[industry || 'default'] || colors['default'];
  };

  return (
    <Link
      href={`/sessions/${session.slug}`}
      className={`group relative bg-white rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 aspect-[4/3] border border-[#D9DFEA] hover:border-[#0092FF]/30 hover:shadow-[0_8px_24px_rgba(34,34,76,0.1)] ${className}`}
    >
      {/* Gradient overlay with myBlueprint colors */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getIndustryColor(session.industry)} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Industry badge - navy background */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] font-bold text-white/90 uppercase tracking-[0.08em] bg-[#22224C]/80 backdrop-blur-sm px-2 py-1 rounded-md">
          {session.industry}
        </span>
      </div>

      {/* Duration badge */}
      {session.duration && (
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-medium text-white/80 bg-[#22224C]/60 backdrop-blur-sm px-2 py-1 rounded-md">
            {formatDuration(session.duration)}
          </span>
        </div>
      )}

      {/* Content - bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#22224C]/95 via-[#22224C]/70 to-transparent">
        <h3 className="font-black text-white text-sm md:text-base line-clamp-2 mb-1 group-hover:text-[#C6E7FF] transition-colors duration-200">
          {session.title}
        </h3>
        <div className="flex items-center gap-2 text-white/90 text-xs">
          <span className="line-clamp-1 font-medium">{session.presenter_name}</span>
          {session.presenter_bio && (
            <>
              <span className="text-[#C6E7FF]/60">•</span>
              <span className="line-clamp-1 text-white/70 font-light">{session.presenter_bio}</span>
            </>
          )}
        </div>
      </div>

      {/* Hover arrow indicator with myBlueprint blue */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <div className="bg-[#0092FF] rounded-full p-1">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
