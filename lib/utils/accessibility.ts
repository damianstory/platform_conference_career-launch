/**
 * Accessibility Utilities
 *
 * Helper functions for implementing WCAG 2.1 AA compliant accessibility features.
 */

/**
 * Generates ARIA label for external links
 */
export function getExternalLinkAriaLabel(linkText: string): string {
  return `${linkText} (opens in new window)`
}

/**
 * Generates ARIA label for file downloads
 */
export function getDownloadAriaLabel(fileName: string, fileSize?: string): string {
  return `Download ${fileName}${fileSize ? ` (${fileSize})` : ''}`
}

/**
 * Generates ARIA label for video play button
 */
export function getVideoPlayAriaLabel(videoTitle: string): string {
  return `Play video: ${videoTitle}`
}

/**
 * Keyboard event handler helper for custom clickable elements
 */
export function handleKeyboardClick(
  event: React.KeyboardEvent,
  callback: () => void
): void {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    callback()
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Focus management - trap focus within a container
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )

  const firstFocusable = focusableElements[0]
  const lastFocusable = focusableElements[focusableElements.length - 1]

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault()
        lastFocusable?.focus()
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault()
        firstFocusable?.focus()
      }
    }
  }

  container.addEventListener('keydown', handleKeyDown)

  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown)
  }
}

/**
 * Generate unique ID for ARIA relationships
 */
let idCounter = 0
export function generateAriaId(prefix: string = 'aria'): string {
  return `${prefix}-${++idCounter}`
}

/**
 * Common focus visible classes for consistent focus indicators
 */
export const FOCUS_VISIBLE_CLASSES = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2' as const

/**
 * Skip to content link (for keyboard navigation)
 */
export function createSkipLink(targetId: string, text: string = 'Skip to main content'): string {
  return `<a href="#${targetId}" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50">${text}</a>`
}
