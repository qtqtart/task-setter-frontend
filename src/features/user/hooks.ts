import { UserModel } from "@shared/graphql/types-and-hooks";

import { useCallback } from "react";

import { useUserStore } from "./store";

export const useUser = () => {
  const { user, set, reset } = useUserStore();

  const onSetUser = useCallback(
    (user: UserModel) => {
      set(user);
    },
    [set],
  );

  const onResetUser = useCallback(() => {
    reset();
  }, [reset]);

  return { user, onSetUser, onResetUser };
};
