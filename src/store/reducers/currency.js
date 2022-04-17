let initialState = '$';

const reducer = (state = initialState, { type, payload = null }) => {
	switch (type) {
		case 'SET_CURRENCY':
			return setSelectedCurrency(state, payload);
		default:
			return state;
	}
};

function setSelectedCurrency(state, payload) {
	console.log('this is the payload in reducer', payload);
	return (state = payload);
}

export default reducer;
