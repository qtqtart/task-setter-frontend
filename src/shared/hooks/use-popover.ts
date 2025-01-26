import { MouseEvent } from "react";
import { useCallback, useState } from "react";

type Callback = () => void | Promise<void>;

export function usePopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpenPopover = Boolean(anchorEl);

  const onOpenPopover = useCallback(
    async (event: MouseEvent<HTMLElement>, callback?: Callback) => {
      if (typeof callback === "function") await callback();

      setAnchorEl(event.currentTarget);
    },
    [],
  );

  const onClosePopover = useCallback(async (callback?: Callback) => {
    if (typeof callback === "function") await callback();

    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    isOpenPopover,
    onOpenPopover,
    onClosePopover,
  };
}
