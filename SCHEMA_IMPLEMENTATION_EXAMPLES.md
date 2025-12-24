# Schema Markup Implementation Examples

Complete code examples for implementing schema markup on various page types.

## 1. Services Listing Page

**File:** `app/services/page.tsx`

```tsx
import type { Metadata } from "next";
import SchemaMarkup from "@/components/SchemaMarkup";
import { services } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Home Care Services | Happy Home Care",
  description:
    "Comprehensive home health care services including skilled nursing, personal care, respite care, and specialty services for seniors in San Diego.",
  openGraph: {
    title: "Home Care Services | Happy Home Care",
    description: "Professional home health care services in San Diego County.",
    type: "website",
    url: "https://happyhomecare.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup pathname="/services" />
      <div className="min-h-screen bg-white">
        <header className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive care solutions tailored to your needs
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid gap-8">
            {services.map((service) => (
              <article key={service.slug} className="border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.fullDescription}</p>
                <ul className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/services/${service.slug}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Learn More →
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
```

**Generates:**
- Organization schema
- Service schemas (one for each service)
- Breadcrumb schema
- MedicalBusiness schema

---

## 2. Individual Service Page

**File:** `app/services/[slug]/page.tsx`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SchemaMarkup from "@/components/SchemaMarkup";
import { services } from "@/lib/content-data";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Happy Home Care`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | Happy Home Care`,
      description: service.shortDescription,
      type: "website",
      url: `https://happyhomecare.com/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://happyhomecare.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup pathname={`/services/${params.slug}`} />
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100">{service.shortDescription}</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-16">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start p-4 bg-blue-50 rounded">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Schedule your free in-home assessment today
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Us
            </a>
          </section>
        </main>
      </article>
    </>
  );
}
```

**Generates:**
- Organization schema
- Service schema (specific to this service)
- Breadcrumb schema (Services > Service Name)
- MedicalBusiness schema

---

## 3. Locations Listing Page

**File:** `app/locations/page.tsx`

```tsx
import type { Metadata } from "next";
import SchemaMarkup from "@/components/SchemaMarkup";
import { locations } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Locations | Happy Home Care",
  description:
    "Home health care services throughout San Diego County. Serving La Jolla, Del Mar, Encinitas, Carlsbad, Oceanside, and more.",
  openGraph: {
    title: "Service Locations | Happy Home Care",
    description: "Find home health care services near you in San Diego County.",
    type: "website",
    url: "https://happyhomecare.com/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <SchemaMarkup pathname="/locations" />
      <div className="min-h-screen bg-gray-50">
        <header className="py-16 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Locations
            </h1>
            <p className="text-xl text-gray-600">
              We proudly serve families throughout San Diego County
            </p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <a
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 block"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {location.name}
                </h2>
                <p className="text-gray-600 mb-3">{location.region}</p>
                <p className="text-gray-700 mb-4">{location.description}</p>
                <div className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
```

**Generates:**
- Organization schema
- LocalBusiness schemas (one for each location)
- Breadcrumb schema
- MedicalBusiness schema

---

## 4. Individual Location Page

**File:** `app/locations/[slug]/page.tsx`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SchemaMarkup from "@/components/SchemaMarkup";
import { locations, services } from "@/lib/content-data";

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const location = locations.find((l) => l.slug === params.slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `Home Care Services in ${location.name} | Happy Home Care`,
    description: location.description,
    openGraph: {
      title: `Home Care in ${location.name} | Happy Home Care`,
      description: location.description,
      type: "website",
      url: `https://happyhomecare.com/locations/${location.slug}`,
    },
    alternates: {
      canonical: `https://happyhomecare.com/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locations.find((l) => l.slug === params.slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup pathname={`/locations/${params.slug}`} />
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="py-16 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">
              Home Care in {location.name}
            </h1>
            <p className="text-xl text-green-100">{location.description}</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-16">
          {/* Location Information */}
          <section className="mb-12 p-6 bg-green-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Service Area</h2>
            <p className="text-gray-700 mb-4">
              <strong>Region:</strong> {location.region}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Neighborhoods:</strong> {location.neighborhoods.join(", ")}
            </p>
            <p className="text-gray-700">
              <strong>Zip Codes:</strong> {location.zipCodes.join(", ")}
            </p>
          </section>

          {/* Services Available */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Services Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="p-4 border rounded-lg hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {service.shortDescription}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-green-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Care in {location.name}?
            </h2>
            <p className="text-xl mb-6">
              Call us today to schedule your free assessment
            </p>
            <a
              href={`/contact?location=${location.slug}`}
              className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition"
            >
              Get Started
            </a>
          </section>
        </main>
      </article>
    </>
  );
}
```

**Generates:**
- Organization schema
- LocalBusiness schema (specific to this location)
- Breadcrumb schema (Locations > Location Name)
- MedicalBusiness schema

---

## 5. About Page with Team

**File:** `app/about/page.tsx`

```tsx
import type { Metadata } from "next";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generatePersonSchema } from "@/lib/schema";

const teamMembers = [
  {
    name: "Sarah Johnson",
    title: "Founder & CEO",
    bio: "20+ years of healthcare leadership and hospice care expertise",
    image: "/team/sarah-johnson.jpg",
  },
  {
    name: "Michael Chen",
    title: "Director of Nursing",
    bio: "Registered Nurse with 15 years of geriatric care experience",
    image: "/team/michael-chen.jpg",
  },
  {
    name: "Patricia Rodriguez",
    title: "Care Coordinator",
    bio: "Dedicated to matching families with the perfect caregivers",
    image: "/team/patricia-rodriguez.jpg",
  },
];

export const metadata: Metadata = {
  title: "About Happy Home Care | Home Health Services",
  description:
    "Learn about Happy Home Care's mission, values, and team of dedicated professionals providing compassionate home health services in San Diego.",
  openGraph: {
    title: "About Happy Home Care",
    description:
      "Dedicated to providing compassionate home health care services.",
    type: "website",
    url: "https://happyhomecare.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup pathname="/about" />
      {/* Additional team member schemas */}
      {teamMembers.map((member) => (
        <script
          key={member.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generatePersonSchema(member.name, member.title, member.bio, member.image)
            ),
          }}
          suppressHydrationWarning
        />
      ))}

      <main className="min-h-screen bg-white">
        {/* About Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 text-white">
            <h1 className="text-4xl font-bold mb-4">About Happy Home Care</h1>
            <p className="text-xl mb-6">
              Providing compassionate home health care services since 2015
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At Happy Home Care, our mission is to provide compassionate, professional
            home health services that allow seniors to age in place with dignity and
            comfort. We believe that everyone deserves quality care in the familiar
            surroundings of their own home.
          </p>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-2">
                      {member.title}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p>Families Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p>Certified Caregivers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p>Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
```

**Generates:**
- Organization schema
- Person schemas (one for each team member)
- HowTo schema
- FAQ schema
- Review schemas
- Breadcrumb schema
- MedicalBusiness schema

---

## 6. Contact Page

**File:** `app/contact/page.tsx`

```tsx
import type { Metadata } from "next";
import SchemaMarkup from "@/components/SchemaMarkup";
import { contactInfo } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Contact Happy Home Care | Schedule Assessment",
  description:
    "Get in touch with Happy Home Care. Call us at (619) 555-0100 or schedule your free in-home assessment today.",
  openGraph: {
    title: "Contact Happy Home Care",
    description: "Reach out to schedule your free in-home care assessment.",
    type: "website",
    url: "https://happyhomecare.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup pathname="/contact" />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              Ready to start your journey to better care? Let's talk.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-600 hover:underline text-lg"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:underline text-lg"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700">
                  {contactInfo.address.street}, {contactInfo.address.suite}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.state}{" "}
                  {contactInfo.address.zip}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-700">{contactInfo.hours.emergency}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Schedule Assessment</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Schedule Free Assessment
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
```

**Generates:**
- Organization schema
- ContactPoint schema
- FAQ schema
- Breadcrumb schema
- MedicalBusiness schema

---

## Testing Your Implementation

### 1. Local Testing

```bash
npm run dev
# Visit http://localhost:3000
# Open DevTools > Inspect > search for <script type="application/ld+json">
```

### 2. Google Rich Results Test

```bash
# Visit: https://search.google.com/test/rich-results
# Enter: https://yourdomain.com/services/home-care
# Should show rich result previews
```

### 3. Schema Validation

```typescript
// Add to your test file
import { validateAllSchemas } from "@/components/SchemaMarkup";
import { generateFullSchemaBundle } from "@/lib/schema";

describe("Schema Markup", () => {
  it("should generate valid schemas", () => {
    const schemas = generateFullSchemaBundle("/services/home-care");
    const { allValid, results } = validateAllSchemas(schemas);

    expect(allValid).toBe(true);
    results.forEach((result) => {
      if (!result.valid) {
        console.error(`${result.schema} errors:`, result.errors);
      }
    });
  });
});
```

---

## Deployment Checklist

- [x] SchemaMarkup component in `/components`
- [x] Schema generation functions in `/lib/schema.ts`
- [x] Layout.tsx updated with SchemaMarkup
- [x] Service pages include SchemaMarkup
- [x] Location pages include SchemaMarkup
- [x] About page includes team schemas
- [x] Contact page uses SchemaMarkup
- [x] Test with Google Rich Results
- [x] Submit to Google Search Console
- [x] Monitor search results for rich results

---

## Performance Monitoring

After deployment, check:

1. **Google Search Console** → Coverage → Rich results
2. **Google Rich Results Test** → Test your homepage
3. **Schema.org Validator** → Validate all pages
4. **Core Web Vitals** → Ensure no performance impact

All schemas are JSON-LD (most performant format) and have minimal impact on page load times.
