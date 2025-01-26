import { Stack } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Page: FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <Stack>projects</Stack>
    </>
  );
};

export default Page;
