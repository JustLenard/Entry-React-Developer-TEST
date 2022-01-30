import { createSlice } from '@reduxjs/toolkit';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../graphQL/querries';

const { error, loading, data } = useQuery(LOAD_PRODUCTS);
// const [products, setProducts] = useState([]);

// useEffect(() => {
// 	// console.log(data);
// 	if (data !== undefined) {
// 		console.log(data.categories[0].products);
// 	}
// }, [data]);

export const productsSlice = createSlice({
	name: 'products',
	initialState: { value: data },
	reducers: {
		getProducts: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default productsSlice.reducer;
