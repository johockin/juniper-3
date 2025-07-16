# Juniper Island Website

## 🛑 STOP - READ THIS FIRST

**MANDATORY**: Before doing ANY work on this project, you MUST read the project specification:

### 📖 [READ CLAUDE.md](./CLAUDE.md)

The `CLAUDE.md` file contains:
- Complete project specification and requirements
- Comprehensive company information and history
- Development standards and best practices
- Action log of all work done
- Critical performance and SEO requirements
- Deployment and workflow instructions

## Project Overview

This is the official website for Juniper Island, Toronto's premier video production and brand storytelling agency. **Now a vanilla HTML/CSS/JS site optimized for extreme performance.**

## Architecture

**Vanilla Web Technologies:**
- **HTML5** - Semantic markup for perfect SEO
- **CSS3** - Custom properties, glass morphism effects, responsive design
- **Vanilla JavaScript** - Minimal functionality, no frameworks
- **Netlify** - Static hosting with forms and auto-deployment

## Quick Start

**Local Development:**
```bash
# No build process needed! Just open in browser:
open index.html

# Or serve locally:
python -m http.server 8000
# Then visit: http://localhost:8000
```

**Deployment:**
```bash
# Just push to git - that's it!
git add .
git commit -m "Your changes"
git push origin main
# Netlify auto-deploys in seconds
```

## File Structure

```
/
├── index.html              # Main homepage
├── css/
│   ├── main.css           # Core styles, layout, typography
│   └── d2-effects.css     # Glass morphism, animations
├── js/
│   └── main.js            # Mobile menu, smooth scroll, form validation
├── images/                # Optimized images
├── videos/                # Hero video and assets
├── logos/                 # Brand logos and client logos
└── public/                # Static assets
```

## Key Features

- **⚡ Extreme Performance** - No build process, no frameworks, instant loading
- **🔒 SEO Perfect** - Semantic HTML, meta tags, structured data
- **📱 Mobile First** - Responsive design, touch-friendly
- **🎨 Premium Design** - Direction 2 glass morphism effects
- **♿ Accessible** - Proper ARIA labels, keyboard navigation
- **🔧 Netlify Forms** - Contact form works without JavaScript

## Performance Optimizations

- **System fonts only** - Zero external font loading
- **Optimized assets** - Compressed images and videos
- **Aggressive caching** - 1-year cache for static assets
- **Minimal JavaScript** - Under 50 lines total
- **No dependencies** - Pure vanilla web technologies

## How to Make Changes

1. **Edit files directly** - No build process needed
2. **Test locally** - Open index.html in browser
3. **Push to git** - Auto-deploys to Netlify
4. **Update CLAUDE.md** - Document all changes

## Deployment

- **Auto-deploys** to Netlify on every git push
- **No build process** - Files are served directly
- **Lightning fast** - Deploys in seconds
- **Forms work** - Netlify handles form submissions

## For AI Collaborators

If you're an AI assistant working on this project:
1. **READ CLAUDE.md COMPLETELY** before starting any work
2. **Update the action log** in CLAUDE.md for every change
3. **Follow the documented workflows** exactly
4. **Ask permission** before making changes
5. **Document everything** you do

Remember: CLAUDE.md is the single source of truth for this project.

## Migration Notes

This site was successfully migrated from Next.js to vanilla HTML/CSS/JS for:
- **Better performance** - No JavaScript framework overhead
- **Simpler maintenance** - Anyone can edit HTML/CSS
- **Faster deployment** - No build process required
- **Perfect SEO** - Clean HTML structure
- **Extreme reliability** - No dependencies to break