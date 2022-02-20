import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

const PDP = props => {
	const itemId = useSelector(state => state.itemId.value);
	console.log(itemId);

	const itemInfo = gql`
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
	const { error, loading, data } = useQuery(itemInfo);

	useEffect(() => {
		if (data !== undefined) {
			console.log(data);
		}
	}, [data]);
	return (
		<div className="PDP-container">
			<div className="small-photos">
				<div className="small-photo">1</div>
				<div className="small-photo">1</div>
				<div className="small-photo">1</div>
			</div>
			<div className="big-photo">Big Photo</div>
			<div className="pdp-info">
				<p className="pdp-name">Name</p>
				<div className="pdp-size">
					<p>Size</p>
					<div className="sizes">
						<div>1</div>
						<div>1</div>
						<div>1</div>
						<div>L</div>
					</div>
				</div>
				<div className="pdp-price">
					<p>Price</p>
					<p>600</p>
				</div>
				<div className="add-to-cart-btn">Add to Cart</div>
				<p>Long ass description</p>
			</div>
		</div>
	);
};

export default PDP;
