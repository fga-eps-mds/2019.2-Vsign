
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './graphql';
import store, { history, sagaMiddleware } from './store';
import rootSaga from './sagas';

function Root() {
	sagaMiddleware.run(rootSaga);
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<ApolloProvider client={client}>
					<App />
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
