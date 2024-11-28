import React, { useEffect, useState } from 'react';
import '../Lesson/Lesson.css';

import Image from 'react-image-webp';

import image1 from '../../../assets/study-method/requeriments1.jpeg';
import imageWebp1 from '../../../assets/study-method/requeriments1.webp';

import image2 from '../../../assets/study-method/requeriments2.jpeg';
import imageWebp2 from '../../../assets/study-method/requeriments2.webp';

import {
	IoBulbOutline,
	IoPaperPlaneOutline,
	IoCogOutline,
	IoSchoolOutline,
} from 'react-icons/io5';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { openTrainingMore } from '../../../features/training';

const Requirements = () => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			setActive(true);
		}, 100);
	}, [active]);

	return (
		<div
			className='Description'
			style={active ? { opacity: 1 } : { opacity: 0 }}
		>
			<div className='description-content'>
				<div className='description-content-header'>
					<h2 className='description-content-title'>
						¿Qué necesitas para iniciar?
					</h2>
					<div className='description-content-separator'></div>
				</div>
				<p>
					Iniciar tu aprendizaje con nosotros es realmente fácil, solo debes
					tener en cuenta algunos requisitos:
				</p>
				<ul>
					<li>
						<IoBulbOutline className='description-icon' />
						No necesitas conocimientos previos
					</li>
					<li>
						<IoPaperPlaneOutline className='description-icon' />
						Softwares necesarios{' '}
						<AiFillQuestionCircle
							className='description-question'
							onClick={() => {
								dispatch(
									openTrainingMore({
										modal: true,
										title: 'Software',
										more: 'Recuerda que Blender es un software gratuito.',
									})
								);
							}}
						/>
					</li>
					<li>
						<IoCogOutline className='description-icon' />
						Equipo de computo con capacidad mínima
						<AiFillQuestionCircle
							className='description-question'
							onClick={() => {
								dispatch(
									openTrainingMore({
										modal: true,
										title: 'Requerimientos Mínimos',
										more: 'Puedes trabajar con un computador de gama media i5 de 7ma generación con 8 a 16 de RAM (como mínimo) y una tarjeta de vídeo gt 1030 o gtx 1050. Es importante trabajar con tabla digital.',
									})
								);
							}}
						/>
					</li>
					<li>
						<IoSchoolOutline className='description-icon' />
						15 años en adelante
						<AiFillQuestionCircle
							className='description-question'
							onClick={() => {
								dispatch(
									openTrainingMore({
										modal: true,
										title: 'Menor de Edad',
										more: 'Los menores de edad deben estar acompañados por un tutor legal, quien debe firmar una autorización para que el menor participe en el máster',
									})
								);
							}}
						/>
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
					<Image src={image2} webp={imageWebp2} />
				</div>
			</div>
		</div>
	);
};

export default Requirements;
