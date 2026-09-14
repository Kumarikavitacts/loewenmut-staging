import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
    // Save selected theme
    localStorage.setItem("selectedTheme", theme);

    // Update data-theme
    document.documentElement.setAttribute("data-theme", theme);

    // Find theme stylesheet
    const themeLink = document.getElementById("themeStylesheet");

    // Update stylesheet
    if (themeLink) {
      themeLink.href = `/styles/style_${theme}.css`;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};