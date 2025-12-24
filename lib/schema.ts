/**
 * SEO Schema Markup Generator
 * Generates JSON-LD schemas for various page types
 * Validated for Google Rich Results
 */

import { services, locations, testimonials, contactInfo } from "./content-data";

// Base domain
const DOMAIN = "https://happyhomecare.com";
const COMPANY_NAME = "Happy Home Care";
const COMPANY_PHONE = "+1-619-555-0100";
const COMPANY_EMAIL = "info@happyhomecare.com";

// Type definitions
export interface SchemaMarkup {
  "@context": string;
  "@type": string | string[];
  [key: string]: unknown;
}

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
  [key: string]: unknown;
}

/**
 * Organization Schema
 * Full company information with social profiles and logo
 */
export function generateOrganizationSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: DOMAIN,
    description:
      "Compassionate home health care services in San Diego County. We provide skilled nursing, personal care, respite care, and hospice support.",
    logo: `${DOMAIN}/logo.png`,
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contactInfo.address.street}, ${contactInfo.address.suite}`,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.state,
      postalCode: contactInfo.address.zip,
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Happy Home Care Team",
    },
    foundingDate: "2015",
    operatingArea: locations.map((location) => ({
      "@type": "City",
      name: location.name,
    })),
    sameAs: [
      "https://www.facebook.com/happyhomecare",
      "https://www.instagram.com/happyhomecare",
      "https://www.linkedin.com/company/happy-home-care",
      "https://www.yelp.com/biz/happy-home-care-san-diego",
    ],
    knowsAbout: [
      "Home Health Care",
      "Skilled Nursing Care",
      "Personal Care Assistance",
      "Respite Care",
      "Hospice Support",
      "Alzheimer's Care",
      "Dementia Care",
      "24-Hour Care",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Local Business Schema
 * Individual location information
 */
export function generateLocalBusinessSchema(
  location: (typeof locations)[0]
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: `Happy Home Care - ${location.name}`,
    description: location.description,
    url: `${DOMAIN}/locations/${location.slug}`,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: "CA",
      postalCode: location.zipCodes[0],
      addressCountry: "US",
      areaServed: location.zipCodes,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    priceRange: "$$",
    image: `${DOMAIN}/locations/${location.slug}-hero.jpg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 On-Call Support Available",
    },
    parentOrganization: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: DOMAIN,
    },
  };
}

/**
 * Medical Business Schema
 * Comprehensive medical business information
 */
export function generateMedicalBusinessSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: COMPANY_NAME,
    url: DOMAIN,
    description:
      "Compassionate home health care services providing skilled nursing, personal care, respite care, and hospice support.",
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    medicalSpecialty: [
      "Geriatric Medicine",
      "Nursing Care",
      "Hospice and Palliative Care",
      "Rehabilitation",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contactInfo.address.street}, ${contactInfo.address.suite}`,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.state,
      postalCode: contactInfo.address.zip,
      addressCountry: "US",
    },
    availableService: services.map((service) => ({
      "@type": "MedicalService",
      name: service.title,
      description: service.fullDescription,
      url: `${DOMAIN}/services/${service.slug}`,
    })),
    healthcareReportingSystem: "VA Community Care Network",
    areaServed: locations.map((location) => ({
      "@type": "City",
      name: location.name,
    })),
    priceRange: "$$",
  };
}

/**
 * Service Schema
 * Individual service information for rich results
 */
export function generateServiceSchema(
  service: (typeof services)[0]
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "MedicalBusiness",
      name: COMPANY_NAME,
      url: DOMAIN,
      telephone: COMPANY_PHONE,
    },
    url: `${DOMAIN}/services/${service.slug}`,
    areaServed: locations.map((location) => ({
      "@type": "City",
      name: location.name,
    })),
    hasOfferingDescription: {
      "@type": "OfferingDescription",
      description: service.shortDescription,
    },
    image: `${DOMAIN}/services/${service.slug}-hero.jpg`,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DOMAIN}/contact?service=${service.slug}`,
        actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
      },
      result: {
        "@type": "Reservation",
        name: `Book ${service.title}`,
      },
    },
  };
}

/**
 * FAQ Page Schema
 * Common questions about home care services
 */
export function generateFAQSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of home care services does Happy Home Care provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Happy Home Care provides comprehensive home health services including skilled nursing care, personal care assistance, 24-hour home care, respite care, hospice support, and specialty services for Alzheimer's, dementia, and Parkinson's disease. We also serve veterans through the VA Community Care Network.",
        },
      },
      {
        "@type": "Question",
        name: "Is Happy Home Care available 24/7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Happy Home Care provides 24/7 on-call support. We offer flexible scheduling options including hourly care, overnight care, and 24-hour in-home care services to meet your needs.",
        },
      },
      {
        "@type": "Question",
        name: "What areas of San Diego County does Happy Home Care serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We proudly serve throughout San Diego County, including San Diego, La Jolla, Del Mar, Encinitas, Carlsbad, Oceanside, Escondido, Poway, Chula Vista, Coronado, Rancho Bernardo, Rancho Santa Fe, San Marcos, Vista, and Solana Beach.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free assessments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free in-home assessments to evaluate your specific care needs. Our team will meet with you to discuss your situation and recommend the most appropriate care plan.",
        },
      },
      {
        "@type": "Question",
        name: "Are your caregivers licensed and insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Happy Home Care is 100% licensed and insured. Our caregivers are professionally trained, background-checked, and certified in their specialties including skilled nursing, personal care, and specialty care services.",
        },
      },
    ],
  };
}

/**
 * Review Schema
 * Individual review from testimonials
 */
export function generateReviewSchema(
  testimonial: (typeof testimonials)[0]
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: testimonial.author,
    },
    reviewBody: testimonial.quote,
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: COMPANY_NAME,
      url: DOMAIN,
    },
  };
}

/**
 * Aggregate Rating Schema
 * Company overall rating and review count
 */
export function generateAggregateRatingSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "127",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "127",
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: COMPANY_NAME,
      url: DOMAIN,
    },
  };
}

/**
 * Breadcrumb Schema
 * Navigation path for SEO and user experience
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{
  name: string;
  url: string;
}>): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Breadcrumb helper for common pages
 */
export function getBreadcrumbsForPath(pathname: string) {
  const breadcrumbs = [
    { name: "Home", url: DOMAIN },
  ];

  if (pathname.includes("/services")) {
    breadcrumbs.push({ name: "Services", url: `${DOMAIN}/services` });
    const slug = pathname.split("/")[2];
    if (slug) {
      const service = services.find((s) => s.slug === slug);
      if (service) {
        breadcrumbs.push({ name: service.title, url: pathname });
      }
    }
  } else if (pathname.includes("/locations")) {
    breadcrumbs.push({ name: "Locations", url: `${DOMAIN}/locations` });
    const slug = pathname.split("/")[2];
    if (slug) {
      const location = locations.find((l) => l.slug === slug);
      if (location) {
        breadcrumbs.push({ name: location.name, url: pathname });
      }
    }
  } else if (pathname.includes("/about")) {
    breadcrumbs.push({ name: "About", url: `${DOMAIN}/about` });
  } else if (pathname.includes("/contact")) {
    breadcrumbs.push({ name: "Contact", url: `${DOMAIN}/contact` });
  } else if (pathname.includes("/careers")) {
    breadcrumbs.push({ name: "Careers", url: `${DOMAIN}/careers` });
  }

  return breadcrumbs;
}

/**
 * All Testimonials Review Schema
 * Aggregate of all reviews for homepage
 */
export function generateAllReviewsSchema(): SchemaMarkup[] {
  return testimonials.map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: testimonial.author,
      description: testimonial.role,
    },
    reviewBody: testimonial.quote,
    datePublished: new Date().toISOString().split("T")[0],
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: COMPANY_NAME,
    },
  }));
}

/**
 * HowTo Schema
 * Step-by-step guide for getting started
 */
export function generateHowToSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Started with Home Care Services",
    description:
      "Learn how to start receiving compassionate home care services from Happy Home Care.",
    image: `${DOMAIN}/how-to-hero.jpg`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Schedule Your Free Assessment",
        description:
          "Contact us to schedule a free in-home assessment. Our team will evaluate your specific care needs.",
        url: `${DOMAIN}/contact`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Personalized Care Plan",
        description:
          "Our experts will create a customized care plan tailored to your loved one's needs and preferences.",
        url: `${DOMAIN}/services`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Caregiver Matching",
        description:
          "We match you with experienced, compassionate caregivers who fit your family's needs.",
        url: `${DOMAIN}/about`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Start Care Services",
        description:
          "Your caregivers begin providing professional home care on your schedule.",
        url: `${DOMAIN}/contact`,
      },
    ],
  };
}

/**
 * ContactPoint Schema
 * Multiple contact methods
 */
export function generateContactPointSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    areaServed: locations.map((location) => location.name),
    availableLanguage: "English",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

/**
 * Person Schema for Team Members
 * Used for team/staff pages
 */
export function generatePersonSchema(
  name: string,
  title: string,
  bio: string,
  image?: string
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: title,
    description: bio,
    image: image || `${DOMAIN}/team/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
    worksFor: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: DOMAIN,
    },
  };
}

/**
 * Offer Schema for Special Promotions
 */
export function generateOfferSchema(
  title: string,
  description: string,
  priceRange: string,
  validUntil?: string
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: title,
    description: description,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      priceRange: priceRange,
    },
    url: `${DOMAIN}/contact`,
    validFrom: new Date().toISOString().split("T")[0],
    ...(validUntil && { validThrough: validUntil }),
    seller: {
      "@type": "MedicalBusiness",
      name: COMPANY_NAME,
      url: DOMAIN,
    },
  };
}

/**
 * Subarea Local Business Schema
 * Location-specific schema with neighborhood detail for hyperlocal SEO
 * Targets location + service queries like "home care in Downtown San Diego"
 */
export function generateSubareaLocalBusinessSchema(
  location: (typeof locations)[0],
  subarea: string
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: `Happy Home Care - ${subarea}, ${location.name}`,
    description: `Professional home care services in ${subarea}, ${location.name}. We provide skilled nursing, personal care, and 24-hour home care in your neighborhood.`,
    url: `${DOMAIN}/locations/${location.slug}#${subarea.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: `${subarea}, ${location.name}`,
      addressRegion: "CA",
      postalCode: location.zipCodes[0],
      addressCountry: "US",
      areaServed: location.zipCodes,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: `${subarea}, ${location.name}`,
      },
      {
        "@type": "City",
        name: location.name,
      },
    ],
    priceRange: "$$",
    image: `${DOMAIN}/locations/${location.slug}-${subarea.toLowerCase().replace(/\s+/g, "-")}-hero.jpg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 On-Call Support Available",
    },
    parentOrganization: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: DOMAIN,
    },
    servesCuisine: "Medical Care Services",
    knowsAbout: [
      `Home Care in ${subarea}`,
      `Skilled Nursing in ${location.name}`,
      `Personal Care in ${subarea}`,
      "24-Hour In-Home Care",
      "Respite Care",
      "Hospice Support",
    ],
  };
}

/**
 * Subarea FAQ Schema
 * Voice-search and question-based schema for local neighborhoods
 * Targets voice queries like "What home care services are available in Hillcrest?"
 */
export function generateSubareaFAQSchema(
  location: (typeof locations)[0],
  subarea: string
): SchemaMarkup {
  const locationName = location.name;
  const areaName = `${subarea}, ${locationName}`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What home care services are available in ${areaName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Happy Home Care provides comprehensive home health services throughout ${areaName}, including skilled nursing care, personal care assistance, 24-hour home care, respite care, and hospice support. Our local team serves the ${subarea} neighborhood and surrounding areas of ${locationName}.`,
        },
      },
      {
        "@type": "Question",
        name: `Is there 24-hour home care available in ${subarea}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we offer 24-hour home care services in ${areaName}. Our local caregivers provide round-the-clock support for those recovering from illness, with Alzheimer's or dementia, or with limited mobility. We also offer flexible hourly and overnight care options.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I get started with home care in ${subarea}, ${locationName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Getting started is easy. Contact our local team in ${locationName} to schedule a free in-home assessment. We'll evaluate your care needs and create a personalized care plan tailored to you. Our caregivers can typically begin services within 24-48 hours.`,
        },
      },
      {
        "@type": "Question",
        name: `Are caregivers in ${areaName} licensed and trained?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, all our caregivers serving ${areaName} are fully licensed, insured, and professionally trained. They are background-checked, certified in their specialties, and committed to providing compassionate care in the ${subarea} community.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the cost of home care in ${subarea}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Home care costs in ${areaName} vary based on the level of care needed. We offer flexible hourly, overnight, and 24-hour care options at competitive rates. Contact us for a free, no-obligation estimate specific to your needs.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Happy Home Care serve ${subarea} neighborhoods?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Happy Home Care proudly serves ${areaName} and all neighborhoods throughout ${locationName}. Whether you need care in downtown areas, residential neighborhoods, or anywhere in between, our local team is ready to help.`,
        },
      },
    ],
  };
}

/**
 * Subarea Place Schema
 * Schema for geographic locations and landmarks within neighborhoods
 * Helps Google understand the physical geography and context
 */
export function generateSubareaPlaceSchema(
  location: (typeof locations)[0],
  subarea: string,
  landmarks?: string[]
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: subarea,
    description: `${subarea} is a neighborhood in ${location.name}, San Diego County, California. We provide home care services to residents and families in this community.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: `${subarea}, ${location.name}`,
      addressRegion: "CA",
      postalCode: location.zipCodes[0],
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    containedIn: {
      "@type": "City",
      name: location.name,
      containedIn: {
        "@type": "State",
        name: "California",
      },
    },
    isPartOf: {
      "@type": "City",
      name: location.name,
    },
    potentialAction: {
      "@type": "FindAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DOMAIN}/locations/${location.slug}`,
        actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
      },
      result: {
        "@type": "MedicalBusiness",
        name: `Home Care Services in ${subarea}`,
      },
    },
    ...(landmarks && landmarks.length > 0 && {
      knowsAbout: landmarks.map((landmark) => ({
        "@type": "Place",
        name: landmark,
        containedIn: {
          "@type": "City",
          name: location.name,
        },
      })),
    }),
  };
}

/**
 * Subarea Breadcrumb Schema
 * Enhanced breadcrumb navigation for location + subarea hierarchy
 * Improves click-through from SERPs
 */
export function generateSubareaBreadcrumbSchema(
  location: (typeof locations)[0],
  subarea: string
): BreadcrumbSchema {
  const breadcrumbs = [
    { name: "Home", url: DOMAIN },
    { name: "Locations", url: `${DOMAIN}/locations` },
    { name: location.name, url: `${DOMAIN}/locations/${location.slug}` },
    { name: subarea, url: `${DOMAIN}/locations/${location.slug}#${subarea.toLowerCase().replace(/\s+/g, "-")}` },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Subarea Service Schema
 * Service schema tied to specific location and neighborhood
 * Targets long-tail queries like "skilled nursing care in Hillcrest"
 */
export function generateSubareaServiceSchema(
  service: (typeof services)[0],
  location: (typeof locations)[0],
  subarea: string
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in ${subarea}, ${location.name}`,
    description: `${service.fullDescription} Available in ${subarea}, ${location.name}. We provide local, compassionate ${service.title.toLowerCase()} services to residents of this neighborhood.`,
    provider: {
      "@type": "MedicalBusiness",
      name: COMPANY_NAME,
      url: DOMAIN,
      telephone: COMPANY_PHONE,
      areaServed: {
        "@type": "City",
        name: `${subarea}, ${location.name}`,
      },
    },
    url: `${DOMAIN}/services/${service.slug}?location=${location.slug}&area=${subarea.toLowerCase().replace(/\s+/g, "-")}`,
    serviceArea: [
      {
        "@type": "City",
        name: `${subarea}, ${location.name}`,
      },
      {
        "@type": "City",
        name: location.name,
      },
    ],
    areaServed: {
      "@type": "City",
      name: `${subarea}, ${location.name}`,
    },
    hasOfferingDescription: {
      "@type": "OfferingDescription",
      description: service.shortDescription,
      priceCurrency: "USD",
      priceRange: "$$",
    },
    image: `${DOMAIN}/services/${service.slug}-hero.jpg`,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DOMAIN}/contact?service=${service.slug}&location=${location.slug}`,
        actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
      },
      result: {
        "@type": "Reservation",
        name: `Book ${service.title} in ${subarea}`,
      },
    },
    availableAtOrFrom: {
      "@type": "LocalBusiness",
      name: `Happy Home Care - ${subarea}, ${location.name}`,
      url: `${DOMAIN}/locations/${location.slug}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: `${subarea}, ${location.name}`,
        addressRegion: "CA",
      },
    },
    knows: [
      `${service.title} in ${subarea}`,
      `Professional ${service.title.toLowerCase()} providers`,
      `${location.name} ${service.title.toLowerCase()} specialists`,
      "Licensed caregivers",
      "Compassionate in-home care",
    ],
  };
}

/**
 * Full Schema Bundle
 * Export all schemas for a page
 */
export function generateFullSchemaBundle(pathname: string): SchemaMarkup[] {
  const schemas: SchemaMarkup[] = [
    generateOrganizationSchema(),
    generateMedicalBusinessSchema(),
    generateAggregateRatingSchema(),
    generateContactPointSchema(),
    generateBreadcrumbSchema(getBreadcrumbsForPath(pathname)),
  ];

  // Add service-specific schemas
  if (pathname.includes("/services")) {
    const slug = pathname.split("/")[2];
    if (slug && slug !== "services") {
      const service = services.find((s) => s.slug === slug);
      if (service) {
        schemas.push(generateServiceSchema(service));
      }
    } else {
      // Services listing page
      services.forEach((service) => {
        schemas.push(generateServiceSchema(service));
      });
    }
  }

  // Add location-specific schemas
  if (pathname.includes("/locations")) {
    const slug = pathname.split("/")[2];
    if (slug && slug !== "locations") {
      const location = locations.find((l) => l.slug === slug);
      if (location) {
        schemas.push(generateLocalBusinessSchema(location));
      }
    } else {
      // Locations listing page
      locations.forEach((location) => {
        schemas.push(generateLocalBusinessSchema(location));
      });
    }
  }

  // Add FAQ schema for specific pages
  if (
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/contact"
  ) {
    schemas.push(generateFAQSchema());
  }

  // Add HowTo schema for homepage and about
  if (pathname === "/" || pathname === "/about") {
    schemas.push(generateHowToSchema());
  }

  // Add reviews for homepage and about
  if (pathname === "/" || pathname === "/about") {
    schemas.push(...generateAllReviewsSchema());
  }

  return schemas;
}
