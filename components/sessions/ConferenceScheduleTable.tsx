'use client'

import { useState } from 'react';
import { Session } from '@/types';
import SessionTableRow from './SessionTableRow';

interface ConferenceScheduleTableProps {
  sessions: Session[];
}

export default function ConferenceScheduleTable({ sessions }: ConferenceScheduleTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggleRow = (sessionId: string) => {
    setExpandedId(expandedId === sessionId ? null : sessionId);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b-2 border-gray-200">
          <tr>
            <th className="w-6" aria-label="Expand row"></th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
              {/* Empty - session titles column */}
            </th>
            <th className="text-center py-3 text-sm font-semibold text-gray-700 w-36 hidden md:table-cell">
              Industry
            </th>
            <th className="text-center py-3 text-sm font-semibold text-gray-700 w-24 hidden md:table-cell">
              Duration
            </th>
            <th className="text-center py-3 text-sm font-semibold text-gray-700 w-32">
              Grades
            </th>
            <th className="w-44" aria-label="Actions"></th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <SessionTableRow
              key={session.id}
              session={session}
              isExpanded={expandedId === session.id}
              onToggle={() => handleToggleRow(session.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
