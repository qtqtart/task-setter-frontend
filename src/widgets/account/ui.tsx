import { SingOutButton } from "@features/sign-out";
import { useUser } from "@features/user";
import { ROUTER_PATHS } from "@shared/consts/router-paths";
import { useOnline } from "@shared/hooks/use-online";
import { usePopover } from "@shared/hooks/use-popover";
import { ChangeLanguage } from "@widgets/change-language";
import { ChangeThemeMode } from "@widgets/change-theme-mode";

import {
  Avatar,
  Button,
  Card,
  Popover,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Account: FC = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();

  const { isOnline } = useOnline();

  const { user } = useUser();

  const { anchorEl, isOpenPopover, onClosePopover, onOpenPopover } =
    usePopover();

  const navigate = useNavigate();

  return (
    <>
      <Stack
        onClick={onOpenPopover}
        sx={{
          "&::after": {
            backgroundColor: isOnline
              ? palette.success.main
              : palette.error.main,
            border: `1px solid ${palette.background.paper}`,
            borderRadius: "50%",
            content: '""',
            height: "12px",
            position: "absolute",
            right: "-1px",
            bottom: "-1px",
            width: "12px",
          },

          height: "40px",
          position: "relative",
          width: "40px",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: palette.primary.main,
          }}
        >
          a
        </Avatar>
      </Stack>

      <Popover
        anchorEl={anchorEl}
        open={isOpenPopover}
        onClose={onClosePopover}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "212px",
              border: `1px solid ${palette.divider}`,
            },
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "8px",
            gap: "16px",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: "198px",
              padding: "8px",
              border: `1px solid ${palette.divider}`,
            }}
          >
            <Typography noWrap variant="body2">
              {user?.username}
            </Typography>
            <Typography noWrap variant="body2">
              {user?.email}
            </Typography>
          </Card>

          <Stack
            sx={{
              flexDirection: "column",
              gap: "8px",
              paddingX: "8px",
              width: "100%",
            }}
          >
            <ChangeLanguage />
            <ChangeThemeMode />

            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              onClick={() => navigate(ROUTER_PATHS.FULL.SETTINGS)}
            >
              {t("settings")}
            </Button>

            <SingOutButton />
          </Stack>
        </Stack>
      </Popover>
    </>
  );
};
