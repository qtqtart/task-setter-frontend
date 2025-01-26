import { createTheme } from "@app/styles";
import { useThemeMode } from "@features/theme-mode";
import { CssBaseline } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode } = useThemeMode();
  const theme = useMemo(() => createTheme(themeMode), [themeMode]);

  useEffect(() => {
    document.documentElement.style.colorScheme = themeMode;
  }, [themeMode]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
