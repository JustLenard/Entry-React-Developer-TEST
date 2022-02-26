import React, { useState } from 'react';
import Navbar from '../components/navBar/NavBar';
import { useSelector } from 'react-redux';
import './Cart.sass';

const Cart = () => {
	const cart = useSelector(state => state.cart.value);
	console.log(cart);
	const [count, setCount] = useState(1);

	return (
		<div>
			<Navbar />
			<p>Cart</p>
			{cart.map(product => {
				console.log(product);
				// let count = product.productCount;
				console.log(count);
				return (
					<div key={product.productId} className="cart-item">
						<div className="cart-info">
							<div>{product.productName}</div>
							<div>{product.productBrand}</div>
							<div>{product.productid}Price</div>
						</div>
						<div className="cart-amount">
							<div
								className="increase-count"
								onClick={() => {
									setCount(count + 1);
									console.log(count);
								}}
							>
								+
							</div>
							<div>{count}</div>
							<div className="decrease-count">-</div>
						</div>
						<img src={product.productImage} className="cart-image" />
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
