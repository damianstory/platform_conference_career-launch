// Utility functions for Career Launch Platform

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with proper precedence
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats duration in minutes to display string (e.g., "20 min")
 */
export function formatDuration(minutes: number | null): string {
  if (!minutes) return 'N/A';
  return `${minutes} min`;
}

/**
 * Formats a slug to a readable title (e.g., "software-engineering-shopify" -> "Software Engineering Shopify")
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Formats a title to a URL-friendly slug (e.g., "Software Engineering" -> "software-engineering")
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

