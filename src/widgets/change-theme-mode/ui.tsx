import { useThemeMode } from "@features/theme-mode";

import { Button, ButtonGroup, SvgIcon, Tooltip } from "@mui/material";
import { t } from "i18next";
import { FC } from "react";

import { options } from "./options";

export const ChangeThemeMode: FC = () => {
  const { themeMode, onSetThemeMode } = useThemeMode();

  return (
    <ButtonGroup fullWidth color="inherit">
      {options.map(({ value, label, icon }) => (
        <Tooltip key={value} title={t(label)}>
          <Button key={value} onClick={() => onSetThemeMode(value)}>
            <SvgIcon color={themeMode === value ? "primary" : "inherit"}>
              {icon}
            </SvgIcon>
          </Button>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
};
