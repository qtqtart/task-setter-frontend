import { Stack } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Page: FC = () => {
  return (
    <>
      <Helmet>
        <title>Tasks</title>
      </Helmet>

      <Stack>tasks</Stack>
    </>
  );
};

export default Page;
