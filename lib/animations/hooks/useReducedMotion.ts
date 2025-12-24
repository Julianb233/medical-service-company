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
 * @param normalProps - Props to use when motion is allowed (optional)
 * @param reducedProps - Props to use when reduced motion is preferred (optional)
 * @returns The appropriate props based on user preference, or empty object for reduced motion
 */
export function useMotionProps<T extends object = Record<string, never>>(
  normalProps?: T,
  reducedProps?: T
): T | Record<string, never> {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return reducedProps ?? {};
  }

  return normalProps ?? {};
}

export default useReducedMotion;
