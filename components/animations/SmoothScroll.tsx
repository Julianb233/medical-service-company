"use client";

/**
 * HAPPY HOME CARE - Smooth Scroll Component
 * Award-winning smooth scrolling using Lenis
 *
 * Features:
 * - Buttery smooth scrolling experience across the entire site
 * - GPU-accelerated for optimal performance
 * - Respects user's reduced motion preferences
 * - Integrates seamlessly with Next.js App Router
 * - Optimized for touch devices and trackpads
 * - Provides scroll events for scroll-triggered animations
 */

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Enable smooth scroll (default: true) */
  enabled?: boolean;
  /** Scroll duration multiplier (default: 1) */
  duration?: number;
  /** Easing function (default: 0.1) */
  easing?: number;
  /** Scroll direction (default: "vertical") */
  direction?: "vertical" | "horizontal" | "both";
  /** Enable touch gestures (default: true) */
  gestureDirection?: "vertical" | "horizontal" | "both";
  /** Smooth scroll on touch devices (default: false for better native feel) */
  smoothTouch?: boolean;
  /** Callback on scroll */
  onScroll?: (e: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => void;
}

/**
 * SmoothScroll Component
 *
 * Wraps your application with smooth scrolling behavior using Lenis.
 * Should be used once at the root level of your app.
 *
 * @example
 * ```tsx
 * // In layout.tsx
 * <SmoothScroll>
 *   <YourApp />
 * </SmoothScroll>
 * ```
 */
export function SmoothScroll({
  children,
  className = "",
  enabled = true,
  duration = 1,
  easing = 0.1,
  direction = "vertical",
  gestureDirection = "vertical",
  smoothTouch = false,
  onScroll,
}: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Don't initialize if disabled or user prefers reduced motion
    if (!enabled || prefersReducedMotion) {
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: direction === "horizontal" ? "horizontal" : "vertical",
      gestureOrientation: gestureDirection === "horizontal" ? "horizontal" : "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Subscribe to scroll events
    if (onScroll) {
      lenis.on("scroll", onScroll);
    }

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Expose lenis instance globally for programmatic scrolling
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__lenis = lenis;

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).__lenis;
    };
  }, [enabled, duration, easing, direction, gestureDirection, smoothTouch, onScroll]);

  // Listen for reduced motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches && lenisRef.current) {
        // Disable smooth scroll if user enables reduced motion
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return <div className={className}>{children}</div>;
}

/**
 * useLenis Hook
 *
 * Access the Lenis instance from anywhere in your app.
 * Useful for programmatic scrolling and scroll animations.
 *
 * @example
 * ```tsx
 * const { scrollTo, lenis } = useLenis();
 *
 * // Scroll to top
 * scrollTo(0);
 *
 * // Scroll to element
 * scrollTo("#section-id", { offset: -100 });
 *
 * // Scroll to element with callback
 * scrollTo("#contact", {
 *   offset: -80,
 *   onComplete: () => console.log("Scrolled!")
 * });
 * ```
 */
export function useLenis() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
      immediate?: boolean;
      lock?: boolean;
      force?: boolean;
      onComplete?: () => void;
    }
  ) => {
    if (!lenis) {
      console.warn("Lenis instance not found. Make sure SmoothScroll is mounted.");
      return;
    }

    lenis.scrollTo(target, options);
  };

  const stop = () => {
    if (!lenis) return;
    lenis.stop();
  };

  const start = () => {
    if (!lenis) return;
    lenis.start();
  };

  return {
    lenis,
    scrollTo,
    stop,
    start,
  };
}

/**
 * ScrollToTop Component
 *
 * Button component that smoothly scrolls to top when clicked.
 *
 * @example
 * ```tsx
 * <ScrollToTop />
 * ```
 */
export function ScrollToTop({
  className = "",
  children,
  showAt = 400,
}: {
  className?: string;
  children?: React.ReactNode;
  showAt?: number;
}) {
  const { scrollTo } = useLenis();
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAt);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAt]);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => scrollTo(0, { duration: 1.5 })}
      className={className}
      aria-label="Scroll to top"
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      )}
    </button>
  );
}

// Add React import for ScrollToTop component
import React from "react";

/**
 * SmoothScrollSection Component
 *
 * Wrapper for sections that need smooth scroll behavior.
 * Useful for scroll-triggered animations.
 *
 * @example
 * ```tsx
 * <SmoothScrollSection id="about">
 *   <AboutContent />
 * </SmoothScrollSection>
 * ```
 */
export function SmoothScrollSection({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={className} data-scroll-section>
      {children}
    </section>
  );
}

export default SmoothScroll;
