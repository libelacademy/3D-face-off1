import React, { useState } from 'react';
import './SimpleModal.css';
import { IoClose } from 'react-icons/io5';

function SimpleModal({ close, handlerClose, handleCloseModal }) {
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
						<h2>Importante</h2>
					</div>
					<p>
						En Libel solo te cobramos el valor que te ofrecemos. Sin embargo, dependiendo de la TRM
						(la tasa de cambio que determina el valor del dólar en la moneda de tu país), de la
						pasarela de pago utilizada y de las políticas de tu región, podrían aplicarse impuestos
						adicionales o cargos bancarios, como spreads u otros, que podrían variar el valor final
						a pagar.
					</p>
				</div>
			</div>
		</div>
	);
}

export default SimpleModal;
