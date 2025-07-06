'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Work() {
  const projects = [
    {
      id: 1,
      title: 'Brand Campaign',
      client: 'Tech Startup',
      category: 'Video Production',
      description: 'A comprehensive brand campaign showcasing innovation and creativity.',
      image: '/images/projects/project-1.jpg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Product Launch',
      client: 'Consumer Brand',
      category: 'Social Media',
      description: 'Multi-platform social media campaign for a major product launch.',
      image: '/images/projects/project-2.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Documentary Series',
      client: 'Non-Profit',
      category: 'Documentary',
      description: 'Compelling documentary series highlighting social impact.',
      image: '/images/projects/project-3.jpg',
      year: '2023'
    },
    {
      id: 4,
      title: 'Corporate Video',
      client: 'Fortune 500',
      category: 'Corporate',
      description: 'Executive leadership video series for internal communications.',
      image: '/images/projects/project-4.jpg',
      year: '2023'
    },
    {
      id: 5,
      title: 'Music Video',
      client: 'Independent Artist',
      category: 'Music Video',
      description: 'Creative music video with innovative visual storytelling.',
      image: '/images/projects/project-5.jpg',
      year: '2023'
    },
    {
      id: 6,
      title: 'Event Coverage',
      client: 'Tech Conference',
      category: 'Event',
      description: 'Comprehensive event coverage and highlight reel production.',
      image: '/images/projects/project-6.jpg',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-gray-300">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <div className="w-32">
              <Image 
                src="/logos/logo-light.png" 
                alt="Juniper Island" 
                width={128}
                height={53}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Every project tells a story. Here are some of our favorites.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-end p-6 z-20">
                  <div className="text-white">
                    <div className="text-sm text-gray-300 mb-1">{project.year} • {project.category}</div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{project.client}</p>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of your creative project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Video Production',
              'Social Media Content',
              'Documentary Films',
              'Corporate Videos',
              'Music Videos',
              'Event Coverage',
              'Creative Strategy',
              'Post-Production'
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s create your next project</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your vision to life? Let&apos;s discuss your project and create something extraordinary together.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}