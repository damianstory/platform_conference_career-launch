import { BoardData } from '../data/boardsData';
import DailyChart from '../charts/DailyChart';

interface DailyActivitySlideProps {
  board: BoardData;
}

export default function DailyActivitySlide({ board }: DailyActivitySlideProps) {
  return (
    <div className="bg-white rounded-3xl p-12 shadow-2xl w-full relative">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-blue via-light-blue to-primary-blue rounded-t-3xl" />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-block bg-gradient-to-r from-brand-navy to-brand-navy/80 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          Daily Activity
        </div>
        <h1 className="text-3xl font-extrabold text-brand-navy mb-1">
          Sessions by Day
        </h1>
        <p className="text-sm text-gray-500">
          {board.name} • Dec 1–5, 2025
        </p>
      </div>

      {/* Daily Chart */}
      <DailyChart daily={board.daily} />

      {/* Footer */}
      <div className="border-t border-neutral-2 mt-8 pt-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          <span className="font-bold text-brand-navy">{board.peak_day_name}</span> was the peak day with{' '}
          <span className="font-bold text-emerald-500">{board.peak_percent}%</span> of all sessions
        </p>
        <p className="text-sm text-gray-500">
          Total Sessions: <span className="font-bold text-brand-navy">{board.total_sessions}</span>
        </p>
      </div>
    </div>
  );
}
