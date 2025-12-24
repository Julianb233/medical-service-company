/**
 * HAPPY HOME CARE - Animation Library
 * Centralized animation system for award-winning UI effects
 */

// Core animation utilities
export * from "./easings";
export * from "./transitions";
export * from "./variants";

// Animation hooks
export { useReducedMotion, useMotionProps } from "./hooks/useReducedMotion";
export {
  useScrollProgress,
  useElementScrollProgress,
} from "./hooks/useScrollProgress";
export { useParallax, useSimpleParallax } from "./hooks/useParallax";
export {
  useMagneticButton,
  getMagneticStyle,
} from "./hooks/useMagneticButton";
export {
  useStaggerReveal,
  getStaggerDelay,
} from "./hooks/useStaggerReveal";

// Re-export types
export type { Variants, Transition, AnimationProps } from "framer-motion";
