import React, { useState, useEffect } from 'react';
import './Card.sass';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../graphQL/querries';
import { useSelector } from 'react-redux';

const Card = ({ product }) => {
	// const [products, setProducts] = useState([]);
	// const products = useSelector(state => state.products.value);

	// useEffect(() => {
	// 	// console.log(products);
	// 	if (data !== undefined) {
	// 		console.log(data);
	// 	}
	// }, [data]);

	return (
		<div id="card">
			<div>
				<img class="image" src={product.gallery[0]}></img>
			</div>
			<div>{product.name}</div>
			<div>{product.prices[0].amount}</div>
		</div>
	);
};

export default Card;
