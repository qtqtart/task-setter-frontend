import { LOCAL_STORAGE_KEYS } from "@shared/consts/local-storage-keys";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { getSystemWidth } from "./utils";

type State = {
  isOpenDashboard: boolean;
  set: (isOpenDashboard: boolean) => void;
  toggle: () => void;
  reset: () => void;
};

export const useDashboardStore = create<State>()(
  persist(
    (set) => ({
      isOpenDashboard: getSystemWidth(),
      //
      set: (isOpenDashboard: boolean) => set({ isOpenDashboard }),
      //
      toggle: () =>
        set(({ isOpenDashboard }) => ({
          isOpenDashboard: !isOpenDashboard,
        })),
      //
      reset: () => set({ isOpenDashboard: getSystemWidth() }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.IS_OPEN_DASHBOARD,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
