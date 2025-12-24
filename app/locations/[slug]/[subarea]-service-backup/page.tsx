import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, services } from "@/lib/content-data";
import { subareas, getSubareaBySlug, getSubareasForLocation } from "@/lib/subareas-data";
import LocationServiceClient from "./LocationServiceClient";

interface LocationServicePageProps {
  params: Promise<{
    slug: string;
    service: string;
  }>;
}

/**
 * Generate static paths for all location × service combinations
 * Includes both parent locations and subareas
 */
export async function generateStaticParams() {
  const params: { slug: string; service: string }[] = [];

  // Generate params for all parent locations × services
  locations.forEach((location) => {
    services.forEach((service) => {
      params.push({
        slug: location.slug,
        service: service.slug,
      });
    });
  });

  // Generate params for all subareas × services
  subareas.forEach((subarea) => {
    services.forEach((service) => {
      params.push({
        slug: subarea.slug,
        service: service.slug,
      });
    });
  });

  return params;
}

/**
 * Generate metadata for each location-service page
 * Optimized for local SEO with location + service keywords
 */
export async function generateMetadata({
  params,
}: LocationServicePageProps): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;

  // Try to find as subarea first, then as parent location
  const subarea = getSubareaBySlug(slug);
  const location = subarea
    ? locations.find((loc) => loc.slug === subarea.parentLocation)
    : locations.find((loc) => loc.slug === slug);

  const service = services.find((s) => s.slug === serviceSlug);

  if (!location || !service) {
    return {
      title: "Service Not Found | Happy Home Care",
    };
  }

  // Use subarea data if available, otherwise location data
  const areaName = subarea ? subarea.name : location.name;
  const zipCodes = subarea ? subarea.zipCodes : location.zipCodes;
  const localNickname = subarea ? subarea.localNickname : location.region;

  // Build SEO keywords
  const keywords = [
    `${service.title} ${areaName}`,
    `${areaName} ${service.title}`,
    `home health care ${areaName}`,
    `${localNickname} ${service.title}`,
    `senior care ${areaName}`,
    `caregivers ${areaName}`,
    `${service.title} near me`,
    ...zipCodes.map((zip) => `${service.title} ${zip}`),
  ];

  // Add subarea-specific keywords if available
  if (subarea) {
    const landmarkNames = subarea.landmarks.map((l) => l.name.toLowerCase());
    keywords.push(
      ...landmarkNames.map((name) => `${service.title} near ${name}`),
      `${subarea.weather.climate} ${service.title}`,
      ...subarea.localSlang.map((slang) => `${service.title} ${slang.term}`)
    );
  }

  const title = subarea
    ? `${service.title} in ${areaName} | ${subarea.localNickname} Senior Care`
    : `${service.title} in ${areaName} | ${location.region} Home Health Care`;

  const description = subarea
    ? `Expert ${service.title.toLowerCase()} in ${areaName}. ${service.shortDescription} Serving ${zipCodes.join(", ")} with 24/7 professional care.`
    : `Professional ${service.title.toLowerCase()} in ${areaName}. ${service.shortDescription} Serving ${location.region} with compassionate care.`;

  const imageUrl = subarea
    ? subarea.heroImageUrl
    : `/images/services/${service.slug}-hero.jpg`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      siteName: "Happy Home Care",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} in ${areaName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: subarea
        ? `/locations/${subarea.slug}/${serviceSlug}`
        : `/locations/${slug}/${serviceSlug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Location-specific service page server component
 * Handles both parent locations and subareas
 */
export default async function LocationServicePage({ params }: LocationServicePageProps) {
  const { slug, service: serviceSlug } = await params;

  // Try to find as subarea first, then as parent location
  const subarea = getSubareaBySlug(slug);
  const location = subarea
    ? locations.find((loc) => loc.slug === subarea.parentLocation)
    : locations.find((loc) => loc.slug === slug);

  const service = services.find((s) => s.slug === serviceSlug);

  // Validate that both location and service exist
  if (!location || !service) {
    notFound();
  }

  // Get related subareas for the location (for "other areas" section)
  const relatedSubareas = getSubareasForLocation(location.slug).filter(
    (area) => area.slug !== slug
  );

  return (
    <LocationServiceClient
      location={location}
      service={service}
      subarea={subarea}
      relatedSubareas={relatedSubareas}
    />
  );
}
