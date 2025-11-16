'use client'

import React from 'react';

/**
 * Parses inline markdown formatting (bold with **text** and italic with *text*)
 *
 * @param text - Text that may contain markdown formatting
 * @returns React elements with formatted text
 */
function parseInlineFormatting(text: string): React.ReactNode {
  // First handle bold (**text**), then italic (*text*)
  // Use a regex that captures both patterns
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  if (parts.length === 1) {
    // No formatting found
    return text;
  }

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // This is bold text - remove the ** markers and wrap in strong tag
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-bold">{boldText}</strong>;
    } else if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      // This is italic text - remove the * markers and wrap in em tag
      const italicText = part.slice(1, -1);
      return <em key={index} className="italic">{italicText}</em>;
    }
    return part;
  });
}

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

    // Check if this paragraph contains bullet points or numbered lists
    const lines = trimmedParagraph.split('\n');
    const hasBullets = lines.some(line => line.trim().startsWith('•'));
    const hasNumberedList = lines.some(line => /^\d+\.\s/.test(line.trim()));

    if (hasBullets || hasNumberedList) {
      // This is a bulleted or numbered list section
      const listItems: string[] = [];
      let currentText = '';

      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('•') || /^\d+\.\s/.test(trimmedLine)) {
          // If we have accumulated text, add it as a paragraph before the list
          if (currentText) {
            listItems.push(currentText);
            currentText = '';
          }
          // Add the list item (remove the bullet or number prefix)
          if (trimmedLine.startsWith('•')) {
            listItems.push(trimmedLine.substring(1).trim());
          } else {
            listItems.push(trimmedLine.replace(/^\d+\.\s/, '').trim());
          }
        } else if (trimmedLine) {
          // Accumulate non-list text
          currentText += (currentText ? ' ' : '') + trimmedLine;
        }
      });

      // If we have remaining text after the list, add it
      if (currentText) {
        listItems.push(currentText);
      }

      // Separate text before list and list items
      const textBeforeList: string[] = [];
      const listItemsContent: string[] = [];
      let foundFirstListItem = false;

      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('•') || /^\d+\.\s/.test(trimmedLine)) {
          foundFirstListItem = true;
          if (trimmedLine.startsWith('•')) {
            listItemsContent.push(trimmedLine.substring(1).trim());
          } else {
            listItemsContent.push(trimmedLine.replace(/^\d+\.\s/, '').trim());
          }
        } else if (!foundFirstListItem && trimmedLine) {
          textBeforeList.push(trimmedLine);
        }
      });

      return (
        <div key={index} className="mb-6 last:mb-0">
          {textBeforeList.length > 0 && (
            <p className="mb-4">{parseInlineFormatting(textBeforeList.join(' '))}</p>
          )}
          {listItemsContent.length > 0 && hasNumberedList && (
            <ol className="pl-6 space-y-2" style={{ listStyleType: 'decimal' }}>
              {listItemsContent.map((item, idx) => (
                <li key={idx} style={{ display: 'list-item' }}>{parseInlineFormatting(item)}</li>
              ))}
            </ol>
          )}
          {listItemsContent.length > 0 && hasBullets && !hasNumberedList && (
            <ul className="pl-6 space-y-2" style={{ listStyleType: 'disc' }}>
              {listItemsContent.map((item, idx) => (
                <li key={idx} style={{ display: 'list-item' }}>{parseInlineFormatting(item)}</li>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      // Regular paragraph
      return (
        <p key={index} className="mb-4 last:mb-0">
          {parseInlineFormatting(trimmedParagraph.split('\n').join(' '))}
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
