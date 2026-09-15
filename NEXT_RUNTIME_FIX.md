# Next.js Runtime Fixes

## 1. ThemeContext
`localStorage` is browser-only. ThemeContext now reads it inside `useEffect` instead of the initial `useState` initializer, so Next.js server rendering does not crash.

## 2. Theme bootstrap script
The inline theme bootstrap is loaded with `next/script` and `beforeInteractive` instead of a raw React `<script>` element.

## 3. Strapi URL
Create `.env.local` in the project root and set:

NEXT_PUBLIC_BACKEND_URL=https://backend-strapi.loewenmut.ch/

If your Strapi server is local/LAN, replace that value with your actual Strapi URL, for example:

NEXT_PUBLIC_BACKEND_URL=http://192.168.1.xxx:1337/

Do not use `NEXT_PUBLIC_BACKEND_URL=/api` because the existing frontend calls the Strapi API directly.

After changing `.env.local`, restart Next.js.
