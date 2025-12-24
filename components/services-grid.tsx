"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Heart,
  Clock,
  HandHeart,
  Stethoscope,
  Brain,
  LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content-data";
import { cn } from "@/lib/utils";

// Map icon strings to lucide-react components
const iconMap: Record<string, LucideIcon> = {
  home: Home,
  heart: Heart,
  clock: Clock,
  "hand-holding-heart": HandHeart,
  stethoscope: Stethoscope,
  brain: Brain,
};

// Animation variants for staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-accent font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive home health care solutions tailored to your unique needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            "grid gap-6 md:gap-8",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Home;

            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link href={`/services/${service.slug}`}>
                  <div
                    className={cn(
                      "group relative h-full",
                      "bg-white rounded-xl p-6 md:p-8",
                      "border border-gray-200",
                      "transition-all duration-300 ease-out",
                      "hover:shadow-xl hover:-translate-y-2",
                      "hover:border-primary-teal/30",
                      "cursor-pointer"
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "inline-flex items-center justify-center",
                        "w-14 h-14 md:w-16 md:h-16 mb-5",
                        "rounded-lg",
                        "bg-gradient-to-br from-primary-teal to-teal-dark",
                        "text-white",
                        "transition-transform duration-300",
                        "group-hover:scale-110 group-hover:rotate-3"
                      )}
                    >
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-accent font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Learn More Link */}
                    <div
                      className={cn(
                        "inline-flex items-center gap-2",
                        "text-primary-teal font-semibold text-sm md:text-base",
                        "transition-all duration-300",
                        "group-hover:gap-3 group-hover:text-teal-dark"
                      )}
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    {/* Hover accent border */}
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 right-0",
                        "h-1 bg-gradient-to-r from-primary-orange to-orange-dark",
                        "rounded-b-xl",
                        "transform scale-x-0 origin-left",
                        "transition-transform duration-300",
                        "group-hover:scale-x-100"
                      )}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
