import { combineReducers } from 'redux';
import products from './reducers/currency';
import category from './reducers/category';
import cart from './reducers/cart';

export default combineReducers({
	products,
	category,
	cart,
});
