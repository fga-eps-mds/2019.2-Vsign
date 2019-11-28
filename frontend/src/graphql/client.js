import  ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = sessionStorage.getItem("userToken");
        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            }
        });
    }
});
