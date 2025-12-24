/**
 * HAPPY HOME CARE - Scroll Progress Hook
 * Tracks scroll progress for animations
 */

"use client";

import { useState, useEffect, useCallback, RefObject } from "react";

interface ScrollProgress {
  /** Progress from 0 to 1 */
  progress: number;
  /** Scroll direction: 'up' | 'down' | null */
  direction: "up" | "down" | null;
  /** Current scroll position in pixels */
  scrollY: number;
  /** Document height */
  documentHeight: number;
  /** Viewport height */
  viewportHeight: number;
}

/**
 * Hook to track overall page scroll progress
 * @returns ScrollProgress object with progress, direction, and positions
 */
export function useScrollProgress(): ScrollProgress {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const currentScrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const maxScroll = docHeight - viewHeight;

    // Calculate progress (0 to 1)
    const newProgress = maxScroll > 0 ? currentScrollY / maxScroll : 0;

    // Determine direction
    const newDirection = currentScrollY > scrollY ? "down" : currentScrollY < scrollY ? "up" : direction;

    setProgress(Math.min(1, Math.max(0, newProgress)));
    setDirection(newDirection);
    setScrollY(currentScrollY);
    setDocumentHeight(docHeight);
    setViewportHeight(viewHeight);
  }, [scrollY, direction]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initial values
    handleScroll();

    // Throttled scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return { progress, direction, scrollY, documentHeight, viewportHeight };
}

/**
 * Hook to track scroll progress within a specific element
 * @param ref - Reference to the element to track
 * @param offset - Offset in pixels to start tracking (default: 0)
 * @returns Progress from 0 to 1 as element scrolls through viewport
 */
export function useElementScrollProgress(
  ref: RefObject<HTMLElement>,
  offset: number = 0
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Element top enters viewport + offset
      const start = viewportHeight - offset;
      // Element bottom leaves viewport
      const end = -rect.height + offset;

      // Calculate progress
      const current = rect.top;
      const range = start - end;
      const elementProgress = (start - current) / range;

      setProgress(Math.min(1, Math.max(0, elementProgress)));
    };

    // Initial calculation
    handleScroll();

    // Throttled scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, offset]);

  return progress;
}

export default useScrollProgress;
