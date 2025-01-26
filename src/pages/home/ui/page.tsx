import { useThemeMode } from "@features/theme-mode";

import { Avatar, Button, Stack } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Page: FC = () => {
  const { onToggleThemeMode } = useThemeMode();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Stack>
        <Button variant="contained" onClick={onToggleThemeMode}>
          primary
        </Button>

        <Avatar>a</Avatar>
      </Stack>
    </>
  );
};

export default Page;
