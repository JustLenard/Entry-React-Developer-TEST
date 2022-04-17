import SET_CART from '../actions/currency';

let initialState = [];

const reducer = (state = initialState, { type, payload = null }) => {
	switch (type) {
		case 'SET_CART':
			return setCart(state, payload);
		default:
			return state;
	}
};

function setCart(state, payload) {
	return (state = payload);
}

export default reducer;
