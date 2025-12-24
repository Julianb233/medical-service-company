import { TestimonialsCarousel } from "@/components/testimonials-carousel";

/**
 * Demo page for the 3D Testimonials Carousel
 * Visit: http://localhost:3000/demo-carousel
 */
export default function CarouselDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            3D Testimonials Carousel Demo
          </h1>
          <p className="mt-2 text-gray-600">
            Award-winning carousel with 3D perspective, spring animations, and
            accessibility features
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from families across San Diego County who trust us
              with their loved ones&apos; care
            </p>
          </div>

          {/* Carousel */}
          <TestimonialsCarousel />

          {/* Feature Highlights */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎨"
              title="3D Perspective"
              description="Cards arranged in circular arc with realistic depth and rotation"
            />
            <FeatureCard
              icon="⌨️"
              title="Keyboard Navigation"
              description="Full keyboard support with arrow keys and focus management"
            />
            <FeatureCard
              icon="📱"
              title="Touch Optimized"
              description="Smooth swipe gestures on mobile with native feel"
            />
            <FeatureCard
              icon="♿"
              title="Accessible"
              description="ARIA labels, reduced motion support, screen reader friendly"
            />
            <FeatureCard
              icon="🎬"
              title="Spring Physics"
              description="Natural animations using realistic spring physics"
            />
            <FeatureCard
              icon="⚡"
              title="Performance"
              description="Optimized rendering with pointer events and lazy loading"
            />
          </div>

          {/* Instructions */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Try It Out
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary-teal font-bold">👉</span>
                <span>
                  <strong>Drag or swipe</strong> to navigate between
                  testimonials
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-teal font-bold">⌨️</span>
                <span>
                  Use <kbd className="px-2 py-1 bg-gray-100 rounded">←</kbd>{" "}
                  and <kbd className="px-2 py-1 bg-gray-100 rounded">→</kbd>{" "}
                  arrow keys
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-teal font-bold">🖱️</span>
                <span>
                  <strong>Hover over the carousel</strong> to pause auto-play
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-teal font-bold">🎯</span>
                <span>
                  <strong>Click navigation buttons</strong> or dot indicators
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-teal font-bold">♿</span>
                <span>
                  Enable <strong>reduced motion</strong> in your OS settings to
                  see accessibility mode
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
