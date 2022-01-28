import React, { useEffect } from 'react';
import './Card.sass';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../graphQL/Querries';

const Card = () => {
	console.log(LOAD_PRODUCTS);

	const { error, loading, data } = useQuery(LOAD_PRODUCTS);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div id="card">
			<div>Image</div>
			<div>Name</div>
			<div>Price</div>
		</div>
	);
};

export default Card;
