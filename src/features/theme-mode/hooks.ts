import { useCallback } from "react";

import { useThemeModeStore } from "./store";
import { ThemeMode } from "./types";

export const useThemeMode = () => {
  const { themeMode, set, toggle, reset } = useThemeModeStore();

  const onSetThemeMode = useCallback(
    (themeMode: ThemeMode) => {
      set(themeMode);
    },
    [set],
  );

  const onToggleThemeMode = useCallback(() => {
    toggle();
  }, [toggle]);

  const onResetThemeMode = useCallback(() => {
    reset();
  }, [reset]);

  return { themeMode, onSetThemeMode, onToggleThemeMode, onResetThemeMode };
};
