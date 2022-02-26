import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import './PDP.sass';
import Navbar from '../components/navBar/NavBar';
import { useLocation } from 'react-router-dom';
import { ITEM_INFO } from '../components/graphQL/querries';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/features/cart.js';

const PDP = () => {
	const location = useLocation();
	const itemId = location.pathname.split('/')[2];
	const { error, loading, data } = useQuery(ITEM_INFO(itemId));
	const [product, setProduct] = useState(null);
	const [hoveredImage, setHoveredImage] = useState('');
	const currency = useSelector(state => state.products.value);
	const dispatch = useDispatch();
	// onChange={e => {
	// 	dispatch(changeCurrency(e.target.value));
	// }}
	// console.log(addToCart);
	const cart = useSelector(state => state.cart.value);
	console.log(cart);

	useEffect(() => {
		if (data !== undefined) {
			setProduct(data.product);
			setHoveredImage(data.product.gallery[0]);
		}
	}, [data]);
	// console.log(data);
	if (product === null) {
		return null;
	} else {
		const correctPrice = product.prices.filter(
			price => price.currency.symbol === currency
		)[0].amount;
		console.log(product);
		// console.log(correctPrice);
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
						<p className="PDP-name">{product.name}</p>
						<p className="brand-name">{product.brand}</p>
						<div className="PDP-atributes">
							{product.attributes.map(attributes => {
								// console.log(attributes.id);
								return (
									<div key={attributes.id}>
										<div className="attribute-name">{attributes.id}</div>
										<div className="attribute-container">
											{attributes.items.map(item => (
												<div key={item.id} className="attribute">
													{item.displayValue}
												</div>
											))}
										</div>
									</div>
								);
							})}
						</div>
						<div className="PDP-price">
							<p>Price</p>
							<p>
								{currency}
								{correctPrice}
							</p>
						</div>
						<div
							className="add-to-cart-btn"
							onClick={() => {
								dispatch(
									addToCart({
										productName: product.name,
										productBrand: product.brand,
										productPrice: product.prices,
										productImage: product.gallery[0],
										productId: product.id,
										productCount: 1,
									})
								);
							}}
						>
							Add to cart
						</div>
						<p>{product.description}</p>
					</div>
				</div>
			</>
		);
	}
};

export default PDP;
