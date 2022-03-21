import { ApolloClient, InMemoryCache } from "@apollo/client";

export const continentsClient = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache()
});