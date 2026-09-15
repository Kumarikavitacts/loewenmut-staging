# React.js → Next.js Migration Report

## Source reviewed
- Original frontend: Vite + React 19 project from the supplied ZIP.
- Migration requirements: `React_to_Next_js.docx`.
- Priority followed: preserve UI/design, preserve functionality, keep Strapi, preserve URLs, then Next.js compatibility.

## Original project analysis
- React: 19.2.8
- Build tool: Vite 8
- Routing: React Router DOM 7
- Styling: global CSS + responsive CSS + animation CSS + theme-specific CSS; Bootstrap classes are used throughout the UI.
- State: Redux Toolkit + React Redux, plus Theme Context.
- Backend: Strapi at `https://backend-strapi.loewenmut.ch/`.
- API client: Axios.
- Browser/client libraries: AOS, GSAP, jQuery, Owl Carousel, Google Maps.
- Dynamic browser behavior: localStorage theme persistence, document theme attribute, scroll listeners, window size checks, carousels, map integration, navigation, timers and animations.
- Assets: existing `public/` assets retained without renaming.

## Next.js structure
The migration uses the App Router and keeps the existing page components under `src/pages/` to minimize unnecessary rewrites. Thin route files under `app/` expose the same URLs.

### Routes preserved
- `/`
- `/agentur`
- `/leistungen`
- `/leistungen/:id` → `/leistungen/[id]`
- `/team`
- `/insights`
- `/insights/:id` → `/insights/[id]`
- `/news`
- `/news/:id` → `/news/[id]`
- `/kontakt`
- `/impressum`
- `/datenschtuz` (existing spelling intentionally preserved)
- `/vielen-dank`
- Unknown URLs → Next.js `not-found` page using the existing Error UI.

## Special handling
### React Router → Next.js navigation
- `Link` / `NavLink` were migrated to `next/link`.
- Programmatic `useNavigate()` calls were migrated to `useRouter().push()`.
- Dynamic `useParams()` was migrated to `next/navigation`.
- Scroll-to-top behavior now watches `usePathname()`.
- Header active navigation state is reproduced with the current pathname.

### Client Components
Client boundaries were added only to components/pages that require hooks, Redux, browser APIs, navigation hooks, jQuery/Owl Carousel, Google Maps, or theme state.

### AOS / Owl Carousel
- AOS initialization was moved into a small client component.
- Owl Carousel's global CSS is loaded from the root layout; the JavaScript is still initialized client-side where it was used originally.

### Theme system
The existing four themes (`yellow`, `blue`, `green`, `pink`) and theme stylesheet files are preserved. A small head script reads `selectedTheme` before hydration and attaches the matching theme stylesheet to reduce the initial-theme flash that existed during reloads.

### Strapi
The existing Strapi API paths and response handling were kept. The Axios base URL now reads from `NEXT_PUBLIC_BACKEND_URL` instead of Vite's `VITE_BACKEND_URL`.

### Images
Existing `<img>` implementations were intentionally retained rather than converting everything to `next/image`, because the migration requirements explicitly prioritize identical dimensions, cropping, positioning and appearance.

## Environment variables
Use `.env.example` as the safe template:

```env
NEXT_PUBLIC_BACKEND_URL=https://backend-strapi.loewenmut.ch/
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

No real secret values are included in the migrated project.

## Install / run
```bash
npm install
npm run dev
```

Production:
```bash
npm run build
npm start
```

## Verification status
The source structure, route conversion, Vite-specific references, environment variable references, and React Router references were checked after migration.

A local `npm install` / `next build` could not be completed in the migration environment because the environment could not resolve `registry.npmjs.org` (network/DNS unavailable). Therefore, after extracting this ZIP on a machine with npm registry access, run `npm install` followed by `npm run build` and manually verify the visual pages and browser-only integrations.

## Known manual verification points
1. Google Maps requires the appropriate API key in the environment.
2. Owl Carousel/jQuery should be visually checked on desktop/mobile after `npm install`.
3. Theme switching should be checked on a hard reload to confirm the pre-hydration theme stylesheet behavior.
4. All Strapi-powered pages should be checked against the live Strapi instance.
5. Forms, third-party integrations and browser-only behavior should be smoke-tested in a real browser because they cannot be fully exercised in this offline build environment.
