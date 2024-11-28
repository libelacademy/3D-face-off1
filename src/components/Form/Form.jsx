import React, { useState, useEffect } from 'react';
import style from './Form.module.css';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';

import { FaArrowAltCircleRight, FaPlay } from 'react-icons/fa';

import line from '../../assets/line.png';
import img1 from '../../assets/form1.png';
import img2 from '../../assets/form2.png';

import paises, { cursos } from '../../utils/paises';
import VideoModal from '../modales/VideoModal/VideoModal';

function Form() {
	const [openModal, setOpenModal] = useState(false);
	const [formularioEnviado, setFormularioEnviado] = useState(false);

	const handlerClose = () => {
		setOpenModal(false);
	};
	const [templateParams, setTemplateParams] = useState({
		Last_Name: '',
		LEADCF15: '',
		Email: '',
		Phone: '',
		Country: '',
		LEADCF14: '',
		LEADCF4: '',
		LEADCF5: '',
		Description: '',
		// pc: '',
		// software: '',
		// master: '',
	});

	const serviceID = 'service_gf1k02v';
	const templateID = 'template_4xlpwjb';
	const publicKey = 'BuWgfPYHinQz7pH8T';

	const handlerSubmit = (event) => {
		event.preventDefault();

		if (formularioEnviado) {
			console.log('El formulario ya fue enviado');
			return;
		}

		setFormularioEnviado(true);

		setTemplateParams({
			Last_Name: '',
			LEADCF15: '',
			Email: '',
			Phone: '+57 ',
			Country: '',
			LEADCF14: '',
			LEADCF4: '',
			LEADCF5: '',
			Description: '',
		});

		Swal.fire({
			title: '¡Enviado!',
			text: 'Tus datos se han envíado satisfactoriamente',
			icon: 'success',
			confirmButtonText: 'Aceptar',
		});
		window.open('https://wa.link/s7xz0k', '_blank');

		setTimeout(() => {
			setFormularioEnviado(false);
		}, 2000);
	};

	// .then((result) => {
	// 	if (result.isConfirmed) {
	// 		window.open('https://wa.link/s7xz0k', '_blank');
	// 	}
	// });

	const handlerChange = (event) => {
		const nameProp = event.target.name;
		let valueProp = event.target.value;
		setTemplateParams({ ...templateParams, [nameProp]: valueProp });
	};

	const handlerCountrySelect = (event) => {
		const valueProp = event.target.value;
		const paisActual = paises.find((e) => e.nombre === valueProp);

		if (paisActual) {
			setTemplateParams({
				...templateParams,
				Country: paisActual.nombre,
				Phone: paisActual.ind,
			});
		}
	};

	const countdownTimestampMs = 'Sat, 30 Nov 2024 10:00:00 GMT-5';

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
		<section className={style.Header} id='Form'>
			<div className={style.containerMain}>
				<img className={style.img1} src={img1} alt='personaje 1' />
				<img className={style.img2} src={img2} alt='personaje 2' />
				<div className={style.containerAcademia3d}>
					<div className={style.infoContainer}>
						{/* <h4>CUPOS LIMITADOS</h4> */}
						<h1>
							Únete al lanzamiento del
							<br />
							<span>
								3D FACE OFF
								<img src={line} alt='line' />
							</span>
						</h1>
						{/* <p>En Chía, Cundinamarca, el sábado 24 de agosto de 8:45 AM</p> */}
					</div>

					{/* <div className={style.buttonsContainer}>
						<a className={style.moreButton} href='#Table'>
							Inicia HOY
							<FaArrowAltCircleRight />
						</a>
						<a className={style.playButton} onClick={() => setOpenModal(true)}>
							<div className={style.playIcon}>
								<FaPlay />
							</div>
							Ver video
						</a>
					</div> */}
				</div>
				<div className={style.cntCountdown}>
					<div className={style.membershipCountdown}>
						<h5 className={style.membershipCountdownTitle}>30 de Nov. 10 am Col.</h5>
						<div className={style.membershipCountdownCounter}>
							<div className={style.membershipCountdownCounterItem}>
								<span>Día(s)</span>
								<p>{remainingTime.days}</p>
							</div>
							<div className={style.membershipCountdownCounterItem}>
								<span>Hora(s)</span>
								<p>{remainingTime.hours}</p>
							</div>
							<div className={style.membershipCountdownCounterItem}>
								<span>Minuto(s)</span>
								<p>{remainingTime.minutes}</p>
							</div>
							<div className={style.membershipCountdownCounterItem}>
								<span>Segundo(s)</span>
								<p>{remainingTime.seconds}</p>
							</div>
						</div>
					</div>
				</div>
				<div className={style.containerForm} id='crmWebToEntityForm'>
					<h1>
						Regístrate <span>AHORA</span>
					</h1>
					<h2>Conoce el 3D FACE OFF</h2>
					{/* ----------------------------------------------- */}
					<form
						id='webform4793673000075813159'
						action='https://crm.zoho.com/crm/WebToLeadForm'
						name='WebToLeads4793673000075813159'
						method='POST'
						accept-charset='UTF-8'
					>
						<input
							style={{ display: 'none' }}
							type='text'
							name='xnQsjsdp'
							value='f96691af4df7806b4f0714926c6203644ce2bc53be95f78ff199928a05bd422d'
						/>
						<input style={{ display: 'none' }} type='hidden' name='zc_gad' id='zc_gad' value='' />
						<input
							type='text'
							style={{ display: 'none' }}
							name='xmIwtLD'
							value='430c46ee88ad60f0f052c88f15eb956034d0c0f544034d8cd9fa81014af0808d48faa05f56ef42b8b9032471ee256e22'
						/>
						<input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
						<input
							type='text'
							style={{ display: 'none' }}
							name='returnURL'
							value='https&#x3a;&#x2f;&#x2f;libel.academy&#x2f;inscripcion-confirmada'
						/>
						{/*---------------- Campos ---------------- */}
						<div className={style.containerInputMain}>
							<div className={style.titleInput}>
								<label for='Last_Name'>
									Nombres y Apellidos<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className={style.inputContainer}>
								<input
									type='text'
									id='Last_Name'
									name='Last Name'
									// onChange={handlerChange}
									// value={templateParams.Last_Name}
									placeholder='Tu nombre completo'
									autoComplete='off'
									maxLength='80'
									required
								></input>
							</div>
						</div>
						<div className={style.containerInputMain}>
							<div className={style.titleInput}>
								<label for='Country'>
									País<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className={style.inputContainer}>
								{/* <input type='text' id='Country' name='Country' maxlength='100'></input> */}
								<select
									id='Country'
									className={templateParams.Country ? style.selected : style.noSelected}
									onChange={handlerCountrySelect}
									value={templateParams.Country ? templateParams.Country : ''}
									changeitem='SIGNUP_FORM_FIELD'
									name='Country'
									type='text'
									required
								>
									<option hidden={true} value=''>
										Selecciona el país
									</option>

									{paises.map((pais, i) => (
										<option key={i} value={pais.nombre}>
											{pais.nombre}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className={style.containerInputMain}>
							<div className={style.titleInput}>
								<label for='Email'>
									Correo electrónico<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className={style.inputContainer}>
								<input
									onChange={handlerChange}
									value={templateParams.Email}
									type='email'
									ftype='email'
									id='Email'
									name='Email'
									crmlabel=''
									autoComplete='off'
									maxlength='100'
									required
								></input>
							</div>
						</div>
						<div className={style.containerInputMain}>
							<div className={style.titleInput}>
								<label for='Phone'>
									Número de celular<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className={style.inputContainer}>
								<input
									onChange={handlerChange}
									value={templateParams.Phone}
									type='text'
									id='Phone'
									name='Phone'
									autoComplete='off'
									maxlength='30'
									required
								></input>
							</div>
						</div>
						<div className={style.containerInputMain}>
							<div className={style.titleInput}>
								<label for='LEADCF14'>
									Perfil profesional<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className={style.inputContainer}>
								<select
									onChange={handlerChange}
									value={templateParams.LEADCF14 ? templateParams.LEADCF14 : ''}
									className={templateParams.LEADCF14 ? style.selected : style.noSelected}
									id='LEADCF14'
									name='LEADCF14'
									required
								>
									<option hidden={true} value='-None-'>
										Selecciona
									</option>
									<option value='Animador'>Animador</option>
									<option value='Arquitecto'>Arquitecto</option>
									<option value='Artista&#x20;3D'>Artista 3D</option>
									<option value='Artista&#x20;Digital'>Artista Digital</option>
									<option value='Dise&ntilde;ador&#x20;Grafico'>Dise&ntilde;ador Grafico</option>
									<option value='Dise&ntilde;ador&#x20;industrial'>
										Dise&ntilde;ador industrial
									</option>
									<option value='Estudiante&#x20;de&#x20;Colegio'>Estudiante de Colegio</option>
									<option value='Estudiante&#x20;de&#x20;universidad'>
										Estudiante de universidad
									</option>
									<option value='Ilustrador'>Ilustrador</option>
									<option value='Ingeniero&#x20;de&#x20;sistemas'>Ingeniero de sistemas</option>
									<option value='Ingeniero&#x20;Multimedia'>Ingeniero Multimedia</option>
									<option value='Profesional&#x20;en&#x20;cine&#x20;y&#x20;animaci&oacute;n'>
										Profesional en cine y animaci&oacute;n
									</option>
									<option value='Publicista'>Publicista</option>
									<option value='Otro'>Otro</option>
								</select>
							</div>
						</div>
						<div className={style.containerTextAreaMain}>
							<div className={style.titleTextArea}>
								<label for='LEADCF4'>
									Software de diseño<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className={style.textAreaContainer}>
								<textarea
									onChange={handlerChange}
									value={templateParams.LEADCF4}
									id='LEADCF4'
									name='LEADCF4'
									placeholder='¿Qué software de diseño manejas y en qué nivel?'
									autoComplete='off'
									maxlength='200'
									required
								></textarea>
							</div>
						</div>
						<div className={style.containerTextAreaMain}>
							<div className={style.titleTextArea}>
								<label for='LEADCF5'>
									Características de tu computador<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className={style.textAreaContainer}>
								<textarea
									onChange={handlerChange}
									value={templateParams.LEADCF5}
									id='LEADCF5'
									name='LEADCF5'
									maxlength='255'
									placeholder='¿Qué características tiene tu computador?'
									autoComplete='off'
									required
								></textarea>
							</div>
						</div>
						{/*---------------- Campos ocultos ---------------- */}
						<div style={{ display: 'none' }}>
							<div>
								<label for='LEADCF10'>Asesor</label>
							</div>
							<div>
								<select id='LEADCF10' name='LEADCF10'>
									<option value='-None-'>-None-</option>
									<option value='Gilberto'>Gilberto</option>
									<option value='Juieth'>Juieth</option>
									<option value='Julian'>Julian</option>
									<option selected value='Otro'>
										Otro
									</option>
									<option value='Sebastian'>Sebastian</option>
									<option value='Sonia'>Sonia</option>
									<option value='Viviana'>Viviana</option>
									<option value='Yiced'>Yiced</option>
								</select>
							</div>
						</div>
						<div style={{ display: 'none' }}>
							<div>
								<label for='Lead_Source'>Fuente de Posible cliente</label>
							</div>
							<div>
								<select id='Lead_Source' name='Lead Source'>
									<option value='-None-'>-None-</option>
									<option value='WhatsApp'>WhatsApp</option>
									<option value='Facebook'>Facebook</option>
									<option value='Instagram'>Instagram</option>
									<option value='Calendly'>Calendly</option>
									<option value='Formulario&#x20;web&#x20;home'>Formulario web home</option>
									<option value='Formulario&#x20;web&#x20;m&aacute;ster'>
										Formulario web m&aacute;ster
									</option>
									<option value='Correo'>Correo</option>
									<option value='Importaci&oacute;n'>Importaci&oacute;n</option>
									<option value='Feria&#x20;del&#x20;Libro'>Feria del Libro</option>
									<option value='Curso&#x20;gratuito'>Curso gratuito</option>
									<option selected value='Formulario&#x20;Web'>
										Formulario Web
									</option>
									<option value='Evento&#x20;Presencial&#x20;24&#x20;agosto'>
										Evento Presencial 24 agosto
									</option>
								</select>
							</div>
						</div>
						<div style={{ display: 'none' }}>
							<div>
								<label for='LEADCF12'>Formulario de Ads</label>
							</div>
							<div>
								<input
									type='text'
									id='LEADCF12'
									aria-required='false'
									aria-label='LEADCF12'
									name='LEADCF12'
									aria-valuemax='255'
									maxlength='255'
									value='3D&#x20;Face-Off'
								></input>
							</div>
						</div>
						<div>
							<div className={style.reCaptchaContainer}>
								<label className={style.checkBox}>
									<input type='checkbox' id='cbox1' value='first_checkbox' required /> Acepto
									las&nbsp;
									<a href='https://libel.academy/politicas-de-privacidad/' target={'_blank'}>
										políticas de privacidad
									</a>
								</label>
							</div>
							<div class='zcwf_col_fld'>
								<input
									className={formularioEnviado ? style.buttonSubmitDisabled : style.buttonSubmit}
									disabled={formularioEnviado}
									type='submit'
									id='formsubmit'
									value='Enviar'
									title='Enviar'
								/>
								{/* <input
									type='reset'
									class='zcwf_button'
									name='reset'
									value='Restablecer'
									title='Restablecer'
								/> */}
							</div>
						</div>
						<script
							id='wf_anal'
							src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=ad696aa969107cb15116e076913716801fe5ba9b8990a5a6e6a968dc034223a1ec3b1c7a2922854abad75d659c01637cgid1c1426f8556e6ea04442bed77b770ec10392076273c1fd34d7faa29f22523421gidc821552ed2fcc4c614a19e58cba5abd623bbb4fcae7c8f826f9c5031e2d0dc3egidd68db3cf02d33fd34fddf97095ba9bd4a59f7c0c707b7c00bb03be9cdfe74dcf&tw=57b0a0ee78d5e8e9c9bfed41fb33824ee3e3118b6499f86c97ec262e6c1c4cf4'
						></script>
					</form>
				</div>
			</div>
			<VideoModal
				modal={openModal}
				url='https://www.youtube.com/watch?v=7JcNPj7y1l4&feature=youtu.be'
				handlerClose={handlerClose}
			/>
		</section>
	);
}

export default Form;
