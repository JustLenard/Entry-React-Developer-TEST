import { createSlice } from '@reduxjs/toolkit';
import { useQuery, gql } from '@apollo/client';

// const getAll = gql`
// 	query {
// 		categories {
// 			name
// 			products {
// 				id
// 				name
// 				inStock
// 				prices {
// 					currency {
// 						label
// 						symbol
// 					}
// 					amount
// 				}
// 				gallery
// 			}
// 		}
// 	}
// `;

export const productsSlice = createSlice({
	name: 'products',
	initialState: { value: 'f' },
	reducers: {
		getProducts: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default productsSlice.reducer;
