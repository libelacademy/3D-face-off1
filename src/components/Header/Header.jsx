import React, { useState } from 'react';
import style from './Header.module.css';

import rayas from '../../assets/rayas.svg';

import { FaArrowAltCircleRight, FaPlay, FaMapMarkerAlt } from 'react-icons/fa';

import VideoModal from '../modales/VideoModal/VideoModal';
import video from '../../assets/web2.mp4';

function Header() {
	const [openModal, setOpenModal] = useState(false);

	const handlerClose = () => {
		setOpenModal(false);
	};

	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				{/* bubbles */}
				{/* <img
					className={style.bubble1}
					src='https://sierra.keydesign.xyz/marketing-automation/wp-content/uploads/sites/14/2023/10/sierra-marketing-user-3.png'
					alt='bubble1'
				/>

				<img
					className={style.bubble2}
					src='https://sierra.keydesign.xyz/marketing-automation/wp-content/uploads/sites/14/2023/10/sierra-marketing-user-4.png'
					alt='bubble2'
				/>

				<img
					className={style.bubble3}
					src='https://sierra.keydesign.xyz/marketing-automation/wp-content/uploads/sites/14/2023/10/sierra-marketing-user-2.png'
					alt='bubble3'
				/>

				<img
					className={style.bubble4}
					src='https://sierra.keydesign.xyz/marketing-automation/wp-content/uploads/sites/14/2023/10/sierra-marketing-user-6.png'
					alt='bubble4'
				/> */}
				{/* bubbles */}
				<div className={style.bubble}>
					<h3>3D FACE OFF</h3>
				</div>
				{/* <p style={{ fontWeight: '600' }}>Chía Cundinamarca</p> */}
				<h1>
					<img
						className={style.line}
						src='https://sierra.keydesign.xyz/marketing-automation/wp-content/uploads/sites/14/2023/10/sierra-marketing-shape-3.svg'
						alt='lineas'
					/>
					Conoce cómo funciona el <br /> <span> 3D FACE OFF</span> <br />
				</h1>

				<p>
					En el evento online del 30 de noviembre a las 10 a.m. Hora Col. Te revelaremos todos los
					pasos para participar en el <b>3D FACE OFF</b>
					<br /> y descubrirás todo lo que <b>Libel Academy</b> tiene preparado para ti.
				</p>
				{/* <div className={style.buttonsContainer}>
					<a className={style.moreButton} href='#Form'>
						Regístrate ahora
						<FaArrowAltCircleRight />
					</a>
					<a className={style.playButton} onClick={() => setOpenModal(true)}>
						<div className={style.playIcon}>
							<FaPlay />
						</div>
						Ver video
					</a>
				</div> */}

				<div className={style.videoContainer}>
					<a className={style.playButton2} onClick={() => setOpenModal(true)}>
						<div className={style.playIcon2}>
							<FaPlay />
						</div>
					</a>
					<video src={video} autoPlay loop muted playsInline type='video/mp4'></video>
					<div className={style.box}>
						<a className={style.buttonBox} href='#contenido'>
							Regístrate ahora
							<FaArrowAltCircleRight />
						</a>
						{/* Form */}
						{/* <p>
							<b>Fecha y Hora:</b> 24 de agosto, 8:45 AM <br />
							<b>Lugar:</b> KUAN, Centro de Negocios. Chía Cundinamarca - Col <br />
							<a
								className={style.ubicacion}
								href='https://maps.app.goo.gl/SUvChnRn921kgxeZ6'
								target='blank_'
							>
								<FaMapMarkerAlt style={{ fontSize: '20px' }} /> Ver ubicación
							</a>
						</p> */}

						<img
							className={style.circle1}
							src='https://sierra.keydesign.xyz/wp-content/uploads/2023/10/sierra-marketing-shape-2.svg'
							alt='circle1'
						/>
						<img
							className={style.circle2}
							src='https://sierra.keydesign.xyz/wp-content/uploads/2023/10/sierra-marketing-shape-2.svg'
							alt='circle2'
						/>
					</div>
				</div>
			</div>
			<VideoModal
				modal={openModal}
				url='https://www.youtube.com/watch?v=nxHcpLvLi8U'
				handlerClose={handlerClose}
			/>
		</section>
	);
}

export default Header;
