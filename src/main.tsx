import { initThemeMode, ThemeProvider } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import App from "./App.tsx";
import "./index.css";
import { packfitTheme } from "./theme/flowbiteTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <ThemeProvider theme={packfitTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

initThemeMode();
