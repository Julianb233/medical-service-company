"use client";

import { motion } from "framer-motion";
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
import { use3DTilt, useStaggerReveal } from "@/lib/animations/hooks";
import { iconHover } from "@/lib/animations/variants";
import { easings } from "@/lib/animations/easings";
import { ImagePresets } from "@/components/OptimizedImage";

// Map icon strings to lucide-react components
const iconMap: Record<string, LucideIcon> = {
  home: Home,
  heart: Heart,
  clock: Clock,
  "hand-holding-heart": HandHeart,
  stethoscope: Stethoscope,
  brain: Brain,
};

// ServiceCard component with 3D tilt effect
function ServiceCard({ service }: { service: typeof services[0] }) {
  const IconComponent = iconMap[service.icon] || Home;

  // 3D tilt effect
  const { handleMouseMove, handleMouseLeave, style: tiltStyle } = use3DTilt({
    maxTilt: 8,
    perspective: 1200,
    scale: 1.03,
    speed: 400,
  });

  return (
    <Link href={`/services/${service.slug}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className={cn(
          "group relative h-full",
          // Light blue card background (mobile-friendly contrast)
          "bg-teal-50 rounded-xl p-5 sm:p-6 md:p-8",
          "border border-teal-100",
          "cursor-pointer overflow-hidden",
          "card-3d-tilt" // Apply CSS class for base 3D styling
        )}
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          y: -8,
          transition: { duration: 0.3, ease: easings.cardHover },
        }}
      >
        {/* Gradient shine effect on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 pointer-events-none",
            "bg-gradient-to-br from-white/40 via-transparent to-transparent",
            "transition-opacity duration-500",
            "group-hover:opacity-100"
          )}
          style={{
            transform: "translateX(-100%) translateY(-100%) rotate(45deg)",
            width: "200%",
            height: "200%",
          }}
        />

        {/* Service Image */}
        <div className="mb-5 -mx-6 md:-mx-8 -mt-6 md:-mt-8 overflow-hidden rounded-t-xl">
          <ImagePresets.ServiceCard
            src={`/images/services/${service.slug}.jpg`}
            alt={`${service.title} - Professional home health care services`}
            context={{ service: service.title, description: service.shortDescription }}
            containerClassName="transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Icon with rotation animation */}
        <div className="flex justify-center sm:justify-start">
          <motion.div
            className={cn(
              "inline-flex items-center justify-center",
              "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-5",
              "rounded-lg",
              "bg-gradient-to-br from-primary-teal to-teal-dark",
              "text-white",
              "relative z-10"
            )}
            initial="rest"
            whileHover="hover"
            variants={iconHover}
          >
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-accent font-bold text-teal-900 mb-3 relative z-10 text-center sm:text-left">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-teal-900/70 text-sm md:text-base leading-relaxed mb-4 relative z-10 text-center sm:text-left">
          {service.shortDescription}
        </p>

        {/* Learn More Link */}
        <div
          className={cn(
            "flex justify-center sm:justify-start",
            "relative z-10"
          )}
        >
          <div
            className={cn(
              "inline-flex items-center gap-2",
              "text-primary-teal font-semibold text-sm md:text-base",
              "transition-all duration-300",
              "group-hover:gap-3 group-hover:text-teal-dark"
            )}
          >
          <span>Learn More</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            whileHover={{
              x: 4,
              transition: { duration: 0.2, ease: easings.elastic },
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
          </div>
        </div>

        {/* Hover accent border with gradient */}
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 right-0",
            "h-1 bg-gradient-to-r from-primary-orange to-orange-dark",
            "rounded-b-xl"
          )}
          initial={{ scaleX: 0, originX: 0 }}
          whileHover={{
            scaleX: 1,
            transition: { duration: 0.4, ease: easings.spring },
          }}
        />

        {/* Subtle shadow elevation on hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.05)]",
            "transition-shadow duration-300",
            "group-hover:shadow-[0_0_0_1px_rgba(20,184,166,0.2)]",
            "pointer-events-none"
          )}
        />
      </motion.div>
    </Link>
  );
}

export function ServicesGrid() {
  // Use stagger reveal hook for grid animation
  const { containerVariants, itemVariants } = useStaggerReveal({
    staggerDelay: 0.08,
    initialDelay: 0.2,
    duration: 0.6,
    yOffset: 40,
    withScale: true,
    initialScale: 0.9,
  });

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easings.spring }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-accent font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive home health care solutions tailored to your unique needs
          </p>
        </motion.div>

        {/* Services Grid with Stagger Reveal */}
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
          {services.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
