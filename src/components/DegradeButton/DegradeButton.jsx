import React from 'react';
import './DegradeButton.css';
import { IoChevronForward } from 'react-icons/io5';

const DegradeButton = ({ url = '/#', name, width }) => {
	return (
		<a
			href={url}
			target={'_blank'}
			rel='noreferrer'
			className='DegradeButton'
			style={{ width: width }}
		>
			{name}
			<span className='create-account'>
				<IoChevronForward />
			</span>
		</a>
	);
};

export default DegradeButton;
