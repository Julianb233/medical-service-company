import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Home,
  Heart,
  Clock,
  HandHeart,
  Stethoscope,
  Brain,
  Check,
  Phone,
  ArrowLeft,
  Shield,
  Award,
  Star,
} from "lucide-react";
import { services, contactInfo } from "@/lib/content-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  heart: Heart,
  clock: Clock,
  "hand-holding-heart": HandHeart,
  stethoscope: Stethoscope,
  brain: Brain,
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} Services | Medical Service Company`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Heart;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-teal text-white section-padding pt-32">
        <div className="container-custom">
          <Link
            href="/services"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
          </div>

          <p className="text-xl text-white/90 max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                About Our {service.title} Services
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                <p>{service.fullDescription}</p>
                <p>
                  Our team of trained professionals is dedicated to providing the
                  highest quality care in the comfort of your own home. We work
                  closely with families and healthcare providers to create
                  personalized care plans that meet each client&apos;s unique needs.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-6">What We Offer</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-teal" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {feature}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Professional care tailored to your specific needs
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-primary-teal/5 p-6 rounded-lg border-2 border-primary-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Hourly, Daily &amp; 24/7 Home Care
                      </h4>
                      <p className="text-sm text-gray-600">
                        Flexible care options that fit your schedule and needs, from a
                        few hours to round-the-clock support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-teal/5 p-6 rounded-lg border-2 border-primary-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Alzheimer&apos;s/Dementia Certified
                      </h4>
                      <p className="text-sm text-gray-600">
                        Specialized training in memory care with compassionate,
                        expert caregivers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-teal/5 p-6 rounded-lg border-2 border-primary-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Home Safety Evaluation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive assessment to identify and address potential
                        hazards in your home
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-teal/5 p-6 rounded-lg border-2 border-primary-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        RN Care Management
                      </h4>
                      <p className="text-sm text-gray-600">
                        Registered nurses oversee care plans and coordinate with
                        healthcare providers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-teal/5 p-6 rounded-lg border-2 border-primary-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Medication Management
                      </h4>
                      <p className="text-sm text-gray-600">
                        Professional oversight ensuring medications are taken
                        correctly and on time
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-teal/5 p-6 rounded-lg border-2 border-primary-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Medicare Certified Home Health
                      </h4>
                      <p className="text-sm text-gray-600">
                        Fully certified to provide skilled nursing and therapy
                        services covered by Medicare
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Our Approach</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-teal mb-2">1</div>
                  <h4 className="font-bold mb-2">Free Assessment</h4>
                  <p className="text-sm text-gray-600">
                    We start with a comprehensive in-home assessment to understand
                    your needs.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-teal mb-2">2</div>
                  <h4 className="font-bold mb-2">Custom Care Plan</h4>
                  <p className="text-sm text-gray-600">
                    We create a personalized care plan tailored to your specific
                    requirements.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-teal mb-2">3</div>
                  <h4 className="font-bold mb-2">Caregiver Match</h4>
                  <p className="text-sm text-gray-600">
                    We match you with caregivers who fit your personality and care
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Contact Card */}
                <div className="bg-primary-teal text-white p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Schedule a Free Consultation
                  </h3>
                  <p className="text-white/90 mb-6">
                    Speak with a care coordinator today to learn more about our{" "}
                    {service.title.toLowerCase()} services.
                  </p>

                  <a
                    href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                    className={cn(
                      "flex items-center justify-center gap-2",
                      "bg-white text-primary-teal font-bold",
                      "px-6 py-3 rounded-lg mb-4",
                      "hover:bg-gray-100 transition-colors"
                    )}
                  >
                    <Phone className="w-5 h-5" />
                    {contactInfo.phone}
                  </a>

                  <Link
                    href="/contact"
                    className={cn(
                      "block text-center",
                      "border-2 border-white",
                      "px-6 py-3 rounded-lg",
                      "hover:bg-white/10 transition-colors"
                    )}
                  >
                    Request a Call Back
                  </Link>
                </div>

                {/* Other Services */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {otherServices.map((other) => {
                      const OtherIcon = iconMap[other.icon] || Heart;
                      return (
                        <li key={other.slug}>
                          <Link
                            href={`/services/${other.slug}`}
                            className="flex items-center gap-3 text-gray-700 hover:text-primary-teal transition-colors"
                          >
                            <OtherIcon className="w-5 h-5" />
                            {other.title}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <Link
                        href="/services"
                        className="text-primary-orange font-medium hover:underline"
                      >
                        View All Services →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-orange text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your FREE IN-HOME NEEDS EVALUATION today. We&apos;ll assess
              your unique situation and create a personalized care plan at no cost
              or obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "bg-white text-primary-orange font-bold",
                  "px-8 py-4 rounded-lg text-lg",
                  "hover:bg-gray-100 transition-colors",
                  "shadow-lg"
                )}
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.phone}
              </a>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center",
                  "border-2 border-white text-white font-bold",
                  "px-8 py-4 rounded-lg text-lg",
                  "hover:bg-white/10 transition-colors"
                )}
              >
                Request Free Evaluation
              </Link>
            </div>
            <p className="text-sm text-white/80 mt-6">
              Available 24/7 • Medicare Certified • Licensed &amp; Insured
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} Services`,
            description: service.fullDescription,
            provider: {
              "@type": "MedicalBusiness",
              name: "Medical Service Company",
              telephone: contactInfo.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: contactInfo.address.street,
                addressLocality: contactInfo.address.city,
                addressRegion: contactInfo.address.state,
                postalCode: contactInfo.address.zip,
                addressCountry: "US",
              },
            },
            areaServed: {
              "@type": "State",
              name: "California",
            },
            serviceType: service.title,
          }),
        }}
      />
    </>
  );
}
