/** @format */
import './Learn.css';

import libelUp from '../../assets/Learn/libel-up2.png';

import ZBrush from '../../assets/Learn/Zbrush.png';
import Blender from '../../assets/Learn/blender.png';
import zoom from '../../assets/Learn/zoom.png';
import discord from '../../assets/Learn/discord.png';
import libel from '../../assets/Learn/libel.png';

import line from '../../assets/line.png';

import classOnline from '../../assets/Learn/Clases en video icon.png';
import discordIcon from '../../assets/Learn/Discord Icon.png';
import feedbackIcon from '../../assets/Learn/Feedback icon.png';
import tabletsIcon from '../../assets/Learn/Tabletas icon.png';
import internetIcon from '../../assets/Learn/Internet icon.png';
import computerIcon from '../../assets/Learn/Computador icon.png';

// import { useDispatch } from 'react-redux';
// import { openAccess } from '../features/access';

const Learn = () => {
	// const dispatch = useDispatch();
	return (
		<section className='learn' id='learn'>
			{/* <div className='learn-icons'>
				<div className='learn-icons-doted-line'></div>
				<img style={{ maxWidth: '70px' }} src={ZBrush} alt='ZBrush' />
				<img src={Blender} alt='Blender' />
				<img src={zoom} alt='zoom' />
				<img src={discord} alt='discord' />
				<img src={libel} alt='libel' />
			</div> */}
			<img src={libelUp} alt='libel up' className='learn-character' />
			<div className='learn-container container padding'>
				<h2 className='learn-title'>
					Recibirás este
					<br />
					<span>
						curso GRATIS <img className='line-img' src={line} alt='line' />
					</span>
				</h2>

				{/* <div className='learn-separator'></div> */}
				<p className='learn-paragraph'>
					Confía en el proceso y recuerda que todos iniciamos desde cero.
				</p>
				<div className='learn-subjects'>
					<div className='learn-first-part'>
						<div className='learn-item'>
							<img src={classOnline} alt='class online' className='learn-subject-icon' />
							<div className='learn-subject'>
								<h4 className='learn-subject-title'>Aprende desde cero</h4>
								<p className='learn-subject-content'>
									Definimos tu curva de aprendizaje para que inicies de manera efectiva.
								</p>
							</div>
						</div>
						<div className='learn-item'>
							<img src={discordIcon} alt='class online' className='learn-subject-icon' />
							<div className='learn-subject' style={{ paddingRight: 50 }}>
								<h4 className='learn-subject-title'>Acceso a Discord</h4>
								<p className='learn-subject-content'>
									Haz parte de nuestra comunidad de Discord y aumenta tu red de contactos.
								</p>
							</div>
						</div>

						<div className='learn-item'>
							<img src={feedbackIcon} alt='class online' className='learn-subject-icon' />
							<div className='learn-subject' style={{ marginBottom: 0, width: 290 }}>
								<h4 className='learn-subject-title'>Cumple tus objetivos</h4>
								<p className='learn-subject-content'>
									Contarás con módulos y herramientas en la plataforma de Libel Academy para
									ayudarte a cumplir tus objetivos.
								</p>
							</div>
						</div>
					</div>
					<div className='learn-separator-two'></div>
					<div className='learn-second-part'>
						<div className='learn-item'>
							<img src={tabletsIcon} alt='class online' className='learn-subject-icon' />
							<div className='learn-subject'>
								<h4 className='learn-subject-title'>Becas por resultados</h4>
								<p className='learn-subject-content'>
									En el evento daremos a conocer el metodo para ganar becas en entrenamientos más
									avanzados.
								</p>
							</div>
						</div>

						<div className='learn-item'>
							<img src={internetIcon} alt='class online' className='learn-subject-icon' />
							<div className='learn-subject' style={{ paddingLeft: 50 }}>
								<h4 className='learn-subject-title'>Aprendizaje efectivo</h4>
								<p className='learn-subject-content'>
									Hemos logrado mejorar el perfil profesional de miles de alumnos en más de 15
									países.
								</p>
							</div>
						</div>

						<div className='learn-item'>
							<img src={computerIcon} alt='class online' className='learn-subject-icon' />
							<div className='learn-subject' style={{ marginTop: -10 }}>
								<h4 className='learn-subject-title'>Requisitos técnicos</h4>
								<p className='learn-subject-content'>
									Internet estable, mouse, tabla digital y computador Core i5 de 8GB a 16GB con
									tarjeta de vídeo (como mínimo).
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <a
					href='https://calendly.com/libel/libelup/2022-11-21T20:30:00-05:00?month=2022-11&date=2022-11-21'
					target='_blank'
					rel='noreferrer'
					className='learn-free-access'
					// style={{border: 'none'}}
					style={{ border: 'none' }}
				>
					Únete Gratis
				</a> */}
			</div>
		</section>
	);
};

export default Learn;
