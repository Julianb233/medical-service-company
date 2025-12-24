"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { services } from "@/lib/content-data";
import { cn } from "@/lib/utils";
import {
  formFieldReveal,
  formSuccess,
  formError,
  staggerContainer,
} from "@/lib/animations/variants";
import { useReducedMotion } from "@/lib/animations";

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Floating label animation
const floatingLabelVariants = {
  default: {
    top: "50%",
    fontSize: "1rem",
    color: "rgb(107, 114, 128)",
  },
  floating: {
    top: "0.5rem",
    fontSize: "0.75rem",
    color: "rgb(20, 184, 166)",
  },
};

// Checkmark draw animation
const checkmarkVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring" as const, duration: 0.6, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Watch field values for floating label animation
  const watchedFields = watch();

  const hasValue = (fieldName: keyof ContactFormData) => {
    const value = watchedFields[fieldName];
    return value && value.toString().length > 0;
  };

  const isFloating = (fieldName: keyof ContactFormData) => {
    return focusedField === fieldName || hasValue(fieldName);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      setSubmitSuccess(true);
      reset();
      setFocusedField(null);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Name field */}
        <motion.div className="relative" variants={formFieldReveal}>
          <div className="relative">
            <input
              type="text"
              id="name"
              {...register("name")}
              onFocus={() => setFocusedField("name")}
              onBlur={() => {
                setFocusedField(null);
                trigger("name");
              }}
              className={cn(
                "w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all",
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300"
              )}
              placeholder=" "
            />
            <motion.label
              htmlFor="name"
              className="absolute left-4 pointer-events-none transition-all origin-left"
              animate={isFloating("name") ? "floating" : "default"}
              variants={!prefersReducedMotion ? floatingLabelVariants : {}}
              transition={{ duration: 0.2 }}
            >
              Name <span className="text-red-500">*</span>
            </motion.label>
          </div>
          <AnimatePresence mode="wait">
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                variants={formError}
                className="mt-1 text-sm text-red-600"
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email field */}
        <motion.div className="relative" variants={formFieldReveal}>
          <div className="relative">
            <input
              type="email"
              id="email"
              {...register("email")}
              onFocus={() => setFocusedField("email")}
              onBlur={() => {
                setFocusedField(null);
                trigger("email");
              }}
              className={cn(
                "w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all",
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300"
              )}
              placeholder=" "
            />
            <motion.label
              htmlFor="email"
              className="absolute left-4 pointer-events-none transition-all origin-left"
              animate={isFloating("email") ? "floating" : "default"}
              variants={!prefersReducedMotion ? floatingLabelVariants : {}}
              transition={{ duration: 0.2 }}
            >
              Email <span className="text-red-500">*</span>
            </motion.label>
          </div>
          <AnimatePresence mode="wait">
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                variants={formError}
                className="mt-1 text-sm text-red-600"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Phone field */}
        <motion.div className="relative" variants={formFieldReveal}>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
              placeholder=" "
            />
            <motion.label
              htmlFor="phone"
              className="absolute left-4 pointer-events-none transition-all origin-left"
              animate={isFloating("phone") ? "floating" : "default"}
              variants={!prefersReducedMotion ? floatingLabelVariants : {}}
              transition={{ duration: 0.2 }}
            >
              Phone (Optional)
            </motion.label>
          </div>
        </motion.div>

        {/* Service dropdown */}
        <motion.div className="relative" variants={formFieldReveal}>
          <div className="relative">
            <select
              id="service"
              {...register("service")}
              onFocus={() => setFocusedField("service")}
              onBlur={() => {
                setFocusedField(null);
                trigger("service");
              }}
              className={cn(
                "w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all bg-white appearance-none cursor-pointer",
                errors.service
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300"
              )}
            >
              <option value=""></option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
            <motion.label
              htmlFor="service"
              className="absolute left-4 pointer-events-none transition-all origin-left"
              animate={isFloating("service") ? "floating" : "default"}
              variants={!prefersReducedMotion ? floatingLabelVariants : {}}
              transition={{ duration: 0.2 }}
            >
              Service <span className="text-red-500">*</span>
            </motion.label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {errors.service && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                variants={formError}
                className="mt-1 text-sm text-red-600"
              >
                {errors.service.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message field */}
        <motion.div className="relative" variants={formFieldReveal}>
          <div className="relative">
            <textarea
              id="message"
              {...register("message")}
              onFocus={() => setFocusedField("message")}
              onBlur={() => {
                setFocusedField(null);
                trigger("message");
              }}
              rows={5}
              className={cn(
                "w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all resize-none",
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300"
              )}
              placeholder=" "
            />
            <motion.label
              htmlFor="message"
              className="absolute left-4 top-4 pointer-events-none transition-all origin-left"
              animate={isFloating("message") ? "floating" : "default"}
              variants={!prefersReducedMotion ? floatingLabelVariants : {}}
              transition={{ duration: 0.2 }}
            >
              Message <span className="text-red-500">*</span>
            </motion.label>
          </div>
          <AnimatePresence mode="wait">
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                variants={formError}
                className="mt-1 text-sm text-red-600"
              >
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit button */}
        <motion.div variants={formFieldReveal}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary-orange text-white font-medium py-3 px-6 rounded-lg hover:bg-orange-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Submitting...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.div>

        {/* Success message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              variants={formSuccess}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3"
            >
              <div className="relative flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <motion.path
                    d="M8 12l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={checkmarkVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </div>
              <div>
                <p className="text-green-800 font-medium">
                  Message sent successfully!
                </p>
                <p className="text-green-700 text-sm mt-1">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
}
