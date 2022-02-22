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

export function ITEM_INFO(itemId) {
	return gql`
query {
	product(id: "${itemId}") {
		name
		gallery
		brand
		inStock
		description
		prices {
			currency {
				label
				symbol
			}
			amount
		}
		attributes {
			name
			id
			type
			items {
				id
				value
				displayValue
			}
		}
	}
}
`;
}
