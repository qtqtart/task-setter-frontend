import { useResponsive } from "@shared/hooks/use-responsive";

import { Add as AddIcon } from "@mui/icons-material";
import { Button, Drawer, IconButton, Stack, useTheme } from "@mui/material";
import { FC } from "react";

export const Sidebar: FC = () => {
  const { zIndex, palette } = useTheme();
  const isOnlyXs = useResponsive("only", "xs");

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
                width: "288px",
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
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
          }}
        >
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
