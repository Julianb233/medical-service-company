/**
 * HAPPY HOME CARE - Animation Transitions
 * Reusable transition presets for Framer Motion
 */

import { Transition } from "framer-motion";
import { easings, springs } from "./easings";

// Duration scale (in seconds)
export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  moderate: 0.4,
  slow: 0.5,
  slower: 0.6,
  slowest: 0.8,
  glacial: 1,
  hero: 1.2,
} as const;

// Stagger delays for children
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  slower: 0.2,
} as const;

// Pre-built transitions
export const transitions = {
  // Fast transitions
  fast: {
    duration: durations.fast,
    ease: easings.easeOut,
  } as Transition,

  // Normal transitions
  normal: {
    duration: durations.normal,
    ease: easings.easeOut,
  } as Transition,

  // Slow transitions
  slow: {
    duration: durations.slow,
    ease: easings.easeOut,
  } as Transition,

  // Spring transitions
  spring: {
    ...springs.default,
  } as Transition,

  springGentle: {
    ...springs.gentle,
  } as Transition,

  springBouncy: {
    ...springs.bouncy,
  } as Transition,

  springStiff: {
    ...springs.stiff,
  } as Transition,

  // Dramatic reveal
  dramatic: {
    duration: durations.slower,
    ease: easings.dramatic,
  } as Transition,

  // Smooth/Apple-like
  smooth: {
    duration: durations.moderate,
    ease: easings.smooth,
  } as Transition,

  // Snappy
  snappy: {
    duration: durations.fast,
    ease: easings.snappy,
  } as Transition,

  // Hero section reveal
  heroReveal: {
    duration: durations.hero,
    ease: easings.heroReveal,
  } as Transition,

  // Card hover
  cardHover: {
    duration: durations.normal,
    ease: easings.cardHover,
  } as Transition,

  // Page transition
  pageEnter: {
    duration: durations.slow,
    ease: easings.pageTransition,
    when: "beforeChildren" as const,
  } as Transition,

  pageExit: {
    duration: durations.fast,
    ease: easings.easeIn,
  } as Transition,

  // Stagger container transitions
  staggerContainer: {
    staggerChildren: stagger.normal,
    delayChildren: 0.1,
  } as Transition,

  staggerContainerFast: {
    staggerChildren: stagger.fast,
    delayChildren: 0.05,
  } as Transition,

  staggerContainerSlow: {
    staggerChildren: stagger.slow,
    delayChildren: 0.15,
  } as Transition,
} as const;

// Helper to create delayed transition
export const withDelay = (transition: Transition, delay: number): Transition => ({
  ...transition,
  delay,
});

// Helper to create duration-modified transition
export const withDuration = (transition: Transition, duration: number): Transition => ({
  ...transition,
  duration,
});

export type DurationName = keyof typeof durations;
export type StaggerName = keyof typeof stagger;
export type TransitionName = keyof typeof transitions;
