import { gql } from '@apollo/client';

export const LOAD_PRODUCTS = gql`
	query {
		categories {
			name
			products {
				id
				name
				inStock
				prices {
					currency {
						label
						symbol
					}
					amount
				}
				gallery
			}
		}
	}
`;
