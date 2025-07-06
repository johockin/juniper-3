import './globals.css'

export const metadata = {
  title: 'Juniper Island - Video Production & Brand Storytelling',
  description: 'We produce polished brand and social video content that feels like you—just more powerful, more clear, and ready for the spotlight.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <img 
                  src="/logos/logo-dark.png" 
                  alt="Juniper Island" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-gray-900 hover:text-gray-600 font-medium">Home</a>
                  <a href="/work" className="text-gray-900 hover:text-gray-600 font-medium">Work</a>
                  <a href="/contact" className="text-gray-900 hover:text-gray-600 font-medium">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}