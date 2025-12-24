/**
 * HAPPY HOME CARE - Reduced Motion Hook
 * Detects user preference for reduced motion for accessibility
 */

"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if user prefers reduced motion
 * @returns boolean - true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener for changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Get animation props based on reduced motion preference
 * @param normalProps - Props to use when motion is allowed
 * @param reducedProps - Props to use when reduced motion is preferred
 * @returns The appropriate props based on user preference
 */
export function useMotionProps<T>(normalProps: T, reducedProps: T): T {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? reducedProps : normalProps;
}

export default useReducedMotion;
