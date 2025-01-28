import { BreakpointsOptions } from "@mui/material";

export const createBreakpoints = () => {
  const breakpoints: BreakpointsOptions = {
    values: {
      xl: 1439,
      lg: 1239,
      md: 904,
      sm: 600,
      xs: 0,
    },
  };

  return breakpoints;
};
