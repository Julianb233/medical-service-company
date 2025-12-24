# New Components Documentation

This document describes the newly created components for the medical home health care website.

## Components Created

### 1. TestimonialsCarousel (`components/testimonials-carousel.tsx`)

A responsive testimonials carousel component with auto-play functionality.

**Features:**
- Auto-play with 5-second interval
- Pause on hover
- Prev/Next navigation arrows
- Dot navigation indicators
- Smooth transitions with Framer Motion
- Star rating display
- Quote icon for visual appeal
- Responsive design

**Usage:**
```tsx
import { TestimonialsCarousel } from "@/components/testimonials-carousel";

export default function Page() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2>What Our Clients Say</h2>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
```

**Data Source:**
- Imports testimonials from `@/lib/content-data`
- Each testimonial includes: id, quote, author, role, location, rating

**Styling:**
- White cards with shadow
- Orange (#eb981c) for stars and active dots
- Teal (#007486) for navigation buttons
- Fully responsive layout

---

### 2. ContactForm (`components/contact-form.tsx`)

A validated contact form with React Hook Form and Zod validation.

**Features:**
- Client-side validation with Zod
- Real-time error messages
- Loading state during submission
- Success message after submission
- Service dropdown populated from content data
- Fully responsive layout

**Form Fields:**
- Name (required)
- Email (required, validated format)
- Phone (optional)
- Service (required, dropdown)
- Message (required, min 10 characters)

**Usage:**
```tsx
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2>Get in Touch</h2>
        <ContactForm />
      </div>
    </section>
  );
}
```

**Form Submission:**
- Posts to `/api/contact` endpoint
- Returns success/error response
- Console logs submission data (can be extended for email)

**Validation:**
- Name: Required
- Email: Required, must be valid email format
- Phone: Optional
- Service: Required, must select from dropdown
- Message: Required, minimum 10 characters

**Styling:**
- Teal focus rings on inputs
- Orange submit button
- Red error messages
- Green success notification
- Responsive 2-column layout on larger screens

---

### 3. Contact API Route (`app/api/contact/route.ts`)

POST endpoint for handling contact form submissions.

**Features:**
- Validates incoming data with Zod
- Returns structured JSON responses
- Proper error handling
- TypeScript typed

**Response Format:**

Success (200):
```json
{
  "success": true,
  "message": "Your message has been received. We'll contact you soon!",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "service": "home-care"
  }
}
```

Validation Error (400):
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [...]
}
```

Server Error (500):
```json
{
  "success": false,
  "error": "An error occurred while processing your request",
  "message": "Please try again later or contact us directly."
}
```

**Future Extensions:**
- Add email sending (commented TODOs in code)
- Save to database (Prisma example commented)
- Add rate limiting
- Add reCAPTCHA verification

---

## Demo Page

A demo page has been created at `/demo` to showcase both components:

Visit: `http://localhost:3000/demo`

**File:** `app/demo/page.tsx`

---

## Dependencies Used

All dependencies are already installed in the project:

- `embla-carousel-react`: Carousel functionality
- `framer-motion`: Smooth animations and transitions
- `react-hook-form`: Form state management
- `zod`: Schema validation
- `@hookform/resolvers`: React Hook Form + Zod integration
- `lucide-react`: Icons (Quote, Star, ChevronLeft, ChevronRight, etc.)

---

## Design System Integration

Both components follow the design system defined in `app/globals.css`:

**Colors:**
- Primary Orange: `#eb981c` (buttons, accents, stars)
- Primary Teal: `#007486` (navigation, focus states)
- Orange Dark: `#d4860a` (hover states)
- Teal Dark: `#005c6b` (hover states)
- Gray scale for text and backgrounds

**Typography:**
- Font family: Roboto (sans-serif)
- Responsive font sizes
- Proper line heights for readability

**Spacing:**
- Uses Tailwind spacing scale
- Responsive padding/margins
- Container max-width: 1280px

---

## Accessibility

Both components implement accessibility best practices:

**TestimonialsCarousel:**
- Aria labels on navigation buttons
- Keyboard navigation support
- Semantic HTML structure
- Proper heading hierarchy

**ContactForm:**
- Labeled form inputs
- Error messages linked to inputs
- Required field indicators
- Focus management
- Keyboard navigation

---

## Browser Compatibility

Components are compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimizations

**TestimonialsCarousel:**
- Auto-play pauses on hover to prevent distraction
- Smooth CSS transitions
- Optimized re-renders with React hooks

**ContactForm:**
- Client-side validation reduces server requests
- Debounced validation
- Optimized form state management

---

## Testing the Components

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit the demo page:
   ```
   http://localhost:3000/demo
   ```

3. Test the carousel:
   - Watch auto-play
   - Hover to pause
   - Click prev/next arrows
   - Click dots to navigate

4. Test the contact form:
   - Try submitting empty form (see validation)
   - Enter invalid email (see error)
   - Fill out correctly and submit
   - Check console for submission data

---

## Customization

### Changing Auto-play Speed

Edit `components/testimonials-carousel.tsx`:

```tsx
const autoplay = setInterval(() => {
  emblaApi.scrollNext();
}, 5000); // Change this value (milliseconds)
```

### Modifying Validation Rules

Edit `components/contact-form.tsx`:

```tsx
const contactFormSchema = z.object({
  // Add or modify validation rules here
  message: z.string().min(20, "Message must be at least 20 characters"),
});
```

### Adding Email Functionality

Edit `app/api/contact/route.ts` and uncomment the TODO sections to add email sending logic with your preferred service (Resend, SendGrid, etc.).

---

## Build Status

✅ All components compile successfully
✅ TypeScript types are correct
✅ No linting errors in new components
✅ Production build passes

---

## Next Steps

1. **Add email sending**: Integrate with Resend, SendGrid, or similar
2. **Add database**: Save contact submissions to database
3. **Add analytics**: Track form submissions and carousel interactions
4. **Add more testimonials**: Expand the testimonials array in `lib/content-data.ts`
5. **A/B testing**: Test different CTA text and form layouts
