# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Juniper Island, a Toronto-based video production and brand storytelling agency. The site is built with React 19, TypeScript, and Tailwind CSS, featuring a modern marketing website with hero video and service showcases.

## 🚀 PERFORMANCE PRIORITIES (CRITICAL)

**EXTREME PERFORMANCE IS THE #1 PRIORITY** - This overrides "industry standard" approaches when they conflict with performance.

### Performance Philosophy
- **Speed over Convention**: Reinvent the wheel if it means faster loading
- **Minimal Dependencies**: Only essential packages, no bloated libraries
- **Zero External Fonts**: Use system fonts for instant text rendering
- **Optimized Assets**: Every image, video, and resource must be optimized
- **Critical Path**: Inline critical CSS, defer non-critical resources
- **Bundle Size**: Keep JavaScript bundles as small as possible

### Performance Checklist
- [ ] All images compressed and served in modern formats (AVIF/WebP)
- [ ] Videos optimized with proper compression and poster images
- [ ] System fonts only (no Google Fonts or external font loading)
- [ ] Critical CSS inlined in `<head>`
- [ ] Minimal JavaScript bundle size
- [ ] Proper caching headers for static assets
- [ ] Preload critical resources
- [ ] Lazy load below-the-fold content

## 🔍 SEO PRIORITIES (CRITICAL)

**COMPREHENSIVE SEO STRUCTURE** - Clean, semantic HTML that Google loves.

### SEO Checklist
- [ ] Proper semantic HTML5 structure
- [ ] Complete meta tags (title, description, keywords)
- [ ] Open Graph and Twitter Card tags
- [ ] Structured data (JSON-LD) for business info
- [ ] XML sitemap and robots.txt
- [ ] Clean URLs and proper heading hierarchy
- [ ] Alt text for all images
- [ ] Fast Core Web Vitals scores

## 📈 MARKETING EFFECTIVENESS

### Conversion Optimization
- Clear value proposition in hero section
- Single, prominent call-to-action
- Social proof and credibility indicators
- Mobile-first responsive design
- Fast loading to reduce bounce rate

## Key Dependencies (MINIMAL SET)

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript for type safety
- **Tailwind CSS v3** for styling (no custom fonts)
- **Zero external dependencies** for animations or UI components

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Type checking
npm run type-check
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with comprehensive SEO metadata
├── page.tsx            # Homepage with hero video and complete sections
├── globals.css         # Minimal global styles with system fonts
├── sitemap.ts          # XML sitemap generation
├── robots.ts           # Robots.txt generation
└── favicon.ico

config/
└── seo.ts             # 🎯 CENTRALIZED SEO CONFIGURATION (CRITICAL)
                       # ALL SEO settings, meta tags, structured data

public/
├── images/
│   ├── team/          # Team member photos (optimized)
│   └── og-image.jpg   # Open Graph image
├── logos/             # Brand logos (optimized)
└── videos/
    └── hero-video.mp4 # Optimized hero video
```

## Configuration Notes

- **Next.js config** includes aggressive caching, image optimization, and security headers
- **Tailwind config** uses minimal setup with system fonts
- **TypeScript** uses strict mode with path mapping (@/* for root imports)
- **ESLint** extends Next.js core web vitals and TypeScript rules
- **Netlify config** includes performance headers and caching rules

## Performance Optimizations

- **System fonts** for zero external font loading delay
- **Image optimization** with Next.js Image component
- **Video optimization** with proper compression and poster images
- **Critical CSS** inlined in layout
- **Aggressive caching** for static assets
- **Minimal JavaScript** bundle size

## 🎯 CENTRALIZED SEO MANAGEMENT (CRITICAL)

**ALL SEO SETTINGS ARE MANAGED FROM A SINGLE FILE: `config/seo.ts`**

### SEO Configuration System
- **Single source of truth** for all SEO settings
- **Centralized config file** prevents SEO fragmentation
- **Future-proof structure** that survives code iterations
- **Easy maintenance** by any Claude instance or developer

### SEO File Structure
```
config/
└── seo.ts          # ALL SEO settings live here
    ├── siteConfig      # Main configuration object
    ├── business info   # Contact details, location
    ├── keywords        # SEO keywords array
    ├── social media    # Open Graph, Twitter cards
    ├── structured data # JSON-LD schema
    └── helper functions # Utility functions
```

### How to Update SEO Settings
1. **ONLY edit `config/seo.ts`** - Never hardcode SEO values in components
2. **Use the helper functions** provided in the config file
3. **Test changes** by running `npm run build` after SEO updates
4. **Verify structured data** using Google's Rich Results Test

### SEO Implementation Details
- **Complete metadata** automatically generated from config
- **Structured data (JSON-LD)** for local business schema
- **Open Graph and Twitter Cards** centrally managed
- **XML sitemap** auto-generated at `/sitemap.xml`
- **Robots.txt** properly configured at `/robots.txt`
- **Semantic HTML** structure throughout
- **Proper heading hierarchy** (h1 -> h2 -> h3)

## Netlify Deployment

- **Netlify-specific optimizations** in netlify.toml
- **Performance headers** for caching
- **Security headers** for protection
- **Next.js plugin** for proper static generation

## Styling Approach

- **System fonts** for instant loading
- **Minimal Tailwind** with performance-focused utilities
- **No external dependencies** for animations
- **Responsive design** with mobile-first approach
- **Clean, semantic CSS** structure

## 📚 FUTURE-PROOF DOCUMENTATION STANDARDS (CRITICAL)

**ALL CHANGES MUST BE COMPREHENSIVELY DOCUMENTED** - This ensures continuity across Claude instances and team members.

### Documentation Requirements
1. **Update CLAUDE.md** for every significant change
2. **Document new features** with detailed explanations
3. **Record configuration changes** with rationale
4. **Maintain file structure** documentation
5. **Update dependency explanations** when packages change
6. **Document performance impacts** of any modifications

### Documentation Philosophy
- **Assume future Claude instances** know nothing about previous decisions
- **Explain the 'why'** behind every architectural choice
- **Provide clear examples** for common tasks
- **Keep documentation current** - outdated docs are worse than no docs
- **Use clear headings** and structure for easy navigation

### What Must Be Documented
- **Performance optimizations** and their rationale
- **SEO configuration changes** and their impact
- **New dependencies** and why they were added
- **File structure changes** and their purpose
- **Build process modifications** and their benefits
- **Configuration updates** and their effects

### Documentation Format
- **Use clear, scannable headings** with emojis for priority
- **Include code examples** where relevant
- **Explain complex concepts** in simple terms
- **Cross-reference related sections** for context
- **Mark critical sections** with emphasis

## MAINTENANCE RULES

1. **Never add external fonts** - system fonts only
2. **Question every dependency** - bundle size impact analysis required
3. **Optimize every asset** - images, videos, files must be compressed
4. **Test performance** - run Lighthouse on every change
5. **Maintain SEO** - verify meta tags and structured data using `config/seo.ts`
6. **Keep it simple** - complexity is the enemy of performance
7. **Document everything** - update CLAUDE.md for ALL changes
8. **Centralize configuration** - use config files, not hardcoded values