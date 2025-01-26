import { BreakpointsOptions } from "@mui/material";

export const createBreakpoints = () => {
  const breakpoints: BreakpointsOptions = {
    values: {
      lg: 1239,
      md: 904,
      sm: 600,
      xl: 1439,
      xs: 0,
    },
  };

  return breakpoints;
};
