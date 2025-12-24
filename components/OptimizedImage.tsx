"use client";

import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  generateBlurDataURL,
  generateAltText,
  normalizeImagePath,
  calculateAspectRatioPadding,
  getLoadingStrategy,
  getPlaceholderImage,
  type ImagePriority,
} from '@/lib/image-utils';

/**
 * Props for the OptimizedImage component
 */
export interface OptimizedImageProps {
  /** Image source path (relative or absolute) */
  src: string;
  /** Alternative text for accessibility and SEO */
  alt?: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
  /** Aspect ratio object { width, height } */
  aspectRatio?: { width: number; height: number };
  /** Image loading priority */
  priority?: ImagePriority;
  /** Whether image is above the fold */
  isAboveFold?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Container CSS classes */
  containerClassName?: string;
  /** Image object-fit CSS property */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Image object-position CSS property */
  objectPosition?: string;
  /** Sizes attribute for responsive images */
  sizes?: string;
  /** Whether to show loading skeleton */
  showSkeleton?: boolean;
  /** Custom skeleton color */
  skeletonColor?: string;
  /** Custom blur placeholder color */
  blurColor?: string;
  /** Callback when image loads successfully */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: () => void;
  /** Context for auto-generated alt text */
  context?: {
    service?: string;
    location?: string;
    description?: string;
  };
  /** Fallback image to use on error */
  fallbackSrc?: string;
  /** Quality setting (1-100, for next/image) */
  quality?: number;
  /** Whether to use blur placeholder */
  useBlurPlaceholder?: boolean;
  /** Whether to enable intersection observer lazy loading */
  useLazyLoad?: boolean;
  /** Intersection observer root margin */
  rootMargin?: string;
}

/**
 * Optimized image component for static export with blur placeholder,
 * lazy loading, skeleton states, and SEO optimization.
 *
 * Features:
 * - Works with Next.js static export (output: 'export')
 * - Intersection Observer-based lazy loading
 * - Blur placeholder support
 * - Skeleton loading state
 * - Automatic alt text generation
 * - Aspect ratio container to prevent layout shift
 * - Fallback image handling
 * - Error boundary support
 *
 * @example
 * ```tsx
 * <OptimizedImage
 *   src="/images/services/home-care.jpg"
 *   alt="Home care services"
 *   aspectRatio={{ width: 4, height: 3 }}
 *   priority="high"
 *   isAboveFold
 * />
 * ```
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  priority = 'normal',
  isAboveFold = false,
  className,
  containerClassName,
  objectFit = 'cover',
  objectPosition = 'center',
  sizes,
  showSkeleton = true,
  skeletonColor = 'bg-teal-50',
  blurColor = '#e0f2f1',
  onLoad,
  onError,
  context,
  fallbackSrc,
  quality = 85,
  useBlurPlaceholder = true,
  useLazyLoad = true,
  rootMargin = '50px',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!useLazyLoad || isAboveFold);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Normalize the image path
  const normalizedSrc = normalizeImagePath(currentSrc);

  // Generate alt text if not provided
  const imageAlt = alt || generateAltText(normalizedSrc, context);

  // Calculate dimensions based on aspect ratio
  const computedDimensions = React.useMemo(() => {
    if (width && height) {
      return { width, height };
    }

    if (aspectRatio) {
      const baseWidth = width || 1920;
      const computedHeight = Math.round(
        (baseWidth * aspectRatio.height) / aspectRatio.width
      );
      return { width: baseWidth, height: computedHeight };
    }

    return { width: width || 1920, height: height || 1080 };
  }, [width, height, aspectRatio]);

  // Generate blur placeholder
  const blurDataURL = useBlurPlaceholder
    ? generateBlurDataURL(
        computedDimensions.width,
        computedDimensions.height,
        blurColor
      )
    : undefined;

  // Calculate aspect ratio padding for container
  const aspectRatioPadding = aspectRatio
    ? calculateAspectRatioPadding(aspectRatio.width, aspectRatio.height)
    : calculateAspectRatioPadding(
        computedDimensions.width,
        computedDimensions.height
      );

  // Get loading strategy
  const loadingStrategy = getLoadingStrategy(priority, isAboveFold);

  // Setup intersection observer for lazy loading
  useEffect(() => {
    if (!useLazyLoad || isAboveFold || !imgRef.current) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [useLazyLoad, isAboveFold, rootMargin]);

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);

    // Try fallback image
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    } else if (!fallbackSrc) {
      // Use placeholder
      const placeholderType = context?.service
        ? 'service'
        : context?.location
        ? 'location'
        : 'default';
      setCurrentSrc(getPlaceholderImage(placeholderType));
      setHasError(false);
      setIsLoading(true);
    }

    onError?.();
  };

  // Container styles
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    paddingBottom: aspectRatioPadding,
    overflow: 'hidden',
  };

  // Image styles
  const imageStyle: CSSProperties = {
    objectFit,
    objectPosition,
  };

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', containerClassName)}
      style={containerStyle}
    >
      {/* Skeleton loader */}
      {showSkeleton && isLoading && (
        <div
          className={cn(
            'absolute inset-0 animate-pulse',
            skeletonColor
          )}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}

      {/* Blur placeholder */}
      {useBlurPlaceholder && isLoading && blurDataURL && (
        <div
          className="absolute inset-0 blur-xl scale-110 transition-opacity duration-300"
          style={{
            backgroundImage: `url("${blurDataURL}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isLoading ? 1 : 0,
          }}
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {isInView && (
        <Image
          src={normalizedSrc}
          alt={imageAlt}
          fill
          sizes={sizes}
          quality={quality}
          loading={loadingStrategy.loading}
          priority={priority === 'high'}
          className={cn(
            'transition-opacity duration-500',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          style={imageStyle}
          onLoad={handleLoad}
          onError={handleError}
          unoptimized // Required for static export
        />
      )}

      {/* Error state overlay */}
      {hasError && !fallbackSrc && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          role="img"
          aria-label="Image failed to load"
        >
          <div className="text-center text-gray-600 p-4">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
}

/** Props for preset components - require src while allowing other optional overrides */
type PresetProps = { src: string } & Partial<Omit<OptimizedImageProps, 'src'>>;

/**
 * Preset configurations for common image types
 */
export const ImagePresets = {
  /**
   * Hero image preset for banner sections
   */
  Hero: (props: PresetProps) => (
    <OptimizedImage
      aspectRatio={{ width: 16, height: 9 }}
      priority="high"
      isAboveFold
      sizes="100vw"
      {...props}
    />
  ),

  /**
   * Service card image preset
   */
  ServiceCard: (props: PresetProps) => (
    <OptimizedImage
      aspectRatio={{ width: 4, height: 3 }}
      priority="normal"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      {...props}
    />
  ),

  /**
   * Location card image preset
   */
  LocationCard: (props: PresetProps) => (
    <OptimizedImage
      aspectRatio={{ width: 4, height: 3 }}
      priority="normal"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
      {...props}
    />
  ),

  /**
   * Staff photo preset
   */
  StaffPhoto: (props: PresetProps) => (
    <OptimizedImage
      aspectRatio={{ width: 3, height: 4 }}
      priority="low"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      {...props}
    />
  ),

  /**
   * Avatar/profile image preset
   */
  Avatar: (props: PresetProps) => (
    <OptimizedImage
      aspectRatio={{ width: 1, height: 1 }}
      priority="low"
      sizes="128px"
      objectFit="cover"
      {...props}
    />
  ),

  /**
   * Testimonial photo preset
   */
  Testimonial: (props: PresetProps) => (
    <OptimizedImage
      aspectRatio={{ width: 1, height: 1 }}
      priority="low"
      sizes="(max-width: 640px) 80px, 96px"
      objectFit="cover"
      {...props}
    />
  ),
} as const;

export default OptimizedImage;
