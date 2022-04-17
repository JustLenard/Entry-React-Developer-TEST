export const SET_CURRENCY = 'SET_CURRENCY';

export default {
	SORT_BY: SET_CURRENCY,
};

export function setSelectedCurrency(payload) {
	console.log(payload);
	return {
		type: SET_CURRENCY,
		payload,
	};
}
