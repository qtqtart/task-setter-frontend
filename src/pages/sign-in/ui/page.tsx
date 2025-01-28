import { SignInForm } from "@features/sign-in";

import { Card, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Page: FC = () => {
  const { palette } = useTheme();

  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          paddingX: {
            sm: "16px",
            xs: "8px",
          },
          paddingY: "32px",
          width: "100%",
          border: `1px solid ${palette.divider}`,
        }}
      >
        <Typography>asd</Typography>

        <SignInForm />
      </Card>
    </>
  );
};

export default Page;
