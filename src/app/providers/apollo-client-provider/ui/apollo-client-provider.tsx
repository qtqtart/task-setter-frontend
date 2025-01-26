import { ApolloProvider } from "@apollo/client";
import { client } from "@shared/apollo/apollo-client";
import { FC, PropsWithChildren } from "react";

export const ApolloClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
