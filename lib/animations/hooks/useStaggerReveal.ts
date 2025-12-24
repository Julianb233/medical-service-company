/**
 * HAPPY HOME CARE - Stagger Reveal Hook
 * Manages staggered reveal animations for lists of elements
 */

"use client";

import { useMemo } from "react";
import { Variants } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";
import { stagger } from "../transitions";
import { easings } from "../easings";

interface StaggerRevealOptions {
  /** Delay between each child animation (default: 0.1) */
  staggerDelay?: number;
  /** Initial delay before first animation (default: 0) */
  initialDelay?: number;
  /** Duration of each animation (default: 0.5) */
  duration?: number;
  /** Y offset for initial position (default: 30) */
  yOffset?: number;
  /** Whether to include scale animation (default: false) */
  withScale?: boolean;
  /** Initial scale if withScale is true (default: 0.95) */
  initialScale?: number;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right";
}

interface StaggerRevealReturn {
  /** Container variants */
  containerVariants: Variants;
  /** Item variants */
  itemVariants: Variants;
}

/**
 * Hook to create stagger reveal animation variants
 * @param options - Configuration options for the stagger effect
 * @returns Container and item variants for Framer Motion
 */
export function useStaggerReveal(
  options: StaggerRevealOptions = {}
): StaggerRevealReturn {
  const {
    staggerDelay = stagger.normal,
    initialDelay = 0,
    duration = 0.5,
    yOffset = 30,
    withScale = false,
    initialScale = 0.95,
    direction = "up",
  } = options;

  const prefersReducedMotion = useReducedMotion();

  const variants = useMemo(() => {
    // Reduced motion variants
    if (prefersReducedMotion) {
      return {
        containerVariants: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.01 },
          },
        } as Variants,
        itemVariants: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.01 },
          },
        } as Variants,
      };
    }

    // Calculate offset based on direction
    const getInitialPosition = () => {
      switch (direction) {
        case "up":
          return { y: yOffset };
        case "down":
          return { y: -yOffset };
        case "left":
          return { x: yOffset };
        case "right":
          return { x: -yOffset };
        default:
          return { y: yOffset };
      }
    };

    const initialPosition = getInitialPosition();
    const hiddenState = {
      opacity: 0,
      ...initialPosition,
      ...(withScale && { scale: initialScale }),
    };

    const visibleState = {
      opacity: 1,
      x: 0,
      y: 0,
      ...(withScale && { scale: 1 }),
    };

    return {
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      } as Variants,
      itemVariants: {
        hidden: hiddenState,
        visible: {
          ...visibleState,
          transition: {
            duration,
            ease: easings.spring,
          },
        },
      } as Variants,
    };
  }, [
    prefersReducedMotion,
    staggerDelay,
    initialDelay,
    duration,
    yOffset,
    withScale,
    initialScale,
    direction,
  ]);

  return variants;
}

/**
 * Create simple stagger delay for inline use
 * @param index - Index of the element
 * @param delay - Base delay (default: 0.1)
 * @returns Delay value for the element
 */
export function getStaggerDelay(index: number, delay: number = stagger.normal): number {
  return index * delay;
}

export default useStaggerReveal;
