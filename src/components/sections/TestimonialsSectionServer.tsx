import { TESTIMONIALS as STATIC_TESTIMONIALS } from "@/data/testimonials";
import { fetchTestimonials } from "@/lib/api/fetchers";
import type { Testimonial } from "@/types/api.types";
import { TestimonialsSection } from "./TestimonialsSection";

/**
 * Server Component wrapper for TestimonialsSection.
 * Pre-fetches testimonials with ISR (revalidate 1h) and passes them as props.
 * Falls back to static data if backend is unavailable.
 */
export default async function TestimonialsSectionServer() {
  const apiTestimonials = await fetchTestimonials();

  // Map API response to the shape TestimonialsSection expects
  const testimonials: Testimonial[] =
    apiTestimonials ??
    STATIC_TESTIMONIALS.map((t) => ({
      id: t.name,
      name: t.name,
      business: t.business,
      quote: t.comment,
      avatar: t.avatar,
      rating: t.rating,
    }));

  return <TestimonialsSection testimonials={testimonials} />;
}
