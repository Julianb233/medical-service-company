"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Timeline line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-teal via-primary-teal to-transparent origin-top"
        variants={lineVariants}
        {...(prefersReducedMotion && { initial: false, animate: false })}
      />

      {/* Timeline events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative pl-20"
            variants={fadeInUp}
            custom={index}
          >
            {/* Year dot */}
            <motion.div
              className="absolute left-0 w-16 h-16 flex items-center justify-center"
              variants={dotVariants}
            >
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-primary-teal/20 rounded-full blur-md" />
                {/* Dot */}
                <div className="relative w-4 h-4 bg-primary-teal rounded-full border-4 border-white shadow-lg" />
              </div>
            </motion.div>

            {/* Content card */}
            <motion.div
              className="card card-elevated p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -4,
                      transition: { duration: 0.2 },
                    }
              }
            >
              {/* Year badge */}
              <div className="inline-flex items-center justify-center px-3 py-1 mb-3 text-sm font-semibold text-primary-teal bg-primary-teal/10 rounded-full">
                {event.year}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
