import { siteConfig } from '../config/seo'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white" style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#f5f5f7'
    }}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden" style={{
        minHeight: '100vh',
        padding: '0 4rem',
        position: 'relative'
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
          preload="auto"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{
          background: 'rgba(0, 0, 0, 0.15)',
          zIndex: 2
        }} />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 70%),
            radial-gradient(circle at 100% 100%, rgba(255,255,255,0.01) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 3
        }} />
        
        <div className="relative text-center max-w-5xl mx-auto" style={{ zIndex: 10 }}>
          <h1 className="ultra-thin-title clamp-hero-title mb-8" style={{
            fontWeight: 200,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#f5f5f7',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textRendering: 'optimizeLegibility'
          }}>
            <span style={{ fontWeight: 600, color: '#fff' }}>Toronto&apos;s Premier</span><br />
            Video Production Company
          </h1>
          <p className="ultra-thin-subtitle clamp-hero-subtitle mb-16 max-w-2xl mx-auto" style={{
            fontWeight: 300,
            color: '#a1a1a6',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textRendering: 'optimizeLegibility'
          }}>
            Elevating brands with visually compelling video content
          </p>
          
          <div className="grid grid-cols-3 gap-16 mb-16 max-w-4xl mx-auto">
            <div className="glass-stat-card text-center py-8 px-4">
              <div className="mb-2" style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 200,
                color: '#fff',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}>300+</div>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: '#a1a1a6',
                letterSpacing: '0.02em'
              }}>Video Projects</div>
            </div>
            <div className="glass-stat-card text-center py-8 px-4">
              <div className="mb-2" style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 200,
                color: '#fff',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}>25M+</div>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: '#a1a1a6',
                letterSpacing: '0.02em'
              }}>Total Views</div>
            </div>
            <div className="glass-stat-card text-center py-8 px-4">
              <div className="mb-2" style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 200,
                color: '#fff',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}>10M+</div>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: '#a1a1a6',
                letterSpacing: '0.02em'
              }}>Viral Campaign Views</div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#contact" 
              className="btn-shine relative overflow-hidden px-10 py-4 rounded-lg border transition-all duration-300 hover:opacity-90"
              style={{
                background: '#fff',
                color: '#000',
                border: '1px solid #fff',
                fontSize: '0.9375rem',
                fontWeight: 400,
                textDecoration: 'none',
                letterSpacing: '0.01em'
              }}
            >
              Get Started
            </a>
            <a 
              href="#work" 
              className="btn-shine relative overflow-hidden px-10 py-4 rounded-lg border transition-all duration-300 hover:bg-white/10"
              style={{
                background: 'transparent',
                color: '#f5f5f7',
                border: '1px solid rgba(255,255,255,0.3)',
                fontSize: '0.9375rem',
                fontWeight: 400,
                textDecoration: 'none',
                letterSpacing: '0.01em'
              }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonial + Logo Strip Belt */}
      <section className="belt-section px-16 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-24 items-center">
          {/* Testimonial */}
          <div className="testimonial-quote-gradient relative pl-8">
            <blockquote className="clamp-section-subtitle mb-4 ultra-thin-subtitle italic">
              &quot;The Juniper Island team are ideal partners, anticipating our needs and exceeding our expectations at every turn.&quot;
            </blockquote>
            <div className="pl-8 text-xs text-gray-400 font-light">
              Andrew Addison, VP Communications, CMPA
            </div>
          </div>
          
          {/* Logo Strip */}
          <div className="belt-logos-container text-right p-8">
            <h3 className="ultra-thin-subtitle mb-4 text-xs tracking-wider">
              Trusted by Leading Brands
            </h3>
            <img 
              src="/images/logo-strip-white.avif" 
              alt="Client logos including Red Bull, Rily, Muskoka Roastery and others" 
              className="logo-strip-filter max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Work/Portfolio Section */}
      <section id="work" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="ultra-thin-title clamp-section-title mb-6">Our Work</h2>
            <p className="ultra-thin-subtitle clamp-section-subtitle leading-relaxed max-w-3xl mx-auto mb-4">
              Expertly crafted commercials, documentaries, social ads, corporate videos and brand films.
            </p>
            <p className="ultra-thin-subtitle leading-relaxed max-w-3xl mx-auto">
              Award-winning creative, expert production and white-glove service. Whether you need a single testimonial video or a massive content library, consider it done.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Subway Meat Cute */}
            <a href="/work/subway-meat-cute" className="glass-work-card work-item-shine group block p-6" aria-label="View Subway Meat Cute case study">
              <div className="relative bg-gradient-to-br from-green-600 to-yellow-500 rounded-lg overflow-hidden aspect-video mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Viral Campaign</p>
                  </div>
                </div>
              </div>
              <h3 className="clamp-work-title ultra-thin-title mb-2 group-hover:text-gray-300 transition-colors">Subway &apos;Meat Cute&apos;</h3>
              <p className="ultra-thin-subtitle text-sm mb-2">Valentine&apos;s Day campaign that achieved 10M+ views</p>
              <div className="flex flex-wrap gap-2">
                <span className="tag-premium px-2 py-1 text-xs rounded">Viral Campaign</span>
                <span className="tag-premium px-2 py-1 text-xs rounded">Social Media</span>
              </div>
            </a>

            {/* Rily Social Growth */}
            <a href="/work/rily-social-growth" className="glass-work-card work-item-shine group block p-6" aria-label="View Rily Social Growth case study">
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg overflow-hidden aspect-video mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Social Content</p>
                  </div>
                </div>
              </div>
              <h3 className="clamp-work-title ultra-thin-title mb-2 group-hover:text-gray-300 transition-colors">Rily Social Growth</h3>
              <p className="ultra-thin-subtitle text-sm mb-2">Complete social media transformation and growth strategy</p>
              <div className="flex flex-wrap gap-2">
                <span className="tag-premium px-2 py-1 text-xs rounded">Social Media</span>
                <span className="tag-premium px-2 py-1 text-xs rounded">Brand Strategy</span>
              </div>
            </a>

            {/* Muskoka Roastery */}
            <a href="/work/muskoka-roastery-wilderness" className="glass-work-card work-item-shine group block p-6" aria-label="View Muskoka Roastery case study">
              <div className="relative bg-gradient-to-br from-amber-800 to-orange-600 rounded-lg overflow-hidden aspect-video mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Brand Documentary</p>
                  </div>
                </div>
              </div>
              <h3 className="clamp-work-title ultra-thin-title mb-2 group-hover:text-gray-300 transition-colors">Muskoka Roastery Wilderness</h3>
              <p className="ultra-thin-subtitle text-sm mb-2">Authentic brand storytelling in Canada&apos;s wilderness</p>
              <div className="flex flex-wrap gap-2">
                <span className="tag-premium px-2 py-1 text-xs rounded">Documentary</span>
                <span className="tag-premium px-2 py-1 text-xs rounded">Brand Story</span>
              </div>
            </a>

            {/* Red Bull */}
            <a href="/work/red-bull-music-academy" className="glass-work-card work-item-shine group block p-6" aria-label="View Red Bull Music Academy case study">
              <div className="relative bg-gradient-to-br from-red-600 to-blue-600 rounded-lg overflow-hidden aspect-video mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Event Coverage</p>
                  </div>
                </div>
              </div>
              <h3 className="clamp-work-title ultra-thin-title mb-2 group-hover:text-gray-300 transition-colors">Red Bull Music Academy</h3>
              <p className="ultra-thin-subtitle text-sm mb-2">Global music event documentation and content creation</p>
              <div className="flex flex-wrap gap-2">
                <span className="tag-premium px-2 py-1 text-xs rounded">Event Coverage</span>
                <span className="tag-premium px-2 py-1 text-xs rounded">Music</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services-section-bg py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="ultra-thin-title clamp-section-title mb-6">Story-Driven Video Production</h2>
            <p className="ultra-thin-subtitle clamp-section-subtitle leading-relaxed max-w-3xl mx-auto">
              We believe in the power of stories to captivate, engage, and inspire. Our audience-centric strategies deliver performance marketing results that drive measurable business growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Brand Videos */}
            <div className="glass-work-card p-8">
              <div className="service-icon-premium w-12 h-12 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="ultra-thin-title text-2xl mb-4">Brand Videos</h3>
              <p className="ultra-thin-subtitle mb-6">
                Professional brand storytelling that captures your company&apos;s essence and values.
              </p>
              <ul className="service-features-custom">
                <li>Company culture videos</li>
                <li>Brand story documentaries</li>
                <li>Mission & values videos</li>
                <li>Leadership interviews</li>
                <li>Behind-the-scenes content</li>
              </ul>
            </div>

            {/* Social Content */}
            <div className="glass-work-card p-8">
              <div className="service-icon-premium w-12 h-12 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4v4h4V4h-4zm-4 0v8h4V4h-4zM8 4v8h4V4H8zM4 4v12h4V4H4zm16 8v8h-4v-8h4zm-8 0v8h4v-8h-4zm-4 4v4h4v-4H8z"/>
                </svg>
              </div>
              <h3 className="ultra-thin-title text-2xl mb-4">Social Content</h3>
              <p className="ultra-thin-subtitle mb-6">
                Engaging social media content optimized for each platform and audience.
              </p>
              <ul className="service-features-custom">
                <li>Instagram Reels & Stories</li>
                <li>TikTok campaigns</li>
                <li>LinkedIn video content</li>
                <li>YouTube series</li>
                <li>Platform-specific editing</li>
              </ul>
            </div>

            {/* Marketing Videos */}
            <div className="glass-work-card p-8">
              <div className="service-icon-premium w-12 h-12 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="ultra-thin-title text-2xl mb-4">Marketing Videos</h3>
              <p className="ultra-thin-subtitle mb-6">
                Results-driven video content that converts viewers into customers.
              </p>
              <ul className="service-features-custom">
                <li>Product demonstrations</li>
                <li>Explainer videos</li>
                <li>Customer testimonials</li>
                <li>Sales funnel videos</li>
                <li>Event coverage</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="glass-work-card p-8">
              <h4 className="ultra-thin-title text-xl mb-4">Production Services</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="ultra-thin-subtitle font-medium mb-2">Pre-Production</p>
                  <ul className="service-features-custom">
                    <li>Creative strategy</li>
                    <li>Scriptwriting</li>
                    <li>Storyboarding</li>
                    <li>Location scouting</li>
                  </ul>
                </div>
                <div>
                  <p className="ultra-thin-subtitle font-medium mb-2">Post-Production</p>
                  <ul className="service-features-custom">
                    <li>Video editing</li>
                    <li>Color grading</li>
                    <li>Audio mixing</li>
                    <li>Motion graphics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-work-card p-8">
              <h4 className="ultra-thin-title text-xl mb-4">Industry Experience</h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="service-features-custom">
                  <li>Technology & SaaS</li>
                  <li>Healthcare</li>
                  <li>E-commerce</li>
                  <li>Financial services</li>
                </ul>
                <ul className="service-features-custom">
                  <li>Restaurants & hospitality</li>
                  <li>Non-profit organizations</li>
                  <li>Professional services</li>
                  <li>Manufacturing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="ultra-thin-title clamp-section-title mb-6">About Juniper Island</h2>
            <p className="ultra-thin-subtitle clamp-section-subtitle leading-relaxed max-w-3xl mx-auto">
              For over a decade, we&apos;ve been delivering high-quality video content that captivates and engages audiences across Canada.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Behind-the-scenes image - now properly incorporated */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/images/bts-filming.jpg" 
                  alt="Behind the scenes filming - our team capturing content in action" 
                  className="bts-image-border w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <p className="ultra-thin-subtitle text-sm mt-3 text-center italic">
                Behind the scenes: Our team capturing authentic moments that become powerful brand stories
              </p>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="grid gap-16">
                {/* Company Story */}
                <div>
              <h3 className="ultra-thin-title text-2xl mb-6">Our Story</h3>
              <div className="space-y-4 ultra-thin-subtitle">
                <p>
                  Founded in 2012, Juniper Island Productions emerged from Johnny Hockin&apos;s seven-year journey at MTV Canada, where he hosted MTV News, created Movie Night, and produced hundreds of branded content segments for major brands like Nike, Apple, and Red Bull.
                </p>
                <p>
                  In 2019, Nina Gilmour joined as producer, bringing her expertise to strengthen our production capabilities. Together, we&apos;ve built a lean yet powerful production powerhouse that partners with businesses, public institutions, and major advertising agencies.
                </p>
                <p>
                  From our early seven-year partnership with Red Bull Canada&apos;s Music Academy to recent viral campaigns achieving 10M+ views, we&apos;ve consistently delivered content that resonates with audiences and drives measurable results.
                </p>
              </div>
            </div>
            
                {/* Team & Values */}
                <div>
              <h3 className="ultra-thin-title text-2xl mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="ultra-thin-title font-semibold mb-2">Story-Driven Content</h4>
                  <p className="ultra-thin-subtitle">We believe in the power of stories to captivate, engage, and inspire audiences across all platforms.</p>
                </div>
                <div>
                  <h4 className="ultra-thin-title font-semibold mb-2">Performance Marketing</h4>
                  <p className="ultra-thin-subtitle">Our audience-centric strategies deliver measurable results that drive business growth.</p>
                </div>
                <div>
                  <h4 className="ultra-thin-title font-semibold mb-2">Lean & Efficient</h4>
                  <p className="ultra-thin-subtitle">We excel at delivering top-tier productions efficiently, often bringing high-quality results on tight budgets and timelines.</p>
                </div>
                <div>
                  <h4 className="ultra-thin-title font-semibold mb-2">Sustainability Focus</h4>
                  <p className="ultra-thin-subtitle">Certified with Bullfrog Power and committed to creating impactful content that aligns with our clients&apos; values.</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section-bg py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="ultra-thin-title clamp-section-title mb-6">What Our Clients Say</h2>
            <p className="ultra-thin-subtitle clamp-section-subtitle leading-relaxed max-w-3xl mx-auto">
              We&apos;ve had the privilege of working with incredible clients who trust us with their most important stories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-testimonial-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="ultra-thin-title font-semibold">Andrew Addison</div>
                  <div className="ultra-thin-subtitle text-sm">VP Communications, CMPA</div>
                </div>
              </div>
              <p className="ultra-thin-subtitle italic">
                &quot;The Juniper Island team are ideal partners, anticipating our needs and exceeding our expectations at every turn. They take time to understand the &apos;why&apos; of everything we&apos;re doing, and then put in the work to make sure it&apos;s as creative and beautiful as possible.&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="glass-testimonial-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="ultra-thin-title font-semibold">Jennie Tao</div>
                  <div className="ultra-thin-subtitle text-sm">The Samuel Family Foundation</div>
                </div>
              </div>
              <p className="ultra-thin-subtitle italic">
                &quot;It&apos;s perfect! It still gives me feels each time I watch it. Again, thank you so much for the wonderful project! The entire team is over the moon about it.&quot;
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="glass-testimonial-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="ultra-thin-title font-semibold">Andre De Pape</div>
                  <div className="ultra-thin-subtitle text-sm">Cannoe, Toronto</div>
                </div>
              </div>
              <p className="ultra-thin-subtitle italic">
                &quot;Juniper came in with lightning fast development, exceeded our expectations, and the final video&apos;s driving really strong/positive engagement.&quot;
              </p>
            </div>
            
            {/* Testimonial 4 */}
            <div className="glass-testimonial-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="ultra-thin-title font-semibold">Tabitha Osler</div>
                  <div className="ultra-thin-subtitle text-sm">fairechild, Halifax</div>
                </div>
              </div>
              <p className="ultra-thin-subtitle italic">
                &quot;Johnny and his team are fantastic to work with. They cross all the T&apos;s and dot all the I&apos;s, so you don&apos;t have to. He works with you to reach your marketing goals and reveal new markets and sales channels you may not even have known were there.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="ultra-thin-title clamp-section-title mb-6">Meet the Team</h2>
            <p className="ultra-thin-subtitle clamp-section-subtitle leading-relaxed max-w-3xl mx-auto">
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
                <h3 className="ultra-thin-title text-xl font-semibold mt-4 mb-2">Johnny Hockin</h3>
                <p className="ultra-thin-subtitle text-sm">Creative Director & Producer</p>
              </div>

              <div className="text-center">
                <div className="relative">
                  <img
                    src="/images/team/Nina.png"
                    alt="Nina"
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <h3 className="ultra-thin-title text-xl font-semibold mt-4 mb-2">Nina</h3>
                <p className="ultra-thin-subtitle text-sm">Director & Creative Strategist</p>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h3 className="ultra-thin-title text-2xl mb-4">Our Story</h3>
                <p className="ultra-thin-subtitle leading-relaxed">
                  Founded in Toronto, Juniper Island emerged from our shared belief that every brand has a unique story worth telling. We combine Johnny&apos;s production expertise with Nina&apos;s strategic creative vision to create video content that doesn&apos;t just look great—it drives real results.
                </p>
              </div>

              <div>
                <h4 className="ultra-thin-title text-lg font-semibold mb-3">What Sets Us Apart</h4>
                <ul className="space-y-3 ultra-thin-subtitle">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Collaborative approach</strong> - We work as an extension of your team, not just a vendor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Strategic storytelling</strong> - Every video serves your broader business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Toronto roots</strong> - Deep understanding of the local market and culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>End-to-end service</strong> - From strategy to final delivery, we handle everything</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="btn-shine inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Let&apos;s Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section-bg py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="ultra-thin-title clamp-section-title mb-6">Ready to Get Started?</h2>
            <p className="ultra-thin-subtitle clamp-section-subtitle leading-relaxed">
              Let&apos;s discuss how we can help tell your brand&apos;s story through compelling video content.
            </p>
          </div>
          
          <ContactForm />
          
          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <p className="ultra-thin-subtitle mb-4">Prefer to email directly?</p>
            <a 
              href={`mailto:${siteConfig.business.email}`}
              className="contact-link-underline font-medium transition-colors"
            >
              {siteConfig.business.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}