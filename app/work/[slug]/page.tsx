import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import CaseStudyContent from '@/components/CaseStudyContent'

interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  client: string
  industry: string
  projectType: string
  timeline: string
  budget: string
  heroImage: string
  heroVideo?: string
  summary: string
  challenge: string
  solution: string
  results: string[]
  sections: Section[]
  tags: string[]
  featured: boolean
  publishedAt: string
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: string
  }
}

interface Section {
  type: 'text' | 'callout' | 'image' | 'heading' | 'bulletList' | 'quote' | 'statsGrid'
  content?: string
  title?: string
  level?: number
  src?: string
  alt?: string
  caption?: string
  layout?: string
  variant?: string
  items?: string[]
  text?: string
  author?: string
  role?: string
  stats?: Array<{ number: string; label: string }>
}

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'case-studies', `${slug}.json`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Juniper Island',
      description: 'The requested case study could not be found.',
    }
  }

  return {
    title: caseStudy.seo.metaTitle,
    description: caseStudy.seo.metaDescription,
    openGraph: {
      title: caseStudy.seo.metaTitle,
      description: caseStudy.seo.metaDescription,
      images: [
        {
          url: caseStudy.seo.ogImage,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.seo.metaTitle,
      description: caseStudy.seo.metaDescription,
      images: [caseStudy.seo.ogImage],
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyContent caseStudy={caseStudy} />
}

// Generate static paths for all case studies
export async function generateStaticParams() {
  const caseStudiesPath = path.join(process.cwd(), 'content', 'case-studies')
  
  try {
    const files = fs.readdirSync(caseStudiesPath)
    const slugs = files
      .filter((file) => file.endsWith('.json'))
      .map((file) => ({
        slug: file.replace('.json', ''),
      }))
    
    return slugs
  } catch {
    return []
  }
}