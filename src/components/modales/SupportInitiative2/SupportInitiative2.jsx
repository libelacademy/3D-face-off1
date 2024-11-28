/** @format */

import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import './SupportInitiative2.css';

// import underline from '../../../assets/Vector 39.png';
// import paypal from '../../../assets/Paypal.png';
import logoLibel from '../../../assets/logo-1.png';

import { BsFillCreditCardFill } from 'react-icons/bs';

import { IoLogoWhatsapp, IoClose } from 'react-icons/io5';

// import { closeSupport } from '../../../features/support';

const SupportInitiative2 = ({ closeModal, modal, url }) => {
	const [visibility, setVisibility] = useState('hidden');
	const [container, setContainer] = useState('support-closed');

	// const dispatch = useDispatch();
	// const modal = useSelector((state) => state.support.value.modal);
	// const url = useSelector((state) => state.support.value.url);

	useEffect(() => {
		if (modal) {
			setVisibility('visible');
			setTimeout(() => {
				setContainer('');
			}, 100);
		}
	}, [modal]);

	const handleCloseModal = (event) => {
		if (event.target.className === 'support-initiative') {
			setContainer('support-closed');
			setTimeout(() => {
				// dispatch(closeSupport());
				closeModal();
				setVisibility('hidden');
			}, 200);
		}
	};

	return (
		<div
			className='support-initiative'
			style={{ visibility: `${visibility}` }}
			onClick={handleCloseModal}
		>
			<div className={`support-container ${container}`}>
				<div className='support-elipse-1'></div>
				<div className='support-elipse-2'></div>
				<div className='support-elipse-3'></div>
				<div className='support-content'>
					<button
						className='support-closer'
						onClick={() => {
							setContainer('support-closed');
							setTimeout(() => {
								// handleOpenModal(false);
								// dispatch(closeSupport());
								closeModal();
								setVisibility('hidden');
							}, 200);
						}}
					>
						<IoClose />
					</button>
					{/* <span className='support-head'>Apoya a la iniciativa</span> */}
					<img className='logo-libel' src={logoLibel} alt='logo libel' />

					<h1> Advertencia </h1>

					<p className='support-paragraph'>
						Una vez realices el pago debes enviar el comprobante de pago a
						<b>
							{' '}
							<u>coordinacion@libel.academy</u>{' '}
						</b>
						<br />
						para que sea verificado y asignarte el contenido <b>en la fecha de inicio del curso.</b>
					</p>

					<div className='support-buttons'>
						<a
							className='support-btn support-btn-paypal'
							href={url}
							target={'_blank'}
							rel='noreferrer'
						>
							<BsFillCreditCardFill className='icon-card' />
							Comprar ahora
						</a>

						{/* <p className='support-paragraph2'>
							Si estás fuera de colombia y quieres comprarlo escríbenos para coordinar el envío
						</p>

						<a
							className='support-btn support-btn-other'
							href='https://wa.link/x5qudu'
							target={'_blank'}
							rel='noreferrer'
						>
							<IoLogoWhatsapp style={{ marginRight: 6 }} />
							Grupo de WhatsApp
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SupportInitiative2;
