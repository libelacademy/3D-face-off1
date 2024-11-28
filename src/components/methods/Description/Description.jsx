/** @format */

import React, { useEffect, useState } from 'react';
import './Description.css';

import Image from 'react-image-webp';

import image1 from '../../../assets/study-method/description1.jpeg';

import image2 from '../../../assets/study-method/description2.jpg';

import { IoBulbOutline, IoPaperPlaneOutline, IoCogOutline, IoSchoolOutline } from 'react-icons/io5';

const Description = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setActive(true);
		}, 100);
	}, [active]);

	const handleLink = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute('href');
		const location = document.querySelector(target).offsetTop;
		window.scrollTo({
			left: 0,
			top: location - 80,
		});
	};

	return (
		<div className='Description' style={active ? { opacity: 1 } : { opacity: 0 }}>
			<div className='description-content'>
				<div className='description-content-header'>
					<h2 className='description-content-title' style={{ fontSize: 28 }}>
						Crea y anima sorprendentes personajes para animación, videojuegos y cine
					</h2>
					<div className='description-content-separator'></div>
				</div>
				<p>
					Conoce, disfruta y aprende el excelente flujo de trabajo para la creación de personajes 3D
					con CHARACTER CREATOR 4, ZBRUSH y mucho más contenido que tenemos para ti.
				</p>
				<ul>
					<li>
						<IoBulbOutline className='description-icon' />
						Tres meses de entrenamiento intensivo
					</li>
					<li>
						<IoPaperPlaneOutline className='description-icon' />
						Inicia tu curso de aprendizaje guiado
					</li>
					<li>
						<IoCogOutline className='description-icon' />
						Usaremos la última versión de Blender
					</li>
					<li>
						<IoSchoolOutline className='description-icon' />
						Recibe 3 certificaciones en una
					</li>
				</ul>
				<a
					href='https://www.dropbox.com/s/s8xhdvjthx0jw2f/Personajes_en_CC4_y_Iclone_8.pdf?dl=0'
					target='_blank'
					// onClick={handleLink}
					className='button-description'
				>
					Ver Temario
				</a>
			</div>
			<div className='description-images-container'>
				<div className='description-image image-description-up'>
					<Image src={image1} webp={image1} />
				</div>
				<div className='description-image image-description-down'>
					<Image src={image2} webp={image2} />
				</div>
			</div>
		</div>
	);
};

export default Description;
