import { LOCAL_STORAGE_KEYS } from "@shared/consts/local-storage-keys";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { ThemeMode } from "./types";
import { getSystemThemeMode } from "./utils";

type State = {
  themeMode: ThemeMode;
  set: (themeMode: ThemeMode) => void;
  toggle: () => void;
  reset: () => void;
};

export const useThemeModeStore = create<State>()(
  persist(
    (set) => ({
      themeMode: getSystemThemeMode(),
      //
      set: (themeMode: ThemeMode) => set({ themeMode }),
      //
      toggle: () =>
        set(({ themeMode }) => ({
          themeMode: themeMode === "dark" ? "light" : "dark",
        })),
      //
      reset: () => set({ themeMode: getSystemThemeMode() }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.THEME_MODE,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
