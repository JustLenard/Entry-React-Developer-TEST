import React from 'react';
import './NavBar.sass';

const NavBar = () => {
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
					<select>
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
