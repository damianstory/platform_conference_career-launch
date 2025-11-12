'use client'

import React from 'react';

/**
 * Formats session descriptions with proper line breaks, paragraphs, and bullet points
 *
 * @param description - Raw description text
 * @returns React elements with proper formatting
 */
export function formatDescription(description: string): React.ReactNode {
  if (!description) return null;

  // Split by double line breaks to get paragraphs
  const paragraphs = description.split('\n\n').filter(p => p.trim());

  return paragraphs.map((paragraph, index) => {
    const trimmedParagraph = paragraph.trim();

    // Check if this paragraph contains bullet points
    const lines = trimmedParagraph.split('\n');
    const hasBullets = lines.some(line => line.trim().startsWith('•'));

    if (hasBullets) {
      // This is a bulleted list section
      const listItems: string[] = [];
      let currentText = '';

      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('•')) {
          // If we have accumulated text, add it as a paragraph before the list
          if (currentText) {
            listItems.push(currentText);
            currentText = '';
          }
          // Add the bullet item (remove the bullet character)
          listItems.push(trimmedLine.substring(1).trim());
        } else if (trimmedLine) {
          // Accumulate non-bullet text
          currentText += (currentText ? ' ' : '') + trimmedLine;
        }
      });

      // If we have remaining text after the bullets, add it
      if (currentText) {
        listItems.push(currentText);
      }

      // Separate text before bullets and bullet items
      const textBeforeBullets: string[] = [];
      const bulletItems: string[] = [];
      let foundFirstBullet = false;

      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('•')) {
          foundFirstBullet = true;
          bulletItems.push(trimmedLine.substring(1).trim());
        } else if (!foundFirstBullet && trimmedLine) {
          textBeforeBullets.push(trimmedLine);
        }
      });

      return (
        <div key={index} className="mb-6 last:mb-0">
          {textBeforeBullets.length > 0 && (
            <p className="mb-4">{textBeforeBullets.join(' ')}</p>
          )}
          {bulletItems.length > 0 && (
            <ul className="list-disc list-outside ml-5 space-y-2">
              {bulletItems.map((item, idx) => (
                <li key={idx} className="pl-1">{item}</li>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      // Regular paragraph
      return (
        <p key={index} className="mb-4 last:mb-0">
          {trimmedParagraph.split('\n').join(' ')}
        </p>
      );
    }
  });
}

/**
 * Creates a plain text excerpt from a formatted description
 * Useful for previews in cards and accordion headers
 *
 * @param description - Raw description text
 * @param maxLength - Maximum length of the excerpt
 * @returns Plain text excerpt
 */
export function getDescriptionExcerpt(description: string, maxLength: number = 150): string {
  if (!description) return '';

  // Remove bullet points and extra whitespace
  const cleaned = description
    .replace(/•/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length <= maxLength) return cleaned;

  // Truncate at word boundary
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}
