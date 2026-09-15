"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

const DEFAULT_THEME = "yellow";

const VALID_THEMES = ["yellow", "blue", "green", "pink"];

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  /*
   * IMPORTANT FOR NEXT.JS HYDRATION:
   *
   * Do NOT read localStorage inside the useState initializer.
   *
   * The server cannot access localStorage.
   *
   * If we do:
   *
   * useState(getStoredTheme)
   *
   * then the server may render:
   *
   * theme-yellow
   *
   * while the browser immediately renders:
   *
   * theme-green
   *
   * This causes the hydration mismatch.
   *
   * So both server and client start with the same deterministic
   * default theme.
   */
  const [theme, setThemeState] = useState(DEFAULT_THEME);

  const [mounted, setMounted] = useState(false);

  /*
   * Read localStorage ONLY after the component has mounted.
   */
  useEffect(() => {
    let storedTheme = DEFAULT_THEME;

    try {
      const value = window.localStorage.getItem("selectedTheme");

      if (VALID_THEMES.includes(value)) {
        storedTheme = value;
      }
    } catch (error) {
      console.warn("Unable to read selected theme:", error);
    }

    setThemeState(storedTheme);

    setMounted(true);

    /*
     * Keep the HTML element synchronized with the saved theme.
     */
    document.documentElement.setAttribute(
      "data-theme",
      storedTheme
    );
  }, []);

  /*
   * Synchronize theme changes.
   *
   * This runs after the component has mounted and whenever
   * the selected theme changes.
   */
  useEffect(() => {
    if (!mounted) {
      return;
    }

    const currentTheme = VALID_THEMES.includes(theme)
      ? theme
      : DEFAULT_THEME;

    /*
     * Update <html data-theme="...">
     */
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme
    );

    /*
     * Save selected theme.
     */
    try {
      window.localStorage.setItem(
        "selectedTheme",
        currentTheme
      );
    } catch (error) {
      console.warn("Unable to save selected theme:", error);
    }

    /*
     * Update theme stylesheet.
     */
    let themeLink =
      document.getElementById("themeStylesheet");

    if (!themeLink) {
      themeLink = document.createElement("link");

      themeLink.id = "themeStylesheet";
      themeLink.rel = "stylesheet";

      document.head.appendChild(themeLink);
    }

    const newHref =
      `/styles/style_${currentTheme}.css`;

    if (
      themeLink.getAttribute("href") !== newHref
    ) {
      themeLink.setAttribute("href", newHref);
    }
  }, [theme, mounted]);

  /*
   * Public function used by ThemeSwitcher.
   */
  const setTheme = (newTheme) => {
    if (!VALID_THEMES.includes(newTheme)) {
      console.warn(
        `Invalid theme: ${newTheme}`
      );

      return;
    }

    /*
     * Update React state.
     */
    setThemeState(newTheme);

    /*
     * Immediately save the selected theme.
     */
    try {
      window.localStorage.setItem(
        "selectedTheme",
        newTheme
      );

      document.documentElement.setAttribute(
        "data-theme",
        newTheme
      );
    } catch (error) {
      console.warn(
        "Unable to save selected theme:",
        error
      );
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        availableThemes: VALID_THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};