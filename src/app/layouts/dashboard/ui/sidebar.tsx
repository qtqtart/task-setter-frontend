import { useDashboard } from "@features/dashboard";
import { useResponsive } from "@shared/hooks/use-responsive";

import {
  Add as AddIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from "@mui/icons-material";
import {
  Button,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Sidebar: FC = () => {
  const { zIndex, palette } = useTheme();
  const { t } = useTranslation();
  const isOnlyXs = useResponsive("only", "xs");
  const isDownMd = useResponsive("down", "md");

  const { isOpenDashboard, onToggleIsOpenDasboard, onSetIsOpenDasboard } =
    useDashboard();

  useEffect(() => {
    if (isDownMd) onSetIsOpenDasboard(false);
  }, [isDownMd, onSetIsOpenDasboard]);

  return (
    <Drawer
      open
      variant="permanent"
      anchor={isOnlyXs ? "bottom" : "left"}
      PaperProps={{
        sx: {
          height: isOnlyXs ? "56px" : "100%",
          zIndex: zIndex.appBar - 1,
          border: `1px solid ${palette.divider}`,

          margin: "0",
          boxShadow: "none",

          ...(isOnlyXs
            ? {
                paddingY: "8px",
                paddingX: "16px",
              }
            : {
                width: isOpenDashboard ? "288px" : "74px",
                paddingTop: "64px",
                paddingBottom: "8px",
                paddingLeft: "16px",
                paddingRight: "16px",
              }),
        },
      }}
      ModalProps={{
        keepMounted: false,
      }}
    >
      {isOnlyXs ? (
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "16px",
            width: "100%,",
          }}
        >
          {/*  */}

          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
        </Stack>
      ) : (
        <Stack
          sx={{
            flexDirection: "column",
            alignItems: isOpenDashboard ? "flex-start " : "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
          }}
        >
          {!isDownMd && (
            <Tooltip
              title={
                isOpenDashboard ? t("close_dashboard") : t("open_dashboard")
              }
            >
              <IconButton
                color="primary"
                onClick={onToggleIsOpenDasboard}
                sx={{
                  display: "flex",
                  marginTop: isOpenDashboard ? "8px" : 0,
                  marginLeft: "auto",
                  border: `1px solid ${palette.divider}`,
                }}
              >
                {isOpenDashboard ? <ArrowLeftIcon /> : <ArrowRightIcon />}
              </IconButton>
            </Tooltip>
          )}

          <Button fullWidth>home</Button>
          <Button fullWidth>tasks</Button>
          <Button fullWidth>projects</Button>

          {/*  */}

          <Button fullWidth>settings</Button>
        </Stack>
      )}
    </Drawer>
  );
};
