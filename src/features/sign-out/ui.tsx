import { useUser } from "@features/user";
import { useSignOutMutation } from "@shared/graphql/types-and-hooks";
import { LoadingButton } from "@shared/ui/loading-button";

import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

export const SingOutButton: FC = () => {
  const { t } = useTranslation();

  const [signOut, { loading }] = useSignOutMutation();

  const { onResetUser } = useUser();

  const onSignOut = useCallback(async () => {
    await signOut();

    onResetUser();
  }, [onResetUser, signOut]);

  return (
    <LoadingButton
      fullWidth
      variant="contained"
      color="error"
      loading={loading}
      onClick={onSignOut}
    >
      {t("sign-out")}
    </LoadingButton>
  );
};
