import React from 'react';
import style from './Planning.module.css';

import logo from '../../assets/libel-icon.png';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { IoMdArrowForward } from 'react-icons/io';

import innovacion from '../../assets/innovacion.png';
import beca from '../../assets/beca.png';
import lanzamiento from '../../assets/lanzamiento.png';
import reunion from '../../assets/reunion.png';

const Planning = () => {
	return (
		<section className={style.sectionMain}>
			<h1 className={style.title}>
				Premios que tendrás al asistir a nuestro <br />{' '}
				<span>
					EVENTO
					<img
						src='https://thegenius.co/html/zoso/assets/images/shapes/section-four-title-shape.png'
						alt='line'
					/>{' '}
				</span>{' '}
				Presencial
			</h1>
			<p className={style.paragraph}>
				<b>Día:</b> 24 de agosto, 8:45 AM (Hora Colombia) <br /> <b>Lugar:</b> Centro de Negocios
				KUAN junto a la Cámara de Comercio de Chía, frente al centro comercial Fontanar.
			</p>
			<div className={style.cardsContainer}>
				<div className={`${style.cards} ${style.color1}`}>
					{/* <img src={logo} alt='logo' /> */}
					<h1>Curso Gratis online en vivo</h1>
					<div className={style.icon1}>
						<img src={innovacion} alt='innovacion' />
					</div>
					<p>Formalizar la inscripción del entrenamiento.</p>
					<a className={style.button} href='#Form'>
						Incríbete <IoMdArrowForward />
					</a>
				</div>

				<div className={`${style.cards} ${style.color2}`}>
					{/* <img src={logo} alt='logo' /> */}

					<h1>Participarás por BECAS</h1>
					<div className={style.icon1}>
						<img src={beca} alt='beca' />
					</div>
					<p>Aplica a Becas para el 3DCAMP</p>
					<a className={style.button} href='#Form'>
						Incríbete <IoMdArrowForward />
					</a>
				</div>

				<div className={`${style.cards} ${style.color3}`}>
					{/* <img src={logo} alt='logo' /> */}
					<h1>Sorteo Licencias REALLUSION</h1>
					<div className={style.icon1}>
						<img src={lanzamiento} alt='lanzamiento' />
					</div>
					<p>Daremos licencias de Character Creator 4 y iClone 8 por 6 meses</p>
					<a className={style.button} href='#Form'>
						Incríbete <IoMdArrowForward />
					</a>
				</div>

				<div className={`${style.cards} ${style.color4}`}>
					{/* <img src={logo} alt='logo' /> */}
					<h1>Conferencistas invitados</h1>
					<div className={style.icon1}>
						<img src={reunion} alt='reunion' />
					</div>
					<p>Nos acompañarán online desde "Taiwán" Enoc Burgos y "España" Óscar Fernández</p>
					<a className={style.button} href='#Form'>
						Incríbete <IoMdArrowForward />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Planning;
