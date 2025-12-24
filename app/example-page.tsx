// Example page demonstrating the Hero, Services Grid, and Stats components
// This file can be used as a reference or copied to app/page.tsx

import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { StatsSection } from "@/components/stats-section";

export default function ExampleHomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport height with CTA buttons */}
      <HeroSection />

      {/* Services Grid - Gray background with service cards */}
      <ServicesGrid />

      {/* Stats Section - Teal background with animated numbers */}
      <StatsSection />

      {/* Additional sections can be added here */}
    </main>
  );
}
