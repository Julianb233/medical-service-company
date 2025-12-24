"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/content-data";
import { cn } from "@/lib/utils";

// Animated counter component
function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Extract number from string (e.g., "20+" -> 20, "5,000+" -> 5000)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

    if (isNaN(numericValue)) {
      // If no number found, just display the value
      if (ref.current) {
        ref.current.textContent = value;
      }
      return;
    }

    const suffix = value.replace(/[0-9,]/g, ""); // Extract +, k, etc.
    const hasComma = value.includes(",");

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(numericValue * easeOutQuart);

      if (ref.current) {
        // Format with commas if original had commas
        const formatted = hasComma
          ? currentValue.toLocaleString()
          : currentValue.toString();
        ref.current.textContent = formatted + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{value}</span>;
}

export function StatsSection() {
  return (
    <section className="section-padding bg-primary-teal">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-accent font-bold text-white mb-4">
            Trusted by San Diego Families
          </h2>
          <p className="text-lg sm:text-xl text-teal-light max-w-3xl mx-auto">
            Decades of experience delivering exceptional home health care
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          className={cn(
            "grid gap-8 md:gap-12",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-center"
            >
              {/* Number */}
              <div className="mb-3">
                <div
                  className={cn(
                    "text-5xl sm:text-6xl md:text-7xl",
                    "font-accent font-bold",
                    "text-primary-orange",
                    "tracking-tight"
                  )}
                >
                  <AnimatedCounter value={stat.number} />
                </div>
              </div>

              {/* Label */}
              <div
                className={cn(
                  "text-lg sm:text-xl md:text-2xl",
                  "font-medium text-white",
                  "tracking-wide"
                )}
              >
                {stat.label}
              </div>

              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1 + 0.4,
                  ease: "easeOut",
                }}
                className={cn(
                  "h-1 w-20 mx-auto mt-4",
                  "bg-gradient-to-r from-orange-light to-primary-orange",
                  "rounded-full"
                )}
              />
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-white/90 text-lg mb-6">
            Join thousands of families who trust us with their loved ones
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "inline-block",
              "bg-white text-primary-teal",
              "hover:bg-gray-100",
              "font-semibold px-8 py-4 rounded-lg",
              "transition-all duration-300",
              "shadow-lg hover:shadow-xl"
            )}
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
