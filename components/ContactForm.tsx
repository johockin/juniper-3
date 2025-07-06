'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    // Form submission is handled by Netlify
    // We just need to show a success message
    setTimeout(() => {
      setIsSubmitted(true)
    }, 500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-2xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
    >
      {/* Netlify form detection */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Honeypot field for spam protection */}
      <div className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: 
          <input name="bot-field" />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="Your name"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
          placeholder="Your company"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
          Project Type
        </label>
        <select
          id="project-type"
          name="project-type"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
        >
          <option value="">Select a project type</option>
          <option value="brand-video">Brand Video</option>
          <option value="social-content">Social Media Content</option>
          <option value="marketing-video">Marketing Video</option>
          <option value="product-video">Product Video</option>
          <option value="testimonial-video">Testimonial Video</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
        >
          <option value="">Select a budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-plus">$50,000+</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
        >
          <option value="">Select a timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-month">Within 1 month</option>
          <option value="2-3-months">2-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your project goals, vision, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white font-medium py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        Send Message
      </button>

      <p className="text-sm text-gray-500 text-center mt-4">
        We typically respond within 24 hours
      </p>
    </form>
  )
}