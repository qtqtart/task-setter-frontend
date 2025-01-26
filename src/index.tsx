import { ApolloClientProvider } from "@app/providers/apollo-client-provider";
import { ThemeProvider } from "@app/providers/theme-provider";
import HomePage from "@pages/home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloClientProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </ApolloClientProvider>
  </StrictMode>,
);
