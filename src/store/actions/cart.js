export const SET_CART = 'SET_CART';

export default {
	SORT_BY: SET_CART,
};

export function setCart(payload) {
	console.log(payload);
	return {
		type: SET_CART,
		payload,
	};
}
