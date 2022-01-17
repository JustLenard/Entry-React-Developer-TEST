import React from 'react';
import './Home.sass';
import NavBar from '../Components/NavBar/NavBar.js';
import Card from '../Components/Card/Card.js';

const Home = () => {
	return (
		<div id="main-container">
			<NavBar />

			<h1 className="category-name">Category Name</h1>
			<div className="card-holder">
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
