import React from 'react';
import './CloseInscriptions.css';
import { IoClose } from 'react-icons/io5';

import imgPopUp from '../../../assets/modalMarzo.jpg';
import { useState } from 'react';

const CloseInscriptions = () => {
	const [close, setClose] = useState(false);

	const handleCloseModal = (event) => {
		if (event.target.className === 'Inscriptions ') {
			setClose(true);
		}
	};

	return (
		<div
			className={`Inscriptions ${close ? 'close' : ''}`}
			onClick={handleCloseModal}
		>
			<div className={`Inscriptions-content ${close ? 'close' : ''}`}>
				<button
					className='Inscriptions-close-btn'
					onClick={() => {
						setClose(true);
					}}
				>
					<IoClose />
				</button>
				<img src={imgPopUp} alt='close-inscriptions' />
				<a
					id='pop-up-home'
					href='https://libel.academy/3d-camp'
					className='btn-camb'
				>
					Ver ahora
				</a>
			</div>
		</div>
	);
};

export default CloseInscriptions;
