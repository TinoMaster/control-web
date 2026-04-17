interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * Renders a JSON-LD <script> tag for structured data (SEO).
 * Usage: <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', ... }} />
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
