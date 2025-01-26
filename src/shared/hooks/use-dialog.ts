import { useCallback, useState } from "react";

type Callback = () => void | Promise<void>;

export const useDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const onOpenDialog = useCallback(async (callback?: Callback) => {
    if (typeof callback === "function") await callback();

    setIsOpenDialog(true);
  }, []);

  const onCloseDialog = useCallback(async (callback?: Callback) => {
    if (typeof callback === "function") await callback();

    setIsOpenDialog(false);
  }, []);

  return {
    isOpenDialog,
    onOpenDialog,
    onCloseDialog,
  };
};
