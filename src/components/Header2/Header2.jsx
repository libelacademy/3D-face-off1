import React, { useState, useEffect } from 'react';
import style from './Header2.module.css';

import VideoModal from '../modales/VideoModal/VideoModal';

import { MdPlayArrow } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

import logo from '../../assets/logo_dot.png';
import logo2 from '../../assets/logoLibelAzul.png';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import flecha from '../../assets/flecha2.png';
import raya2 from '../../assets/raya2.webp';
import conect1 from '../../assets/conect1.webp';
import bola1 from '../../assets/bola1.webp';
import bola2 from '../../assets/bola2.webp';
import bola3 from '../../assets/bola3.webp';
import barras from '../../assets/barras.webp';
import blender from '../../assets/blender.png';
import zbrush from '../../assets/zbrush.png';

import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';

const Header2 = () => {
	const [openModal, setOpenModal] = useState(false);

	const countdownTimestampMs = 'Mon, 20 Jan 2025 16:00:00 GMT-5';

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

	const handlerClose = () => {
		setOpenModal(false);
	};
	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<div className={style.headerContent}>
					<div className={style.bubble}>
						<div>
							<img src={logo} alt='logo-libel' />
						</div>
						<h3>
							<b>ARTISTA 3D es tu oportunidad !!!</b>
						</h3>
					</div>

					<h1 className={style.headerTitle}>
						¡Aprende, <b> Compite </b>& gana! <br />
						más de
						<span>
							{' '}
							2.600 USD
							<img
								src='https://react-bitakon.netlify.app/assets/img/icon/slider-stoke-shape.svg'
								alt='line'
								className={style.headerLine}
							/>
						</span>{' '}
						en premios
					</h1>

					<p style={{ marginTop: '24px' }}>
						Descubre cómo dominar el mundo 3D. No te pierdas la oportunidad de participar en este
						desafío y ser uno de los ganadores. ¡Tendremos más de $2.600 USD en premios en efectivo
						y productos increíbles!
					</p>

					<div className={style.containerButtons}>
						<a className={style.button1} href='#contenido'>
							Regístrate Ahora
						</a>

						{/* <a className={style.button2} href='#'>
							Boton 2
						</a> */}
					</div>

					<div className={style.containerFinal}>
						<div className={style.containerUsers}>
							<div className={style.users}>
								<div className={style.circleStart}>
									<img src={bola1} alt='bola1' />
								</div>
								<div className={style.circle}>
									<img src={bola2} alt='bola2' />
								</div>
								<div className={style.circle}>
									<img src={bola3} alt='bola3' />
								</div>
								<div className={style.circle}>
									<FaPlus />
								</div>
							</div>

							<div className={style.title}>
								<h1> 25k </h1>

								<span>
									Alumnos <br />
									especialistas 3D
								</span>
							</div>
						</div>
						<div className={style.containerPlayButton}>
							<div className={style.playButton} onClick={() => setOpenModal(true)}>
								<MdPlayArrow style={{ fontSize: '28px' }} />
							</div>
							<h2>
								Ver video <br /> del evento
							</h2>
						</div>
					</div>
					<div className={style.containerBrands}>
						{/* <img src={blender} alt='blender' />
						<img src={zbrush} alt='zbrush' /> */}

						<p>
							Inicio del 3D FACE OFF <b>20 de Enero</b>
						</p>
						<div className={style.headerCountdown}>
							<div className={style.headerCountdownItem}>
								<div className={style.headerCountdownNumber}>
									<div className={style.headerCountdownNumberElipse1}></div>
									<div className={style.headerCountdownNumberElipse2}></div>
									<span>{remainingTime.days}</span>
								</div>
								<span>Días</span>
							</div>
							<div className={style.headerCountdownItem}>
								<div className={style.headerCountdownNumber}>
									<div className={style.headerCountdownNumberElipse1}></div>
									<div className={style.headerCountdownNumberElipse2}></div>
									<span>{remainingTime.hours}</span>
								</div>
								<span>Horas</span>
							</div>
							<div className={style.headerCountdownItem}>
								<div className={style.headerCountdownNumber}>
									<div className={style.headerCountdownNumberElipse1}></div>
									<div className={style.headerCountdownNumberElipse2}></div>
									<span>{remainingTime.minutes}</span>
								</div>
								<span>Minutos</span>
							</div>
							<div className={style.headerCountdownItem}>
								<div className={style.headerCountdownNumber}>
									<div className={style.headerCountdownNumberElipse1}></div>
									<div className={style.headerCountdownNumberElipse2}></div>
									<span>{remainingTime.seconds}</span>
								</div>
								<span>Segundos</span>
							</div>
						</div>
					</div>
				</div>
				<div className={style.containerImage}>
					<img className={style.img1} src={img1} alt='1' />
					<img className={style.arrow} src={flecha} alt='flecha' />

					<div className={style.containerMiddleImage}>
						<div className={style.box}>
							<h1>
								98% <img src={barras} alt='barras' />
							</h1>

							<h2>
								de nuestros <span> alumnos </span> aprenden en tiempo record.
							</h2>
						</div>
						<img className={style.img2} src={img2} alt='1' />
					</div>

					<div className={style.box2}>
						<img src={logo2} alt='logo' />
					</div>

					<img className={style.raya} src={raya2} alt='raya2' />
					<img className={style.conect1} src={conect1} alt='conect1' />
				</div>
			</div>
			<VideoModal
				modal={openModal}
				url='https://www.youtube.com/watch?v=RMJBNrz2u80'
				handlerClose={handlerClose}
			/>
		</section>
	);
};

export default Header2;
