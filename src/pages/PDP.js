import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import './PDP.sass';
import Navbar from '../components/navBar/NavBar';
import { useLocation } from 'react-router-dom';
import { ITEM_INFO } from '../components/graphQL/querries';
import { useDispatch } from 'react-redux';
import { setCart } from '../store/actions/cart';

const PDP = () => {
	const location = useLocation();
	const itemId = location.pathname.split('/')[2];
	const { error, loading, data } = useQuery(ITEM_INFO(itemId));
	const [product, setProduct] = useState(null);
	const [hoveredImage, setHoveredImage] = useState('');
	const currency = useSelector(state => state.products);
	const dispatch = useDispatch();
	let selectedAttributes = {};

	const cart = useSelector(state => state.cart);
	// console.log(cart);

	function handleClick(attribute, property) {
		selectedAttributes[attribute] = property;
	}

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

		// Keeps the selected atrributes
		product.attributes.map(attribute => {
			// console.log(attribute);
			selectedAttributes[attribute.id] = null;
		});
		// console.log(selectedAttributes);
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
							{product.attributes.map(attribute => {
								// console.log(attributes);
								return (
									<div key={attribute.id}>
										<div className="attribute-name">{attribute.id}</div>
										<div className="attribute-container">
											{attribute.items.map(item => {
												// console.log(item);
												return (
													<div
														key={item.id}
														className="attribute"
														onClick={() => handleClick(attribute.name, item.id)}
													>
														{item.displayValue}
													</div>
												);
											})}
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
								let notSelected = Object.keys(selectedAttributes).filter(
									item => {
										return selectedAttributes[item] === null;
									}
								);
								notSelected.length === 0
									? dispatch(
											setCart({
												productName: product.name,
												productBrand: product.brand,
												productPrice: product.prices,
												productImage: product.gallery[0],
												productId: product.id,
												productCount: 1,
												productAttributes: { ...selectedAttributes },
											})
									  )
									: console.log('error');
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
