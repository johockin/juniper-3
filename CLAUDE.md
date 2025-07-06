# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Juniper Island, a Toronto-based video production and brand storytelling agency. The site is built with React 19, TypeScript, and Tailwind CSS, featuring a modern marketing website with hero video, team sections, and service showcases.

## Key Dependencies

- **Next.js 15** with App Router and Turbopack for development
- **React 19** with TypeScript for type safety
- **Tailwind CSS v4** for styling with custom animations and colors
- **Sanity.io** integration for content management (@sanity/client, next-sanity)
- **Framer Motion** for animations
- **Lucide React** for icons
- **Next.js Image optimization** with custom domains configured for Sanity CDN

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
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with Inter font and metadata
├── page.tsx            # Main homepage with hero video and sections
├── globals.css         # Global styles
└── favicon.ico

public/
├── images/
│   ├── team/          # Team member photos (johnny.png, nina.png)
│   └── projects/      # Project images
├── logos/             # Brand logos (light/dark variants)
└── videos/
    └── hero-video.mp4 # Main hero video
```

## Configuration Notes

- **Next.js config** includes Sanity CDN domains, AVIF/WebP image formats, and custom webpack config for video files
- **Tailwind config** uses custom primary/secondary colors (black/white theme) and includes fade-in/fade-up animations
- **TypeScript** uses strict mode with path mapping (@/* for root imports)
- **ESLint** extends Next.js core web vitals and TypeScript rules

## Content Management

The site is set up for Sanity.io integration with:
- Image URL builder configured
- Portable text support for rich content
- Client configured for content fetching

## Media Handling

- Custom webpack configuration for video file processing
- Next.js Image component with Sanity CDN optimization
- Video autoplay setup for hero section

## Styling Approach

- Tailwind CSS with custom color palette (black/white/gray theme)
- Custom animations for fade effects
- Responsive grid layouts
- Hover effects and transitions throughout