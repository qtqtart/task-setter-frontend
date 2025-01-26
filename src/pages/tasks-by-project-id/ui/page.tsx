import { Stack } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Page: FC = () => {
  return (
    <>
      <Helmet>
        <title>some project name</title>
      </Helmet>

      <Stack>some project name</Stack>
    </>
  );
};

export default Page;
