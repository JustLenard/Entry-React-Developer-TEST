import React from 'react';
import './Modal.sass';

const Modal = ({ isOpen }) => {
	if (!isOpen) return null;
	return (
		<>
			<div className="dim-background" />
			<div className="modal">
				<p>My shopping list. x items</p>
				<div className="item">
					<div className="item-info">
						<div className="item-name">THe name</div>
						<div className="item-price">$40</div>
						<div className="item-size">
							<button>S</button>
							<button>M</button>
						</div>
					</div>
					<div className="change-amount">
						<div>+</div>
						<div>amount</div>
						<div>-</div>
					</div>
					<div className="img-container">
						<div>image</div>
					</div>
				</div>
				<div className="total">
					<p>Total</p>
					<p>amount</p>
				</div>
				<div className="view-bag-check-out">
					<button className="view-bag">VIEW BAG</button>
					<button className="check-out">CHECK-OUT</button>
				</div>
			</div>
			;
		</>
	);
};

export default Modal;
