// Response wrapper estándar del backend Spring Boot
export interface IResponse<T> {
  status: number
  message: string
  data: T | null
}

// FAQ types
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order?: number
  createdAt?: string
  updatedAt?: string
}

export interface FAQCategory {
  id: string
  name: string
  description?: string
  icon?: string
}

// Contact form
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Testimonial
export interface Testimonial {
  id: string
  name: string
  business: string
  role?: string
  quote: string
  avatar?: string
  rating?: number
}

// Error response
export interface ErrorResponse {
  error: string
  message: string
  statusCode: number
}
