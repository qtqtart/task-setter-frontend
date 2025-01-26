import { Stack } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Page: FC = () => {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>

      <Stack>Settings</Stack>
    </>
  );
};

export default Page;
