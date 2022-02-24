import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productsReducer from './components/features/products';
import categoryReducer from './components/features/changeCategory';
import cartReducer from './components/features/cart';

const store = configureStore({
	reducer: {
		products: productsReducer,
		category: categoryReducer,
		cart: cartReducer,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
