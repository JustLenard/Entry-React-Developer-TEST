import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
	reducer: {},
});

ReactDOM.render(<App />, document.getElementById('root'));
