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
    <div className={cn('space-y-3 md:space-y-4', className)}>
      {items.map((item) => {
        const isOpen = hasMounted && openId === item.id;

        return (
          <div
            key={item.id}
            className="bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-200 rounded-lg"
          >
            <div className="border-b border-gray-200 last:border-b-0">
              {/* Header */}
              <button
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                aria-expanded={isOpen}
                className="w-full py-5 px-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 rounded-lg"
                suppressHydrationWarning
              >
                <span className="text-base md:text-lg font-medium text-navy pr-4">
                  {item.title}
                </span>

                {/* Chevron Icon */}
                <svg
                  className={cn(
                    'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-250',
                    isOpen && 'rotate-180'
                  )}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
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
                  'overflow-hidden transition-all duration-250',
                  isOpen ? 'max-h-[600px]' : 'max-h-0'
                )}
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              >
                <div className="px-6 pb-5 pr-12 text-base text-navy whitespace-pre-line">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
