"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { locations, services, testimonials, contactInfo } from "@/lib/content-data";
import LocationHero from "@/components/location-hero";
import { MapPin, Phone, MessageSquare, Heart, Home, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  useStaggerReveal,
  useCounter,
  useMotionProps,
  // useReducedMotion,
} from "@/lib/animations";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Animation variants
const serviceCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const testimonialCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
    },
  },
};

export default function LocationPage({ params }: LocationPageProps) {
  const { slug } = use(params);
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  // const prefersReducedMotion = useReducedMotion();
  const motionProps = useMotionProps({}, {});

  // Filter testimonials for this location
  const locationTestimonials = testimonials.filter(
    (t) => t.location.toLowerCase() === location.name.toLowerCase()
  );

  // Stagger animations
  const { containerVariants: serviceContainerVariants, itemVariants: serviceItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.08,
      initialDelay: 0.1,
    });

  const { containerVariants: neighborhoodContainerVariants, itemVariants: neighborhoodItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.03,
      initialDelay: 0.1,
      direction: "up",
    });

  const { containerVariants: zipContainerVariants, itemVariants: zipItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.04,
      initialDelay: 0.1,
      withScale: true,
    });

  const { containerVariants: testimonialContainerVariants, itemVariants: testimonialItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.15,
      initialDelay: 0.2,
    });

  // Counter animations for stats
  const [yearsCount, yearsRef] = useCounter(20, { suffix: "+", duration: 2000 });
  const [caregiversCount, caregiversRef] = useCounter(500, { suffix: "+", duration: 2500 });
  const [ratingCount, ratingRef] = useCounter(5, { duration: 1500 });

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <LocationHero locationName={location.name} description={location.description} />

        {/* Services Available Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              {...motionProps}
            >
              Home Health Care Services in{" "}
              <span className="text-primary-teal">{location.name}</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              {...motionProps}
            >
              We provide comprehensive home health care services to residents of {location.name}{" "}
              and surrounding areas. Our licensed caregivers and nurses deliver personalized care
              in the comfort of your home.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {services.map((service) => (
                <motion.div key={service.slug} variants={serviceItemVariants}>
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      className="p-6 border border-gray-200 rounded-lg bg-white group relative overflow-hidden h-full"
                      variants={serviceCardVariants}
                      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -5px rgba(0,0,0,0.15)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Hover gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-100/0
                                   group-hover:from-teal-50 group-hover:to-teal-100/50 transition-all duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />

                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.icon === "home" && (
                            <Home className="w-8 h-8 text-primary-teal" />
                          )}
                          {service.icon === "heart" && (
                            <Heart className="w-8 h-8 text-primary-teal" />
                          )}
                          {service.icon === "clock" && (
                            <Clock className="w-8 h-8 text-primary-teal" />
                          )}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-teal transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.shortDescription}</p>
                        </div>
                      </div>

                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-teal to-teal-light"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Neighborhoods Served */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                {...motionProps}
              >
                Neighborhoods We Serve in{" "}
                <span className="text-primary-teal">{location.name}</span>
              </motion.h2>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                {...motionProps}
              >
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  variants={neighborhoodContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {location.neighborhoods.map((neighborhood) => (
                    <motion.div
                      key={neighborhood}
                      variants={neighborhoodItemVariants}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-2 text-gray-700 group cursor-default"
                    >
                      <motion.div
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <MapPin className="w-4 h-4 text-primary-teal flex-shrink-0 group-hover:text-teal-dark transition-colors" />
                      </motion.div>
                      <span className="group-hover:text-primary-teal transition-colors">
                        {neighborhood}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Zip Codes Served */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                {...motionProps}
              >
                Zip Codes Served in{" "}
                <span className="text-primary-teal">{location.name}</span>
              </motion.h2>

              <motion.div
                className="bg-gray-50 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                {...motionProps}
              >
                <motion.div
                  className="flex flex-wrap gap-3 justify-center"
                  variants={zipContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {location.zipCodes.map((zip) => (
                    <motion.span
                      key={zip}
                      variants={zipItemVariants}
                      whileHover={{
                        scale: 1.1,
                        rotate: 3,
                        boxShadow: "0 8px 20px -5px rgba(20, 184, 166, 0.4)",
                      }}
                      className="bg-white border-2 border-primary-teal px-4 py-2 rounded-lg font-semibold text-primary-teal
                                 cursor-default transition-all"
                    >
                      {zip}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {locationTestimonials.length > 0 && (
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
                What {location.name} Families Say About Us
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                variants={testimonialContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {locationTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    variants={testimonialItemVariants}
                    whileHover={{ y: -8, boxShadow: "0 15px 40px -10px rgba(0,0,0,0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-white p-6 rounded-lg shadow-lg h-full relative overflow-hidden"
                      variants={testimonialCardVariants}
                    >
                      {/* Decorative gradient corner */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-teal/20 to-transparent rounded-bl-3xl"
                        initial={{ scale: 0, originX: 1, originY: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />

                      <div className="flex mb-4 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-5 h-5 text-primary-orange fill-current"
                            viewBox="0 0 24 24"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + i * 0.05,
                              ease: [0.68, -0.6, 0.32, 1.6],
                            }}
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </motion.svg>
                        ))}
                      </div>

                      <p className="text-gray-700 mb-4 italic relative z-10">
                        &quot;{testimonial.quote}&quot;
                      </p>

                      <div className="relative z-10">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Contact CTA Section */}
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
              Ready to Get Started in {location.name}?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto text-teal-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              {...motionProps}
            >
              Contact us today for a free consultation. Our care coordinators are available 24/7 to
              answer your questions and help you get the care you need.
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
                className="inline-flex items-center gap-2 bg-primary-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-dark transition-colors shadow-lg hover:shadow-xl"
                {...motionProps}
              >
                <Phone className="w-5 h-5" />
                {contactInfo.phone}
              </motion.a>

              <Link href="/contact">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-teal transition-colors shadow-lg"
                  {...motionProps}
                >
                  <MessageSquare className="w-5 h-5" />
                  Request Consultation
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Animated Stats */}
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
              Why Families in {location.name} Choose Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                {...motionProps}
              >
                <div
                  ref={yearsRef}
                  className="text-4xl md:text-5xl font-bold text-primary-teal mb-2"
                >
                  {yearsCount}
                </div>
                <div className="text-gray-700 font-semibold mb-2">Years Experience</div>
                <p className="text-sm text-gray-600">Decades of trusted care in San Diego County</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                {...motionProps}
              >
                <div
                  ref={caregiversRef}
                  className="text-4xl md:text-5xl font-bold text-primary-teal mb-2"
                >
                  {caregiversCount}
                </div>
                <div className="text-gray-700 font-semibold mb-2">Trained Caregivers</div>
                <p className="text-sm text-gray-600">
                  Licensed, insured, and background-checked professionals
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                {...motionProps}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-teal mb-2">24/7</div>
                <div className="text-gray-700 font-semibold mb-2">Availability</div>
                <p className="text-sm text-gray-600">
                  Round-the-clock care and support when you need it
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                {...motionProps}
              >
                <div
                  ref={ratingRef}
                  className="text-4xl md:text-5xl font-bold text-primary-teal mb-2"
                >
                  {ratingCount}★
                </div>
                <div className="text-gray-700 font-semibold mb-2">Rated Service</div>
                <p className="text-sm text-gray-600">
                  Consistently excellent reviews from families
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
