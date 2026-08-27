import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/help-content'

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://control-web-khaki.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/home`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/help-center`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/help-center/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/data-deletion`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/help-center/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...articleRoutes]
}
