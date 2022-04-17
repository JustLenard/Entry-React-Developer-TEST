import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategory } from '../../store/actions/category';

const Category = ({ text }) => {
	const dispatch = useDispatch();

	return (
		<Link to={'/'}>
			<div
				onClick={e => {
					dispatch(setCategory(e.target.textContent));
				}}
			>
				{text}
			</div>
		</Link>
	);
};

export default Category;
