import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:3000/graphql'
});

export const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem("userToken");
        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            }
        });
    },
    cache,
    link
});
