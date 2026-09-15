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

export const metadata = {
  title: "Loewenmut",
  description: "Loewenmut",
  icons: {
    icon: "/images/favicon.ico",
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
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
