
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { gql} from "apollo-boost";
import App from './App';
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:3000/graphql'
})
const client = new ApolloClient({
  cache,
  link
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

client.query({
    query: gql`
      {
      }
    `
}).then(result => console.log(result));





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
