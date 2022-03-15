import { ApolloClient, InMemoryCache } from "@apollo/client";

const continentsClient = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache()
});

export default continentsClient;