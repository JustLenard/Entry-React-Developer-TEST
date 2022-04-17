import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import store from './store/';

// const store2 = configureStore({
// 	reducer: {
// 		products: productsReducer,
// 		category: categoryReducer,
// 		cart: cartReducer,
// 	},
// });
// console.log(store2);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
