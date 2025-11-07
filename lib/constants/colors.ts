/**
 * Color Constants for Bento Grid Layout
 *
 * This file documents the color system used throughout the booth layout components.
 * All colors follow the specification for consistent visual treatment.
 */

/**
 * Background Colors
 */
export const BACKGROUND_COLORS = {
  /** Standard card background - white */
  CARD_DEFAULT: 'bg-white',

  /** Featured card background - gradient from blue-50 to blue-100 */
  CARD_FEATURED: 'bg-gradient-to-br from-blue-50 to-blue-100',

  /** Video section background - dark gray */
  VIDEO: 'bg-gray-800',

  /** Video thumbnail fallback - darker gray */
  VIDEO_THUMBNAIL: 'bg-gray-900',

  /** Hover background for interactive elements */
  HOVER_GRAY: 'hover:bg-gray-50',

  /** Hover background for interactive blue elements */
  HOVER_BLUE: 'hover:bg-blue-50',
} as const

/**
 * Border Colors
 */
export const BORDER_COLORS = {
  /** Standard card border - gray-200 */
  CARD_DEFAULT: 'border-gray-200',

  /** Featured card border - blue-200 */
  CARD_FEATURED: 'border-blue-200',

  /** Hover border for interactive cards */
  HOVER: 'hover:border-gray-300',

  /** Section divider border */
  DIVIDER: 'border-neutral-2',
} as const

/**
 * Shadow Values
 */
export const SHADOWS = {
  /** Small shadow for standard cards */
  SMALL: 'shadow-sm',

  /** Medium shadow for featured cards */
  MEDIUM: 'shadow-md',

  /** Large shadow for play buttons and important elements */
  LARGE: 'shadow-lg',

  /** Hover shadow for interactive elements */
  HOVER: 'hover:shadow-md',

  /** Enhanced hover shadow for cards */
  HOVER_LARGE: 'hover:shadow-lg',
} as const

/**
 * Text Colors
 */
export const TEXT_COLORS = {
  /** Primary heading color - high contrast */
  HEADING: 'text-gray-900',

  /** Body text color - sufficient contrast */
  BODY: 'text-gray-600',

  /** Metadata/secondary text color */
  METADATA: 'text-gray-500',

  /** Section label color */
  LABEL: 'text-gray-500',

  /** Contact text with hover states */
  CONTACT: 'text-gray-700',
  CONTACT_HOVER_BLUE: 'group-hover:text-blue-600',
  CONTACT_HOVER_GREEN: 'group-hover:text-green-600',
} as const

/**
 * Icon Box Color Schemes
 * Used with IconBox component
 */
export const ICON_BOX_SCHEMES = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-600',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
  },
  yellow: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-600',
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
  },
} as const

/**
 * Component-Specific Colors
 */
export const COMPONENT_COLORS = {
  /** Play button background */
  PLAY_BUTTON: 'bg-blue-600',
  PLAY_BUTTON_TEXT: 'text-white',

  /** Video overlay gradient */
  VIDEO_OVERLAY: 'bg-gradient-to-t from-black/80 to-transparent',

  /** Prize box background */
  PRIZE_BG: 'bg-blue-100',
  PRIZE_BORDER: 'border-blue-300',
  PRIZE_ICON_BG: 'bg-yellow-400',
  PRIZE_ICON_TEXT: 'text-yellow-900',

  /** Internship info box */
  INTERNSHIP_BG: 'bg-primary-blue/5',
  INTERNSHIP_BORDER: 'border-primary-blue/20',
  INTERNSHIP_TEXT: 'text-primary-blue',
} as const

/**
 * Transition Duration
 */
export const TRANSITIONS = {
  /** Standard transition - 200ms */
  STANDARD: 'duration-200',

  /** Opacity transition for hover effects */
  OPACITY: 'transition-opacity duration-200',

  /** Color transition */
  COLORS: 'transition-colors',

  /** All properties transition */
  ALL: 'transition-all duration-200',

  /** Transform for play button */
  TRANSFORM: 'transition-transform duration-200',
} as const

/**
 * Usage Examples:
 *
 * import { BACKGROUND_COLORS, BORDER_COLORS, SHADOWS, TEXT_COLORS } from '@/lib/constants/colors'
 *
 * // Standard card
 * <div className={`${BACKGROUND_COLORS.CARD_DEFAULT} ${BORDER_COLORS.CARD_DEFAULT} ${SHADOWS.SMALL}`}>
 *   <h2 className={TEXT_COLORS.HEADING}>Title</h2>
 *   <p className={TEXT_COLORS.BODY}>Body text</p>
 * </div>
 *
 * // Featured card
 * <div className={`${BACKGROUND_COLORS.CARD_FEATURED} ${BORDER_COLORS.CARD_FEATURED} ${SHADOWS.MEDIUM}`}>
 *   <h2>Featured Content</h2>
 * </div>
 */

export default {
  BACKGROUND_COLORS,
  BORDER_COLORS,
  SHADOWS,
  TEXT_COLORS,
  ICON_BOX_SCHEMES,
  COMPONENT_COLORS,
  TRANSITIONS,
}
