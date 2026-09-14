import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import AOS from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

import "./css/Style.css";
import "./css/Responsive.css";
import "./css/Animation.css";


// ==========================================
// INITIALIZE THEME BEFORE REACT RENDERS
// ==========================================

const savedTheme = localStorage.getItem("selectedTheme") || "yellow";

// Apply data-theme immediately
document.documentElement.setAttribute("data-theme", savedTheme);

// Create theme stylesheet
const themeLink = document.createElement("link");

themeLink.id = "themeStylesheet";
themeLink.rel = "stylesheet";
themeLink.href = `/styles/style_${savedTheme}.css`;

document.head.appendChild(themeLink);


// ==========================================
// AOS
// ==========================================

AOS.init({
  duration: 1500,
  once: true,
  offset: 80,
  easing: "ease-out",
  disable: function () {
    return window.innerWidth < 1200;
  },
});


// ==========================================
// REACT APP
// ==========================================

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);