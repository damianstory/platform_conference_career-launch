/**
 * Social Media Buttons - Complete Implementation Example
 *
 * This file provides the exact code to implement social media buttons
 * in the ContactInfo component, replacing the bottom social section.
 *
 * Location: components/booths/sections/ContactInfo.tsx
 * Design Spec: design-documentation/components/social-media-buttons.md
 */

import React from 'react'
import { Mail, Globe, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'
import { ContactDetails } from '@/types/booth'
import SectionLabel from '../shared/SectionLabel'

interface ContactInfoProps {
  contact: ContactDetails
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  // Get social media icon component
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return Linkedin
      case 'twitter':
        return Twitter
      case 'instagram':
        return Instagram
      case 'facebook':
        return Facebook
      case 'tiktok':
      case 'youtube':
        return null // Will use letter fallback
      default:
        return null
    }
  }

  // Get platform-specific hover color classes
  const getSocialHoverColor = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white'
      case 'twitter':
        return 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white'
      case 'instagram':
        return 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-pink-500 hover:text-white'
      case 'facebook':
        return 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white'
      case 'tiktok':
        return 'hover:bg-black hover:border-black hover:text-white'
      case 'youtube':
        return 'hover:bg-red-600 hover:border-red-600 hover:text-white'
      default:
        return 'hover:bg-neutral-4 hover:border-neutral-4 hover:text-white'
    }
  }

  // Get accessible aria-label for screen readers
  const getSocialAriaLabel = (platform: string): string => {
    const platformName = platform.charAt(0).toUpperCase() + platform.slice(1)
    const suffix =
      platform.toLowerCase() === 'facebook' ? 'page' :
      platform.toLowerCase() === 'youtube' ? 'channel' : 'profile'
    return `Visit our ${platformName} ${suffix} (opens in new tab)`
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-4 h-64">
      <div className="p-4 flex flex-col h-full">
        {/* Section Label */}
        <div className="mb-2 flex-shrink-0">
          <SectionLabel text="Get in Touch" />
        </div>

        {/* Contact Methods - Compact Layout */}
        <div className="space-y-0.5 flex-shrink-0">
          {/* Email */}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${contact.email}`}
              className="flex items-center gap-2 py-1 md:py-2.5 min-h-[24px] md:min-h-[44px] hover:text-primary-blue transition-colors group focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 focus-visible:rounded"
            >
              <Mail className="w-2 h-2 text-primary-blue flex-shrink-0" />
              <span className="text-xs text-gray-700 group-hover:text-primary-blue transition-colors break-all leading-tight">
                {contact.email}
              </span>
            </a>
          )}

          {/* Website */}
          <a
            href="https://www.conestogac.on.ca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit website"
            className="flex items-center gap-2 py-1 md:py-2.5 min-h-[24px] md:min-h-[44px] hover:text-primary-blue transition-colors group focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 focus-visible:rounded"
          >
            <Globe className="w-2 h-2 text-primary-blue flex-shrink-0" />
            <span className="text-xs text-gray-700 group-hover:text-primary-blue transition-colors leading-tight">
              www.conestogac.on.ca
            </span>
          </a>

          {/* Social Media Buttons - NEW SECTION */}
          {contact.socialLinks && contact.socialLinks.length > 0 && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {contact.socialLinks.map((social, index) => {
                const Icon = getSocialIcon(social.platform)
                const hoverColor = getSocialHoverColor(social.platform)

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-8 h-8 md:w-11 md:h-11
                      flex items-center justify-center
                      bg-neutral-2 border border-neutral-3
                      text-neutral-5
                      rounded-md
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:shadow-md
                      focus-visible:outline-2
                      focus-visible:outline-primary-blue
                      focus-visible:outline-offset-2
                      focus-visible:border-primary-blue
                      active:translate-y-0
                      active:shadow-sm
                      ${hoverColor}
                    `}
                    aria-label={getSocialAriaLabel(social.platform)}
                  >
                    {Icon ? (
                      <Icon
                        className="w-4 h-4 md:w-5 md:h-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className="text-xs font-bold"
                        aria-hidden="true"
                      >
                        {social.platform.substring(0, 1).toUpperCase()}
                      </span>
                    )}
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {/* Internship Info (if available) */}
        {contact.internshipInfo && contact.internshipInfo.available && (
          <div className="mt-2 p-2 bg-primary-blue/5 border border-primary-blue/20 rounded-lg flex-shrink-0">
            <p className="text-xs font-semibold text-primary-blue mb-0.5 leading-tight">
              Internships Available
            </p>
            <p className="text-xs text-gray-600 leading-tight">
              {contact.internshipInfo.period}
            </p>
            {contact.internshipInfo.applicationUrl && (
              <a
                href={contact.internshipInfo.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-xs text-primary-blue font-medium hover:underline focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 focus-visible:rounded"
              >
                Apply Now →
              </a>
            )}
          </div>
        )}

        {/* Spacer to push remaining content to bottom if needed */}
        <div className="flex-grow" />

        {/* NOTE: OLD social links section with divider has been REMOVED */}
        {/* Previously occupied ~60-80px at bottom of card */}
        {/* Now integrated into contact methods section above */}
      </div>
    </div>
  )
}

/**
 * IMPLEMENTATION NOTES:
 *
 * 1. REMOVED:
 *    - <div className="flex-grow" /> at top (was pushing social to bottom)
 *    - <div className="border-t..." /> divider before old social section
 *    - <nav aria-label="Social media links"> entire bottom section
 *
 * 2. ADDED:
 *    - Social buttons directly after website link (line 106-143)
 *    - Helper functions: getSocialIcon, getSocialHoverColor, getSocialAriaLabel
 *    - Platform-specific hover colors using Tailwind arbitrary values
 *
 * 3. SPACING:
 *    - mt-2 (8px) creates breathing room from website link
 *    - gap-2 (8px) between buttons on desktop
 *    - flex-wrap allows wrapping if 5+ platforms
 *
 * 4. RESPONSIVE:
 *    - w-8 h-8 (32px) on desktop
 *    - md:w-11 md:h-11 (44px) on mobile/tablet
 *    - Icon scales proportionally
 *
 * 5. ACCESSIBILITY:
 *    - Descriptive aria-labels for each platform
 *    - Icons hidden from screen readers (aria-hidden="true")
 *    - 2px blue outline on focus
 *    - 44px minimum touch target on mobile
 *
 * 6. INTERACTIONS:
 *    - hover:-translate-y-0.5 creates subtle lift on desktop
 *    - Platform-specific colors on hover (LinkedIn blue, Twitter blue, etc.)
 *    - active:translate-y-0 provides "pressed" feedback
 *    - transition-all duration-200 for smooth state changes
 *
 * 7. REDUCED MOTION:
 *    - Add global CSS to respect prefers-reduced-motion:
 *      @media (prefers-reduced-motion: reduce) {
 *        .social-button {
 *          transform: none !important;
 *        }
 *      }
 */

/**
 * TAILWIND CONFIG ADDITIONS (if needed):
 *
 * Add to tailwind.config.ts if neutral colors not defined:
 *
 * colors: {
 *   'neutral-2': '#D9DFEA',
 *   'neutral-3': '#AAB7CB',
 *   'neutral-4': '#65738B',
 *   'neutral-5': '#485163',
 * }
 */

/**
 * TESTING CHECKLIST:
 *
 * Visual:
 * - [ ] Buttons appear directly below website link
 * - [ ] No divider separating social from other contact info
 * - [ ] 32×32px on desktop, 44×44px on mobile
 * - [ ] 8px gaps between buttons
 * - [ ] Icons centered within buttons
 *
 * Interaction:
 * - [ ] Hover changes to platform brand color
 * - [ ] Hover lifts button -2px (desktop only)
 * - [ ] Focus shows blue outline
 * - [ ] Click opens link in new tab
 * - [ ] Active state provides "pressed" feedback
 *
 * Accessibility:
 * - [ ] Tab through all buttons in order
 * - [ ] Screen reader announces platform name
 * - [ ] Focus indicator visible in all contexts
 * - [ ] Touch targets meet 44×44px on mobile
 * - [ ] Color contrast passes WCAG AA
 *
 * Responsive:
 * - [ ] Correct sizes at each breakpoint
 * - [ ] Wraps gracefully with 5+ platforms
 * - [ ] Maintains alignment with email/website
 * - [ ] Gaps increase on mobile (12px)
 *
 * Browser:
 * - [ ] Chrome: Gradients, transforms, shadows
 * - [ ] Firefox: Icon rendering, transitions
 * - [ ] Safari: Border radius, colors
 * - [ ] Edge: Accessibility features
 */
