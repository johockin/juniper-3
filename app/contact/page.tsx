'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form handling service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let&apos;s discuss your project and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6+months">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and vision..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center font-medium"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">hello@juniperisland.ca</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (416) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Toronto, Ontario<br />Canada</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-4">What to expect:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• We&apos;ll respond within 24 hours</li>
                  <li>• Free consultation and project scoping</li>
                  <li>• Custom proposal tailored to your needs</li>
                  <li>• Transparent pricing and timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Not sure where to start?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Check out our work and services to get inspired for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/work"
              className="inline-flex items-center px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              View Our Work
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}