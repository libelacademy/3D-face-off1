import React from 'react';
import './ItineraryCard.css';

const ItineraryCard = ({ image, event, description, subTitle }) => {
	return (
		<div className='ItineraryCard'>
			<img src={image} alt='Itinerary Event' />
			<h2>{event}</h2>
			<h3>{subTitle}</h3>
			<p>
				<b>PREMIOS</b>
			</p>

			{description.map((event, i) => (
				<p key={i}>
					<b>{event.title}</b>
					{event.description}
				</p>
			))}
		</div>
	);
};

export default ItineraryCard;
