import { Stack } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Main: FC = () => {
  return (
    <Stack
      component="main"
      sx={{
        flexDirection: "column",
        flexGrow: "1",
        width: "100%",
        height: "100%",
        //
        paddingTop: "56px",
        paddingBottom: {
          sm: 0,
          xs: "56px",
        },
        paddingLeft: {
          sm: "288px",
          xs: 0,
        },
      }}
    >
      <Stack
        sx={{
          padding: "8px",
        }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
};
