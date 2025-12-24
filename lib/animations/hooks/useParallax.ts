/**
 * HAPPY HOME CARE - Parallax Hook
 * Creates parallax scrolling effects
 */

"use client";

import { useState, useEffect, useCallback, RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface ParallaxOptions {
  /** Speed multiplier (0-1 for slower, >1 for faster than scroll) */
  speed?: number;
  /** Direction of parallax effect */
  direction?: "vertical" | "horizontal";
  /** Whether to reverse the direction */
  reverse?: boolean;
  /** Easing function name (for CSS) */
  easing?: string;
}

interface ParallaxValue {
  /** Transform value to apply */
  transform: string;
  /** Raw offset value in pixels */
  offset: number;
}

/**
 * Hook for creating parallax scroll effects
 * @param ref - Reference to the parallax element
 * @param options - Parallax configuration options
 * @returns Parallax transform values
 */
export function useParallax(
  ref: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
): ParallaxValue {
  const {
    speed = 0.5,
    direction = "vertical",
    reverse = false,
  } = options;

  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined" || !ref.current || prefersReducedMotion) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;

    // Calculate distance from center of viewport
    const distanceFromCenter = elementCenter - viewportCenter;

    // Calculate parallax offset
    let parallaxOffset = distanceFromCenter * speed;

    if (reverse) {
      parallaxOffset *= -1;
    }

    setOffset(parallaxOffset);
  }, [ref, speed, reverse, prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion) return;

    // Initial calculation
    handleScroll();

    // Throttled scroll handler using RAF
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
  }, [handleScroll, prefersReducedMotion]);

  // If reduced motion is preferred, return no transform
  if (prefersReducedMotion) {
    return {
      transform: "none",
      offset: 0,
    };
  }

  const transform =
    direction === "vertical"
      ? `translate3d(0, ${offset}px, 0)`
      : `translate3d(${offset}px, 0, 0)`;

  return {
    transform,
    offset,
  };
}

/**
 * Simpler parallax hook that returns just the Y offset for use with Framer Motion
 * @param speed - Speed multiplier (0-1 for slower, >1 for faster)
 * @returns Y offset value
 */
export function useSimpleParallax(speed: number = 0.5): number {
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial value
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
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return 0;

  return scrollY * speed;
}

export default useParallax;
