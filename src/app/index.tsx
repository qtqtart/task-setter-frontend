import "dayjs/locale/en";
import "dayjs/locale/ru";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { FC, StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import { ApolloClientProvider } from "./providers/apollo-client";
import { LoadDataProvider } from "./providers/load-data";
import { ThemeProvider } from "./providers/theme";
import { router } from "./router";

export const App: FC = () => {
  const { i18n } = useTranslation();

  dayjs.locale(i18n.language);
  dayjs.extend(relativeTime);
  dayjs.extend(timezone);
  dayjs.extend(utc);

  return (
    <StrictMode>
      <HelmetProvider>
        <ApolloClientProvider>
          <LoadDataProvider>
            <ThemeProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <RouterProvider router={router} />
              </LocalizationProvider>
            </ThemeProvider>
          </LoadDataProvider>
        </ApolloClientProvider>
      </HelmetProvider>
    </StrictMode>
  );
};
