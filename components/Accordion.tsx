'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  blockColor?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  variant?: 'default' | 'blocks';
}

export default function Accordion({ items, className = '', variant = 'default' }: AccordionProps) {
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

  const isBlocksVariant = variant === 'blocks';

  // Color mapping for blocks variant
  const getBlockColorClasses = (blockColor?: string): string => {
    const colorMap: Record<string, string> = {
      'block1': 'bg-block1',
      'block2': 'bg-block2',
      'block3': 'bg-block3',
      'block4': 'bg-block4',
    };
    return colorMap[blockColor || ''] || 'bg-blue';
  };

  return (
    <div className={cn('', className)}>
      {items.map((item) => {
        const isOpen = hasMounted && openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              'transition-all duration-300',
              isBlocksVariant
                ? `${getBlockColorClasses(item.blockColor)} hover:brightness-105 cursor-pointer`
                : 'bg-white border border-[#e0e0e0] rounded-lg mb-2 shadow-sm hover:shadow-md transition-shadow duration-200'
            )}
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              className={cn(
                'w-full flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue transition-all duration-300 ease-in-out cursor-pointer',
                isBlocksVariant
                  ? 'min-h-[25vh] md:min-h-[20vh] py-8 px-8 md:px-16 flex-col md:flex-row items-start md:items-center'
                  : 'min-h-[28px] py-3 px-6 focus-visible:ring-offset-2'
              )}
              suppressHydrationWarning
            >
              <div className={cn('flex-1', isBlocksVariant && 'w-full md:w-auto')}>
                <span
                  className={cn(
                    'leading-[1.5]',
                    isBlocksVariant
                      ? 'text-white text-3xl md:text-4xl block mb-2 font-black'
                      : 'text-[#22224C] text-base pr-4 font-medium'
                  )}
                >
                  {item.title}
                </span>
                {item.subtitle && isBlocksVariant && (
                  <span className="text-white/90 text-base md:text-lg block mt-2">
                    {item.subtitle}
                  </span>
                )}
              </div>

              {/* Chevron Icon */}
              <svg
                className={cn(
                  'flex-shrink-0 transition-transform duration-300 ease-in-out',
                  isBlocksVariant
                    ? 'w-8 h-8 text-white mt-4 md:mt-0 md:ml-auto self-end md:self-center'
                    : 'w-3 h-3 text-[#666666] ml-auto',
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
                isOpen ? (isBlocksVariant ? 'max-h-[2000px]' : 'max-h-[600px]') : 'max-h-0'
              )}
            >
              <div
                className={cn(
                  'text-sm leading-[1.6]',
                  isBlocksVariant
                    ? 'px-8 md:px-16 pb-8 text-white'
                    : 'px-6 pb-5 text-[#555555]'
                )}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
