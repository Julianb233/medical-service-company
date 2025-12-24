/**
 * HAPPY HOME CARE - Animation Components Index
 * Central export point for all animation components
 */

export {
  PageTransition,
  PageTransitionContainer,
  PageTransitionSection,
  SlidePageTransition,
} from "./PageTransition";

export {
  SmoothScroll,
  SmoothScrollSection,
  ScrollToTop,
  useLenis,
} from "./SmoothScroll";

// Re-export animation utilities for convenience
export * from "@/lib/animations/variants";
export * from "@/lib/animations/easings";
export * from "@/lib/animations/transitions";
