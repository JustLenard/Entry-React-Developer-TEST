import './Home.sass';
import NavBar from '../components/navBar/NavBar.js';
import Card from '../components/card/Card.js';
import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../components/graphQL/querries';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
	const { error, loading, data } = useQuery(LOAD_PRODUCTS);
	const [products, setProducts] = useState([]);
	const newCurrency = useSelector(state => state.products);
	const currentCategory = useSelector(state => state.category);
	const state = useSelector(state => state);

	// console.log(state);

	// console.log('this is current category ', currentCategory);
	// console.log('this is data', data);

	useEffect(() => {
		if (data !== undefined) {
			// setProducts(data.categories[0].products);
			// console.log(data.categories);
			setProducts(
				data.categories.filter(
					category => category.name === currentCategory.toLowerCase()
				)[0].products
			);
		}
	});
	return (
		<div id="main-container">
			<NavBar />

			<h1 className="category-name">Category Name</h1>
			<div className="card-holder">
				{products.map(product => {
					return (
						<Link to={`/pdp/${product.id}`} key={product.id}>
							<Card key={product.id} product={product} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
