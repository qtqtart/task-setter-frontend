import { Button, ButtonGroup, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { options } from "./options";

export const ChangeLanguage: FC = () => {
  const { i18n } = useTranslation();

  return (
    <ButtonGroup fullWidth color="inherit">
      {options.map(({ value, label }) => (
        <Button key={value} onClick={() => i18n.changeLanguage(value)}>
          <Typography
            variant="caption"
            color={i18n.language === value ? "primary" : "inherit"}
          >
            {label}
          </Typography>
        </Button>
      ))}
    </ButtonGroup>
  );
};
