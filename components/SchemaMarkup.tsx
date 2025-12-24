/**
 * SchemaMarkup Component
 * Injects JSON-LD schema markup into page head
 * Optimized for Google Rich Results
 */

import { generateFullSchemaBundle, SchemaMarkup as SchemaType } from "@/lib/schema";

interface SchemaMarkupProps {
  pathname: string;
  schemas?: SchemaType[];
}

/**
 * SchemaMarkup Component
 *
 * Usage:
 * - In page components: <SchemaMarkup pathname={pathname} />
 * - With custom schemas: <SchemaMarkup pathname={pathname} schemas={customSchemas} />
 *
 * Automatically generates and injects:
 * - Organization schema
 * - Medical business schema
 * - Service/Location-specific schemas
 * - Breadcrumb schema
 * - FAQ, HowTo, Review schemas
 */
export default function SchemaMarkup({
  pathname,
  schemas,
}: SchemaMarkupProps) {
  // Use provided schemas or generate automatically based on pathname
  const schemasToInject = schemas || generateFullSchemaBundle(pathname);

  return (
    <>
      {schemasToInject.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
          suppressHydrationWarning
        />
      ))}
    </>
  );
}

/**
 * Hook for generating schemas on demand
 * Useful for client-side components or dynamic content
 */
export function useSchemaMarkup(pathname: string) {
  return generateFullSchemaBundle(pathname);
}

/**
 * Higher-order component for wrapping pages with schema markup
 */
export function withSchemaMarkup(Component: React.ComponentType<Record<string, unknown>>) {
  return function WithSchemaMarkupComponent(props: Record<string, unknown>) {
    const pathname = typeof props.pathname === 'string' ? props.pathname : "/";
    return (
      <>
        <SchemaMarkup pathname={pathname} />
        <Component {...props} />
      </>
    );
  };
}

/**
 * Utility to validate schema markup
 * Can be called during build or testing
 */
export function validateSchemaMarkup(schema: SchemaType): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check for required fields
  if (!schema["@context"]) {
    errors.push("Missing @context field");
  }
  if (!schema["@type"]) {
    errors.push("Missing @type field");
  }

  // Type-specific validation
  if (schema["@type"] === "Organization") {
    if (!schema.name) errors.push("Organization: missing name");
    if (!schema.url) errors.push("Organization: missing url");
  }

  if (schema["@type"] === "LocalBusiness" || schema["@type"] === "MedicalBusiness") {
    if (!schema.name) errors.push(`${schema["@type"]}: missing name`);
    if (!schema.address) errors.push(`${schema["@type"]}: missing address`);
  }

  if (schema["@type"] === "BreadcrumbList") {
    if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
      errors.push("BreadcrumbList: missing or invalid itemListElement");
    }
  }

  if (schema["@type"] === "FAQPage") {
    if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
      errors.push("FAQPage: missing or invalid mainEntity");
    }
  }

  if (schema["@type"] === "Review") {
    if (!schema.author) errors.push("Review: missing author");
    if (!schema.reviewRating) errors.push("Review: missing reviewRating");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Batch validation for multiple schemas
 */
export function validateAllSchemas(schemas: SchemaType[]): {
  allValid: boolean;
  results: Array<{ schema: string | string[]; valid: boolean; errors: string[] }>;
} {
  const results = schemas.map((schema) => ({
    schema: schema["@type"],
    ...validateSchemaMarkup(schema),
  }));

  return {
    allValid: results.every((r) => r.valid),
    results,
  };
}
