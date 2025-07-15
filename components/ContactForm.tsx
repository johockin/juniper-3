'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again or email us directly at nina@juniperisland.ca.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="glass-form-container p-8 text-center">
        <div className="text-green-400 text-2xl mb-4">✓</div>
        <h3 className="ultra-thin-title text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="ultra-thin-subtitle">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="glass-form-container p-8 max-w-2xl mx-auto">
      <form 
        name="contact"
        onSubmit={handleSubmit}
      >
      {/* Form name for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Essential Fields */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="ultra-thin-subtitle block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-input-underline w-full py-3 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="ultra-thin-subtitle block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input-underline w-full py-3 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="ultra-thin-subtitle block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="form-input-underline w-full py-3 transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
        <p className="text-xs text-gray-400 mt-2">
          💡 <strong>Helpful to include:</strong> project type (brand video, social content, etc.), budget range, timeline, and company name
        </p>
      </div>

      {/* Optional Details Toggle */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="ultra-thin-subtitle text-sm hover:text-white transition-colors flex items-center gap-2"
        >
          <svg className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
          {showDetails ? 'Hide' : 'Add'} project details (optional)
        </button>
      </div>

      {/* Optional Fields */}
      {showDetails && (
        <div className="border-l-2 border-white/20 pl-6 mb-6 space-y-6">
          <div>
            <label htmlFor="company" className="ultra-thin-subtitle block text-sm font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input-underline w-full py-3 transition-colors"
              placeholder="Your company"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="project-type" className="ultra-thin-subtitle block text-sm font-medium mb-2">
                Project Type
              </label>
              <select
                id="project-type"
                name="project-type"
                className="form-input-underline w-full py-3 transition-colors"
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

            <div>
              <label htmlFor="budget" className="ultra-thin-subtitle block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                className="form-input-underline w-full py-3 transition-colors"
              >
                <option value="">Select a budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="ultra-thin-subtitle block text-sm font-medium mb-2">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              className="form-input-underline w-full py-3 transition-colors"
            >
              <option value="">Select a timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
      )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-shine w-full bg-white text-black font-medium py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="ultra-thin-subtitle text-sm text-center mt-4">
          We typically respond within 24 hours
        </p>
      </form>
    </div>
  )
}