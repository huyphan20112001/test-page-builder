import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://d26f8gwtfedanq.cloudfront.net/graphql",
});
