import { createSlice } from '@reduxjs/toolkit';

export const itemIdSlice = createSlice({
	name: 'itemId',
	initialState: { value: '' },
	reducers: {
		getItemId: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { getItemId } = itemIdSlice.actions;

export default itemIdSlice.reducer;
