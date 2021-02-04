import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import AppRouter from "./routes";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    "client-name": "Divvy HW [web]",
  },
  uri: "http://localhost:3000/graphql",
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
