'use client';

import { BoardData } from '../data/boardsData';
import BoardSelector from '../charts/BoardSelector';

interface BoardSelectorSlideProps {
  boards: BoardData[];
  sortBy: 'reach' | 'alpha';
  onSortChange: (sort: 'reach' | 'alpha') => void;
  onBoardSelect: (boardKey: string) => void;
}

export default function BoardSelectorSlide({
  boards,
  sortBy,
  onSortChange,
  onBoardSelect
}: BoardSelectorSlideProps) {
  return (
    <div className="bg-white rounded-3xl p-12 shadow-2xl w-full relative">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-blue via-light-blue to-primary-blue rounded-t-3xl" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-primary-blue to-light-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          Board Reports
        </div>
        <h1 className="text-4xl font-extrabold text-brand-navy mb-2">
          Career Launch 2025
        </h1>
        <p className="text-sm text-gray-500">
          December 1–5, 2025 • Select a board to view their report
        </p>
      </div>

      {/* Board Selector */}
      <BoardSelector
        boards={boards}
        sortBy={sortBy}
        onSortChange={onSortChange}
        onBoardSelect={onBoardSelect}
      />
    </div>
  );
}
