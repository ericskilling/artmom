import { marked } from 'marked';

/**
 * Parse Markdown text to safe HTML.
 * Returns an empty string for null/undefined input.
 */
export function renderMarkdown(md: string | undefined | null): string {
  if (!md) return '';
  const result = marked.parse(md, { async: false }) as string;
  return result;
}