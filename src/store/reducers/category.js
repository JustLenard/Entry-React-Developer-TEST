import SET_CATEGORY from '../actions/currency';

let initialState = 'All';

const reducer = (state = initialState, { type, payload = null }) => {
	switch (type) {
		case 'SET_CATEGORY':
			return setCategory(state, payload);
		default:
			return state;
	}
};

function setCategory(state, payload) {
	return (state = payload);
}

export default reducer;
