import { ThemeMode } from "@features/theme-mode";

import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { ReactElement } from "react";

type Options = {
  value: ThemeMode;
  label: string;
  icon: ReactElement;
};

export const options: readonly Options[] = Object.freeze([
  {
    value: "light",
    label: "light_mode",
    icon: <LightModeIcon />,
  },
  {
    value: "dark",
    label: "dark_mode",
    icon: <DarkModeIcon />,
  },
]);
