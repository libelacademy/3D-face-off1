import React, { useState } from 'react';
import './QuienesSomos.css';
import VideoModal from '../modales/VideoModal/VideoModal';

import img1 from '../../assets/quienesSomos1.jpg';
import img2 from '../../assets/quienesSomos2.jpg';

import { FiClock } from 'react-icons/fi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { MdPlayArrow } from 'react-icons/md';

function QuienesSomos() {
	const [openModal, setOpenModal] = useState(false);

	const handlerClose = () => {
		setOpenModal(false);
	};

	return (
		<section className='quienes-somos-secction'>
			<div className='quienes-somos-container-main'>
				<div className='info-container1'>
					<div className='title-container'>
						<h2>
							¡Recibe GRATIS <br />
							<span>
								Character Creator 4
								<br />
							</span>
							de por vida!
						</h2>
						<p>
							Creareamos personajes para
							<br />
							videojuegos con ZBRUSH, CC4 y más
							<br />
							ver{' '}
							<a
								href='https://www.dropbox.com/s/s8xhdvjthx0jw2f/Personajes_en_CC4_y_Iclone_8.pdf?dl=0'
								target='_blank'
							>
								nuestro plan de estudios.
							</a>
						</p>
						<a
							href='https://calendly.com/libel'
							target='_blank'
							rel='noreferrer'
							className='know-more'
						>
							QUIERO SABER MÁS <IoChevronForward style={{ marginLeft: '2px' }} />
						</a>
					</div>
					<div className='img1-container'>
						<div className='img1-play-button' onClick={() => setOpenModal(true)}>
							<MdPlayArrow />
						</div>
						<img src={img1} alt='Quienes somos 1' />
					</div>
				</div>
				<div className='info-container2'>
					<div className='img2-container'>
						<img src={img2} alt='Quienes somos 2' />
					</div>
					<div className='cuadro-info'>
						<h2>¡3 CERTIFICACIONES!</h2>
						<p>
							Los estudiantes que completen nuestro programa recibirán tres certificaciones en
							conjunto: una de Reallusion, empresa creadora de software como Character Creator e
							iClone; otra de la prestigiosa Universidad Técnica Particular de Loja (UTPL); y una
							tercera de Libel Academy.
						</p>

						<a href='#entrenamientos'>ÚNETE AHORA</a>
					</div>
					<div className='fechas-container'>
						<div className='horarios'>
							<div className='icon-clock'>
								<FiClock />
							</div>

							<div>
								<p>
									<b>Lunes a viernes:</b> 8 pm a 7 pm Hora Col.
								</p>
								<p>
									<b>Sábado:</b> 11 am Hora Col.
								</p>
							</div>
						</div>

						<a href='https://calendly.com/libel/' target='_blank'>
							CHARLAS INFORMATIVAS
						</a>
					</div>
				</div>
			</div>
			<VideoModal
				modal={openModal}
				url={'https://www.youtube.com/watch?v=VV-CwJkcIoY'}
				handlerClose={handlerClose}
			/>
		</section>
	);
}

export default QuienesSomos;
