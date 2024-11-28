/** @format */

import React, { useEffect, useState } from 'react';
import '../Lesson/Lesson.css';

import Image from 'react-image-webp';

import image1 from '../../../assets/study-method/material1.jpeg';
import imageWebp1 from '../../../assets/study-method/material1.webp';

import image2 from '../../../assets/study-method/material2.jpg';
import imageWebp2 from '../../../assets/study-method/material2.webp';

import {
	IoBulbOutline,
	IoPaperPlaneOutline,
	IoCogOutline,
	IoSchoolOutline,
} from 'react-icons/io5';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { openTrainingMore } from '../../../features/training';

const Material = () => {
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
						Conceptos, materiales y todo un equipo a tu disposición
					</h2>
					<div className='description-content-separator'></div>
				</div>
				<p>
					Libel te entrega el concepto en 2D para la realización del
					entrenamiento con la tranquilidad de tener el acompañamiento de
					nuestro instructor y todo lo necesario para tu aprendizaje.
				</p>
				<ul>
					<li>
						<IoBulbOutline className='description-icon' />
						Nuestras clases online en vivo se graban
					</li>
					<li>
						<IoPaperPlaneOutline className='description-icon' />
						Material de referencia y archivos de descarga
					</li>
					<li>
						<IoCogOutline className='description-icon' />
						Ejercicios y correcciones de cada uno de tus procesos
					</li>
					<li>
						<IoSchoolOutline className='description-icon' />
						Certificado de cumplimiento de metas
						<AiFillQuestionCircle
							className='description-question'
							onClick={() => {
								dispatch(
									openTrainingMore({
										modal: true,
										title: 'Certificado',
										more: 'Se obtiene el certificado siempre y cuando entregues tus resultados y sean aprobados por el equipo de evaluación.',
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

export default Material;
