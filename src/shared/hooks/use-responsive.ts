import { Breakpoint } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

export const useResponsive = (
  query: "between" | "down" | "only" | "up",
  start: Breakpoint,
  end?: Breakpoint,
) => {
  const { breakpoints } = useTheme();

  const mediaUp = useMediaQuery(breakpoints.up(start));
  const mediaDown = useMediaQuery(breakpoints.down(start));
  const mediaOnly = useMediaQuery(breakpoints.only(start));
  const mediaBetween = useMediaQuery(
    breakpoints.between(start, end as Breakpoint),
  );

  if (query === "up") return mediaUp;
  if (query === "down") return mediaDown;
  if (query === "only") return mediaOnly;

  return mediaBetween;
};
