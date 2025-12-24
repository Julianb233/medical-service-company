import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Heart,
  Clock,
  HandHeart,
  Stethoscope,
  Brain,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/content-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive home health care services in San Diego. From personal care and skilled nursing to respite and hospice support, we provide compassionate care tailored to your needs.",
};

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  heart: Heart,
  clock: Clock,
  "hand-holding-heart": HandHeart,
  stethoscope: Stethoscope,
  brain: Brain,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-teal text-white section-padding pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive home health care services designed to meet your
              unique needs with compassion and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Heart;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group card p-8",
                    "border border-gray-100",
                    "hover:border-primary-teal/20"
                  )}
                >
                  <div className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary-teal" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-teal transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>

                  <div className="flex items-center text-primary-orange font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Happy Home Care?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-teal mb-2">24/7</div>
              <p className="text-gray-600">On-Call Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-teal mb-2">100%</div>
              <p className="text-gray-600">Licensed & Insured Caregivers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-teal mb-2">Free</div>
              <p className="text-gray-600">In-Home Assessments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-teal mb-2">15+</div>
              <p className="text-gray-600">San Diego Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-orange text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Learn More About Our Services?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our care coordinators will
            help you find the right services for your loved one.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-orange font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
