import { Card, Stack } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => (
  <Stack
    sx={{
      padding: "100px",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <Outlet />
    </Card>
  </Stack>
);

export default Layout;
