import { ApolloProvider } from "@apollo/client";
import { FC, PropsWithChildren } from "react";

import { client } from "./client";

export const ApolloClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
