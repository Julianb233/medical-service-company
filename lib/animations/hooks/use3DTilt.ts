/**
 * HAPPY HOME CARE - 3D Tilt Hook
 * Creates a 3D tilt effect that follows the cursor position
 */

"use client";

import { useState, useCallback } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface Tilt3DState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

interface Use3DTiltOptions {
  /** Maximum tilt angle in degrees (default: 10) */
  maxTilt?: number;
  /** Perspective value in pixels (default: 1000) */
  perspective?: number;
  /** Scale on hover (default: 1.02) */
  scale?: number;
  /** Speed of the tilt transition (default: 400ms) */
  speed?: number;
  /** Whether to reverse the tilt direction (default: false) */
  reverse?: boolean;
}

interface Use3DTiltReturn {
  /** Current tilt state */
  tiltState: Tilt3DState;
  /** Handler for mouse move */
  handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  /** Handler for mouse leave */
  handleMouseLeave: () => void;
  /** Style object to apply to the element */
  style: React.CSSProperties;
}

/**
 * Hook to create a 3D tilt effect on hover
 * @param options - Configuration options
 * @returns Tilt state and handlers
 */
export function use3DTilt(options: Use3DTiltOptions = {}): Use3DTiltReturn {
  const {
    maxTilt = 10,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    reverse = false,
  } = options;

  const prefersReducedMotion = useReducedMotion();
  const [tiltState, setTiltState] = useState<Tilt3DState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;

      const element = e.currentTarget;
      const rect = element.getBoundingClientRect();

      // Calculate mouse position relative to element center
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation based on mouse position (-1 to 1)
      const rotateX = ((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTiltState({
        rotateX: reverse ? rotateX : -rotateX,
        rotateY: reverse ? -rotateY : rotateY,
        scale,
      });
    },
    [maxTilt, scale, reverse, prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setTiltState({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  }, []);

  const style: React.CSSProperties = {
    transform: `perspective(${perspective}px) rotateX(${tiltState.rotateX}deg) rotateY(${tiltState.rotateY}deg) scale(${tiltState.scale})`,
    transition: `transform ${speed}ms cubic-bezier(0.22, 1, 0.36, 1)`,
  };

  return {
    tiltState,
    handleMouseMove,
    handleMouseLeave,
    style,
  };
}

export default use3DTilt;
