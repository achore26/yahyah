import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yahyah.co.ke'
  
  const productIds = [
    'prod-001', 'prod-002', 'prod-003', 'prod-004', 'prod-005',
    'prod-006', 'prod-007', 'prod-008', 'prod-009', 'prod-010',
    'prod-011', 'prod-012', 'prod-013', 'prod-014', 'prod-015',
    'prod-016', 'prod-017', 'prod-018', 'prod-019', 'prod-020',
    'prod-021', 'prod-022', 'prod-023', 'prod-024', 'prod-025'
  ]
  
  const categories = [
    'jewelry', 'wood-carvings', 'wall-art', 
    'textiles', 'pottery', 'baskets', 'stone-arts'
  ]
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...categories.map((category) => ({
      url: `${baseUrl}/categories/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...productIds.map((id) => ({
      url: `${baseUrl}/shop/${id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]
}
