import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}
