import { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Award, Clock } from "lucide-react";
import { stats } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Licensed and accredited home care provider serving San Diego County. We help clients live a better life at home through consistent delivery of quality care with thoroughly screened, bonded, and insured professionals.",
};

const values = [
  {
    icon: Heart,
    title: "Quality Care",
    description:
      "Accredited by ACHC for meeting stringent national standards in quality, client satisfaction, and safety. Every professional is thoroughly screened, bonded, and insured.",
  },
  {
    icon: Users,
    title: "Comprehensive Services",
    description:
      "From companion care to skilled nursing services including wound care, medication administration, and infusion therapy. We provide the full spectrum of home care.",
  },
  {
    icon: Award,
    title: "Licensed & Accredited",
    description:
      "Accreditation is a voluntary extra step that demonstrates our commitment to excellence. We exceed industry standards for safety and quality.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Care available hourly, daily, and around the clock. We adapt to your needs with professional caregivers and nurses available when you need them.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-teal text-white section-padding pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Happy Home Care
            </h1>
            <p className="text-xl text-white/90">
              Licensed and accredited provider of affordable and trustworthy home care
              services throughout San Diego County, including Encinitas, Del Mar,
              Oceanside, Rancho Santa Fe, Carlsbad, and Solana Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Happy Home Care provides the best solutions for affordable
                  and trustworthy home care in San Diego County. We are licensed and
                  accredited by the Accreditation Commission for Health Care (ACHC),
                  a voluntary extra step that demonstrates our commitment to meeting
                  stringent national standards for quality, client satisfaction, and safety.
                </p>
                <p>
                  We thoroughly screen, bond, and insure all of our home care professionals,
                  including caregivers, certified nursing assistants, and home care aides.
                  Our comprehensive services range from companion/homemaker care to personal
                  care attendants, in-home nursing, and infusion services.
                </p>
                <p>
                  Our caregivers assist with bathing, dressing, transfers, safety monitoring,
                  meal preparation, errands, medication reminders, and light housekeeping.
                  Our nurses provide case management, medication administration, wound care,
                  feeding tubes, injections, and more. Care is available hourly, daily, and
                  around the clock to meet your unique needs.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/team-photo.svg" 
                alt="Our compassionate care team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-primary-teal mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To help our clients live a better life at home through consistent
                delivery of quality home care with thoroughly screened, bonded, and
                insured professionals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-primary-teal mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be San Diego County&apos;s premier accredited home care provider,
                setting the standard for quality, safety, and client satisfaction
                while maintaining the most affordable and trustworthy services in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary-teal text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Happy Home Care Family
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for care for a loved one or a career in
            compassionate caregiving, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Care
            </Link>
            <Link href="/careers" className="btn-outline">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
