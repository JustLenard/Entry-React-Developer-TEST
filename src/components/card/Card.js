import React, { useState, useEffect } from 'react';
import './Card.sass';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../graphQL/querries';
import { useSelector } from 'react-redux';

const Card = () => {
	// const { error, loading, data } = useQuery(LOAD_PRODUCTS);
	// const [products, setProducts] = useState([]);
	const products = useSelector(state => state.products.value);

	useEffect(() => {
		console.log(products);
		// if (data !== undefined) {
		// 	console.log(data);
		// }
	});

	return (
		<div id="card">
			<div>Image</div>
			<div>Name</div>
			<div>Price</div>
		</div>
	);
};

export default Card;
