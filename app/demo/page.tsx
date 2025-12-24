import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ContactForm } from "@/components/contact-form";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from families we&apos;ve helped throughout San Diego County
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;re here to help. Fill out the form below and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
