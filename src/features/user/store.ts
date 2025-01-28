import { LOCAL_STORAGE_KEYS } from "@shared/consts/local-storage-keys";
import { UserModel } from "@shared/graphql/types-and-hooks";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  user: UserModel | null;
  set: (user: UserModel) => void;
  reset: () => void;
};

export const useUserStore = create<State>()(
  persist(
    (set) => ({
      user: null,
      //
      set: (user: UserModel) => set({ user }),
      //
      reset: () => set({ user: null }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.USER,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
