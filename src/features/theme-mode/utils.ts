import { ThemeMode } from "./types";

export const getSystemThemeMode = (): ThemeMode =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
