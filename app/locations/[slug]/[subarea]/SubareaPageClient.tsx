"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageSquare,
  Heart,
  Home,
  Clock,
  Share2,
  Star,
  CloudSun,
  Calendar,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { useStaggerReveal, useMotionProps, useParallax } from "@/lib/animations";
import { services, contactInfo } from "@/lib/content-data";
import type { SubareaData } from "@/lib/subareas-data";
import { useRef } from "react";

interface SubareaPageClientProps {
  location: {
    slug: string;
    name: string;
    region: string;
    description: string;
  };
  subarea: SubareaData;
  siblingSubareas: SubareaData[];
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Removed slideInLeft variant - not currently used but available for future animations

export default function SubareaPageClient({
  location,
  subarea,
  siblingSubareas,
}: SubareaPageClientProps) {
  const [copiedFact, setCopiedFact] = useState<number | null>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { transform } = useParallax(parallaxRef, { speed: 0.4 });
  const motionProps = useMotionProps();

  // Stagger animations
  const { containerVariants: factContainerVariants, itemVariants: factItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.08,
      initialDelay: 0.1,
    });

  const { containerVariants: landmarkContainerVariants, itemVariants: landmarkItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.1,
      initialDelay: 0.2,
    });

  const { containerVariants: slangContainerVariants, itemVariants: slangItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.06,
      initialDelay: 0.1,
    });

  const { containerVariants: serviceContainerVariants, itemVariants: serviceItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.08,
      initialDelay: 0.15,
    });

  // Share a fun fact
  const handleShareFact = async (fact: string, index: number) => {
    if (navigator.share) {
      await navigator.share({
        title: `Fun Fact about ${subarea.name}`,
        text: fact,
      });
    } else {
      await navigator.clipboard.writeText(fact);
      setCopiedFact(index);
      setTimeout(() => setCopiedFact(null), 2000);
    }
  };

  // Get icon for landmark category
  const getLandmarkIcon = (category: string) => {
    const iconClass = "w-5 h-5";
    switch (category) {
      case "beach":
        return <CloudSun className={iconClass} />;
      case "park":
        return <Navigation className={iconClass} />;
      case "historic":
        return <Star className={iconClass} />;
      case "entertainment":
        return <Calendar className={iconClass} />;
      default:
        return <MapPin className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Background */}
      <section className="relative bg-gradient-to-br from-teal-50 via-teal-100 to-primary-teal py-24 md:py-32 mt-20 overflow-hidden">
        {/* Parallax background pattern */}
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 opacity-10"
          style={{ transform }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.5) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </motion.div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <motion.div
              className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              {...motionProps}
            >
              <Link href="/locations" className="hover:text-primary-teal transition-colors">
                Locations
              </Link>
              <span>/</span>
              <Link
                href={`/locations/${location.slug}`}
                className="hover:text-primary-teal transition-colors"
              >
                {location.name}
              </Link>
              <span>/</span>
              <span className="font-semibold text-primary-teal">{subarea.name}</span>
            </motion.div>

            {/* Local Nickname Badge */}
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              {...motionProps}
            >
              <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary-teal border-2 border-primary-teal/20">
                <MapPin className="w-4 h-4" />
                Known as &quot;{subarea.localNickname}&quot;
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              transition={{
                duration: 1,
                ease: [0.6, 0.01, 0.05, 0.95] as const,
                delay: 0.3,
              }}
              {...motionProps}
            >
              Home Health Care in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-teal-dark">
                {subarea.name}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              {...motionProps}
            >
              {subarea.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.7 }}
              {...motionProps}
            >
              {subarea.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              {...motionProps}
            >
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-dark transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.phone}
              </motion.a>

              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-white text-primary-teal border-2 border-primary-teal px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  Free Consultation
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Subarea is Special */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            {...motionProps}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                variants={fadeInUp}
              >
                Why {subarea.name} is Special
              </motion.h2>
              <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto" variants={fadeInUp}>
                {subarea.whySpecial.description}
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subarea.whySpecial.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg border border-teal-100 shadow-sm hover:shadow-md transition-shadow"
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  custom={index}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Heart className="w-5 h-5 text-primary-teal" />
                    </div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts - Shareable Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            {...motionProps}
          >
            Did You Know?{" "}
            <span className="text-primary-teal">Fun Facts About {subarea.name}</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={factContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {subarea.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={factItemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white p-6 rounded-lg shadow-lg group cursor-default"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-teal/20 to-transparent rounded-bl-3xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-teal/10 p-2 rounded-lg">
                      <Star className="w-5 h-5 text-primary-teal" />
                    </div>
                    <motion.button
                      onClick={() => handleShareFact(fact, index)}
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-primary-teal transition-colors"
                      aria-label="Share this fact"
                    >
                      {copiedFact === index ? (
                        <span className="text-xs font-semibold text-primary-teal">Copied!</span>
                      ) : (
                        <Share2 className="w-5 h-5" />
                      )}
                    </motion.button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{fact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Local Landmarks Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            {...motionProps}
          >
            Iconic Landmarks in {subarea.name}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            {...motionProps}
          >
            Our caregivers know these landmarks well and can help you enjoy them safely
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={landmarkContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {subarea.landmarks.map((landmark, index) => (
              <motion.div
                key={index}
                variants={landmarkItemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 group"
              >
                {/* Placeholder for image - in production, use OptimizedImage */}
                <div className="relative h-48 bg-gradient-to-br from-teal-100 to-teal-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-teal-600">
                    {getLandmarkIcon(landmark.category)}
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-primary-teal/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-teal capitalize">
                      {landmark.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-teal transition-colors">
                    {landmark.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{landmark.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Talk Like a Local */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            {...motionProps}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                variants={fadeInUp}
              >
                Talk Like a Local 🗣️
              </motion.h2>
              <motion.p className="text-lg text-gray-700" variants={fadeInUp}>
                Learn the lingo and blend right in with {subarea.name} locals
              </motion.p>
            </div>

            <motion.div
              className="space-y-4"
              variants={slangContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {subarea.localSlang.map((slang, index) => (
                <motion.div
                  key={index}
                  variants={slangItemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-teal"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-primary-teal text-white px-4 py-2 rounded-lg font-bold text-lg">
                        &quot;{slang.term}&quot;
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold mb-2">{slang.meaning}</p>
                      <p className="text-gray-600 italic text-sm">
                        Example: &quot;{slang.usage}&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Weather & Microclimate */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            {...motionProps}
          >
            <motion.div
              className="bg-gradient-to-br from-primary-teal to-teal-dark text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <CloudSun className="w-10 h-10" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {subarea.name} Weather & Microclimate
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-teal-100 mb-2 uppercase tracking-wide">
                      Average Temperature
                    </h3>
                    <p className="text-3xl font-bold">{subarea.weather.averageTemp}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-teal-100 mb-2 uppercase tracking-wide">
                      Climate Type
                    </h3>
                    <p className="text-xl font-semibold">{subarea.weather.climate}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-teal-100 mb-3 uppercase tracking-wide">
                    Best Months to Visit
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {subarea.weather.bestMonths.map((month, index) => (
                      <motion.span
                        key={index}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                      >
                        {month}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-sm font-semibold text-teal-100 mb-2 uppercase tracking-wide">
                    Local Microclimate
                  </h3>
                  <p className="text-lg leading-relaxed">{subarea.weather.microclimate}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services CTA with Local Context */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            {...motionProps}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                variants={fadeInUp}
              >
                {subarea.servicesContext.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                {subarea.servicesContext.description}
              </motion.p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.slice(0, 6).map((service) => (
                <motion.div key={service.slug} variants={serviceItemVariants}>
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 h-full group"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 bg-teal-50 p-3 rounded-lg group-hover:bg-primary-teal transition-colors">
                          {service.icon === "home" && (
                            <Home className="w-6 h-6 text-primary-teal group-hover:text-white transition-colors" />
                          )}
                          {service.icon === "heart" && (
                            <Heart className="w-6 h-6 text-primary-teal group-hover:text-white transition-colors" />
                          )}
                          {service.icon === "clock" && (
                            <Clock className="w-6 h-6 text-primary-teal group-hover:text-white transition-colors" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-teal transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{service.shortDescription}</p>

                      <div className="mt-4 flex items-center text-primary-teal font-semibold text-sm group-hover:gap-2 transition-all">
                        Learn More
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Services */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              {...motionProps}
            >
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-primary-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-dark transition-colors shadow-lg"
                >
                  View All Services
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-teal py-16 text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="container-custom text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            {...motionProps}
          >
            Ready to Experience {subarea.name}&apos;s Best Home Care?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-teal-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            {...motionProps}
          >
            Our {subarea.name} care team is ready 24/7 to provide compassionate, professional home
            health care tailored to your neighborhood and lifestyle.
          </motion.p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href={`tel:${contactInfo.phone}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-dark transition-colors shadow-lg hover:shadow-xl"
              {...motionProps}
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.phone}
            </motion.a>

            <Link href="/contact">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-teal transition-colors shadow-lg"
                {...motionProps}
              >
                <MessageSquare className="w-5 h-5" />
                Schedule Free Consultation
              </motion.div>
            </Link>
          </div>

          {/* Service Area */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            {...motionProps}
          >
            <p className="text-teal-light mb-3">Proudly serving zip codes:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {subarea.zipCodes.map((zip) => (
                <span
                  key={zip}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold"
                >
                  {zip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore Other Subareas */}
      {siblingSubareas.length > 1 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              {...motionProps}
            >
              Explore More of {location.name}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {siblingSubareas
                .filter((s) => s.slug !== subarea.slug)
                .map((s, index) => (
                  <Link key={s.slug} href={`/locations/${location.slug}/${s.slug}`}>
                    <motion.div
                      className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg border border-teal-100 shadow-sm hover:shadow-lg transition-all group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      {...motionProps}
                    >
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-teal transition-colors">
                        {s.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{s.localNickname}</p>
                      <p className="text-gray-700 text-sm italic">&quot;{s.tagline}&quot;</p>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
