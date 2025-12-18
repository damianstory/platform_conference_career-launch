'use client';

import { BoardData } from '../data/boardsData';

interface BoardSelectorProps {
  boards: BoardData[];
  sortBy: 'reach' | 'alpha';
  onSortChange: (sort: 'reach' | 'alpha') => void;
  onBoardSelect: (boardKey: string) => void;
}

export default function BoardSelector({
  boards,
  sortBy,
  onSortChange,
  onBoardSelect
}: BoardSelectorProps) {
  // Sort boards based on selected sort method
  const sortedBoards = [...boards].sort((a, b) => {
    if (sortBy === 'alpha') {
      return a.name.localeCompare(b.name);
    } else {
      return b.est_reach - a.est_reach;
    }
  });

  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="space-y-6">
      {/* Sort Toggle */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => onSortChange('reach')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            sortBy === 'reach'
              ? 'bg-primary-blue text-white'
              : 'bg-off-white text-gray-500 border border-neutral-2 hover:bg-neutral-2'
          }`}
        >
          By Reach
        </button>
        <button
          onClick={() => onSortChange('alpha')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            sortBy === 'alpha'
              ? 'bg-primary-blue text-white'
              : 'bg-off-white text-gray-500 border border-neutral-2 hover:bg-neutral-2'
          }`}
        >
          Alphabetical
        </button>
      </div>

      {/* Board List */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
        {sortedBoards.map((board) => (
          <button
            key={board.key}
            onClick={() => onBoardSelect(board.key)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-off-white rounded-xl border-2 border-transparent hover:bg-blue-50 hover:border-primary-blue transition-all group"
          >
            <span className="text-base font-semibold text-brand-navy text-left">
              {board.name}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-primary-blue">
                {formatNumber(board.est_reach)} reach
              </span>
              <span className="text-gray-400 group-hover:text-primary-blue transition-colors">
                →
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
