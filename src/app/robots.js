export default function robots() {
    const isProd = !process.env.NEXT_PUBLIC_SITE_URL?.includes("staging");
  
    return {
      rules: {
        userAgent: "*",
        allow: isProd ? "/" : undefined,
        disallow: isProd ? undefined : "/",
      },
      sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
    };
  }