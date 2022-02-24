import React from 'react';
import Navbar from '../components/navBar/NavBar';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cart = useSelector(state => state.cart.value);
	console.log(cart);

	return (
		<div>
			<Navbar />
			<p>HI</p>
		</div>
	);
};

export default Cart;
