import React, { useState } from 'react';
import './SimpleModal.css';
import { IoClose } from 'react-icons/io5';

function SimpleModal({ close, handlerClose, handleCloseModal, url, buttonName }) {
	return (
		<div className={`Inscriptions ${close ? 'close' : ''}`} onClick={handleCloseModal}>
			<div className={`Inscriptions-content ${close ? 'close' : ''}`}>
				<button
					className='Inscriptions-close-btn'
					onClick={() => {
						handlerClose();
					}}
				>
					<IoClose />
				</button>

				<div className='container-info'>
					<div className='container-title'>
						<h2>¡Advertencia!</h2>
					</div>
					<p>
						Tras completar el pago, serás redirigido a una página web con un botón para
						<b>
							{' '}
							<u>llenar el formulario de inscripción.</u>{' '}
						</b>
						Este paso es indispensable para acceder al 3D Face Off.
					</p>
				</div>
				<a
					href={url}
					target='_blank'
					className='btn-camb'
					onClick={() =>
						setTimeout(() => {
							handlerClose();
						}, 2000)
					}
				>
					{buttonName}
				</a>
			</div>
		</div>
	);
}

export default SimpleModal;
