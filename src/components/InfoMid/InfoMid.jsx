import React from 'react';
import style from './InfoMid.module.css';

import flecha1 from '../../assets/flechas1.webp';
import flecha2 from '../../assets/flechas2.webp';
import flecha3 from '../../assets/flechas3.webp';

import infoMid1 from '../../assets/kuan.png';
import infoMid2 from '../../assets/info-mid2.jpg';
import infoMid3 from '../../assets/info-mid3.jpg';

import { FaUsers, FaMedal } from 'react-icons/fa';

function InfoMid() {
	return (
		<section className={style.mainSection}>
			<img className={style.flecha1} src={flecha1} alt='flecha1' />
			<div className={style.container1}>
				<div className={style.container1_Info1}>
					<div className={style.bubble1}>
						<div>
							<FaUsers />
						</div>

						<h4>Libel Academy</h4>
					</div>
					<img src={infoMid1} alt='muestra' />
					<div className={style.bubble2}>
						<div>
							<FaMedal />
						</div>

						<h4>KUAN CENTRO EMPRESARIAL</h4>
						<p>Ubicado en Chia</p>
					</div>
				</div>
				<div className={style.container1_Info2}>
					<h1>Ubicación del evento</h1>
					<p>
						Nuestro evento se llevará a cabo el sábado 24 de agosto de 8:45 AM a 12:00 PM en el
						Centro Empresarial KUAN, junto a la Cámara de Comercio de Chía.
					</p>
					<div style={{ display: 'flex', gap: '12px' }}>
						<a href='https://maps.app.goo.gl/npc3D6Db7jBQ5qNA7' target='blank_'>
							{' '}
							Ver ubicación{' '}
						</a>
						<a href='https://wa.link/d9of81' target='blank_'>
							{' '}
							¿Preguntas?{' '}
						</a>
					</div>
				</div>
			</div>
			{/* Segundo modulo */}
			{/* <div className={style.container2}>
				<div className={style.container2_Info2}>
					<h1>Certificado</h1>
					<p>
						Recibe la certificación de LIBEL ACADEMY por el plan de Especialista 3D, Libel evaluará
						cada uno de tus resultados para que puedas recibir tu certificado, recuerda que debes
						entregar los resultados en las fechas estipuladas por Libel.
					</p>
					<a href='#Form'> Inicia HOY </a>
				</div>
				<div className={style.container2_Info1}>
					<div className={style.bubble1}>
						<div>
							<FaUsers />
						</div>

						<h4>Libel Academy</h4>
					</div>
					<img src={infoMid2} alt='muestra' />
					<div className={style.bubble2}>
						<div>
							<FaMedal />
						</div>

						<h4>Alumno Carlos Acevedo</h4>
						<p>Creación de escultura cartoon de nuestro alumno Colombiano</p>
					</div>
				</div>
			</div>
			<img className={style.flecha2} src={flecha2} alt='flecha2' /> */}
			{/* Tercer modulo */}
			{/* <div className={style.container3}>
				<div className={style.container3_Info2}>
					<h1>Resultados desde el primer mes</h1>
					<p>
						Libel cuenta con alumnos en más de 15 países en los cuales han logrado aumentar nivel 3D
						y lo mejor es que el 88% han aprendido desde cero con Libel Academy.
					</p>
					<a href='#Form'> Inicia HOY </a>
				</div>
				<div className={style.container3_Info1}>
					<img src={infoMid3} alt='muestra' />
				</div>
			</div>
			<img className={style.flecha3} src={flecha3} alt='flecha3' />
			<a className={style.registrate} href='#Table'>
				Registrarse ahora
			</a> */}
		</section>
	);
}

export default InfoMid;
