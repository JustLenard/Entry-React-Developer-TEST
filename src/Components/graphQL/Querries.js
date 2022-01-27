import { gql } from '@apollo/client';

export const LOAD_PRODUCTS = gql`
	query {
		product(id: "huarache-x-stussy-le") {
			name
			name
			gallery
		}
	}
`;
