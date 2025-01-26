import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: import.meta.env.VITE_BASE_URL,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
