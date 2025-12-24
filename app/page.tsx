import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { CTASection } from "@/components/cta-section";
import AppMockupsShowcase from "@/components/app-mockups/AppMockupsShowcase";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />

      {/* App Highlight / User Screens */}
      <AppMockupsShowcase />
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families who trust us with their loved ones&apos; care
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
