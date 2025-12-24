"use client";

import { locations } from "@/lib/content-data";
import LocationCard from "@/components/location-card";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  useStaggerReveal,
  useParallax,
  useCounter,
  useMotionProps,
} from "@/lib/animations";

// Group locations by region
const locationsByRegion = locations.reduce((acc, location) => {
  if (!acc[location.region]) {
    acc[location.region] = [];
  }
  acc[location.region].push(location);
  return acc;
}, {} as Record<string, typeof locations>);

// Hero animation variants
const heroIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.68, -0.6, 0.32, 1.6] as const,
    },
  },
};

const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.2,
    },
  },
};

const heroSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.4,
    },
  },
};

// Map section variants
const mapVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const mapIconVariants = {
  hidden: { scale: 0, y: -50 },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.68, -0.6, 0.32, 1.6] as const,
      delay: 0.3,
    },
  },
};

export default function LocationsPage() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { transform } = useParallax(parallaxRef, { speed: 0.5 });
  const motionProps = useMotionProps();

  // Counter animations for stats
  const [citiesCount, citiesRef] = useCounter(15, { suffix: "+", duration: 2000 });
  const [neighborhoodsCount, neighborhoodsRef] = useCounter(100, {
    suffix: "+",
    duration: 2500,
  });
  const [zipCodesCount, zipCodesRef] = useCounter(75, { suffix: "+", duration: 2200 });

  // Stagger reveal for location cards
  const { containerVariants, itemVariants } = useStaggerReveal({
    staggerDelay: 0.08,
    initialDelay: 0.2,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-teal-50 to-teal-100 py-16 md:py-24 mt-20 overflow-hidden">
        {/* Parallax background pattern */}
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 opacity-10"
          style={{ transform }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-10 right-20 w-72 h-72 bg-primary-teal/20 rounded-full blur-3xl"
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
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated icon */}
            <motion.div
              className="flex justify-center mb-6"
              variants={heroIconVariants}
              initial="hidden"
              animate="visible"
              {...motionProps}
            >
              <div className="relative">
                <MapPin className="w-16 h-16 text-primary-teal" />
                {/* Ping effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary-teal"
                  animate={{
                    scale: [1, 2, 2],
                    opacity: [0.5, 0, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
              variants={heroTextVariants}
              initial="hidden"
              animate="visible"
              {...motionProps}
            >
              Home Health Care Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-teal-dark">
                San Diego County
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              variants={heroSubtitleVariants}
              initial="hidden"
              animate="visible"
              {...motionProps}
            >
              Quality, compassionate home health care services in 15+ locations throughout
              San Diego County. Find personalized care close to home.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Coverage Stats with Animated Counters */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              {...motionProps}
            >
              <div
                ref={citiesRef}
                className="text-4xl md:text-5xl font-bold text-primary-teal mb-2"
              >
                {citiesCount}
              </div>
              <div className="text-gray-600 text-lg">Cities Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              {...motionProps}
            >
              <div
                ref={neighborhoodsRef}
                className="text-4xl md:text-5xl font-bold text-primary-teal mb-2"
              >
                {neighborhoodsCount}
              </div>
              <div className="text-gray-600 text-lg">Neighborhoods</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              {...motionProps}
            >
              <div
                ref={zipCodesRef}
                className="text-4xl md:text-5xl font-bold text-primary-teal mb-2"
              >
                {zipCodesCount}
              </div>
              <div className="text-gray-600 text-lg">Zip Codes</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations by Region with Staggered Reveals */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-12">
            {Object.entries(locationsByRegion).map(([region, regionLocations], regionIndex) => (
              <motion.div
                key={region}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
                {...motionProps}
              >
                {/* Region header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative inline-block">
                    {region}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-teal to-transparent rounded-full"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </h2>
                </motion.div>

                {/* Location cards grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {regionLocations.map((location) => (
                    <motion.div key={location.slug} variants={itemVariants}>
                      <LocationCard
                        slug={location.slug}
                        name={location.name}
                        region={location.region}
                        description={location.description}
                        neighborhoods={location.neighborhoods}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            {...motionProps}
          >
            Our Service Area
          </motion.h2>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 text-center overflow-hidden"
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              {...motionProps}
            >
              <motion.div
                className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden group"
                whileHover="hover"
              >
                {/* Animated map grid */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                  initial={{ y: 0 }}
                  animate={{ y: [0, 40] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="text-center relative z-10">
                  <motion.div variants={mapIconVariants} initial="hidden" whileInView="visible">
                    <MapPin className="w-16 h-16 text-primary-teal mx-auto mb-4" />
                  </motion.div>
                  <p className="text-xl font-semibold text-gray-700">
                    San Diego County Coverage Map
                  </p>
                  <p className="text-gray-600 mt-2">
                    Serving communities from Oceanside to Chula Vista
                  </p>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <p className="text-gray-600 mb-6 text-lg">
                We proudly serve patients and families across San Diego County, from coastal
                communities to inland areas. Our caregivers travel to you, providing compassionate
                care in the comfort of your home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-teal py-16 text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{
            duration: 20,
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
            Don&apos;t See Your Location?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-teal-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            {...motionProps}
          >
            We&apos;re continually expanding our service area. Contact us to see if we can serve
            your neighborhood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            {...motionProps}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
