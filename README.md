# FinaFeels Scribe Website

The official marketing and documentation website for **FinaFeels Scribe**, a tray-based writing and dictation assistant.

Built with **React**, **Vite**, and **Vanilla CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Design System

The website uses a custom "S-Tier" design system defined in `src/index.css`. It features a dark, glassmorphism-inspired aesthetic with "Aurora" background effects.

### Color Palette
Styles are controlled via CSS Variables (defined in `:root` of `src/index.css`).

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg-body` | `#0a0e17` | Deep space black background |
| `--color-bg-card` | `rgba(30, 41, 59, 0.7)` | Translucent Slate for cards/containers |
| `--color-text-main` | `#f8fafc` | Primary white text |
| `--color-text-muted` | `#94a3b8` | Secondary gray text |
| `--color-primary` | `#38bdf8` | Sky Blue brand color (Buttons, Highlights) |
| `--color-accent` | `#818cf8` | Indigo/Purple for gradients and glows |
| `--color-border` | `rgba(255, 255, 255, 0.08)` | Subtle borders for glass effect |

### Typography
- **Primary Font**: `Inter` (Google Fonts).
- **Headings**: `Playfair Display` is available but primary headings currently use `Inter` with tight tracking (`--tracking-tight`) for a modern, clean look.
- **Sizes**: Uses a t-shirt sizing scale (`--font-size-sm` to `--font-size-5xl`).

### Core UI Components
Reusable classes defined in `src/index.css`:

- **Buttons**:
    - `.btn`: Base class for layout/spacing.
    - `.btn-primary`: Gradient background, glow shadow, hover lift effect.
    - `.btn-secondary`: Glass border, translucent background.
- **Utilities**:
    - `.container`: Centers content with a max-width of 1200px.
    - `.text-gradient`: Applies the brand gradient to text.
    - `.fade-in-up`: Entry animation for hero elements.

---

## 📁 Project Architecture & Assets

### Directory Structure

```
├── public/                  # Static Assets served at root (/)
│   ├── social-card-v2.png   # 1200x630 Open Graph image for social previews
│   ├── app_icon.ico         # Favicon
│   └── vite.svg             # Default Vite logo (unused but present)
├── src/
│   ├── components/          # Shared layout components
│   │   ├── Navbar.jsx       # Main navigation
│   │   └── Footer.jsx       # Site footer
│   ├── pages/               # Top-level Page Components
│   │   ├── Home.jsx         # Landing page (Hero, Features grid)
│   │   ├── Download.jsx     # Download CTA page
│   │   ├── Features.jsx     # Detailed feature breakdown
│   │   ├── Help.jsx         # Support/Documentation hub
│   │   ├── Changelog.jsx    # Version history
│   │   ├── Terms.jsx        # Terms of Service
│   │   └── Privacy.jsx      # Privacy Policy
│   ├── App.jsx              # Main Router (react-router-dom) configuration
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # GLOBAL STYLES & VARIABLES
└── dist/                    # Production output (created after build)
```

### Application Flow
The app uses **React Router** (`react-router-dom`) configured in `App.jsx`.

1.  **Layout**: The global structure matches `<Navbar />`, `<Main Content />`, `<Footer />`.
2.  **Navigation**: All internal links use `<Link>` components for client-side routing (no page refresh).
3.  **Scroll Behavior**: Handled natively by browser; ensure new pages scroll to top if needed (currently default behavior).

### Asset Guidelines
- **Images**: Place in `public/` if referenced by purely static HTML tags (like social cards or favicons). Import into components from `src/assets/` (if added later) for optimization.
- **Social Media**: The `index.html` file manually references `/social-card-v2.png`. If you update the social card, **increment the filename version** (e.g., `v3`) to bust social media caches immediately.

---

## 🛠 Deployment & Build

1. **Build Command**: `npm run build`
2. **Output**: usage `dist/` folder.
3. **Serving**: The `dist` folder is a standard static site. Can be hosted on Vercel, Netlify, or GitHub Pages.

### Important Notes for maintainers
- **SEO**: Meta tags are primarily located in `index.html`.
- **Performance**: The "Aurora" background uses fixed position pseudo-elements on the `body` tag (`body::before`, `body::after`) in `index.css`. These are GPU accelerated but monitor performance on low-end devices.
