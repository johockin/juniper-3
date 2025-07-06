import './globals.css'
import { Metadata } from 'next'
import { siteConfig, generateKeywords } from '@/config/seo'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: generateKeywords(),
  authors: [{ name: siteConfig.business.name }],
  creator: siteConfig.business.name,
  publisher: siteConfig.business.name,
  formatDetection: siteConfig.technical.formatDetection,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.pages.home.canonical,
  },
  openGraph: {
    type: siteConfig.social.openGraph.type,
    locale: siteConfig.social.openGraph.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.social.openGraph.siteName,
    images: [
      {
        url: siteConfig.social.openGraph.images.default,
        width: siteConfig.social.openGraph.images.width,
        height: siteConfig.social.openGraph.images.height,
        alt: siteConfig.social.openGraph.images.alt,
      },
    ],
  },
  twitter: {
    card: siteConfig.social.twitter.card,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.social.openGraph.images.default],
  },
  robots: siteConfig.technical.robots,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteConfig.structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <img 
                  src="/logos/logo-dark.png" 
                  alt="Juniper Island Logo" 
                  className="h-8 w-auto"
                  width={120}
                  height={32}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <span className="text-gray-900 font-medium">Home</span>
                  <a href="#contact" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}