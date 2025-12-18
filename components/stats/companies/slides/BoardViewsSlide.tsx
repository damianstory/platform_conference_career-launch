import { CompanyData } from '../data/companiesData';
import BoardList from '../charts/BoardList';
import SlideCard from '@/components/stats/general/SlideCard';

interface BoardViewsSlideProps {
  company: CompanyData;
}

export default function BoardViewsSlide({ company }: BoardViewsSlideProps) {
  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-4 py-1.5 bg-primary-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          Geographic Distribution
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-2 leading-tight">
          Views by Board
        </h1>
        <p className="text-base text-gray-500">{company.title}</p>
      </div>

      {/* Summary Stats */}
      <div className="flex gap-8 mb-8">
        <div className="text-center">
          <div className="text-4xl font-extrabold text-primary-blue mb-1">
            {company.views}
          </div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Total Views
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-extrabold text-brand-navy mb-1">
            {company.totalBoards}
          </div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Boards Engaged
          </div>
        </div>
      </div>

      {/* Board List */}
      <BoardList boards={company.boardsViews} type="views" />

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-neutral-2 text-center">
        <p className="text-xs text-gray-400">
          Career Launch 2025 • Powered by myBlueprint
        </p>
      </div>
    </SlideCard>
  );
}
