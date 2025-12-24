/**
 * Image utility functions for optimized image handling in static export mode
 * @module image-utils
 */

/**
 * Responsive image size breakpoints
 */
export const IMAGE_SIZES = {
  SMALL: 640,
  MEDIUM: 1024,
  LARGE: 1920,
  XLARGE: 2560,
} as const;

/**
 * Generates a low-quality placeholder for blur effect
 * In production, this would be pre-generated during build time
 * For now, returns a simple base64 encoded SVG placeholder
 *
 * @param width - Image width
 * @param height - Image height
 * @param color - Placeholder color (hex)
 * @returns Base64 encoded SVG data URL
 */
export function generateBlurDataURL(
  width: number = 1920,
  height: number = 1080,
  color: string = '#e0f2f1'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${adjustColor(color, -10)};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Adjusts a hex color brightness
 * @param hex - Hex color string
 * @param percent - Brightness adjustment percentage
 */
function adjustColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}

/**
 * Generates srcset string for responsive images
 * @param basePath - Base image path without extension
 * @param extension - Image file extension
 * @param sizes - Array of width sizes
 * @returns srcset string
 */
export function generateSrcSet(
  basePath: string,
  extension: string = 'jpg',
  sizes: number[] = [IMAGE_SIZES.SMALL, IMAGE_SIZES.MEDIUM, IMAGE_SIZES.LARGE]
): string {
  return sizes
    .map(size => `${basePath}-${size}w.${extension} ${size}w`)
    .join(', ');
}

/**
 * Generates sizes attribute for responsive images
 * @param breakpoints - Array of breakpoint objects
 * @returns sizes string
 */
export function generateSizes(
  breakpoints: Array<{ breakpoint?: string; size: string }> = [
    { breakpoint: '(max-width: 640px)', size: '100vw' },
    { breakpoint: '(max-width: 1024px)', size: '50vw' },
    { size: '33vw' },
  ]
): string {
  return breakpoints
    .map(({ breakpoint, size }) => (breakpoint ? `${breakpoint} ${size}` : size))
    .join(', ');
}

/**
 * Normalizes image path to absolute path
 * @param path - Relative or absolute image path
 * @returns Normalized absolute path
 */
export function normalizeImagePath(path: string): string {
  // If already absolute or external URL, return as-is
  if (path.startsWith('/') || path.startsWith('http')) {
    return path;
  }
  // Add leading slash for relative paths
  return `/${path}`;
}

/**
 * Generates SEO-friendly alt text from filename or provided context
 * @param filename - Image filename
 * @param context - Optional context for better alt text
 * @returns SEO-optimized alt text
 */
export function generateAltText(
  filename: string,
  context?: {
    service?: string;
    location?: string;
    description?: string;
  }
): string {
  if (context?.description) {
    return context.description;
  }

  // Extract filename without extension and path
  const name = filename
    .split('/')
    .pop()
    ?.replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase()) || '';

  const parts: string[] = [];

  if (context?.service) {
    parts.push(context.service);
  }

  if (name && name !== 'undefined') {
    parts.push(name);
  }

  if (context?.location) {
    parts.push(`in ${context.location}`);
  }

  // Add company branding for SEO
  const altText = parts.length > 0
    ? `${parts.join(' - ')} | Happy Home Care`
    : 'Happy Home Care - Compassionate Home Health Services';

  return altText;
}

/**
 * Gets optimized image format based on browser support
 * Note: In static export mode, this is primarily for documentation
 * @returns Preferred image format
 */
export function getOptimalImageFormat(): 'webp' | 'avif' | 'jpg' {
  if (typeof window === 'undefined') return 'jpg';

  // Check for AVIF support
  const avif = document.createElement('canvas').toDataURL('image/avif').indexOf('data:image/avif') === 0;
  if (avif) return 'avif';

  // Check for WebP support
  const webp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
  if (webp) return 'webp';

  return 'jpg';
}

/**
 * Calculates aspect ratio padding for container
 * @param width - Image width
 * @param height - Image height
 * @returns Padding percentage for aspect ratio box
 */
export function calculateAspectRatioPadding(width: number, height: number): string {
  return `${(height / width) * 100}%`;
}

/**
 * Common aspect ratios for medical/healthcare imagery
 */
export const ASPECT_RATIOS = {
  HERO: { width: 16, height: 9 }, // 16:9 for hero banners
  CARD: { width: 4, height: 3 }, // 4:3 for service cards
  PORTRAIT: { width: 3, height: 4 }, // 3:4 for staff photos
  SQUARE: { width: 1, height: 1 }, // 1:1 for icons/avatars
  WIDE: { width: 21, height: 9 }, // 21:9 for ultra-wide banners
} as const;

/**
 * Preloads an image for better perceived performance
 * @param src - Image source URL
 * @returns Promise that resolves when image is loaded
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Batch preloads multiple images
 * @param sources - Array of image URLs
 * @returns Promise that resolves when all images are loaded
 */
export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage));
}

/**
 * Gets placeholder image path for missing images
 * @param type - Type of placeholder needed
 * @returns Placeholder image path
 */
export function getPlaceholderImage(
  type: 'hero' | 'service' | 'staff' | 'location' | 'default' = 'default'
): string {
  const placeholders = {
    hero: '/images/placeholders/hero-placeholder.jpg',
    service: '/images/placeholders/service-placeholder.jpg',
    staff: '/images/placeholders/staff-placeholder.jpg',
    location: '/images/placeholders/location-placeholder.jpg',
    default: '/images/placeholders/default-placeholder.jpg',
  };

  return placeholders[type];
}

/**
 * Image loading priority levels
 */
export type ImagePriority = 'high' | 'normal' | 'low';

/**
 * Determines loading strategy based on priority and position
 * @param priority - Image priority
 * @param isAboveFold - Whether image is above the fold
 * @returns Loading strategy configuration
 */
export function getLoadingStrategy(
  priority: ImagePriority = 'normal',
  isAboveFold: boolean = false
): {
  loading: 'eager' | 'lazy';
  fetchPriority: 'high' | 'low' | 'auto';
} {
  if (priority === 'high' || isAboveFold) {
    return {
      loading: 'eager',
      fetchPriority: 'high',
    };
  }

  if (priority === 'low') {
    return {
      loading: 'lazy',
      fetchPriority: 'low',
    };
  }

  return {
    loading: 'lazy',
    fetchPriority: 'auto',
  };
}

/**
 * Image configuration presets for common use cases
 */
export const IMAGE_PRESETS = {
  hero: {
    sizes: generateSizes([
      { breakpoint: '(max-width: 640px)', size: '100vw' },
      { breakpoint: '(max-width: 1024px)', size: '100vw' },
      { size: '100vw' },
    ]),
    aspectRatio: ASPECT_RATIOS.HERO,
    priority: 'high' as ImagePriority,
  },
  serviceCard: {
    sizes: generateSizes([
      { breakpoint: '(max-width: 640px)', size: '100vw' },
      { breakpoint: '(max-width: 1024px)', size: '50vw' },
      { size: '33vw' },
    ]),
    aspectRatio: ASPECT_RATIOS.CARD,
    priority: 'normal' as ImagePriority,
  },
  locationCard: {
    sizes: generateSizes([
      { breakpoint: '(max-width: 640px)', size: '100vw' },
      { breakpoint: '(max-width: 1024px)', size: '50vw' },
      { size: '50vw' },
    ]),
    aspectRatio: ASPECT_RATIOS.CARD,
    priority: 'normal' as ImagePriority,
  },
  staffPhoto: {
    sizes: generateSizes([
      { breakpoint: '(max-width: 640px)', size: '50vw' },
      { breakpoint: '(max-width: 1024px)', size: '33vw' },
      { size: '25vw' },
    ]),
    aspectRatio: ASPECT_RATIOS.PORTRAIT,
    priority: 'low' as ImagePriority,
  },
  avatar: {
    sizes: generateSizes([
      { size: '128px' },
    ]),
    aspectRatio: ASPECT_RATIOS.SQUARE,
    priority: 'low' as ImagePriority,
  },
} as const;
