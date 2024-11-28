/** @format */

import React, { useEffect, useState } from 'react';
import './Lesson.css';

import Image from 'react-image-webp';

import image1 from '../../../assets/study-method/class1.jpeg';
import imageWebp1 from '../../../assets/study-method/class1.webp';

import image2 from '../../../assets/study-method/class2.jpg';

import { IoBulbOutline, IoPaperPlaneOutline, IoCogOutline, IoSchoolOutline } from 'react-icons/io5';
import { AiFillQuestionCircle } from 'react-icons/ai';

import { useDispatch } from 'react-redux';

import { openTrainingMore } from '../../../features/training';

const Lesson = () => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			setActive(true);
		}, 100);
	}, [active]);

	return (
		<div className='Description' style={active ? { opacity: 1 } : { opacity: 0 }}>
			<div className='description-content'>
				<div className='description-content-header'>
					<h2 className='description-content-title'>Entrenamiento guiado y personalizado</h2>
					<div className='description-content-separator'></div>
				</div>
				<p>
					Aprende desde cero y crea sorprendentes modelos usando lo ultimas actualizaciones de
					ZBRUSH Y CHARACTER CREATOR 4.
				</p>
				<ul>
					<li>
						<IoBulbOutline className='description-icon' />
						Tres meses de acompañamiento online en vivo
					</li>
					<li>
						<IoPaperPlaneOutline className='description-icon' />
						Acceso a un grupo de Discord privado
						{/* <AiFillQuestionCircle
							className='description-question'
							onClick={() => {
								dispatch(
									openTrainingMore({
										modal: true,
										title: 'Discord Privado',
										more: 'Discord es una plataforma de interacción donde estarás en contacto con tus compañeros y el maestro. Podrás hacer preguntas y subir tus avances.',
									})
								);
							}}
						/> */}
					</li>
					<li>
						<IoCogOutline className='description-icon' />
						Grabación de clases en vivo
					</li>
					<li>
						<IoSchoolOutline className='description-icon' />3 certificaciones en una
					</li>
				</ul>

				<a
					className='button-description'
					href='https://calendly.com/libel'
					target={'_blank'}
					rel='noreferrer'
				>
					Solicitar Asesoría
				</a>
			</div>
			<div className='description-images-container'>
				<div className='description-image image-description-up'>
					<Image src={image1} webp={imageWebp1} />
				</div>
				<div className='description-image image-description-down'>
					<Image src={image2} webp={image2} />
				</div>
			</div>
		</div>
	);
};

export default Lesson;
