# Next.js Build Compatibility Fixes

This migration package includes the following compatibility fixes:

1. The project uses only `src/app` for the Next.js App Router. There is no root-level `app/` or `pages/` directory.
2. Added root-level `jsconfig.json` with the `@/*` alias mapped to `src/*`.
3. Replaced the incompatible Owl Carousel theme stylesheet import with a local compatible copy at `src/css/OwlTheme.css`. The old IE-only `*display: inline` rule was removed; the visual theme rules are retained.
4. Converted CSS asset references from React/Vite-style relative paths such as `../images/...` and `/public/images/...` to Next.js public-root paths such as `/images/...`.
5. Corrected the same asset paths in the runtime theme stylesheets under `public/styles/`.

After extracting the ZIP:

```bash
npm install
npm run dev
```

For production verification:

```bash
npm run build
npm start
```

If your local machine reports another build error, send the complete terminal output so the next migration issue can be fixed without changing the approved UI.
