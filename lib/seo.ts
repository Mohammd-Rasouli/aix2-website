import type { Metadata } from 'next';

export function pageMetadata(seo: { title: string; description: string }, route: string): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: route },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: route,
      siteName: 'AIx2',
      type: 'website',
      // A page's own openGraph replaces the root one, so the share image is named here.
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'AIx2' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/opengraph-image'],
    },
  };
}
