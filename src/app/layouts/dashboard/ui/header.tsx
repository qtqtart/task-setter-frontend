import { Avatar, Stack, useTheme } from "@mui/material";
import { FC } from "react";

export const Header: FC = () => {
  const { zIndex, palette } = useTheme();

  return (
    <Stack
      sx={{
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        position: "fixed",
        height: "56px",
        zIndex: zIndex.appBar + 1,
        backgroundColor: palette.background.paper,
        border: `1px solid ${palette.divider}`,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "flex-end",
          gap: "8px",
          paddingY: "8px",
          paddingX: "16px",
          width: "100%",
        }}
      >
        <Avatar>a</Avatar>
      </Stack>
    </Stack>
  );
};
