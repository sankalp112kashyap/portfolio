// Utility functions

/**
 * Get the correct asset path for production (GitHub Pages) and development
 * In production, assets need the /portfolio prefix
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return `${basePath}${path}`;
}
