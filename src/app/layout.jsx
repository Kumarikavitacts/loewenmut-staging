import { Roboto, Urbanist } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";

import "@/index.css";
import "../css/Style.css";
import "../css/Responsive.css";
import "../css/Animation.css";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "../css/OwlTheme.css";

import Script from "next/script";
import Providers from "@/components/Providers";
import SiteChrome from "@/components/SiteChrome";
import BootstrapInit from "@/components/BootstrapInit";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "Webdesign | Branding: Löwenmut. Die Webagentur in Winterthur Zürich",

  description:
    "Agentur für Grafik-, Webdesign & Programmierung in Winterthur. Unsere Referenzen werden Sie überzeugen",

  icons: {
    icon: "/images/favicon.ico",
  },

  openGraph: {
    title:
      "Webdesign | Branding: Löwenmut. Die Webagentur in Winterthur Zürich",

    description:
      "Agentur für Grafik-, Webdesign & Programmierung in Winterthur. Unsere Referenzen werden Sie überzeugen",

    url: SITE_URL,

    siteName: "Löwenmut",

    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Löwenmut – Webdesign, Branding und digitale Lösungen",

      },
    ],

    locale: "de_CH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Webdesign | Branding: Löwenmut. Die Webagentur in Winterthur Zürich",

    description:
      "Agentur für Grafik-, Webdesign & Programmierung in Winterthur. Unsere Referenzen werden Sie überzeugen",

    images: ["/images/og_image.png"],
  },
};
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});
const themeScript = `
(function () {
  try {
    var validThemes = ["yellow", "blue", "green", "pink"];
    var storedTheme = localStorage.getItem("selectedTheme");

    var theme = validThemes.indexOf(storedTheme) !== -1
      ? storedTheme
      : "yellow";

    document.documentElement.setAttribute("data-theme", theme);

    var link = document.getElementById("themeStylesheet");

    if (!link) {
      link = document.createElement("link");
      link.id = "themeStylesheet";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    link.href = "/styles/style_" + theme + ".css";
  } catch (error) {
    document.documentElement.setAttribute(
      "data-theme",
      "yellow"
    );
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${roboto.variable} ${urbanist.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body>
        <BootstrapInit />
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
