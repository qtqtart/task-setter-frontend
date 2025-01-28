import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  loading: boolean;
} & ButtonProps;

const LoadingButtonInner: FC<Props> = ({
  loading = false,
  children,
  sx,
  ...props
}) => (
  <Button sx={sx} {...props}>
    {loading ? (
      <CircularProgress
        color="inherit"
        sx={{
          width: "20px !important",
          height: "20px !important",
        }}
      />
    ) : (
      <>{children}</>
    )}
  </Button>
);

export const LoadingButton = memo(LoadingButtonInner);
