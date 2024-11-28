import React from 'react';
import './Itinerary.css';

import itineraryEvents from '../../utils/itinerary';
import ItineraryCard from '../ItineraryCard/ItineraryCard';

const Itinerary = () => {
	return (
		<section className='Itinerary' id='itinerary'>
			<div className='itinerary-container'>
				<div className='itinerary-header'>
					<h1>
						<span>PREMIOS POR</span>
						<br />
						CATEGORIAS
					</h1>
					<p>
						La calificación dependerá de tus resultados, los cuales
						<br />
						estarán sujetos a una tabla de calificación.
					</p>
				</div>
				<div className='itinerary-body'>
					{itineraryEvents.map((event, i) => (
						<ItineraryCard
							key={i}
							subTitle={event.subTitle}
							image={event.image}
							event={event.event}
							description={event.description}
						/>
					))}
				</div>

				<div className='itinerary-end'>
					<h1> Menciones honoríficas</h1>
					<p>
						Cursos en vídeo - Acceso Anual <br />
						Membresía Libel Black - Acceso Anual
						<br />
						Tarjeta de regalo de Netflix
						<br />
						Acceso trimestral licencias CC4 y Iclone 8
					</p>
				</div>
			</div>
		</section>
	);
};

export default Itinerary;
