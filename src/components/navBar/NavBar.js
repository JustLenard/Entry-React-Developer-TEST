import React from 'react';
import './NavBar.sass';
import { changeCurrency } from '../features/products.js';
import { useDispatch } from 'react-redux';

const NavBar = () => {
	const dispatch = useDispatch();

	return (
		<div id="navbar">
			<div className="categories">
				<div>Women</div>
				<div>Men</div>
				<div>Kids</div>
			</div>
			<div className="logo">
				<div>Logo</div>
			</div>
			<div className="currency-cart">
				<div className="currency">
					<select
						onChange={e => {
							dispatch(changeCurrency(e.target.value));
						}}
					>
						<option value="$">$</option>
						<option value="£">£</option>
						<option value="A$">A$</option>
						<option value="¥">¥</option>
						<option value="₽">₽</option>
					</select>
				</div>
				<div className="card">Cart</div>
			</div>
		</div>
	);
};

export default NavBar;
