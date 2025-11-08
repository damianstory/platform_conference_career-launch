/**
 * Spacing Constants for Bento Grid Layout
 *
 * This file documents the spacing system used throughout the booth layout components.
 * All spacing values are based on an 8px grid system and are implemented using Tailwind CSS classes.
 *
 * @see https://tailwindcss.com/docs/space
 */

/**
 * Grid Gap (Between Major Sections)
 * Used in: BoothLayout.tsx
 */
export const GRID_GAP = 'gap-6' // 24px - Between major sections in the grid

/**
 * Vertical Spacing Within Cards
 * Used for creating visual rhythm within card components
 */
export const SPACING = {
  /** 8px - Very tight spacing */
  TIGHT: 'space-y-2',

  /** 12px - Medium tight spacing (between related elements) */
  MEDIUM: 'space-y-3',

  /** 16px - Standard spacing (within cards, between elements) */
  STANDARD: 'space-y-4',

  /** 24px - Between section groups */
  LARGE: 'space-y-6',
} as const

/**
 * Padding Values
 * Used for card container padding
 */
export const PADDING = {
  /** 24px - Standard card padding (small/medium cards) */
  SMALL: 'p-6',

  /** 32px - Large card padding (featured cards like EngagementActivity) */
  LARGE: 'p-8',
} as const

/**
 * Spacing Patterns by Component
 *
 * Standard Card Structure:
 * ```tsx
 * <div className="p-6 space-y-4">          // Container with standard padding and spacing
 *   <div className="space-y-2">            // Label + Title group (tight)
 *     <span>Label</span>
 *     <h2>Title</h2>
 *   </div>
 *   <div className="space-y-3">            // Body content (medium)
 *     <p>Content</p>
 *   </div>
 *   <div>                                   // CTA or action
 *     <button>Action</button>
 *   </div>
 * </div>
 * ```
 *
 * Component-Specific Patterns:
 *
 * BoothHeader:
 * - Padding: p-6
 * - Internal: space-y-2 (name + tagline)
 *
 * VideoSection:
 * - No internal spacing (video player fills container)
 * - Uses aspect-video for 16:9 ratio
 *
 * EngagementActivity:
 * - Padding: p-8 (featured card)
 * - Internal: space-y-3 (title + description)
 * - Between sections: mb-4, mb-6
 *
 * ResourceCards:
 * - Header padding: px-6 py-6
 * - Grid padding: p-6
 * - Internal grid: gap-2
 *
 * SessionSlides:
 * - Header padding: px-6 py-4
 * - Uses aspect-[16/10] for slide ratio
 *
 * CompanyStory:
 * - Padding: p-8
 * - Internal: space-y-4 (header + description + facts)
 * - Facts section: space-y-3
 *
 * ContactInfo:
 * - Padding: p-8
 * - Internal: space-y-6 (major section groups)
 * - Contact methods: space-y-3
 */

/**
 * Gap Values for Internal Grids
 */
export const GAP = {
  /** 8px - Tight gap (resource cards internal grid) */
  TIGHT: 'gap-2',

  /** 16px - Standard gap */
  STANDARD: 'gap-4',

  /** 24px - Large gap (main grid) */
  LARGE: 'gap-6',
} as const

/**
 * Minimum Heights
 * Used sparingly, only where content needs a baseline size
 */
export const MIN_HEIGHT = {
  /** 300px - Minimum height for resource cards grid */
  RESOURCE_GRID: 'min-h-[300px]',
} as const

/**
 * Aspect Ratios
 * Used for responsive sizing without fixed heights
 */
export const ASPECT_RATIO = {
  /** 16:9 - Standard video aspect ratio */
  VIDEO: 'aspect-video',

  /** 16:10 - Standard slide presentation aspect ratio */
  SLIDES: 'aspect-[16/10]',
} as const

/**
 * Usage Examples:
 *
 * import { SPACING, PADDING, GRID_GAP } from '@/lib/constants/spacing'
 *
 * // In a component:
 * <div className={`${PADDING.SMALL} ${SPACING.STANDARD}`}>
 *   <div className={SPACING.TIGHT}>
 *     <label>Name</label>
 *     <h2>Title</h2>
 *   </div>
 * </div>
 *
 * // In BoothLayout:
 * <div className={`grid grid-cols-12 ${GRID_GAP}`}>
 *   // sections
 * </div>
 */

export default {
  GRID_GAP,
  SPACING,
  PADDING,
  GAP,
  MIN_HEIGHT,
  ASPECT_RATIO,
}
