import { ThemeMode } from "@features/theme-mode";

import { createTheme as createMUITheme } from "@mui/material";

import { createBreakpoints } from "./create-breakpoints";
import { createPalette } from "./create-palette";
import { createShadows } from "./create-shadows";
import { createTypography } from "./create-typography";

export const createTheme = (themeMode: ThemeMode) =>
  createMUITheme({
    palette: createPalette(themeMode),
    breakpoints: createBreakpoints(),
    shadows: createShadows(),
    typography: createTypography(),
    shape: {
      borderRadius: 32,
    },
  });
