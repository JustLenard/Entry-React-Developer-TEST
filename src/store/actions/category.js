export const SET_CATEGORY = 'SET_CATEGORY';

export function setCategory(payload) {
	console.log(payload);
	return {
		type: SET_CATEGORY,
		payload,
	};
}
