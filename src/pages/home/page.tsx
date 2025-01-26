import { useThemeMode } from "@features/theme-mode";
import { Button, Stack } from "@mui/material";
import { FC } from "react";

const HomePage: FC = () => {
  const { onToggleThemeMode } = useThemeMode();

  return (
    <Stack>
      <Button variant="contained" onClick={onToggleThemeMode}>
        primary
      </Button>
    </Stack>
  );
};

export default HomePage;
