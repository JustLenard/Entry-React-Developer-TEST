import React from 'react';
import './NavBar.sass';
import { changeCurrency } from '../features/products.js';
import { changeCategory } from '../features/changeCategory';
import { useDispatch } from 'react-redux';

const NavBar = () => {
	const dispatch = useDispatch();

	// const handleClick = e => {
	// 	dispatch(categorySlice(e.target.value));
	// };
	return (
		<div id="navbar">
			<div className="categories">
				<div
					onClick={e => {
						dispatch(changeCategory(e.target.textContent));
					}}
				>
					All
				</div>
				<div
					onClick={e => {
						dispatch(changeCategory(e.target.textContent));
					}}
				>
					Clothes
				</div>
				<div
					onClick={e => {
						dispatch(changeCategory(e.target.textContent));
					}}
				>
					Tech
				</div>
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
