import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
	name: 'products',
	initialState: { value: '$' },
	reducers: {
		changeCurrency: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeCurrency } = productsSlice.actions;

export default productsSlice.reducer;
