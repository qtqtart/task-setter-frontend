import { Shadows } from "@mui/material";

export const createShadows = () => {
  const shadows = Array.from({ length: 25 }, () => "none") as Shadows;

  return shadows;
};
