import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("selectedTheme") || "yellow";
  });

  useEffect(() => {
    localStorage.setItem("selectedTheme", theme);

    // Optional: useful if you also want to target the theme using CSS
    document.documentElement.setAttribute("data-theme", theme);

    // Load the corresponding CSS file
    const themeId = "themeStylesheet";
    let themeLink = document.getElementById(themeId);

    if (!themeLink) {
      themeLink = document.createElement("link");
      themeLink.id = themeId;
      themeLink.rel = "stylesheet";
      document.head.appendChild(themeLink);
    }

    themeLink.href = `/styles/style_${theme}.css`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
