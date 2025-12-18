import { SessionData } from '../data/boardsData';

interface SessionsListChartProps {
  sessions: SessionData[];
}

export default function SessionsListChart({ sessions }: SessionsListChartProps) {
  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
      {sessions.map((session) => {
        const hasEducator = session.educator > 0;
        const hasStudent = session.student > 0;

        return (
          <div
            key={session.rank}
            className="grid grid-cols-[32px_1fr_64px] gap-3 items-center"
          >
            {/* Rank */}
            <div
              className={`text-xs font-bold text-right ${
                session.is_top3 ? 'text-primary-blue' : 'text-gray-400'
              }`}
            >
              {session.rank}
            </div>

            {/* Stacked bar - outer container for background, inner wrapper for rounding */}
            <div className="bg-off-white rounded-lg h-9 overflow-hidden">
              <div
                className="h-full flex rounded-lg overflow-hidden"
                style={{ width: `${session.edu_width + session.stu_width}%`, minWidth: hasEducator ? '180px' : '0' }}
              >
                {hasEducator && (
                  <div
                    className="h-full bg-brand-navy flex items-center px-3"
                    style={{ width: `${(session.edu_width / (session.edu_width + session.stu_width)) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-white truncate">
                      {session.title}
                    </span>
                  </div>
                )}
                {hasStudent && (
                  <div
                    className="h-full bg-primary-blue flex items-center px-3"
                    style={{ width: `${(session.stu_width / (session.edu_width + session.stu_width)) * 100}%` }}
                  >
                    {!hasEducator && (
                      <span className="text-xs font-semibold text-white truncate">
                        {session.title}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Reach value */}
            <div className="text-sm font-bold text-brand-navy text-right">
              {formatNumber(session.reach)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
