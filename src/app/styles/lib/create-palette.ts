import { ThemeMode } from "@features/theme-mode";

import { PaletteOptions } from "@mui/material";
import {
  blue,
  common,
  deepPurple,
  green,
  grey,
  orange,
  purple,
  red,
} from "@mui/material/colors";

export const createPalette = (themeMode: ThemeMode) => {
  const lightPalette: PaletteOptions = {
    mode: "light",
    common,
    grey,
    background: {
      default: grey[50],
      paper: grey[100],
    },
    divider: grey[300],
    primary: {
      main: purple[500],
      light: purple[300],
      dark: purple[700],
      contrastText: purple[50],
    },
    secondary: {
      main: deepPurple[500],
      light: deepPurple[300],
      dark: deepPurple[700],
      contrastText: grey[50],
    },
    error: {
      main: red[500],
      light: red[300],
      dark: red[700],
      contrastText: red[50],
    },
    success: {
      main: green[500],
      light: green[300],
      dark: green[700],
      contrastText: green[50],
    },
    info: {
      main: blue[500],
      light: blue[300],
      dark: blue[700],
      contrastText: blue[50],
    },
    warning: {
      main: orange[500],
      light: orange[300],
      dark: orange[700],
      contrastText: orange[50],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
  };

  const darkPalette: PaletteOptions = {
    mode: "dark",
    common,
    grey,
    background: {
      default: grey[900],
      paper: grey[900],
    },
    divider: grey[800],
    primary: {
      main: purple[600],
      light: purple[500],
      dark: purple[800],
      contrastText: grey[900],
    },
    secondary: {
      main: deepPurple[500],
      light: deepPurple[400],
      dark: deepPurple[600],
      contrastText: grey[900],
    },
    error: {
      main: red[600],
      light: red[500],
      dark: red[800],
      contrastText: red[900],
    },
    success: {
      main: green[600],
      light: green[500],
      dark: green[800],
      contrastText: green[900],
    },
    info: {
      main: blue[600],
      light: blue[500],
      dark: blue[800],
      contrastText: blue[900],
    },
    warning: {
      main: orange[600],
      light: orange[500],
      dark: orange[800],
      contrastText: orange[900],
    },
    text: {
      primary: grey[50],
      secondary: grey[300],
      disabled: grey[500],
    },
  };

  if (themeMode === "light") return lightPalette;
  if (themeMode === "dark") return darkPalette;

  return undefined;
};
