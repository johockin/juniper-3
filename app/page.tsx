import { siteConfig } from '../config/seo'
import ContactForm from '../components/ContactForm'

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
            preload="metadata"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            Creative That Feels Like a Natural Extension of Your Team.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We produce polished brand and social video content that feels like you—just more powerful, more clear, and ready for the spotlight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </a>
            <a 
              href="#work" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Toronto-Based Video Production</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We specialize in creating compelling brand stories through video and creative content that resonates with your audience and drives results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Brand Videos */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Brand Videos</h3>
              <p className="text-gray-600 mb-6">
                Professional brand storytelling that captures your company&apos;s essence and values.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Company culture videos</li>
                <li>• Brand story documentaries</li>
                <li>• Mission & values videos</li>
                <li>• Leadership interviews</li>
                <li>• Behind-the-scenes content</li>
              </ul>
            </div>

            {/* Social Content */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4v4h4V4h-4zm-4 0v8h4V4h-4zM8 4v8h4V4H8zM4 4v12h4V4H4zm16 8v8h-4v-8h4zm-8 0v8h4v-8h-4zm-4 4v4h4v-4H8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Social Content</h3>
              <p className="text-gray-600 mb-6">
                Engaging social media content optimized for each platform and audience.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Instagram Reels & Stories</li>
                <li>• TikTok campaigns</li>
                <li>• LinkedIn video content</li>
                <li>• YouTube series</li>
                <li>• Platform-specific editing</li>
              </ul>
            </div>

            {/* Marketing Videos */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Marketing Videos</h3>
              <p className="text-gray-600 mb-6">
                Results-driven video content that converts viewers into customers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product demonstrations</li>
                <li>• Explainer videos</li>
                <li>• Customer testimonials</li>
                <li>• Sales funnel videos</li>
                <li>• Event coverage</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h4 className="text-xl font-semibold mb-4">Production Services</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Pre-Production</p>
                  <ul className="space-y-1">
                    <li>• Creative strategy</li>
                    <li>• Scriptwriting</li>
                    <li>• Storyboarding</li>
                    <li>• Location scouting</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Post-Production</p>
                  <ul className="space-y-1">
                    <li>• Video editing</li>
                    <li>• Color grading</li>
                    <li>• Audio mixing</li>
                    <li>• Motion graphics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h4 className="text-xl font-semibold mb-4">Industry Experience</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>• Technology & SaaS</li>
                  <li>• Healthcare</li>
                  <li>• E-commerce</li>
                  <li>• Financial services</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Restaurants & hospitality</li>
                  <li>• Non-profit organizations</li>
                  <li>• Professional services</li>
                  <li>• Manufacturing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Work</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From brand storytelling to social content, we create videos that connect with your audience and drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <a href="/work/tech-startup-launch" className="group block" aria-label="View Tech Startup Launch case study">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Brand Story Video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-600 transition-colors">Tech Startup Launch</h3>
              <p className="text-gray-600 text-sm">
                Brand storytelling video that helped a Toronto startup secure Series A funding.
              </p>
            </a>

            {/* Project 2 */}
            <div className="group opacity-75">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Social Campaign</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Restaurant Social Content</h3>
              <p className="text-gray-600 text-sm">
                Monthly social content that increased engagement by 300% and foot traffic by 40%.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">Case study coming soon</p>
            </div>

            {/* Project 3 */}
            <div className="group opacity-75">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-teal-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Product Demo</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">SaaS Product Demo</h3>
              <p className="text-gray-600 text-sm">
                Product demonstration video that converted 25% of viewers to trial users.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">Case study coming soon</p>
            </div>

            {/* Project 4 */}
            <div className="group opacity-75">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-pink-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Event Coverage</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Conference Highlights</h3>
              <p className="text-gray-600 text-sm">
                Event recap video that generated 50K+ views and doubled next year&apos;s attendance.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">Case study coming soon</p>
            </div>

            {/* Project 5 */}
            <div className="group opacity-75">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 to-orange-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Testimonial</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Stories</h3>
              <p className="text-gray-600 text-sm">
                Authentic customer testimonials that increased conversion rates by 35%.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">Case study coming soon</p>
            </div>

            {/* Project 6 */}
            <div className="group opacity-75">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-blue-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Campaign Video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Non-Profit Campaign</h3>
              <p className="text-gray-600 text-sm">
                Fundraising campaign video that helped raise $500K+ for local charity.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">Case study coming soon</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meet the Team</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We&apos;re Johnny and Nina, a Toronto-based creative duo passionate about telling authentic brand stories through video.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Team Photos */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="relative">
                  <img
                    src="/images/team/Johnny.png"
                    alt="Johnny Hockin"
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">Johnny Hockin</h3>
                <p className="text-gray-600 text-sm">Creative Director & Producer</p>
              </div>

              <div className="text-center">
                <div className="relative">
                  <img
                    src="/images/team/Nina.png"
                    alt="Nina"
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">Nina</h3>
                <p className="text-gray-600 text-sm">Director & Creative Strategist</p>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in Toronto, Juniper Island emerged from our shared belief that every brand has a unique story worth telling. We combine Johnny&apos;s production expertise with Nina&apos;s strategic creative vision to create video content that doesn&apos;t just look great—it drives real results.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">What Sets Us Apart</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Collaborative approach</strong> - We work as an extension of your team, not just a vendor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Strategic storytelling</strong> - Every video serves your broader business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Toronto roots</strong> - Deep understanding of the local market and culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>End-to-end service</strong> - From strategy to final delivery, we handle everything</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Let&apos;s Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let&apos;s discuss how we can help tell your brand&apos;s story through compelling video content.
            </p>
          </div>
          
          <ContactForm />
          
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Prefer to email directly?</p>
            <a 
              href={`mailto:${siteConfig.business.email}`}
              className="text-black font-medium hover:text-gray-600 transition-colors"
            >
              {siteConfig.business.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}