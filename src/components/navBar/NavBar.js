import React, { useState } from 'react';
import './NavBar.sass';
import { useDispatch } from 'react-redux';
import Modal from '../modal/Modal';
import { setCategory } from '../../store/actions/category';
import { setSelectedCurrency } from '../../store/actions/currency';
import { Link } from 'react-router-dom';
import Category from './Category';

const NavBar = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div id="navbar">
			<div className="categories">
				<Category text="All" />
				<Category text="Clothes" />
				<Category text="Tech" />
			</div>
			<div className="logo">
				<div>Logo</div>
			</div>
			<div className="currency-cart">
				<div className="currency">
					<select
						onChange={e => {
							console.log('this is selected currency', e.target.value);
							dispatch(setSelectedCurrency(e.target.value));
						}}
					>
						<option value="$">$</option>
						<option value="£">£</option>
						<option value="A$">A$</option>
						<option value="¥">¥</option>
						<option value="₽">₽</option>
					</select>
				</div>
				<div className="cart" onClick={() => setIsOpen(!isOpen)}>
					Cart
					<Modal isOpen={isOpen} />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
