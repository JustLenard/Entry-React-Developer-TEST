import React, { useState, useEffect } from 'react';
import './Card.sass';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../graphQL/querries';
import { useSelector } from 'react-redux';

const Card = ({ product }) => {
	const currency = useSelector(state => state.products.value);

	// const [products, setProducts] = useState([]);
	// const products = useSelector(state => state.products.value);

	// useEffect(() => {
	// 	// console.log(products);
	// 	if (data !== undefined) {
	// 		console.log(data);
	// 	}
	// }, [data]);

	const correctPrice = product.prices.filter(
		price => price.currency.symbol === currency
	)[0].amount;

	return (
		<div id="card">
			<div>
				<img className="image" src={product.gallery[0]}></img>
			</div>
			<div>{product.name}</div>
			<div>
				{currency}
				{correctPrice}
			</div>
		</div>
	);
};

export default Card;
