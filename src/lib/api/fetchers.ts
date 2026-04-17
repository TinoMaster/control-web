import type { FAQ, IResponse, Testimonial } from "@/types/api.types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.25:5000/api/v1";

/**
 * Fetch FAQs from backend with ISR (revalidate every 30 minutes).
 * Falls back to null on error — caller handles fallback to static data.
 */
export async function fetchFAQs(): Promise<FAQ[] | null> {
  try {
    const res = await fetch(`${API_BASE}/public/faq`, {
      next: { revalidate: 1800 }, // 30 minutes
    });

    if (!res.ok) return null;

    const json: IResponse<FAQ[]> = await res.json();

    if (json.status !== 200 || !json.data) return null;

    return json.data;
  } catch {
    return null;
  }
}

/**
 * Fetch testimonials from backend with ISR (revalidate every 1 hour).
 * Falls back to null on error — caller handles fallback to static data.
 */
export async function fetchTestimonials(): Promise<Testimonial[] | null> {
  try {
    const res = await fetch(`${API_BASE}/public/testimonials`, {
      next: { revalidate: 3600 }, // 1 hour
    });

    if (!res.ok) return null;

    const json: IResponse<Testimonial[]> = await res.json();

    if (json.status !== 200 || !json.data) return null;

    return json.data;
  } catch {
    return null;
  }
}
