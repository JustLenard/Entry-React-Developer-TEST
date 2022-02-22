import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import './PDP.sass';
import Navbar from '../components/navBar/NavBar';
import { useLocation } from 'react-router-dom';
import { ITEM_INFO } from '../components/graphQL/querries';

const PDP = async => {
	const location = useLocation();
	const itemId = location.pathname.split('/')[2];
	const { error, loading, data } = useQuery(ITEM_INFO(itemId));
	const [product, setProduct] = useState(null);
	const [hoveredImage, setHoveredImage] = useState('');

	useEffect(() => {
		if (data !== undefined) {
			setProduct(data.product);
			setHoveredImage(data.product.gallery[0]);
		}
	}, [data]);
	// console.log(product);
	// console.log(data);
	if (product === null) {
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
									alt="Example of the product"
									onMouseOver={e => {
										setHoveredImage(e.target.src);
									}}
								/>
							);
						})}
					</div>
					<img className="big-photo" src={hoveredImage} />
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
