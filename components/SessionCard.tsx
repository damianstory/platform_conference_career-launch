import Link from 'next/link';
import Image from 'next/image';
import { formatDuration } from '@/lib/utils';
import type { Session } from '@/types';

interface SessionCardProps {
  session: Session;
  className?: string;
}

export default function SessionCard({ session, className = '' }: SessionCardProps) {
  return (
    <Link
      href={`/sessions/${session.slug}`}
      className={`card hover:scale-[1.02] transition-transform ${className}`}
    >
      {/* Thumbnail */}
      <div className="h-48 bg-gradient-to-br from-light-blue to-off-white flex items-center justify-center text-navy relative overflow-hidden">
        {session.thumbnail_url ? (
          <Image
            src={session.thumbnail_url}
            alt={session.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-center p-6">
            <p className="text-sm font-semibold">{session.industry}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-navy mb-2 line-clamp-2">
          {session.title}
        </h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">{session.speaker_name}</span>
            {session.speaker_title && (
              <span className="text-gray-600"> • {session.speaker_title}</span>
            )}
          </p>
          {session.company && (
            <p className="text-sm text-gray-600">{session.company}</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-blue">
            {session.industry}
          </span>
          <span className="text-sm text-gray-600">
            {formatDuration(session.duration_minutes)}
          </span>
        </div>
      </div>
    </Link>
  );
}
