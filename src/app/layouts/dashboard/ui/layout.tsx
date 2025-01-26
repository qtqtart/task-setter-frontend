import { Stack } from "@mui/material";
import { FC } from "react";

import { Header } from "./header";
import { Main } from "./main";
import { Sidebar } from "./sidebar";

const Layout: FC = () => (
  <Stack
    sx={{
      width: "100vw",
      height: "100vh",
    }}
  >
    <Header />
    <Main />
    <Sidebar />
  </Stack>
);

export default Layout;
