"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useMotionProps } from "@/lib/animations";

interface LocationCardProps {
  slug: string;
  name: string;
  region: string;
  description: string;
  neighborhoods: string[];
}

const cardVariants = {
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 4,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function LocationCard({
  slug,
  name,
  region,
  description,
  neighborhoods,
}: LocationCardProps) {
  const motionProps = useMotionProps();

  return (
    <Link href={`/locations/${slug}`} className="block">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover="hover"
        {...motionProps}
        className="p-6 border border-gray-200 rounded-lg bg-white group relative overflow-hidden h-full
                   transition-shadow duration-300 hover:shadow-xl hover:border-primary-teal/30"
      >
        {/* Animated background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-100/0
                     group-hover:from-teal-50/50 group-hover:to-teal-100/30 transition-all duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <div className="relative z-10">
          <div className="flex items-start gap-3 mb-3">
            <motion.div
              variants={iconVariants}
              className="flex-shrink-0 mt-1"
            >
              <MapPin className="w-6 h-6 text-primary-teal" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h3 className="text-xl font-bold group-hover:text-primary-teal transition-colors duration-300">
                {name}
              </h3>
              <p className="text-sm text-gray-600">{region}</p>
            </motion.div>
          </div>

          <p className="text-gray-700 mb-3 line-clamp-3">{description}</p>

          <div className="text-sm text-gray-600">
            <span className="font-semibold text-primary-teal">Neighborhoods:</span>{" "}
            {neighborhoods.slice(0, 3).join(", ")}
            {neighborhoods.length > 3 && (
              <span className="text-primary-teal font-medium">
                {" "}+{neighborhoods.length - 3} more
              </span>
            )}
          </div>

          {/* Animated underline on hover */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-primary-teal to-teal-light mt-4"
            initial={{ scaleX: 0, originX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </Link>
  );
}
