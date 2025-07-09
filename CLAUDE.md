# CLAUDE.md

## 🏆 THIS FILE IS GOLD - PRESERVE AT ALL COSTS

**THIS FILE IS THE SINGLE SOURCE OF TRUTH** - It contains the complete institutional knowledge for this project.

⚠️ **CRITICAL PRESERVATION RULE**: If you EVER revert to a previous version of the site via git or any other method, YOU MUST PRESERVE THIS FILE. Copy it before reverting, then restore it after. This file contains knowledge that transcends any single version of the code.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. It serves as:
- **Standard Operating Procedure (SOP)** for all development work
- **Complete action log** of everything we've done
- **Dream features wishlist** for future development
- **Best practices guide** that works vs. what doesn't
- **Project ethos** and philosophy preservation
- **Handoff documentation** for new Claude instances

## 🔄 MANDATORY LOGGING PROTOCOL

**EVERY ACTION MUST BE LOGGED** - Assume you might be pulled away from this project at any moment, and another Claude instance needs to seamlessly continue.

### How to Log Actions:
1. **Before doing anything**: Update the action log below
2. **After completing work**: Document results, learnings, and next steps
3. **If something fails**: Document what didn't work and why
4. **If something works great**: Document it in best practices

## 📖 HOW TO USE THIS SPEC - USER EXPECTATIONS

**THE USER EXPECTS YOU TO:**

### 🎯 Always Start Here
- **READ THIS ENTIRE FILE FIRST** - Before doing anything else
- **Update the action log** with what you're about to do
- **Check dream features** to see if current request aligns with roadmap
- **Review best practices** to ensure you're following proven patterns

### 📝 Document Everything
- **Log every action** in the action log section
- **Update best practices** when you discover something that works well
- **Update anti-patterns** when you discover something that doesn't work
- **Add to dream features** if user mentions something for the future
- **Update troubleshooting** if you solve a problem

### 🔄 Continuous Updates
- **Never assume** the user remembers what we discussed before
- **Always reference** this file for context and decisions
- **Keep documentation current** - this file should always reflect reality
- **Think long-term** - every decision should consider future maintainability

### 🚨 Critical Rules
- **NEVER skip documentation** - even small changes must be logged
- **ALWAYS preserve this file** - it's more important than any code
- **QUESTION everything** - if something isn't documented, ask why
- **ASSUME discontinuity** - every session might be your last
- **ASK PERMISSION** before making changes - user might just be venting, not requesting work
- **PRESERVE uploads** - keep all uploaded materials as reference brain

### 🎭 Your Role
You are the "guy from Memento" - this file is your external memory. Without it, you know nothing about:
- What we've tried before
- What works vs what doesn't
- Why decisions were made
- Where we're headed
- What the user values

**THE USER WILL NOT REPEAT THEMSELVES** - Everything you need to know is in this file.

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
_uploads/              # 📥 TEMPORARY UPLOAD DROPBOX
└── README.md          # Upload instructions and workflow

app/
├── layout.tsx          # Root layout with comprehensive SEO metadata
├── page.tsx            # Homepage with hero video and complete sections
├── globals.css         # Minimal global styles with system fonts
├── sitemap.ts          # XML sitemap generation
├── robots.ts           # Robots.txt generation
└── work/[slug]/        # Dynamic case study pages
    └── page.tsx

components/
├── CaseStudyContent.tsx # Case study display component
└── ContactForm.tsx      # Netlify Forms integration

config/
└── seo.ts             # 🎯 CENTRALIZED SEO CONFIGURATION (CRITICAL)
                       # ALL SEO settings, meta tags, structured data

content/
└── case-studies/      # JSON-based case study data
    └── *.json         # Individual case study files

public/
├── __forms.html       # Netlify Forms discovery file
├── images/
│   ├── team/          # Team member photos (optimized)
│   └── projects/      # Case study images
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

## 🚀 NETLIFY DEPLOYMENT (CRITICAL)

**AUTO-DEPLOYMENT**: Site auto-deploys from git pushes to Netlify. Every commit triggers a build.

### Netlify Configuration (`netlify.toml`)
- **Next.js plugin** for proper static generation
- **Performance headers** for aggressive caching (1 year for static assets)
- **Security headers** for protection (XSS, clickjacking, etc.)
- **Node 20 + NPM 10** build environment

### Netlify Forms Integration
- **Built into Netlify infrastructure** for INTENSE performance
- **No external form services** to maintain fast load times
- **Contact form** uses Netlify's native form handling
- **Pre-rendered forms** in `public/__forms.html` for discovery

### Performance Optimizations for Netlify
- **Static generation** with Next.js export
- **Aggressive caching** for images, videos, and static assets
- **No external dependencies** that would slow down their edge network
- **Optimized build process** for fast deployment

### Deployment Workflow
1. **Push to git** → Auto-triggers Netlify build
2. **Netlify builds** with Next.js plugin 
3. **Deploy to edge network** with performance headers
4. **Forms automatically work** via Netlify infrastructure

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

---

## 📋 ACTION LOG - COMPLETE HISTORY

**Format**: `[DATE] [CLAUDE_INSTANCE] [ACTION] - [RESULT/NOTES]`

### 2025-01-08 (Today)
- **Claude Instance**: Sonnet 4 (claude-sonnet-4-20250514)
- **Action**: Enhanced CLAUDE.md with comprehensive SOP structure
- **Result**: Added preservation rules, logging protocol, and institutional knowledge framework
- **User Feedback**: Requested to include instructions on how to use the spec IN the spec itself
- **Action**: Added "HOW TO USE THIS SPEC - USER EXPECTATIONS" section
- **Result**: Now includes complete instructions for future Claude instances on user expectations
- **Key Insight**: User will not repeat themselves - everything needed is in this file
- **Status**: Comprehensive SOP structure complete and ready for use
- **Action**: User requested return to planning mode to assess current codebase status
- **Result**: Reviewed codebase state and potential next steps
- **User Feedback**: Clarified actual priorities vs made-up features in dream list
- **Action**: Updating dream features to reflect real phases and priorities
- **Key Insight**: Case studies ARE the portfolio, no separate interactive portfolio needed
- **Next**: Organize phases properly and prepare for content creation from user docs
- **Action**: User requested dropbox folder for material uploads and clarified workflow
- **Key Info**: Site auto-deploys from git pushes on Netlify, performance critical for their systems
- **Workflow**: User uploads docs → Claude processes → Claude deletes → Claude edits site
- **Action**: Creating upload folder structure and updating deployment info
- **Result**: Created `_uploads/` folder with README for user material dropbox
- **Result**: Updated spec with comprehensive Netlify deployment info and auto-deploy workflow
- **Result**: Documented content upload & processing workflow in development pipeline
- **Result**: Updated project structure to reflect current state including uploads folder
- **Key**: Netlify Forms integration already built for INTENSE performance
- **Ready**: Upload folder ready for user case study docs and materials
- **User Feedback**: Don't delete uploads after processing - keep as reference brain
- **User Feedback**: Always ask permission before making changes - user might just be venting
- **Action**: Updated workflow to preserve uploads and added permission protocol
- **User Feedback**: Permission protocol may relax over time, but important starting point
- **User Suggestion**: Organize processed uploads into subfolders as knowledge bank
- **Action**: User uploaded materials - reviewing all content to understand what we have
- **Next**: Go through each upload, identify what it is, get user corrections, plan usage
- **Challenge**: Binary files (docx, pdf, pptx) not readable with standard tools
- **User Request**: Find automated method to extract both text and images from all files
- **Research**: Looking into programmatic extraction methods for comprehensive asset access
- **SUCCESS**: Created automated extraction scripts for all Office files and RTF content
- **Result**: Extracted 674 text elements + 33 images from all documents
- **Result**: Successfully processed current website content from RTF file
- **Action**: Organizing all extracted content into knowledge bank structure
- **Result**: Successfully organized comprehensive knowledge bank with 674+ text elements, 33+ images
- **Result**: Extracted current website content including headlines, metrics, and structure
- **User Question**: Whether to dump browser-side code from current site or if that's overkill
- **Decision**: Skip browser code dump - have sufficient content from knowledge bank
- **Action**: Proceeding with Phase 1a content creation using extracted materials
- **Status**: Beginning case study creation and content enhancement
- **COMPLETED**: Created 4 comprehensive case studies from real client work
- **COMPLETED**: Updated homepage with real content, metrics, and testimonials
- **COMPLETED**: Added comprehensive About section with company history
- **COMPLETED**: Enhanced services section with proven results focus
- **COMPLETED**: Added hardcoded testimonials from client feedback
- **Status**: Phase 1a nearly complete - only blog system remains
- **Action**: User approved milestone - pushing to git for Netlify QA review
- **Next**: User will QA site on Netlify, then proceed with final blog system
- **QA FEEDBACK**: User completed QA review with mostly positive results
- **QA POSITIVES**: Fast load, no font flash, content accurate, hero video works
- **QA ISSUES**: Missing images in case studies, no hamburger menu, testimonials not real
- **QA CONCERNS**: SEO - should things be on separate pages? "Sea of text" issue
- **DISCOVERY**: Creative Brief Canvas PDF could be lead magnet for Phase 2
- **ACTION**: Need to find real testimonials from knowledge bank and address issues
- **TESTIMONIALS PROVIDED**: User provided 4 complete real testimonials with names/titles
- **DECISIONS**: Add hamburger menu (simple, zippy), keep one-page for launch, break out sections in Phase 1b
- **CLARIFICATION**: Still mid-to-tail end of Phase 1a, not ready for Phase 1b yet
- **CONFIRMED**: Creative Brief Canvas PDF as Phase 2 lead magnet
- **COMPLETED**: Fixed testimonials with 4 real client testimonials including full names/titles
- **COMPLETED**: Added simple mobile hamburger menu with "MENU" button
- **COMPLETED**: Created client component for navigation to handle interactivity
- **RESULT**: Build successful, changes pushed to git for Netlify deployment
- **STATUS**: Phase 1a QA fixes complete - ready for final review
- **NEW DIRECTION**: User wants styling improvements as Phase 1a priority
- **ROADMAP SHIFT**: Styling becomes Phase 1b, previous 1b becomes 1c, blog moves later
- **FEEDBACK**: Need styling improvements, image placement, layout fixes, glass navbar
- **SPECIFIC REQUESTS**: Logo home link, BTS image in About, column alignment, navbar transparency
- **IMAGE QUESTION**: User expects images in case studies, asks if I can see/analyze image content
- **OVERALL**: 10/10 progress, very happy with direction

### Previous History (Reconstructed from Git)
- Built comprehensive case study system with JSON-based CMS
- Added comprehensive About section featuring Johnny and Nina  
- Simplified contact form for faster, easier submissions
- Fixed Netlify Forms integration for Next.js 15 compatibility
- Fixed import path for Netlify deployment compatibility

---

## 🎯 DEVELOPMENT ROADMAP - ACTUAL PHASES

### 🚀 Phase 1a (IMMEDIATE - Content Creation)
- [x] **Case Study Pipeline**: Adapt user docs into web page content
- [ ] **Styling & Visual Polish**: Creative styling improvements (NEW PRIORITY)
- [x] **Hardcoded Testimonials**: Real testimonials directly in components
- [x] **Real Content**: Replace boilerplate with actual content from proposals/current site

### 🎯 Phase 1 (MAJOR GOAL - Launch)
- [ ] **Site Launch**: Get the site live and functioning

### 🔧 Phase 1b (Visual Polish & Styling)
- [x] **Logo home link**: Make logo clickable to return home
- [x] **Glass navbar**: More transparent with "liquid glass" effect
- [x] **About section BTS image**: Add behind-the-scenes image background (correct "About Juniper Island" section)
- [x] **Column alignment**: Fix vertical alignment in Our Story/Our Approach
- [x] **Header testimonial**: Add small testimonial under main header (positioned after scroll, subtle styling)
- [x] **Logo strip**: Added client logo strip from original materials
- [x] **Contact email**: Update to nina@juniperisland.ca
- [ ] **Case study images**: Add extracted images to case studies

### 🔧 Phase 1c (Pre-launch Optimizations)  
- [ ] **Blog System**: JSON-based blog (pre-CMS) with SEO optimization (MOVED HERE)
- [ ] **Break out sections**: Separate pages for About, Services, individual case studies for better SEO
- [ ] **Analytics Integration**: Privacy-first analytics without external dependencies
- [ ] **Performance Audit**: Lighthouse optimization and Core Web Vitals
- [ ] **Image Optimization**: Ensure all assets are properly optimized
- [ ] **SEO Validation**: Test structured data and meta tags

### 📈 Phase 2 (Post-Launch)
- [ ] **Real CMS**: Replace JSON system with proper CMS for blog and case studies
- [ ] **Lead Magnet**: Creative Brief Canvas PDF download system

### 🎯 Phase 5 (Stretch Goals)
- [ ] **Client Portal**: Secure area for clients to track project progress

### 🤔 Maybe Later
- [ ] **Service Calculator**: Interactive pricing calculator

### ❌ Killed Features
- ~~**Performance Dashboard**~~: Not needed
- ~~**Interactive Portfolio**~~: Case studies ARE the portfolio
- ~~**Testimonials System**~~: Just hardcode them

---

## ✅ BEST PRACTICES - WHAT WORKS

### Performance Winners
- **System fonts**: Zero external font loading = instant text rendering
- **Next.js Image optimization**: Automatic format selection and lazy loading
- **Minimal dependencies**: Current bundle size under 103KB first load
- **Centralized SEO config**: Single source of truth in `config/seo.ts`
- **Turbopack dev server**: Extremely fast development experience

### SEO Winners
- **Structured data**: JSON-LD implementation for local business
- **Semantic HTML**: Proper heading hierarchy and accessibility
- **XML sitemap**: Auto-generated and comprehensive
- **Meta tag completeness**: All required tags centrally managed

### Development Winners
- **TypeScript strict mode**: Catches errors early
- **Centralized configuration**: Easy maintenance and updates
- **Clear file structure**: Logical organization and navigation
- **Comprehensive documentation**: This file as single source of truth
- **User feedback loops**: Always validate assumptions vs. making up features
- **Permission-based workflow**: Ask before acting - prevents unwanted changes
- **Reference preservation**: Keep uploaded materials as knowledge base
- **One-page launch strategy**: Faster to launch, break apart later for SEO

---

## ❌ ANTI-PATTERNS - WHAT DOESN'T WORK

### Performance Killers
- **External fonts**: Even Google Fonts add 200-500ms delay
- **Unused dependencies**: Each package adds to bundle size
- **Unoptimized images**: Can kill Core Web Vitals scores
- **Inline styles**: Harder to maintain and can block rendering

### SEO Killers
- **Hardcoded meta tags**: Leads to inconsistency and maintenance hell
- **Missing structured data**: Reduces search engine understanding
- **Poor heading hierarchy**: Confuses search engines and users
- **Slow loading**: Directly impacts search rankings

### Development Killers
- **Scattered configuration**: Hard to maintain and update
- **Poor documentation**: Wastes time for future developers
- **Complex abstractions**: Harder to debug and maintain
- **Inconsistent patterns**: Creates confusion and bugs
- **Making up features**: Don't assume what user wants - ask and validate
- **Sea of text**: Too much text without visual breaks creates poor UX

---

## 🏗️ DEVELOPMENT PIPELINE

### Content Upload & Processing Workflow
1. **User uploads** materials to `_uploads/` folder (case studies, docs, images, etc.)
2. **Claude processes** materials into website content (JSON, components, pages)
3. **Claude keeps** original files as reference brain for future use
4. **Claude updates** action log with what was processed
5. **Claude asks permission** before committing changes (auto-deploys to Netlify)

### Milestone & QA Workflow
1. **Complete development work** for agreed milestone/phase
2. **User approves milestone** completion and requests deployment
3. **Claude commits and pushes** changes to git (triggers Netlify auto-deploy)
4. **User performs QA** on live Netlify site
5. **User reports** any issues or approves for next phase
6. **Claude documents** QA results and proceeds accordingly

### Feature Development Process
1. **Document intention** in this file's action log
2. **Check performance impact** before implementing
3. **Verify Netlify compatibility** and deployment implications
4. **Verify SEO implications** and update config if needed
5. **Test thoroughly** on mobile and desktop
6. **Update documentation** with learnings
7. **Deploy and monitor** Core Web Vitals

### Quality Gates
- [ ] **Build passes**: `npm run build` succeeds
- [ ] **Type checking**: `npm run type-check` passes
- [ ] **Linting**: `npm run lint` passes  
- [ ] **Performance**: Lighthouse score >90 for all metrics
- [ ] **SEO**: All meta tags and structured data valid
- [ ] **Mobile**: Responsive design works on all devices

### Deployment Checklist
- [ ] **Assets optimized**: Images, videos compressed
- [ ] **Cache headers**: Proper caching configuration
- [ ] **Security headers**: All security measures in place
- [ ] **Performance monitoring**: Core Web Vitals tracking
- [ ] **Error monitoring**: Proper error handling and logging

---

## 🎨 PROJECT ETHOS & PHILOSOPHY

### Core Principles
1. **Performance First**: Speed trumps everything else
2. **Simplicity Wins**: Complex solutions are usually wrong
3. **User Experience**: Every decision should improve UX
4. **Maintainability**: Code should be easy to understand and modify
5. **Documentation**: Knowledge should be preserved and shared

### Decision Framework
When making any decision, ask:
1. Does this make the site faster?
2. Does this improve user experience?
3. Is this the simplest solution?
4. Can future developers understand this?
5. Does this align with our performance goals?

### Success Metrics
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Keep first load JS under 150KB
- **SEO Score**: Maintain 100% SEO score
- **User Engagement**: High time on site, low bounce rate
- **Client Satisfaction**: Positive feedback and referrals

---

## 🔧 TROUBLESHOOTING GUIDE

### Common Issues & Solutions
- **Build fails**: Check TypeScript errors and dependencies
- **Performance degradation**: Audit bundle size and image optimization
- **SEO issues**: Verify `config/seo.ts` and test structured data
- **Deployment problems**: Check Netlify logs and configuration
- **Development server slow**: Restart with `npm run dev`

### Emergency Procedures
- **Site down**: Check Netlify status and deployment logs
- **Performance issues**: Revert to last known good commit
- **SEO problems**: Verify Google Search Console for errors
- **Build breaking**: Check recent changes and dependency updates

---

## 📞 HANDOFF PROTOCOL

### For New Claude Instances
1. **Read this entire file** - it's your bible
2. **Check the action log** - understand what's been done
3. **Review current priorities** - focus on what matters most
4. **Test the build** - make sure everything works
5. **Update the log** - document your actions

### For Human Developers
1. **Understand the philosophy** - performance and simplicity first
2. **Follow the processes** - use the established patterns
3. **Maintain documentation** - keep this file updated
4. **Test thoroughly** - don't break what's working
5. **Preserve knowledge** - add to this file

### Critical Files to Understand
- `CLAUDE.md` - This file (most important)
- `config/seo.ts` - SEO configuration
- `app/layout.tsx` - Main layout and metadata
- `app/page.tsx` - Homepage implementation
- `package.json` - Dependencies and scripts