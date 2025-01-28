import { Container } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => (
  <Container
    maxWidth="xs"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      padding: {
        xs: "8px",
        sm: 0,
      },
    }}
  >
    <Outlet />
  </Container>
);

export default Layout;
