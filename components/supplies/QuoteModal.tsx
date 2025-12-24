"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Loader2 } from "lucide-react";
import { Product } from "@/lib/supplies-data";
import { cn } from "@/lib/utils";
import {
  formFieldReveal,
  formSuccess,
  formError,
  staggerContainer,
  scaleIn,
} from "@/lib/animations/variants";
import { useReducedMotion } from "@/lib/animations";

// Quote item interface
export interface QuoteItem extends Product {
  quantity?: number;
}

// Props interface
interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteItems: QuoteItem[];
}

// Validation schema
const quoteFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  contactMethod: z.enum(["phone", "email", "either"], {
    message: "Please select a preferred contact method",
  }),
  notes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

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

// Backdrop variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export function QuoteModal({ isOpen, onClose, quoteItems }: QuoteModalProps) {
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
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      contactMethod: "either",
    },
  });

  // Watch field values for floating label animation
  const watchedFields = watch();

  const hasValue = (fieldName: keyof QuoteFormData) => {
    const value = watchedFields[fieldName];
    return value && value.toString().length > 0;
  };

  const isFloating = (fieldName: keyof QuoteFormData) => {
    return focusedField === fieldName || hasValue(fieldName);
  };

  // Generate mailto link with quote details
  const generateMailto = (data: QuoteFormData) => {
    const subject = encodeURIComponent("Medical Equipment Quote Request");

    const itemsList = quoteItems
      .map((item, index) => {
        const quantity = item.quantity || 1;
        return `${index + 1}. ${item.name} (${item.priceRange}) - Quantity: ${quantity}`;
      })
      .join("\n");

    const body = encodeURIComponent(`
Quote Request Details
=====================

Contact Information:
--------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Preferred Contact Method: ${data.contactMethod.charAt(0).toUpperCase() + data.contactMethod.slice(1)}

Requested Items:
----------------
${itemsList}

Additional Notes:
-----------------
${data.notes || "None"}

Please provide pricing and availability for the above items.

Thank you!
    `.trim());

    return `mailto:info@happyhomecare.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Generate and open mailto link
      const mailtoLink = generateMailto(data);
      window.location.href = mailtoLink;

      // Show success message
      setSubmitSuccess(true);
      reset();
      setFocusedField(null);

      // Close modal after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error generating quote:", error);
      alert("Failed to generate quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmitting && !submitSuccess) {
      onClose();
    }
  };

  // Handle escape key
  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && !isSubmitting && !submitSuccess) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
          onKeyDown={handleEscape}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <motion.div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-primary-teal text-white px-6 py-4 flex items-center justify-between">
              <h2 id="quote-modal-title" className="text-2xl font-bold">
                Request a Quote
              </h2>
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {/* Quote Summary */}
              <motion.div
                className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200"
                variants={formFieldReveal}
                initial="hidden"
                animate="visible"
              >
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Selected Items ({quoteItems.length})
                </h3>
                <div className="space-y-2">
                  {quoteItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between py-2 border-b border-gray-200 last:border-0"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          {item.category} • {item.priceRange}
                        </p>
                      </div>
                      {item.quantity && item.quantity > 1 && (
                        <span className="ml-4 px-2 py-1 bg-primary-teal/10 text-primary-teal rounded text-sm font-medium">
                          Qty: {item.quantity}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Name field */}
                <motion.div className="relative" variants={formFieldReveal}>
                  <div className="relative">
                    <input
                      type="text"
                      id="quote-name"
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
                      disabled={isSubmitting || submitSuccess}
                    />
                    <motion.label
                      htmlFor="quote-name"
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
                      id="quote-email"
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
                      disabled={isSubmitting || submitSuccess}
                    />
                    <motion.label
                      htmlFor="quote-email"
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
                      id="quote-phone"
                      {...register("phone")}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => {
                        setFocusedField(null);
                        trigger("phone");
                      }}
                      className={cn(
                        "w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all",
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300"
                      )}
                      placeholder=" "
                      disabled={isSubmitting || submitSuccess}
                    />
                    <motion.label
                      htmlFor="quote-phone"
                      className="absolute left-4 pointer-events-none transition-all origin-left"
                      animate={isFloating("phone") ? "floating" : "default"}
                      variants={!prefersReducedMotion ? floatingLabelVariants : {}}
                      transition={{ duration: 0.2 }}
                    >
                      Phone <span className="text-red-500">*</span>
                    </motion.label>
                  </div>
                  <AnimatePresence mode="wait">
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        variants={formError}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.phone.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Contact Method - Radio Buttons */}
                <motion.div className="relative" variants={formFieldReveal}>
                  <fieldset>
                    <legend className="text-sm font-medium text-gray-700 mb-3">
                      Preferred Contact Method <span className="text-red-500">*</span>
                    </legend>
                    <div className="space-y-2">
                      {[
                        { value: "phone", label: "Phone", icon: Phone },
                        { value: "email", label: "Email", icon: Mail },
                        { value: "either", label: "Either", icon: null },
                      ].map(({ value, label, icon: Icon }) => (
                        <label
                          key={value}
                          className={cn(
                            "flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all",
                            watchedFields.contactMethod === value
                              ? "border-primary-teal bg-primary-teal/5"
                              : "border-gray-300 hover:border-gray-400",
                            (isSubmitting || submitSuccess) && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          <input
                            type="radio"
                            value={value}
                            {...register("contactMethod")}
                            className="w-4 h-4 text-primary-teal border-gray-300 focus:ring-primary-teal"
                            disabled={isSubmitting || submitSuccess}
                          />
                          {Icon && <Icon size={18} className="text-gray-600" />}
                          <span className="text-gray-900 font-medium">{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <AnimatePresence mode="wait">
                    {errors.contactMethod && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        variants={formError}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.contactMethod.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Notes field */}
                <motion.div className="relative" variants={formFieldReveal}>
                  <div className="relative">
                    <textarea
                      id="quote-notes"
                      {...register("notes")}
                      onFocus={() => setFocusedField("notes")}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all resize-none"
                      placeholder=" "
                      disabled={isSubmitting || submitSuccess}
                    />
                    <motion.label
                      htmlFor="quote-notes"
                      className="absolute left-4 top-4 pointer-events-none transition-all origin-left"
                      animate={isFloating("notes") ? "floating" : "default"}
                      variants={!prefersReducedMotion ? floatingLabelVariants : {}}
                      transition={{ duration: 0.2 }}
                    >
                      Additional Notes (Optional)
                    </motion.label>
                  </div>
                </motion.div>

                {/* Submit button */}
                <motion.div variants={formFieldReveal}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    whileHover={{ scale: isSubmitting || submitSuccess ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || submitSuccess ? 1 : 0.98 }}
                    className="w-full bg-primary-orange text-white font-medium py-3 px-6 rounded-lg hover:bg-orange-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Generating Quote...
                      </>
                    ) : (
                      <>
                        <Mail size={20} />
                        Submit Quote Request
                      </>
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
                          Quote request prepared!
                        </p>
                        <p className="text-green-700 text-sm mt-1">
                          Your email client should open shortly. If not, please contact us
                          directly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
