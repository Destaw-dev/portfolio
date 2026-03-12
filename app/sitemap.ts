import { MetadataRoute } from 'next';

const BASE_URL = 'https://destaw.co.il';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          he: `${BASE_URL}/he`,
        },
      },
    },
    {
      url: `${BASE_URL}/he`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
