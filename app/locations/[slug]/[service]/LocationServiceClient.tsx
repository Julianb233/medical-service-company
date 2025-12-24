"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageSquare,
  Heart,
  Home,
  Clock,
  CheckCircle,
  Star,
  CloudSun,
  Navigation,
  Calendar,
  Stethoscope,
  Brain,
  HandHeart,
  Shield,
  Users,
  Award,
} from "lucide-react";
import { useStaggerReveal, useMotionProps, useParallax } from "@/lib/animations";
import { contactInfo, testimonials } from "@/lib/content-data";
import type { SubareaData } from "@/lib/subareas-data";

interface LocationServiceClientProps {
  location: {
    slug: string;
    name: string;
    region: string;
    description: string;
    zipCodes?: string[];
  };
  service: {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    features: string[];
  };
  subarea?: SubareaData; // Optional: can be parent location or specific subarea
  relatedSubareas?: SubareaData[];
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

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function LocationServiceClient({
  location,
  service,
  subarea,
  relatedSubareas = [],
}: LocationServiceClientProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { transform } = useParallax(parallaxRef, { speed: 0.4 });
  const motionProps = useMotionProps();

  // Get service icon component
  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    switch (iconName) {
      case "home":
        return <Home className={iconClass} />;
      case "heart":
        return <Heart className={iconClass} />;
      case "clock":
        return <Clock className={iconClass} />;
      case "stethoscope":
        return <Stethoscope className={iconClass} />;
      case "brain":
        return <Brain className={iconClass} />;
      case "hand-holding-heart":
        return <HandHeart className={iconClass} />;
      default:
        return <Heart className={iconClass} />;
    }
  };

  // Get landmark icon
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

  // Stagger animations
  const { containerVariants: featureContainerVariants, itemVariants: featureItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.08,
      initialDelay: 0.1,
    });

  const { containerVariants: landmarkContainerVariants, itemVariants: landmarkItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.1,
      initialDelay: 0.2,
    });

  const { containerVariants: highlightContainerVariants, itemVariants: highlightItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.08,
      initialDelay: 0.15,
    });

  // Get location-specific testimonials
  const locationTestimonials = testimonials.filter(
    (t) => t.location === location.name || t.location === subarea?.name
  );

  // Use first 3 testimonials or general ones if no location-specific
  const displayTestimonials =
    locationTestimonials.length > 0 ? locationTestimonials.slice(0, 3) : testimonials.slice(0, 3);

  // Get display name (subarea name or location name)
  const displayName = subarea?.name || location.name;
  const displayZipCodes = subarea?.zipCodes || location.zipCodes || [];

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
              className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-6 flex-wrap"
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
              {subarea && (
                <>
                  <span>/</span>
                  <Link
                    href={`/locations/${location.slug}/${subarea.slug}`}
                    className="hover:text-primary-teal transition-colors"
                  >
                    {subarea.name}
                  </Link>
                </>
              )}
              <span>/</span>
              <span className="font-semibold text-primary-teal">{service.title}</span>
            </motion.div>

            {/* Service Badge */}
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              {...motionProps}
            >
              <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary-teal border-2 border-primary-teal/20">
                <MapPin className="w-4 h-4" />
                Professional Care in {displayName}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-teal-dark">
                {service.title}
              </span>{" "}
              in {displayName}
            </motion.h1>

            {/* Service Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              {...motionProps}
            >
              {service.shortDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
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

      {/* Service Overview with Local Context */}
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Service Icon & Description */}
              <motion.div variants={slideInLeft}>
                <div className="bg-gradient-to-br from-primary-teal to-teal-dark text-white p-8 rounded-2xl shadow-xl mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-4 rounded-lg">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-teal-50 text-lg leading-relaxed">{service.fullDescription}</p>
                </div>

                {subarea?.servicesContext && (
                  <motion.div
                    className="bg-teal-50 p-6 rounded-lg border-l-4 border-primary-teal"
                    variants={scaleIn}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Local Care in {displayName}
                    </h3>
                    <p className="text-gray-700">{subarea.servicesContext.description}</p>
                  </motion.div>
                )}
              </motion.div>

              {/* Right: Quick Stats */}
              <motion.div className="space-y-4" variants={fadeInUp}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-6 rounded-lg text-center">
                    <Shield className="w-10 h-10 text-primary-teal mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Licensed & Insured</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg text-center">
                    <Clock className="w-10 h-10 text-primary-orange mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">24/7</p>
                    <p className="text-sm text-gray-600">On-Call Support</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-lg text-center">
                    <Users className="w-10 h-10 text-primary-teal mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">Expert</p>
                    <p className="text-sm text-gray-600">Care Team</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg text-center">
                    <Award className="w-10 h-10 text-primary-orange mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">Free</p>
                    <p className="text-sm text-gray-600">Assessment</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Service in This Location */}
      {subarea?.whySpecial && (
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
                  Why Choose {service.title} in {displayName}?
                </motion.h2>
                <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto" variants={fadeInUp}>
                  {subarea.whySpecial.description}
                </motion.p>
              </div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={highlightContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {subarea.whySpecial.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-teal-100 shadow-sm hover:shadow-md transition-shadow"
                    variants={highlightItemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-primary-teal" />
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Weather Context if available */}
              {subarea.weather && (
                <motion.div
                  className="mt-12 bg-gradient-to-br from-primary-teal to-teal-dark text-white rounded-2xl p-8 shadow-xl"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CloudSun className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Weather-Appropriate Care</h3>
                  </div>
                  <p className="text-teal-50 mb-4">
                    Our {service.title.toLowerCase()} services are tailored to {displayName}&apos;s
                    unique {subarea.weather.climate.toLowerCase()} climate, with an average
                    temperature of {subarea.weather.averageTemp}.
                  </p>
                  <p className="text-teal-100 text-sm">{subarea.weather.microclimate}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Service Features */}
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
                What&apos;s Included in Our {service.title}
              </motion.h2>
              <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto" variants={fadeInUp}>
                Comprehensive care services designed to meet your unique needs in {displayName}
              </motion.p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={featureContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-teal-50 to-white rounded-lg border border-teal-100 shadow-sm hover:shadow-md transition-shadow"
                  variants={featureItemVariants}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <div className="bg-primary-teal text-white p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-gray-800 font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Local Landmarks - Show if subarea data available */}
      {subarea?.landmarks && subarea.landmarks.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              {...motionProps}
            >
              We Know {displayName} Well
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              {...motionProps}
            >
              Our caregivers are familiar with these local landmarks and can help you enjoy them
              safely
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              variants={landmarkContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {subarea.landmarks.slice(0, 4).map((landmark, index) => (
                <motion.div
                  key={index}
                  variants={landmarkItemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 group"
                >
                  {/* Placeholder for image */}
                  <div className="relative h-40 bg-gradient-to-br from-teal-100 to-teal-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-teal-600">
                      {getLandmarkIcon(landmark.category)}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-primary-teal/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-primary-teal capitalize">
                        {landmark.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary-teal transition-colors">
                      {landmark.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{landmark.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Local Testimonials */}
      {displayTestimonials.length > 0 && (
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
                  What {displayName} Families Say
                </motion.h2>
                <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto" variants={fadeInUp}>
                  Real experiences from families who trust us for {service.title.toLowerCase()} in{" "}
                  {displayName}
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {displayTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg shadow-lg border border-teal-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    {...motionProps}
                  >
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary-orange text-primary-orange" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-teal-100">
                      <div className="w-12 h-12 rounded-full bg-primary-teal/20 flex items-center justify-center">
                        <span className="text-primary-teal font-bold">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Service Areas - Zip Codes */}
      {displayZipCodes.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              {...motionProps}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                variants={fadeInUp}
              >
                Service Areas We Cover
              </motion.h2>
              <motion.p className="text-lg text-gray-700 mb-8" variants={fadeInUp}>
                We proudly provide {service.title.toLowerCase()} throughout {displayName} in these
                zip codes:
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 justify-center"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                {displayZipCodes.map((zip, index) => (
                  <motion.span
                    key={zip}
                    className="bg-white px-6 py-3 rounded-lg font-semibold text-primary-teal border-2 border-primary-teal/20 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {zip}
                  </motion.span>
                ))}
              </motion.div>

              {/* Related neighborhoods if from subarea */}
              {subarea && (
                <motion.p
                  className="mt-8 text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Also serving nearby areas throughout {location.name} and {location.region}
                </motion.p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
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
            Ready to Schedule {service.title} in {displayName}?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-teal-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            {...motionProps}
          >
            Our {displayName} care team is ready 24/7 to provide compassionate, professional{" "}
            {service.title.toLowerCase()} tailored to your needs.
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

          {/* Additional Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            {...motionProps}
          >
            <div className="flex flex-wrap gap-6 justify-center text-teal-light">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Compassionate Care</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore Related Subareas */}
      {relatedSubareas.length > 0 && (
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
              {service.title} in Other {location.name} Areas
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {relatedSubareas.slice(0, 6).map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/locations/${location.slug}/${area.slug}/${service.slug}`}
                >
                  <motion.div
                    className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg border border-teal-100 shadow-sm hover:shadow-lg transition-all group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    {...motionProps}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-primary-teal flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-teal transition-colors">
                          {area.name}
                        </h3>
                        <p className="text-sm text-gray-600 italic">{area.localNickname}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Get {service.title.toLowerCase()} in {area.name}
                    </p>
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
