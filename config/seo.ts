/**
 * SEO CONFIGURATION
 * 
 * This file contains ALL SEO-related settings for the Juniper Island website.
 * 
 * CRITICAL: This file must be maintained by all future Claude instances.
 * Any SEO changes should be made here, not directly in components.
 * 
 * This centralized approach prevents SEO fragmentation and ensures
 * consistent metadata across the entire site.
 */

export const siteConfig = {
  // Basic Site Information
  name: 'Juniper Island',
  title: 'Juniper Island - Video Production & Brand Storytelling',
  description: 'We produce polished brand and social video content that feels like you—just more powerful, more clear, and ready for the spotlight.',
  url: 'https://juniper-island.ca',
  locale: 'en_CA',
  
  // Business Information
  business: {
    name: 'Juniper Island',
    type: 'Video Production Agency',
    location: 'Toronto, Ontario, Canada',
    email: 'hello@juniper-island.ca',
    phone: '', // Add when available
    address: '', // Add when available
  },
  
  // SEO Keywords and Tags
  keywords: [
    'video production',
    'brand storytelling',
    'Toronto',
    'marketing videos',
    'social media content',
    'brand videos',
    'video production company',
    'Toronto video production',
    'brand video content',
    'social video marketing',
    'video production services',
    'creative agency Toronto'
  ],
  
  // Social Media and Open Graph
  social: {
    openGraph: {
      type: 'website' as const,
      locale: 'en_CA',
      siteName: 'Juniper Island',
      images: {
        default: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Juniper Island - Video Production & Brand Storytelling'
      }
    },
    twitter: {
      card: 'summary_large_image' as const,
      site: '@juniperislnd', // Update when Twitter handle is available
      creator: '@juniperislnd'
    }
  },
  
  // Structured Data (JSON-LD)
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Juniper Island',
    description: 'Video production and brand storytelling agency specializing in polished brand and social video content.',
    url: 'https://juniper-island.ca',
    telephone: '', // Add when available
    email: 'hello@juniper-island.ca',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'Ontario',
      addressCountry: 'Canada'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532, // Toronto coordinates
      longitude: -79.3832
    },
    areaServed: {
      '@type': 'Place',
      name: 'Toronto, Ontario, Canada'
    },
    serviceType: [
      'Video Production',
      'Brand Storytelling',
      'Social Media Content Creation',
      'Marketing Video Production',
      'Brand Video Content'
    ],
    priceRange: '$$', // Update based on pricing structure
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0', // Update when reviews are available
      reviewCount: '1' // Update when reviews are available
    }
  },
  
  // Page-Specific SEO Settings
  pages: {
    home: {
      title: 'Juniper Island - Video Production & Brand Storytelling',
      description: 'We produce polished brand and social video content that feels like you—just more powerful, more clear, and ready for the spotlight.',
      canonical: '/',
      keywords: [
        'video production Toronto',
        'brand storytelling',
        'marketing videos',
        'social media content',
        'brand videos'
      ]
    }
  },
  
  // Technical SEO Settings
  technical: {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1
      }
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    sitemap: '/sitemap.xml',
    robotsTxt: '/robots.txt'
  }
};

// Helper function to get page-specific SEO data
export function getPageSEO(page: keyof typeof siteConfig.pages) {
  const pageData = siteConfig.pages[page];
  if (!pageData) {
    return siteConfig.pages.home; // Fallback to home page SEO
  }
  return pageData;
}

// Helper function to generate complete meta title
export function generateMetaTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.title;
  return `${pageTitle} | ${siteConfig.name}`;
}

// Helper function to generate keywords string
export function generateKeywords(additionalKeywords: string[] = []): string {
  return [...siteConfig.keywords, ...additionalKeywords].join(', ');
}