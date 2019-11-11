
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import { client } from './graphql/client';
import store, { history, sagaMiddleware } from './store';
import rootSaga from './sagas';

function Root() {
	sagaMiddleware.run(rootSaga);
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<ApolloProvider client={client}>
      				<ApolloHooksProvider client={client}>
						<App />
					</ApolloHooksProvider>
				</ApolloProvider>
			</ConnectedRouter>
  		</Provider>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
