# CLAUDE.md - AI Assistant Guidelines

## Project Overview
This is the official marketing and documentation website for **FinaFeels Scribe**, a tray-based writing and dictation assistant for Windows.

## Authority
- **README.md is authoritative** - follow its design system and architecture
- Do NOT redesign, rename, or expand scope unless explicitly asked
- Keep changes minimal and focused on the specific task requested

## Tech Stack
- **React 19** with JSX
- **Vite 7** for bundling and dev server
- **React Router DOM 7** for client-side routing
- **Lucide React** for icons
- **Vanilla CSS** (no CSS frameworks)

## Key Commands
```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Build to dist/
npm run lint      # Run ESLint
npm run preview   # Preview production build
firebase deploy   # Deploy to Firebase Hosting
```

## Firebase Hosting
- **Project ID:** `finasscribe`
- **Live URL:** https://finasscribe.web.app
- **Custom Domain:** https://finasscribe.com
- **www Redirect:** https://www.finasscribe.com → 301 → https://finasscribe.com
- **Console:** https://console.firebase.google.com/project/finasscribe/hosting

### Domain Configuration
- `finasscribe.com` - Primary domain with SSL active
- `www.finasscribe.com` - 301 redirects to non-www (canonical)
- DNS: A record pointing to `199.36.158.100`, TXT record `hosting-site=finasscribe`

### Deploy Process
```bash
npm run build      # Build production bundle
firebase deploy    # Deploy dist/ to Firebase
```

### Config Files
- `.firebaserc` - Firebase project reference
- `firebase.json` - Hosting config (SPA rewrites, cache headers)

## Project Structure
```
src/
  App.jsx           # Router configuration
  main.jsx          # React entry point
  index.css         # GLOBAL STYLES & CSS VARIABLES (design system)
  components/
    Navbar.jsx      # Main navigation
    Footer.jsx      # Site footer
  pages/
    Home.jsx        # Landing page (Hero, Features)
    Download.jsx    # Download CTA page
    Features.jsx    # Feature breakdown
    Help.jsx        # Support hub
    Changelog.jsx   # Version history
    About.jsx       # About page
    Manual.jsx      # User manual
    Terms.jsx       # Terms of Service
    Privacy.jsx     # Privacy Policy
public/
  app_icon.ico      # Favicon
  social-card-v2.png # Open Graph image (1200x630)
  robots.txt        # Search engine crawler rules
  sitemap.xml       # XML sitemap for SEO
```

## Routes (defined in App.jsx)
- `/` - Home
- `/download` - Download
- `/features` - Features
- `/help` - Help/Support
- `/changelog` - Changelog
- `/about` - About
- `/manual` - Manual
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## Design System (src/index.css)
### Colors (CSS Variables)
| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg-body` | `#0a0e17` | Deep space black background |
| `--color-bg-card` | `rgba(30, 41, 59, 0.7)` | Translucent cards |
| `--color-text-main` | `#f8fafc` | Primary white text |
| `--color-text-muted` | `#94a3b8` | Secondary gray text |
| `--color-primary` | `#38bdf8` | Sky Blue brand color |
| `--color-accent` | `#818cf8` | Indigo/Purple for gradients |
| `--color-border` | `rgba(255, 255, 255, 0.08)` | Subtle glass borders |

### Typography
- **Primary Font**: `Inter` (Google Fonts)
- **Headings**: Use `Inter` with `--tracking-tight`
- **Sizes**: `--font-size-sm` through `--font-size-5xl`

### Core CSS Classes
- `.container` - Centers content, max-width 1200px
- `.btn` - Base button styling
- `.btn-primary` - Gradient button with glow
- `.btn-secondary` - Glass border button
- `.text-gradient` - Brand gradient text effect
- `.fade-in-up` - Entry animation
- `.sr-only` - Screen-reader only (SEO text hidden visually)

### Background Effects
- Aurora glow effects via `body::before` and `body::after` pseudo-elements
- Noise texture overlay on body

## Page Component Pattern
Each page uses a header comment block:
```jsx
/*
  COMPONENT: Page Name
  PURPOSE: Description
  NAVIGATION: Where it links
  DYNAMIC CONTENT: What changes
*/
```

## GitHub Releases
- **Releases Repo:** https://github.com/tommo231x/FinasScribe-Releases
- **Download URL format:** `https://github.com/tommo231x/FinasScribe-Releases/releases/download/vX.X.X/FinaFeelsScribe-X.X.X-Setup.exe`
- Download page links directly to GitHub Releases for installer distribution

## Release Update Checklist
When a new app version is released, update:
1. **Download.jsx** - version, date, file size, download URL (see comment block in file)
2. **Changelog.jsx** - add new version entry to top of `versions` array
3. Run `npm run build && firebase deploy`

## SEO Configuration
- **Title:** `Free Dictation Software for Windows | Offline Speech-to-Text - FinaFeels Scribe`
- **Meta tags & JSON-LD:** in `index.html`
- **robots.txt:** `public/robots.txt` - allows all crawlers
- **sitemap.xml:** `public/sitemap.xml` - lists all pages
- **Canonical URL:** `https://finasscribe.com/`
- **`.sr-only` class:** Used for SEO-friendly hidden text in headings

## Important Notes
- All internal links use `<Link>` from react-router-dom (no page refresh)
- Social card referenced in index.html - increment version (v3, v4) to bust cache if updated
- Current stable version displayed: v1.0.4
