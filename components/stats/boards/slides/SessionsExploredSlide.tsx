import { BoardData } from '../data/boardsData';
import SessionsListChart from '../charts/SessionsListChart';

interface SessionsExploredSlideProps {
  board: BoardData;
}

export default function SessionsExploredSlide({ board }: SessionsExploredSlideProps) {
  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="bg-white rounded-3xl p-10 shadow-2xl w-full relative">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-blue via-light-blue to-primary-blue rounded-t-3xl" />

      {/* Header */}
      <div className="mb-6">
        <div className="inline-block bg-gradient-to-r from-primary-blue to-light-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          Sessions Explored
        </div>
        <h1 className="text-3xl font-extrabold text-brand-navy mb-1">
          All Sessions by Reach
        </h1>
        <p className="text-sm text-gray-500">
          {board.name} • Dec 1–5, 2025
        </p>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-navy" />
          <span className="text-xs text-gray-600">Educator-Driven Reach</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-blue" />
          <span className="text-xs text-gray-600">Student Views</span>
        </div>
      </div>

      {/* Sessions List */}
      <SessionsListChart sessions={board.sessions} />

      {/* Footer */}
      <div className="border-t border-neutral-2 mt-6 pt-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Your board explored <span className="font-bold text-brand-navy">{board.sessions_explored} of 27</span> available sessions
        </p>
        <p className="text-sm text-gray-500">
          Est. Total Reach: <span className="font-bold text-primary-blue">{formatNumber(board.est_reach)}</span>
        </p>
      </div>
    </div>
  );
}
