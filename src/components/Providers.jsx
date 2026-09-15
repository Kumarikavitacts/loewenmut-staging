"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "./ScrollToTop";
import AOSInit from "./AOSInit";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AOSInit />
        <ScrollToTop />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
