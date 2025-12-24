import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/lib/content-data";
import { subareas, getSubareaBySlug, getSubareasForLocation } from "@/lib/subareas-data";
import SubareaPageClient from "./SubareaPageClient";

interface SubareaPageProps {
  params: Promise<{
    slug: string;
    subarea: string;
  }>;
}

/**
 * Generate static paths for all subareas
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

  return params;
}

/**
 * Generate metadata for each subarea page
 * Optimized for SEO with local keywords and structured data
 */
export async function generateMetadata({ params }: SubareaPageProps): Promise<Metadata> {
  const { slug, subarea: subareaSlug } = await params;

  // Find the location and subarea
  const location = locations.find((loc) => loc.slug === slug);
  const subarea = getSubareaBySlug(subareaSlug);

  if (!location || !subarea) {
    return {
      title: "Location Not Found | Happy Home Care",
    };
  }

  // Extract landmark names for keywords
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
      canonical: `/locations/${slug}/${subareaSlug}`,
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
 * Subarea page server component
 * Handles data fetching and validation before rendering client component
 */
export default async function SubareaPage({ params }: SubareaPageProps) {
  const { slug, subarea: subareaSlug } = await params;

  // Find the location and subarea
  const location = locations.find((loc) => loc.slug === slug);
  const subarea = getSubareaBySlug(subareaSlug);

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
