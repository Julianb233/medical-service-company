import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, services } from "@/lib/content-data";
import { subareas, getSubareaBySlug, getSubareasForLocation } from "@/lib/subareas-data";
import SubareaPageClient from "./SubareaPageClient";
import LocationServiceClient from "../../../locations/[slug]/[subarea]-service-backup/LocationServiceClient";

interface SubareaPageProps {
  params: Promise<{
    slug: string;
    subarea: string;
  }>;
}

/**
 * Generate static paths for all subareas AND location × service combinations
 * Required for static export with dynamic routes
 */
export async function generateStaticParams() {
  const params: { slug: string; subarea: string }[] = [];

  // Generate params for all subareas
  subareas.forEach((subarea) => {
    params.push({
      slug: subarea.parentLocation,
      subarea: subarea.slug,
    });
  });

  // Generate params for all parent locations × services
  locations.forEach((location) => {
    services.forEach((service) => {
      params.push({
        slug: location.slug,
        subarea: service.slug,
      });
    });
  });

  // Generate params for all subareas × services (e.g., /locations/downtown/home-care)
  subareas.forEach((subarea) => {
    services.forEach((service) => {
      params.push({
        slug: subarea.slug,
        subarea: service.slug,
      });
    });
  });

  return params;
}

/**
 * Generate metadata for each subarea OR location-service page
 * Optimized for SEO with local keywords and structured data
 */
export async function generateMetadata({ params }: SubareaPageProps): Promise<Metadata> {
  const { slug, subarea: secondSlug } = await params;

  // Check if secondSlug is a service
  const service = services.find((s) => s.slug === secondSlug);

  if (service) {
    // This is a location × service page
    const subarea = getSubareaBySlug(slug);
    const location = subarea
      ? locations.find((loc) => loc.slug === subarea.parentLocation)
      : locations.find((loc) => loc.slug === slug);

    if (!location || !service) {
      return {
        title: "Service Not Found | Happy Home Care",
      };
    }

    const areaName = subarea ? subarea.name : location.name;
    const zipCodes = subarea ? subarea.zipCodes : location.zipCodes;
    const localNickname = subarea ? subarea.localNickname : location.region;

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
          ? `/locations/${subarea.slug}/${service.slug}`
          : `/locations/${slug}/${service.slug}`,
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

  // This is a subarea page
  const location = locations.find((loc) => loc.slug === slug);
  const subarea = getSubareaBySlug(secondSlug);

  if (!location || !subarea) {
    return {
      title: "Location Not Found | Happy Home Care",
    };
  }

  const landmarkNames = subarea.landmarks.map((l) => l.name.toLowerCase());

  return {
    title: `${subarea.name} Home Health Care | ${subarea.localNickname} Senior Care Services`,
    description: `${subarea.description} Serving ${subarea.zipCodes.join(", ")} with 24/7 home health care, skilled nursing, and personalized senior care.`,
    keywords: [
      `home health care ${subarea.name}`,
      `${subarea.localNickname} senior care`,
      `caregivers ${subarea.name}`,
      `in-home care ${location.name}`,
      `${subarea.name} skilled nursing`,
      `24-hour care ${subarea.name}`,
      ...subarea.zipCodes.map((zip) => `home care ${zip}`),
      ...landmarkNames.map((name) => `senior care near ${name}`),
      `${subarea.weather.climate} senior living`,
    ],
    openGraph: {
      title: `${subarea.name} Home Health Care | ${subarea.tagline}`,
      description: `${subarea.description}`,
      type: "website",
      locale: "en_US",
      siteName: "Happy Home Care",
      images: [
        {
          url: subarea.heroImageUrl,
          width: 1200,
          height: 630,
          alt: `${subarea.name} - ${subarea.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${subarea.name} Home Health Care`,
      description: subarea.tagline,
      images: [subarea.heroImageUrl],
    },
    alternates: {
      canonical: `/locations/${slug}/${secondSlug}`,
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
 * Dynamic page server component
 * Handles both subarea pages AND location-service pages
 */
export default async function SubareaPage({ params }: SubareaPageProps) {
  const { slug, subarea: secondSlug } = await params;

  // Check if secondSlug is a service
  const service = services.find((s) => s.slug === secondSlug);

  if (service) {
    // This is a location × service page
    // Try to find as subarea first, then as parent location
    const subarea = getSubareaBySlug(slug);
    const location = subarea
      ? locations.find((loc) => loc.slug === subarea.parentLocation)
      : locations.find((loc) => loc.slug === slug);

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

  // This is a subarea page
  const location = locations.find((loc) => loc.slug === slug);
  const subarea = getSubareaBySlug(secondSlug);

  // Validate that the subarea belongs to the parent location
  if (!location || !subarea || subarea.parentLocation !== slug) {
    notFound();
  }

  // Get all subareas for this location (for navigation)
  const locationSubareas = getSubareasForLocation(slug);

  return (
    <SubareaPageClient
      location={location}
      subarea={subarea}
      siblingSubareas={locationSubareas}
    />
  );
}
