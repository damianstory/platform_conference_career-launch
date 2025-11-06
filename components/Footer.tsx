'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        'border-t border-gray-100 bg-white py-3',
        className
      )}
      {...props}
    >
      <div className="container-custom">
        <div className="text-center">
          <p className="text-base text-navy">
            &copy; 2025 myBlueprint Career Launch.{' '}
            <a
              href="https://myblueprint.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline transition-colors duration-150"
              aria-label="Visit myBlueprint website (opens in new tab)"
            >
              myBlueprint
            </a>{' '}
            Special Projects.
          </p>
        </div>
      </div>
    </footer>
  )
}
