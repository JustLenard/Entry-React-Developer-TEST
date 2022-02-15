import './Home.sass';
import NavBar from '../components/navBar/NavBar.js';
import Card from '../components/card/Card.js';
import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../components/graphQL/querries';
import { useSelector } from 'react-redux';

const Home = () => {
	const { error, loading, data } = useQuery(LOAD_PRODUCTS);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		// console.log(products);
		if (data !== undefined) {
			// console.log(data.categories[0].products);
			setProducts(data.categories[0].products);
			console.log(products);
		}
	});
	return (
		<div id="main-container">
			<NavBar />

			<h1 className="category-name">Category Name</h1>
			<div className="card-holder">
				{products.map(product => {
					return <Card key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
};

export default Home;
