# DraGonis Artist Portfolio — Agent Context

## CRITICAL RULES
- **DO NOT run `npm install` or any package manager install commands without explicit permission from the owner.**
- Do not push to git or open PRs without permission.
- Do not delete or rename files without confirmation.

---

## Project Overview

This is the personal portfolio website for **DraGonis**, an independent music artist and creative. The site showcases:
- Music releases and streaming links (Spotify, SoundCloud, Newgrounds, YouTube)
- 3D artwork and visual design work
- Web development projects
- A contact/booking form
- Social media links (Instagram, TikTok, YouTube, Discord, Kick, etc.)

The site is deployed on **Vercel**.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 (JSX) |
| Build tool | Vite 4 |
| Styling | Tailwind CSS 3 (JIT mode) + inline style objects (`src/style.js`) |
| Routing | React Router DOM v6 |
| Animation | react-spring, AOS (Animate on Scroll), GSAP |
| 3D / interactive | @splinetool/react-spline |
| UI components | @mui/material + @emotion |
| Contact form | EmailJS (`@emailjs/browser`) + react-google-recaptcha |
| Analytics | @vercel/analytics |
| Icons | react-icons |
| Path alias | `@` → `src/` (configured in `vite.config.js`) |

---

## Project Structure

```
src/
  main.jsx              # React entry point
  App.css               # Global overrides (mostly empty)
  index.css             # Base global styles
  style.js              # Shared inline style constants
  songs.js              # Song/release data
  assets/               # Static images (logos, portraits, etc.)
    3dlogos/            # 3D tech stack logo images
    weblogos/           # Web tech logo images
  components/           # Reusable UI components
    Navbar.jsx
    Hero.jsx / Hero3D.jsx
    Form.jsx / Form.css   # Contact form
    Gallery.jsx
    GifHover.jsx
    Links.jsx             # Social media link icons
    Loading.jsx / Spinner.jsx
    logos3d.jsx
    ServiceCard.jsx
    SplineLogo.jsx
    Technologies.jsx
  constants/
    index.js            # navLinks, socials arrays
    gifs.js             # GIF asset references
    threedtech.js       # 3D tech stack entries
    webtech.js          # Web tech stack entries
  pages/
    Contact.jsx         # About/contact page (also handles scrolling to form)
    Services.jsx        # Services offered
    Webdev.jsx          # Web development showcase
    3D.jsx              # 3D art showcase
  gallery2/             # Gallery image assets (organised by project/set)

public/
  artworks/             # Static artwork images
  gallery/              # Gallery assets
  releases/ releases2/  # Music release assets
  songs/                # Audio files
  websites/             # Website screenshot assets
  favicons/             # Favicon + web manifest
```

---

## Tailwind Theme

Custom values defined in `tailwind.config.cjs`:

- **Colors:** `primary` (#00040f), `secondary` (#00f6ff), `dimWhite`, `dimBlue`
- **Font:** Poppins
- **Breakpoints:** `xs` 480px, `ss` 620px, `sm` 768px, `md` 1060px, `lg` 1200px, `xl` 1700px

---

## Key Conventions

- Path alias `@` maps to `src/`. Always use `@/` imports, never relative `../../`.
- Pages live in `src/pages/`, shared UI in `src/components/`, data in `src/constants/`.
- Animations use `react-spring` (`useSpring` / `animated`) for mount transitions and AOS for scroll reveals.
- The contact form uses EmailJS — keys are stored in environment variables, never hardcoded.
- Tailwind is used for layout/spacing; complex gradient/glass backgrounds are applied via custom CSS classes or `style.js` objects.

---

## Dev Commands

```bash
npm run dev       # Start local dev server (Vite, port 5173)
npm run build     # Production build
npm run preview   # Preview production build locally
```

> ⚠️ Do NOT run `npm install` without the owner's explicit permission.
