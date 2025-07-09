'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <img 
            src="/logos/logo-dark.png" 
            alt="Juniper Island Logo" 
            className="h-8 w-auto"
            width={120}
            height={32}
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <span className="text-gray-900 font-medium">Home</span>
            <a href="#work" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Work</a>
            <a href="#about" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button 
            className="text-gray-900 hover:text-gray-600 font-medium transition-colors text-sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            MENU
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 px-4 py-2 z-50">
              <div className="flex flex-col space-y-2">
                <a 
                  href="#work" 
                  className="text-gray-900 hover:text-gray-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="#about" 
                  className="text-gray-900 hover:text-gray-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-900 hover:text-gray-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}