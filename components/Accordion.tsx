'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure hydration consistency
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleItem = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className={cn('', className)}>
      {items.map((item) => {
        const isOpen = hasMounted && openId === item.id;

        return (
          <div
            key={item.id}
            className="bg-white border border-[#e0e0e0] rounded-lg mb-2 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              className="w-full min-h-[28px] py-3 px-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 transition-all duration-300 ease-in-out cursor-pointer"
              suppressHydrationWarning
            >
              <span className="text-base font-medium text-[#22224C] leading-[1.5] flex-1 pr-4">
                {item.title}
              </span>

              {/* Chevron Icon */}
              <svg
                className={cn(
                  'w-3 h-3 text-[#666666] flex-shrink-0 transition-transform duration-300 ease-in-out ml-auto',
                  isOpen && 'rotate-180'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Content */}
            <div
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[600px]' : 'max-h-0'
              )}
            >
              <div className="px-6 pb-5 text-sm leading-[1.6] text-[#555555]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
