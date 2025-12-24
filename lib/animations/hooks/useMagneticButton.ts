/**
 * HAPPY HOME CARE - Magnetic Button Hook
 * Creates a magnetic effect where elements follow the cursor
 */

"use client";

import { useState, useCallback, RefObject, MouseEvent } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface MagneticValue {
  /** X transform offset */
  x: number;
  /** Y transform offset */
  y: number;
  /** Whether the mouse is over the element */
  isHovered: boolean;
}

interface MagneticOptions {
  /** Maximum offset in pixels (default: 10) */
  strength?: number;
  /** Transition duration for return animation (default: 0.3) */
  returnDuration?: number;
}

interface MagneticHandlers {
  onMouseMove: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

/**
 * Hook for creating magnetic button/element effects
 * @param ref - Reference to the magnetic element
 * @param options - Configuration options
 * @returns Magnetic value and event handlers
 */
export function useMagneticButton(
  ref: RefObject<HTMLElement | null>,
  options: MagneticOptions = {}
): [MagneticValue, MagneticHandlers] {
  const { strength = 10 } = options;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!ref.current || prefersReducedMotion) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Calculate offset (clamped to strength)
      const x = Math.max(-strength, Math.min(strength, distanceX * 0.2));
      const y = Math.max(-strength, Math.min(strength, distanceY * 0.2));

      setPosition({ x, y });
    },
    [ref, strength, prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // If reduced motion is preferred, return no movement
  if (prefersReducedMotion) {
    return [
      { x: 0, y: 0, isHovered },
      {
        onMouseMove: () => {},
        onMouseLeave: handleMouseLeave,
        onMouseEnter: handleMouseEnter,
      },
    ];
  }

  return [
    { ...position, isHovered },
    {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter,
    },
  ];
}

/**
 * Get Framer Motion style props for magnetic effect
 * @param magnetic - Magnetic value from useMagneticButton
 * @returns Style object for Framer Motion animate prop
 */
export function getMagneticStyle(magnetic: MagneticValue) {
  return {
    x: magnetic.x,
    y: magnetic.y,
    scale: magnetic.isHovered ? 1.05 : 1,
  };
}

export default useMagneticButton;
