'use client'

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

interface Props {
  caseStudy: CaseStudy
}

export default function CaseStudyContent({ caseStudy }: Props) {
  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={index} className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        )

      case 'heading':
        const HeadingTag = `h${section.level || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        return (
          <HeadingTag key={index} className={`font-semibold text-gray-900 ${
            section.level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}>
            {section.content}
          </HeadingTag>
        )

      case 'callout':
        const bgColor = section.variant === 'success' ? 'bg-green-50 border-green-200' : 
                       section.variant === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                       'bg-blue-50 border-blue-200'
        return (
          <div key={index} className={`p-6 rounded-lg border ${bgColor}`}>
            {section.title && (
              <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
            )}
            <p className="text-gray-700">{section.content}</p>
          </div>
        )

      case 'image':
        return (
          <div key={index} className={`${section.layout === 'full-width' ? '-mx-4 md:-mx-8' : ''}`}>
            <img
              src={section.src}
              alt={section.alt || ''}
              className="w-full rounded-lg"
            />
            {section.caption && (
              <p className="text-sm text-gray-500 mt-3 text-center italic">
                {section.caption}
              </p>
            )}
          </div>
        )

      case 'bulletList':
        return (
          <ul key={index} className="space-y-3">
            {section.items?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        )

      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-black pl-6 py-4">
            <p className="text-xl text-gray-900 font-medium mb-4">&ldquo;{section.text}&rdquo;</p>
            <cite className="text-gray-600">
              <span className="font-medium">{section.author}</span>
              {section.role && <span>, {section.role}</span>}
            </cite>
          </blockquote>
        )

      case 'statsGrid':
        return (
          <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {section.stats?.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {caseStudy.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Project Info */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 p-8 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
            <p className="text-gray-600">{caseStudy.client}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Industry</h3>
            <p className="text-gray-600">{caseStudy.industry}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Timeline</h3>
            <p className="text-gray-600">{caseStudy.timeline}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Investment</h3>
            <p className="text-gray-600">{caseStudy.budget}</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.summary}</p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>

        {/* Key Results */}
        <div className="mb-16 p-8 bg-black text-white rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Key Results</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {caseStudy.results.map((result, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-12">
          {caseStudy.sections.map(renderSection)}
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to tell your story?</h3>
          <p className="text-gray-600 mb-8">Let&apos;s create something amazing together.</p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  )
}