/**
 * HAPPY HOME CARE - Counter Animation Hook
 * Animates numbers counting up with intersection observer
 */

"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface CounterOptions {
  /** Duration of count animation in ms (default: 2000) */
  duration?: number;
  /** Whether to start counting on mount or wait for intersection (default: false) */
  startOnMount?: boolean;
  /** Custom easing function */
  easing?: (t: number) => number;
  /** Decimal places to show (default: 0) */
  decimals?: number;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "+", "%") */
  suffix?: string;
  /** Separator for thousands (default: ",") */
  separator?: string;
}

/**
 * Easing function for smooth counter animation
 */
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

/**
 * Hook to animate counter with intersection observer
 * @param end - The final number to count to
 * @param options - Configuration options
 * @returns The current animated value and ref to attach to element
 */
export function useCounter<T extends HTMLElement = HTMLElement>(
  end: number,
  options: CounterOptions = {}
): [string, RefObject<T | null>] {
  const {
    duration = 2000,
    startOnMount = false,
    easing = easeOutExpo,
    decimals = 0,
    prefix = "",
    suffix = "",
    separator = ",",
  } = options;

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(startOnMount);
  const countRef = useRef<T | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Format number with separators
  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  };

  useEffect(() => {
    if (!hasStarted) return;

    // Instant count if reduced motion
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easing(progress);
      const currentCount = startValue + (end - startValue) * easedProgress;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [hasStarted, end, duration, easing, prefersReducedMotion]);

  // Intersection observer setup
  useEffect(() => {
    if (startOnMount || !countRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(countRef.current);

    return () => {
      observer.disconnect();
    };
  }, [startOnMount, hasStarted]);

  const formattedValue = `${prefix}${formatNumber(count)}${suffix}`;

  return [formattedValue, countRef];
}

export default useCounter;
