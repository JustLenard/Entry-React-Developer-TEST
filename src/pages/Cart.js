import React from 'react';
import Navbar from '../components/navBar/NavBar';
import { useSelector } from 'react-redux';
import './Cart.sass';

const Cart = () => {
	const cart = useSelector(state => state.cart.value);
	console.log(cart);

	return (
		<div>
			<Navbar />
			<p>Cart</p>
			{cart.map(product => {
				return (
					<div key={product.productId} className="cart-item">
						<div className="cart-info">
							<div>{product.productName}</div>
							<div>{product.productBrand}</div>
							<div>{product.productid}Price</div>
						</div>
						<div className="cart-amount">
							<div>+</div>
							<div>+</div>
							<div>+</div>
						</div>
						<img src={product.productImage} className="cart-image" />
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
