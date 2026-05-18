/**
 * Resolve image paths from content collections to browser-accessible URLs.
 * Content files use relative paths like `../../assets/images/foo.jpg`.
 * This function converts them to `/assets/images/foo.jpg` for the browser.
 */
export function resolveImagePath(
  path: string | object | undefined | null,
  fallback = '/assets/images/grey-placeholder.png'
): string {
  if (!path) return fallback;
  if (typeof path === 'object' && path !== null) {
    path = (path as any).url || (path as any).path || (path as any).src || '';
  }
  if (typeof path !== 'string') return fallback;
  if (path.startsWith('../../assets/')) {
    return '/' + path.replace('../../assets/', 'assets/');
  }
  if (path.startsWith('/assets/')) {
    return path;
  }
  return path;
}