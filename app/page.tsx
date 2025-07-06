'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-8 left-8 z-20 w-48">
            <div className="text-white text-2xl font-bold">Juniper Island</div>
          </div>
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Juniper Island
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            We craft compelling brand stories through video and creative content
          </p>
          <Link 
            href="/work" 
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <div className="animate-bounce text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 14L12 21M12 21L5 14M12 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative aspect-[4/5] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gray-100 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div>
                  <h3 className="text-white text-xl font-semibold">Project {item}</h3>
                  <p className="text-white/80">Client Name</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/work" 
            className="inline-flex items-center text-black font-medium hover:underline"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end creative solutions to bring your brand&apos;s story to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Video Production',
                description: 'From concept to delivery, we create compelling video content that captivates your audience.'
              },
              {
                title: 'Social Media',
                description: 'Strategic social media content that engages and grows your online presence.'
              },
              {
                title: 'Creative Strategy',
                description: 'Data-driven creative strategies that align with your business objectives.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The creative minds behind Juniper Island
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'Johnny Hockin',
                role: 'Creative Director',
                image: '/images/team/johnny.png',
                bio: 'With over a decade in video production and creative direction, Johnny brings stories to life through compelling visuals.'
              },
              {
                name: 'Nina Hockin',
                role: 'Strategy Director',
                image: '/images/team/nina.png',
                bio: 'Nina combines strategic thinking with creative vision to develop impactful brand narratives and marketing strategies.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">{member.name.charAt(0)}</span>
              </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to tell your story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s create something amazing together. Get in touch to discuss your next project.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}