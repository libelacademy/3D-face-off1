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
				<div className='btn-container'>
					<a
						href={url?.Viviana}
						target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 2000)
						}
					>
						Viviana
					</a>
					<a
						href={url?.Julian}
						target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 2000)
						}
					>
						Julián
					</a>
					<a
						href={url?.Andres}
						target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 2000)
						}
					>
						Andrés
					</a>
					<a
						href={url?.Yiced}
						target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 2000)
						}
					>
						Yiced
					</a>
					<a
						href={url?.Ninguno}
						target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 2000)
						}
					>
						Ninguno
					</a>
				</div>
				
				<div className='container-info'>
					<p>
						Si tu asesor no aparece en las opciones o no tuviste asesor, selecciona 
						<b>
							"Ninguno".
						</b>
					</p>
				</div>
				
			</div>
		</div>
	);
}

export default SimpleModal;
