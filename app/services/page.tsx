"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Heart,
  Clock,
  HandHeart,
  Stethoscope,
  Brain,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/content-data";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  statReveal,
} from "@/lib/animations/variants";
import { use3DTilt } from "@/lib/animations/hooks/use3DTilt";
import { useStaggerReveal } from "@/lib/animations/hooks/useStaggerReveal";
import { useReducedMotion } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  heart: Heart,
  clock: Clock,
  "hand-holding-heart": HandHeart,
  stethoscope: Stethoscope,
  brain: Brain,
};

// Service Card Component with 3D Tilt Effect
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = iconMap[service.icon] || Heart;
  const { handleMouseMove, handleMouseLeave, style } = use3DTilt({
    maxTilt: 8,
    scale: 1.03,
    perspective: 1200,
  });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? {} : style}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "group card card-interactive card-glow h-full",
          "p-8 block transform-gpu"
        )}
      >
        <motion.div
          className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-8 h-8 text-primary-teal" />
        </motion.div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-teal transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{service.shortDescription}</p>

        <motion.div
          className="flex items-center text-primary-orange font-medium mt-auto"
          whileHover={prefersReducedMotion ? {} : { x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// Animated Stat Component
function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      variants={statReveal}
      custom={index}
      className="text-center"
    >
      <motion.div
        className="text-4xl font-bold text-primary-teal mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.1 }}
      >
        {value}
      </motion.div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}

export default function ServicesPage() {
  const { containerVariants } = useStaggerReveal({
    staggerDelay: 0.1,
    initialDelay: 0.2,
    direction: "up",
    withScale: true,
  });

  const stats = [
    { value: "24/7", label: "On-Call Support Available" },
    { value: "100%", label: "Licensed & Insured Caregivers" },
    { value: "Free", label: "In-Home Assessments" },
    { value: "15+", label: "San Diego Locations" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-teal text-white section-padding">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Comprehensive home health care services designed to meet your
              unique needs with compassion and professionalism.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Staggered Reveal */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Happy Home Care?
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="section-padding bg-primary-orange text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Learn More About Our Services?
          </motion.h2>
          <motion.p
            className="text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contact us today for a free consultation. Our care coordinators will
            help you find the right services for your loved one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.68, -0.6, 0.32, 1.6] }}
          >
            <Link
              href="/contact"
              className="btn btn-white btn-lg inline-flex shadow-lg hover:shadow-xl transition-shadow"
            >
              Schedule a Free Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
