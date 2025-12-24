"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Award, Clock, CheckCircle2, Shield, Star } from "lucide-react";
import { stats } from "@/lib/content-data";
import { Timeline } from "@/components/about/Timeline";
import { useCounter } from "@/lib/animations/hooks/useCounter";
import { useParallax } from "@/lib/animations/hooks/useParallax";
import { use3DTilt } from "@/lib/animations/hooks/use3DTilt";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  heroTextReveal,
  heroSubtitleReveal,
  heroCTAReveal,
} from "@/lib/animations/variants";
import { useRef } from "react";

const values = [
  {
    icon: Heart,
    title: "Quality Care",
    description:
      "Accredited by ACHC for meeting stringent national standards in quality, client satisfaction, and safety. Every professional is thoroughly screened, bonded, and insured.",
  },
  {
    icon: Users,
    title: "Comprehensive Services",
    description:
      "From companion care to skilled nursing services including wound care, medication administration, and infusion therapy. We provide the full spectrum of home care.",
  },
  {
    icon: Award,
    title: "Licensed & Accredited",
    description:
      "Accreditation is a voluntary extra step that demonstrates our commitment to excellence. We exceed industry standards for safety and quality.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Care available hourly, daily, and around the clock. We adapt to your needs with professional caregivers and nurses available when you need them.",
  },
];

const timelineEvents = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Happy Home Care was established with a mission to provide affordable, trustworthy home care services throughout San Diego County.",
  },
  {
    year: "2013",
    title: "ACHC Accreditation",
    description:
      "Achieved accreditation from the Accreditation Commission for Health Care, demonstrating our commitment to national standards of excellence.",
  },
  {
    year: "2015",
    title: "Expanded Services",
    description:
      "Added skilled nursing and specialty care services, including Alzheimer's care, wound care, and infusion therapy.",
  },
  {
    year: "2018",
    title: "VA Community Care Network",
    description:
      "Became a credentialed member of the VA Community Care Network, serving our nation's veterans with honor.",
  },
  {
    year: "2020",
    title: "Pandemic Response",
    description:
      "Implemented enhanced safety protocols and continued providing essential care during COVID-19 with zero service interruption.",
  },
  {
    year: "2024",
    title: "15+ Locations",
    description:
      "Expanded coverage to serve 15+ locations across San Diego County, from coastal communities to inland areas.",
  },
];

const achievements = [
  {
    icon: Shield,
    stat: "100%",
    label: "Licensed & Insured",
    description: "All caregivers thoroughly screened and bonded",
  },
  {
    icon: Star,
    stat: "4.9/5",
    label: "Client Satisfaction",
    description: "Consistently rated excellent by families",
  },
  {
    icon: CheckCircle2,
    stat: "24/7",
    label: "On-Call Support",
    description: "Round-the-clock availability for emergencies",
  },
  {
    icon: Award,
    stat: "ACHC",
    label: "Accredited",
    description: "Meeting national standards of excellence",
  },
];

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { transform } = useParallax(heroRef, { speed: 0.3 });

  return (
    <>
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative bg-primary-teal text-white section-padding overflow-hidden"
      >
        {/* Parallax background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            transform: prefersReducedMotion ? "none" : transform,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              variants={heroTextReveal}
            >
              About Happy Home Care
            </motion.h1>
            <motion.p
              className="text-xl text-white/90"
              variants={heroSubtitleReveal}
            >
              Licensed and accredited provider of affordable and trustworthy home
              care services throughout San Diego County, including Encinitas, Del
              Mar, Oceanside, Rancho Santa Fe, Carlsbad, and Solana Beach.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story with Scroll Reveal */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Happy Home Care provides the best solutions for affordable and
                  trustworthy home care in San Diego County. We are licensed and
                  accredited by the Accreditation Commission for Health Care
                  (ACHC), a voluntary extra step that demonstrates our commitment
                  to meeting stringent national standards for quality, client
                  satisfaction, and safety.
                </p>
                <p>
                  We thoroughly screen, bond, and insure all of our home care
                  professionals, including caregivers, certified nursing
                  assistants, and home care aides. Our comprehensive services
                  range from companion/homemaker care to personal care attendants,
                  in-home nursing, and infusion services.
                </p>
                <p>
                  Our caregivers assist with bathing, dressing, transfers, safety
                  monitoring, meal preparation, errands, medication reminders, and
                  light housekeeping. Our nurses provide case management,
                  medication administration, wound care, feeding tubes,
                  injections, and more. Care is available hourly, daily, and
                  around the clock to meet your unique needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary-teal/20 to-accent-orange/20"
              variants={fadeInRight}
            >
              <div className="absolute inset-0 flex items-center justify-center text-primary-teal">
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-medium">Dedicated Care Team</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with 3D Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <MissionVisionCard
              title="Our Mission"
              content="To help our clients live a better life at home through consistent delivery of quality home care with thoroughly screened, bonded, and insured professionals."
              color="teal"
            />
            <MissionVisionCard
              title="Our Vision"
              content="To be San Diego County's premier accredited home care provider, setting the standard for quality, safety, and client satisfaction while maintaining the most affordable and trustworthy services in the region."
              color="orange"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section with Stagger Animation */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Over a decade of providing exceptional home care services to San
              Diego County families.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Timeline events={timelineEvents} />
          </div>
        </div>
      </section>

      {/* Achievements Section with Animated Counters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Achievements
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="section-padding bg-primary-teal text-white">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <motion.div
          className="container-custom text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeInUp}
          >
            Join the Happy Home Care Family
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Whether you&apos;re looking for care for a loved one or a career in
            compassionate caregiving, we&apos;d love to hear from you.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={heroCTAReveal}
          >
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request Care
            </Link>
            <Link href="/careers" className="btn btn-outline btn-lg">
              View Careers
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

// Mission/Vision Card with 3D Tilt
function MissionVisionCard({
  title,
  content,
  color,
}: {
  title: string;
  content: string;
  color: "teal" | "orange";
}) {
  const { handleMouseMove, handleMouseLeave, style } = use3DTilt({
    maxTilt: 5,
    scale: 1.02,
  });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="card card-elevated p-8 h-full"
      variants={scaleIn}
      onMouseMove={prefersReducedMotion ? undefined : handleMouseMove}
      onMouseLeave={prefersReducedMotion ? undefined : handleMouseLeave}
      style={prefersReducedMotion ? {} : style}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${
          color === "teal" ? "text-primary-teal" : "text-accent-orange"
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  );
}

// Value Card with Hover Effect
function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) {
  const Icon = value.icon;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div className="text-center" variants={fadeInUp} custom={index}>
      <motion.div
        className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4"
        whileHover={
          prefersReducedMotion
            ? {}
            : {
                scale: 1.1,
                rotate: 5,
                backgroundColor: "rgba(0, 150, 136, 0.2)",
                transition: { duration: 0.3 },
              }
        }
      >
        <Icon className="w-8 h-8 text-primary-teal" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
      <p className="text-gray-600">{value.description}</p>
    </motion.div>
  );
}

// Achievement Card with Counter
function AchievementCard({
  achievement,
}: {
  achievement: (typeof achievements)[0];
}) {
  const Icon = achievement.icon;

  return (
    <motion.div
      className="card card-elevated p-6 text-center"
      variants={scaleIn}
    >
      <div className="w-12 h-12 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-primary-teal" />
      </div>
      <div className="text-3xl font-bold text-primary-teal mb-1">
        {achievement.stat}
      </div>
      <div className="font-semibold text-gray-900 mb-2">
        {achievement.label}
      </div>
      <div className="text-sm text-gray-600">{achievement.description}</div>
    </motion.div>
  );
}

// Stat Card with Animated Counter
function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  // const prefersReducedMotion = useReducedMotion();

  // Parse numeric value from stat.number if it contains digits
  const numericMatch = stat.number.match(/\d+/);
  const hasNumber = numericMatch !== null;
  const numericValue = hasNumber ? parseInt(numericMatch[0], 10) : 0;

  const [formattedValue, counterRef] = useCounter(numericValue, {
    duration: 2000,
    suffix: stat.number.includes("+") ? "+" : "",
  });

  return (
    <motion.div variants={fadeInUp} custom={index}>
      <div
        ref={hasNumber ? counterRef : undefined}
        className="text-4xl md:text-5xl font-bold mb-2"
      >
        {hasNumber ? formattedValue : stat.number}
      </div>
      <div className="text-white/80">{stat.label}</div>
    </motion.div>
  );
}
