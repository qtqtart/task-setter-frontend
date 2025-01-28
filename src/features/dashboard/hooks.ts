import { useCallback } from "react";

import { useDashboardStore } from "./store";

export const useDashboard = () => {
  const { isOpenDashboard, set, toggle, reset } = useDashboardStore();

  const onSetIsOpenDasboard = useCallback(
    (isOpenDashboard: boolean) => {
      set(isOpenDashboard);
    },
    [set],
  );

  const onToggleIsOpenDasboard = useCallback(() => {
    toggle();
  }, [toggle]);

  const onResetIsOpenDashboard = useCallback(() => {
    reset();
  }, [reset]);

  return {
    isOpenDashboard,
    onSetIsOpenDasboard,
    onToggleIsOpenDasboard,
    onResetIsOpenDashboard,
  };
};
