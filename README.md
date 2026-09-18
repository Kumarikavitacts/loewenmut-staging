# Löwenmut — Next.js Website

Official website for **Löwenmut**, a digital agency based in Winterthur, Switzerland, specializing in branding, web design, and digital solutions.

Built with [Next.js](https://nextjs.org/) (App Router) and powered by a headless [Strapi](https://strapi.io/) CMS backend.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **State Management:** Redux Toolkit
- **Styling:** Bootstrap 5, custom CSS
- **Animations:** AOS (Animate On Scroll), GSAP
- **Carousels:** Owl Carousel
- **Maps:** Google Maps (`@react-google-maps/api`)
- **HTTP Client:** Axios
- **HTML Parsing:** html-react-parser
- **CMS/Backend:** Strapi (headless, REST API)

---

## Prerequisites

Before you begin, make sure you have installed:

- **Node.js** — v18.18 or later (v20+ recommended)
- **npm** — comes bundled with Node.js
- Access to the Strapi backend API (URL provided separately)

Check your versions:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd loewenmut-next
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root (same level as `package.json`) with the following:

```bash
# ==========================================
# BACKEND API
# ==========================================
NEXT_PUBLIC_API_BASE_URL=https://backend-strapi.loewenmut.ch/

# Public site URL — used for metadata, canonical tags, sitemap.xml
# Set to the staging URL while testing, and the production URL before going live
NEXT_PUBLIC_SITE_URL=https://staging2.loewenmut.ch
```

> **Note:** `NEXT_PUBLIC_SITE_URL` should always point at the domain the site is currently deployed on. It controls `metadataBase`, canonical URLs, Open Graph images, `robots.txt` (indexing is disabled automatically on any URL containing `staging`), and `sitemap.xml`.



## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server (run `build` first) |
| `npm run lint` | Runs ESLint to check code quality |

## Building for Production

### 4. Create the production build

```bash
npm run build
```

This compiles and optimizes the app into the `.next` folder. Watch the terminal output for build errors before proceeding.

### 5. Start the production server

```bash
npm run start
```

By default this runs on port 3000. To use the port from `.env` instead:
