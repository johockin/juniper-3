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
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creative That Feels Like a Natural Extension of Your Team.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We produce polished brand and social video content that feels like you—just more powerful, more clear, and ready for the spotlight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/work" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              View Our Work
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      
      {/* Simple intro section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Toronto-Based Video Production</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We specialize in creating compelling brand stories through video and creative content that resonates with your audience and drives results.
          </p>
        </div>
      </section>
    </div>
  )
}