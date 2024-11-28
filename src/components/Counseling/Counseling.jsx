import React from 'react';
import './Counseling.css';

import decorationLeft from '../../assets/decorations/counseling_decoration_1.png';
import decorationRight from '../../assets/decorations/counseling_decoration_2.png';

const Counseling = () => {
	return (
		<section className='Counseling'>
			<div className='counseling-container container padding'>
				<img
					src={decorationLeft}
					alt='Decoration Left'
					className='decoration-left'
				/>
				<h1>
					Sé un <span>profesional</span>
					<br /> en menos de un año
					<span>.</span>
				</h1>
				<div className='counseling-content'>
					<p>
						Estudia online desde cualquier parte del mundo con FEEDBACK en vivo
						y en Discord.
					</p>
					<a
						href='https://libel.academy/asesoria'
						target={'_blank'}
						rel='noreferrer'
						className='agenda'
					>
						MÁS INFORMACIÓN
					</a>
				</div>
				<img
					src={decorationRight}
					alt='Decoration Right'
					className='decoration-right'
				/>
			</div>
		</section>
	);
};

export default Counseling;
