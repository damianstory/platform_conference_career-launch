// Utility functions for Career Launch Platform

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassSize } from '@/types';

/**
 * Merges Tailwind CSS classes with proper precedence
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Estimates student count based on class size category
 * Used for calculating total student reach metrics
 */
export function estimateStudentCount(
  classSize: ClassSize,
  largeGroupCount?: number | null
): number {
  switch (classSize) {
    case 'less-than-25':
      return 20; // Conservative estimate
    case '25-to-35':
      return 30; // Mid-range estimate
    case 'large-group':
      return largeGroupCount || 50; // Use provided count or default to 50
    default:
      return 0;
  }
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

/**
 * Checks if a viewing event is considered "completed" (>=80% watched)
 */
export function isViewingCompleted(completionPercentage: number): boolean {
  return completionPercentage >= 80;
}

/**
 * Formats completion percentage with % symbol
 */
export function formatCompletionPercentage(percentage: number): string {
  return `${Math.round(percentage)}%`;
}

/**
 * Converts watch duration in seconds to minutes display (e.g., "5:23")
 */
export function formatWatchDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * Gets display label for user role
 */
export function getRoleLabel(role: string): string {
  const roleLabels: Record<string, string> = {
    teacher: 'Teacher',
    guidance_counselor: 'Guidance Counselor',
    administrator: 'Administrator',
    other: 'Other',
  };
  return roleLabels[role] || role;
}

/**
 * Gets display label for grade level
 */
export function getGradeLevelLabel(gradeLevel: string): string {
  const gradeLabels: Record<string, string> = {
    'grade-9': 'Grade 9',
    'grade-10': 'Grade 10',
    'grade-11': 'Grade 11',
    'grade-12': 'Grade 12',
    mixed: 'Mixed Grades',
  };
  return gradeLabels[gradeLevel] || gradeLevel;
}

/**
 * Gets display label for class size
 */
export function getClassSizeLabel(classSize: string): string {
  const sizeLabels: Record<string, string> = {
    'less-than-25': 'Less than 25 students',
    '25-to-35': '25-35 students',
    'large-group': 'Large group (35+ students)',
  };
  return sizeLabels[classSize] || classSize;
}

// ============================================
// BOOTH-SPECIFIC UTILITIES
// ============================================

/**
 * Finds a booth by its slug from the sponsors array
 * Useful for future dynamic routing to individual booth pages
 */
export function findBoothBySlug(
  slug: string,
  sponsors: Array<{ slug: string; [key: string]: any }>
): any | undefined {
  return sponsors.find((booth) => booth.slug === slug);
}

/**
 * Gets display label for industry
 */
export function getIndustryLabel(industry: string): string {
  const industryLabels: Record<string, string> = {
    'Technology': 'Technology',
    'Healthcare': 'Healthcare',
    'Finance': 'Finance',
    'Engineering': 'Engineering',
    'Education': 'Education',
    'Manufacturing': 'Manufacturing',
    'Retail': 'Retail',
    'Energy': 'Energy',
    'Marketing': 'Marketing',
    'Consulting': 'Consulting',
  };
  return industryLabels[industry] || industry;
}

/**
 * Gets display label for pathway
 */
export function getPathwayLabel(pathway: string): string {
  const pathwayLabels: Record<string, string> = {
    'direct-to-workplace': 'Direct to Workplace',
    'apprenticeship': 'Apprenticeship',
    'college': 'College',
    'university': 'University',
    'gap-year': 'Gap Year',
  };
  return pathwayLabels[pathway] || pathway;
}

/**
 * Gets all unique industries from sponsors array
 */
export function getUniqueIndustries(
  sponsors: Array<{ industry: string; [key: string]: any }>
): string[] {
  const industries = sponsors.map((s) => s.industry);
  return Array.from(new Set(industries)).sort();
}

/**
 * Gets all unique pathways from sponsors array
 */
export function getUniquePathways(
  sponsors: Array<{ pathway: string; [key: string]: any }>
): string[] {
  const pathways = sponsors.map((s) => s.pathway);
  return Array.from(new Set(pathways)).sort();
}
