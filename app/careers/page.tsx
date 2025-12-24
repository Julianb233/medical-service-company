import { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { contactInfo } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Medical Service Company team. We're hiring compassionate caregivers, nurses, and healthcare professionals in San Diego County.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "We offer above-market wages and regular pay increases.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose hours that work for your lifestyle.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Free continuing education and certification opportunities.",
  },
  {
    icon: Shield,
    title: "Benefits Package",
    description: "Health insurance, 401(k), and paid time off available.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description: "Work with experienced professionals who care.",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every day.",
  },
];

const openPositions = [
  {
    title: "Registered Nurse (RN)",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Provide skilled nursing care to patients in their homes, including assessments, medication management, and care coordination.",
  },
  {
    title: "Licensed Vocational Nurse (LVN)",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Deliver quality nursing care under RN supervision, including wound care, vital signs, and patient education.",
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Assist patients with daily living activities, personal care, and mobility support.",
  },
  {
    title: "Home Health Aide",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Provide compassionate personal care, companionship, and household assistance to clients.",
  },
  {
    title: "Care Coordinator",
    type: "Full-time",
    location: "San Diego, CA",
    description:
      "Coordinate care services, manage client relationships, and ensure quality service delivery.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-teal text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90">
              Build a rewarding career making a difference in people&apos;s lives.
              We&apos;re hiring compassionate healthcare professionals across San Diego
              County.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Open Positions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our current openings and find the perfect role for you.
          </p>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 hover:border-primary-teal/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/contact?position=${encodeURIComponent(position.title)}`}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">
                Submit your application and resume through our website.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Phone Screen</h3>
              <p className="text-gray-600 text-sm">
                Brief call to discuss your experience and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">In-Person Interview</h3>
              <p className="text-gray-600 text-sm">
                Meet our team and learn more about the role.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Welcome Aboard</h3>
              <p className="text-gray-600 text-sm">
                Complete onboarding and start your new career!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-orange text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our team of dedicated healthcare professionals and build a
            meaningful career helping others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-orange font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            hiringOrganization: {
              "@type": "MedicalBusiness",
              name: "Medical Service Company",
              sameAs: "https://medicalservicecompany.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Diego",
                addressRegion: "CA",
                addressCountry: "US",
              },
            },
            employmentType: ["FULL_TIME", "PART_TIME"],
            industry: "Healthcare",
          }),
        }}
      />
    </>
  );
}
