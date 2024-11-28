import React from 'react';
import './BenefitCart.css';

const BenefitCart = ({ title, body }) => {
	return (
		<div className='Benefit'>
			<div className='benefit-header'>{title}:</div>
			<div className='benefit-body'>{body}</div>
		</div>
	);
};

export default BenefitCart;
