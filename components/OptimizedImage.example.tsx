/**
 * OptimizedImage Component - Usage Examples
 *
 * This file demonstrates various use cases for the OptimizedImage component
 * in the Happy Home Care website.
 */

import { OptimizedImage, ImagePresets } from './OptimizedImage';

/**
 * Example 1: Hero Section Image
 * - High priority loading
 * - Above the fold
 * - Full viewport width
 * - 16:9 aspect ratio
 */
export function HeroImageExample() {
  return (
    <OptimizedImage
      src="/images/hero/san-diego-home-care.jpg"
      alt="Professional home care services in San Diego"
      aspectRatio={{ width: 16, height: 9 }}
      priority="high"
      isAboveFold
      sizes="100vw"
      context={{
        service: 'Home Care Services',
        location: 'San Diego, CA',
      }}
    />
  );
}

/**
 * Example 2: Hero Using Preset
 * - Simplified syntax using preset configuration
 */
export function HeroImagePresetExample() {
  return (
    <ImagePresets.Hero
      src="/images/hero/los-angeles-healthcare.jpg"
      alt="Los Angeles home healthcare services"
      context={{
        service: 'Healthcare Services',
        location: 'Los Angeles, CA',
      }}
    />
  );
}

/**
 * Example 3: Service Card Image
 * - Normal priority
 * - Responsive sizing
 * - 4:3 aspect ratio
 */
export function ServiceCardImageExample() {
  return (
    <OptimizedImage
      src="/images/services/personal-care.jpg"
      aspectRatio={{ width: 4, height: 3 }}
      priority="normal"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="rounded-lg"
      context={{
        service: 'Personal Care',
      }}
    />
  );
}

/**
 * Example 4: Service Card Using Preset
 */
export function ServiceCardPresetExample() {
  return (
    <ImagePresets.ServiceCard
      src="/images/services/companion-care.jpg"
      className="rounded-lg shadow-lg"
      context={{
        service: 'Companion Care Services',
      }}
    />
  );
}

/**
 * Example 5: Location Card with Fallback
 * - Fallback image on error
 * - Custom skeleton color
 */
export function LocationCardExample() {
  return (
    <OptimizedImage
      src="/images/locations/san-diego-office.jpg"
      aspectRatio={{ width: 4, height: 3 }}
      priority="normal"
      sizes="(max-width: 640px) 100vw, 50vw"
      className="rounded-xl"
      containerClassName="shadow-xl"
      fallbackSrc="/images/placeholders/office-placeholder.jpg"
      skeletonColor="bg-teal-100"
      context={{
        description: 'Happy Home Care San Diego office location',
        location: 'San Diego',
      }}
    />
  );
}

/**
 * Example 6: Staff Photo
 * - Portrait orientation (3:4)
 * - Low priority for below-fold content
 * - Lazy loading enabled
 */
export function StaffPhotoExample() {
  return (
    <ImagePresets.StaffPhoto
      src="/images/staff/maria-gonzalez-rn.jpg"
      className="rounded-lg"
      context={{
        description: 'Maria Gonzalez, RN - Registered Nurse',
      }}
      useLazyLoad
      rootMargin="100px"
    />
  );
}

/**
 * Example 7: Testimonial Avatar
 * - Square aspect ratio
 * - Small size
 * - Circular styling
 */
export function TestimonialAvatarExample() {
  return (
    <ImagePresets.Avatar
      src="/images/testimonials/john-smith-avatar.jpg"
      className="rounded-full ring-4 ring-primary-teal/20"
      context={{
        description: 'John Smith testimonial photo',
      }}
    />
  );
}

/**
 * Example 8: Blog/Article Image
 * - Custom aspect ratio
 * - With blur placeholder
 * - Custom blur color matching brand
 */
export function BlogImageExample() {
  return (
    <OptimizedImage
      src="/images/blog/elderly-care-tips.jpg"
      width={1200}
      height={630}
      aspectRatio={{ width: 1.91, height: 1 }} // Open Graph ratio
      priority="normal"
      sizes="(max-width: 768px) 100vw, 768px"
      useBlurPlaceholder
      blurColor="#006064" // Brand teal color
      className="rounded-lg"
      context={{
        service: 'Elderly Care Tips',
      }}
    />
  );
}

/**
 * Example 9: Gallery Thumbnail
 * - Small size
 * - Low priority
 * - Lazy loading with custom intersection threshold
 */
export function GalleryThumbnailExample() {
  return (
    <OptimizedImage
      src="/images/gallery/facility-tour-01.jpg"
      aspectRatio={{ width: 1, height: 1 }}
      priority="low"
      sizes="200px"
      className="rounded-md cursor-pointer hover:opacity-80 transition-opacity"
      useLazyLoad
      rootMargin="200px"
    />
  );
}

/**
 * Example 10: Background Image with Overlay
 * - Custom container styling
 * - Object positioning
 */
export function BackgroundImageExample() {
  return (
    <div className="relative h-96 overflow-hidden">
      <OptimizedImage
        src="/images/backgrounds/care-team-background.jpg"
        aspectRatio={{ width: 16, height: 9 }}
        priority="normal"
        sizes="100vw"
        objectFit="cover"
        objectPosition="center 30%"
        className="opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/80 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Our Care Team</h2>
      </div>
    </div>
  );
}

/**
 * Example 11: Image with Custom Loading Handler
 * - Custom callbacks for load/error events
 */
export function CustomHandlerExample() {
  const handleImageLoad = () => {
    console.log('Image loaded successfully');
    // Track analytics, trigger animations, etc.
  };

  const handleImageError = () => {
    console.error('Image failed to load');
    // Log error, show notification, etc.
  };

  return (
    <OptimizedImage
      src="/images/services/skilled-nursing.jpg"
      aspectRatio={{ width: 4, height: 3 }}
      priority="normal"
      sizes="(max-width: 768px) 100vw, 50vw"
      onLoad={handleImageLoad}
      onError={handleImageError}
      context={{
        service: 'Skilled Nursing Care',
      }}
    />
  );
}

/**
 * Example 12: No Skeleton Loader
 * - Disabled skeleton for immediate content
 * - Useful when you have a solid background color
 */
export function NoSkeletonExample() {
  return (
    <OptimizedImage
      src="/images/services/respite-care.jpg"
      aspectRatio={{ width: 16, height: 9 }}
      priority="normal"
      showSkeleton={false}
      className="bg-gray-200"
    />
  );
}

/**
 * Example 13: High Quality Image
 * - Custom quality setting
 * - Disable lazy load for immediate display
 */
export function HighQualityExample() {
  return (
    <OptimizedImage
      src="/images/awards/certification-badge.png"
      width={800}
      height={800}
      aspectRatio={{ width: 1, height: 1 }}
      quality={95}
      priority="high"
      useLazyLoad={false}
      objectFit="contain"
    />
  );
}

/**
 * Example 14: Full Featured Example
 * - All options configured
 */
export function FullFeaturedExample() {
  return (
    <OptimizedImage
      src="/images/locations/los-angeles-office.jpg"
      alt="Happy Home Care Los Angeles Office - Modern healthcare facility"
      width={1920}
      height={1080}
      aspectRatio={{ width: 16, height: 9 }}
      priority="high"
      isAboveFold
      className="rounded-2xl shadow-2xl"
      containerClassName="max-w-6xl mx-auto"
      objectFit="cover"
      objectPosition="center"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
      showSkeleton={true}
      skeletonColor="bg-teal-50"
      blurColor="#00796B"
      quality={90}
      useBlurPlaceholder={true}
      useLazyLoad={false}
      rootMargin="50px"
      fallbackSrc="/images/placeholders/office-placeholder.jpg"
      context={{
        service: 'Office Location',
        location: 'Los Angeles, CA',
        description: 'Modern Happy Home Care facility in Los Angeles',
      }}
      onLoad={() => console.log('Image loaded!')}
      onError={() => console.error('Image load error')}
    />
  );
}

/**
 * Example 15: Responsive Grid Layout
 * - Multiple images in a responsive grid
 */
export function ResponsiveGridExample() {
  const services = [
    { id: 1, src: '/images/services/personal-care.jpg', title: 'Personal Care' },
    { id: 2, src: '/images/services/companion-care.jpg', title: 'Companion Care' },
    { id: 3, src: '/images/services/skilled-nursing.jpg', title: 'Skilled Nursing' },
    { id: 4, src: '/images/services/respite-care.jpg', title: 'Respite Care' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div key={service.id} className="group">
          <ImagePresets.ServiceCard
            src={service.src}
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            context={{ service: service.title }}
            priority={index < 2 ? 'high' : 'normal'}
            isAboveFold={index < 2}
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            {service.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

/**
 * Example 16: Carousel/Slider Images
 * - Sequential priority for visible slides
 */
export function CarouselImageExample({ slideIndex }: { slideIndex: number }) {
  const isVisible = slideIndex === 0;
  const isAdjacent = slideIndex === 1;

  return (
    <ImagePresets.Hero
      src={`/images/carousel/slide-${slideIndex + 1}.jpg`}
      priority={isVisible ? 'high' : isAdjacent ? 'normal' : 'low'}
      isAboveFold={isVisible}
      useLazyLoad={!isVisible && !isAdjacent}
    />
  );
}

/**
 * Example 17: Image with Aspect Ratio Container
 * - Prevent layout shift with proper aspect ratio
 */
export function AspectRatioExample() {
  return (
    <div className="max-w-2xl">
      <OptimizedImage
        src="/images/services/alzheimers-care.jpg"
        aspectRatio={{ width: 21, height: 9 }} // Ultra-wide
        priority="normal"
        sizes="(max-width: 768px) 100vw, 672px"
        className="rounded-lg"
        context={{
          service: "Alzheimer's and Dementia Care",
        }}
      />
    </div>
  );
}
