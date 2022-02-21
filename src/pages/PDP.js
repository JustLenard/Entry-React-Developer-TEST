import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import './PDP.sass';
import Navbar from '../components/navBar/NavBar';

const PDP = async => {
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
	let product;
	const { error, loading, data } = useQuery(itemInfo);
	useEffect(() => {
		if (data !== undefined) {
			console.log(data);
			// console.log(product.gallery[0]);

			// console.log(product.gallery[0]);
			product = data.product;
			console.log(product);
		}
	}, [data]);
	// if (product === null || product === undefined) return null;
	if (product === undefined) {
		return null;
	} else {
		return (
			<>
				<Navbar />
				<div className="PDP-container">
					<div className="small-photos">
						{product.gallery.map(photo => {
							return (
								<img
									className="small-photo"
									src={photo}
									key={photo}
									alt="photo"
								/>
							);
						})}
					</div>
					<div className="big-photo">Big Photo</div>
					<div className="PDP-info">
						<p className="PDP-name">Name</p>
						<div className="PDP-size">
							<p>Size</p>
							<div className="sizes">
								<div>1</div>
								<div>1</div>
								<div>1</div>
								<div>L</div>
							</div>
						</div>
						<div className="PDP-price">
							<p>Price</p>
							<p>600</p>
						</div>
						<div className="add-to-cart-btn">Add to Cart</div>
						<p>Long ass description</p>
					</div>
				</div>
			</>
		);
	}
};

export default PDP;
