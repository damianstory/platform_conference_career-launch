import type { Session } from '@/types';
import Link from 'next/link';

interface AllSessionsViewProps {
  sessions: Session[];
}

export default function AllSessionsView({ sessions }: AllSessionsViewProps) {
  // Sort sessions alphabetically by title for the flat list
  const sortedSessions = [...sessions].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div
      role="tabpanel"
      id="all-sessions-panel"
      aria-labelledby="all-sessions-tab"
      className="px-8 md:px-16 py-8"
    >
      {/* Placeholder message */}
      <div className="bg-neutral-1 rounded-lg p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-navy">All Sessions View</h2>
        <p className="text-gray-600 mb-4">
          Table view with sortable columns and filters coming soon.
        </p>
        <p className="text-sm text-gray-500">
          This view will display all {sessions.length} sessions in a searchable,
          filterable table format without block restrictions.
        </p>
      </div>

      {/* Temporary: Show all sessions as simple list */}
      <div className="space-y-4">
        {sortedSessions.map((session) => (
          <Link
            key={session.id}
            href={`/sessions/${session.slug}`}
            className="block border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md hover:border-blue transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-bold text-navy text-lg mb-1">
                  {session.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-light-blue text-navy">
                    {session.industry}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>Block {session.block_number}</span>
                  {session.duration && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span>{session.duration} min</span>
                    </>
                  )}
                  {session.grade_level && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span>Grade {session.grade_level}</span>
                    </>
                  )}
                </div>
              </div>
              {session.presenter_name && (
                <div className="text-sm text-gray-500 sm:text-right">
                  <div className="font-medium">{session.presenter_name}</div>
                </div>
              )}
            </div>
            {session.description && (
              <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                {session.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
