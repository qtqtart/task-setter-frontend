import { useUser } from "@features/user";
import { useFindMeQuery, UserModel } from "@shared/graphql/types-and-hooks";

import { FC, PropsWithChildren, useEffect } from "react";

export const LoadDataProvider: FC<PropsWithChildren> = ({ children }) => {
  const { onSetUser, onResetUser } = useUser();

  const { data } = useFindMeQuery();

  useEffect(() => {
    if (data?.findMe) onSetUser(data?.findMe as UserModel);
    else onResetUser();
  }, [data?.findMe, onResetUser, onSetUser]);

  return <>{children}</>;
};
