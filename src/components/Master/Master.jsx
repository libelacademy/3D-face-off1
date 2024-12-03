/** @format */

import React, { useEffect, useState } from 'react';
import './Master.css';
import { useDispatch } from 'react-redux';
import MasterItem from '../MaterItem/MaterItem';

import decoration1 from '../../assets/decorations/02.png';
import decoration2 from '../../assets/decorations/04.png';
import off from '../../assets/50.png';

import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';
import contentMaster from '../../utils/contentMaster';
import SimpleModal from '../SimpleModal/SimpleModal';

import line from '../../assets/underline.png';

const Master = () => {
	const dispatch = useDispatch();
	const [close, setClose] = useState(true);
	const [url, setUrl] = useState('');
	const [name, setName] = useState('');

	const handlerClose = (url, name) => {
		close ? setClose(false) : setClose(true);
		setUrl(url);
		// setName(name);
	};

	const handleCloseModal = (event) => {
		if (event.target.className === 'Inscriptions ') {
			setClose(true);
		}
	};

	const countdownTimestampMs = 'Mon, 16 Dec 2024 23:59:00 GMT-5';

	const defaultRemainingTime = {
		seconds: '00',
		minutes: '00',
		hours: '00',
		days: '00',
	};

	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	return (
		<section className='Master' id='contenido'>
			<SimpleModal
				close={close}
				handlerClose={handlerClose}
				handleCloseModal={handleCloseModal}
				url={url}
				buttonName={name}
			/>
			<div className='master-container container'>
				<img src={decoration1} alt='Master Decoration' className='decoration-1' />
				<img src={decoration2} alt='Master Decoration' className='decoration-2' />

				<div className='master-header'>
					<h1 className='master-title' style={{ marginTop: '24px' }}>
						ENTRENAMIENTOS
						<br />
						<span>
							DEL 3D{' '}
							<b>
								<img src={line} alt='header-underline' className='header-underline-master' />
								FACE OFF
							</b>
						</span>
					</h1>
					<p className='header-paragraph'>
						¡Aprovecha esta increíble oportunidad para aprender ZBrush y Blender con acompañamiento
						online en vivo, competir, y ganar dinero en efectivo, junto con muchos otros beneficios!
					</p>

					<h1 className='master-title2'>
						Pasaremos estos
						<br />
						<span>
							conceptos{' '}
							<b>
								<img src={line} alt='header-underline' className='header-underline-master' />a 3D
							</b>
						</span>
					</h1>
					<a
						href='https://drive.google.com/file/d/1UeYq2bh2u3KNZspi_nkuPEubhAriKJLq/view?usp=sharing'
						target='_blank'
						rel='noreferrer'
						className='btn-accesototal'
						style={{ margin: '0px' }}
					>
						Ver ejemplos
					</a>
				</div>

				<img className='off-img' src={off} alt='70off' />

				<div className='cnt-countdown'>
					<div className='membership-countdown'>
						<h5 className='membership-countdown-title'>Válido hasta el 16 de Dic</h5>
						<div className='membership-countdown-counter'>
							<div className='membership-countdown-counter-item'>
								<span>Día(s)</span>
								<p>{remainingTime.days}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Hora(s)</span>
								<p>{remainingTime.hours}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Minuto(s)</span>
								<p>{remainingTime.minutes}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Segundo(s)</span>
								<p>{remainingTime.seconds}</p>
							</div>
						</div>
					</div>
				</div>

				<div className='master-body' id='master-items1'>
					{contentMaster.map((item, index) => (
						<MasterItem key={index} content={item} handlerClose={handlerClose} />
					))}
				</div>
				<div className='button-asesoria-container'>
					<h2>¿Tienes preguntas?</h2>
					<a
						// href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NL7WWC2XLMD7U'
						href='https://calendly.com/d/cqc4-92f-xhg/asesoria-personalizada-gratuita'
						target='_blank'
						rel='noreferrer'
						className='btn-accesototal'
					>
						Agenda una asesoría
					</a>
				</div>
			</div>
		</section>
	);
};

export default Master;
