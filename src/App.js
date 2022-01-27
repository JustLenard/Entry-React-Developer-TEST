import React from 'react';
import Home from './Pages/Home';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	HttpLink,
	from,
} from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error';

const errorLink = new onError(({ graphqlErrors, newtworkError }) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message, location, path }) => {
			alert(`GraphQL error message: ${message}`);
		});
	}
});
const link = from([ErrorLink, new HttpLink({ url: 'http://localhost:4000/' })]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Home />
		</ApolloProvider>
	);
};

export default App;
