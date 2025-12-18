import { BoardData } from '../data/companiesData';

interface BoardListProps {
  boards: BoardData[];
  type: 'views' | 'reach';
  maxVisible?: number;
}

export default function BoardList({ boards, type, maxVisible = 8 }: BoardListProps) {
  if (boards.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No board data available
      </div>
    );
  }

  // Show top N boards
  const visibleBoards = boards.slice(0, maxVisible);
  const hiddenCount = boards.length - maxVisible;
  const maxCount = visibleBoards[0]?.count || 1;

  const barColor = type === 'views' ? 'bg-primary-blue' : 'bg-brand-navy';
  const valueColor = type === 'views' ? 'text-primary-blue' : 'text-brand-navy';

  return (
    <div className="space-y-3">
      {visibleBoards.map((board, index) => {
        const widthPercent = (board.count / maxCount) * 100;

        return (
          <div
            key={index}
            className="grid grid-cols-[1fr_80px] gap-3 items-center py-2 border-b border-neutral-2 last:border-b-0"
          >
            {/* Board name and bar */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-brand-navy min-w-[140px] flex-shrink-0">
                {board.name}
              </span>
              <div className="flex-1 bg-neutral-2 rounded-lg h-9 overflow-hidden">
                <div
                  className={`h-full rounded-lg ${barColor} transition-all duration-500 ease-out`}
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
            </div>

            {/* Count value */}
            <span className={`text-sm font-bold text-right ${valueColor}`}>
              {board.count.toLocaleString()}
            </span>
          </div>
        );
      })}

      {/* Show count of hidden boards */}
      {hiddenCount > 0 && (
        <div className="pt-4 mt-4 border-t border-neutral-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Also {type === 'views' ? 'Engaged' : 'Reached'} ({hiddenCount} more {hiddenCount === 1 ? 'board' : 'boards'})
          </p>
        </div>
      )}
    </div>
  );
}
