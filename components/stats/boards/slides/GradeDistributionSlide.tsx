import { BoardData } from '../data/boardsData';
import BoardGradeChart from '../charts/BoardGradeChart';

interface GradeDistributionSlideProps {
  board: BoardData;
}

export default function GradeDistributionSlide({ board }: GradeDistributionSlideProps) {
  return (
    <div className="bg-white rounded-3xl p-12 shadow-2xl w-full relative">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-blue via-light-blue to-primary-blue rounded-t-3xl" />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-block bg-gradient-to-r from-primary-blue to-light-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          Grade Breakdown
        </div>
        <h1 className="text-3xl font-extrabold text-brand-navy mb-1">
          Sessions by Grade
        </h1>
        <p className="text-sm text-gray-500">
          {board.name} • Dec 1–5, 2025
        </p>
      </div>

      {/* Grade Chart */}
      <BoardGradeChart grades={board.grades} />

      {/* Footer */}
      <div className="border-t border-neutral-2 mt-8 pt-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          {board.top_grade ? (
            <>
              <span className="font-bold text-brand-navy">{board.top_grade.grade}</span> students drove{' '}
              <span className="font-bold text-emerald-500">{board.top_grade_percent}%</span> of all session views
            </>
          ) : (
            'No grade data available'
          )}
        </p>
        <p className="text-sm text-gray-500">
          Total Sessions: <span className="font-bold text-brand-navy">{board.total_sessions}</span>
        </p>
      </div>
    </div>
  );
}
