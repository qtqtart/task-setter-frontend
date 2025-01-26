import { CircularProgress, Stack } from "@mui/material";
import { ElementType, Suspense } from "react";

export const Loadable = (Component: ElementType) => {
  const fallback = (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Stack>
  );

  return (props: object) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};
