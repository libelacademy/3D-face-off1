import React, { useEffect, useState } from 'react';
import './Memberships.css';

import memberships from '../../utils/memberships';
import MembershipCard from '../MembershipCard/MembershipCard';
import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';

import Image from 'react-image-webp';

import image from '../../assets/award-background.png';
import imageWebp from '../../assets/award-background.webp';
import line from '../../assets/line.png';
import underline from '../../assets/underline.png';
import decoration from '../../assets/decorations/counseling_decoration_2.png';
import decoration2 from '../../assets/decorations/counseling_decoration_1.png';

const Memberships = () => {
	const membershipsList = memberships.map((training) => (
		<MembershipCard key={training.id} membership={training} />
	));

	const countdownTimestampMs = 'Sun, 30 Jul 2023 20:00:00 GMT-5';

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
		<section className='Memberships' id='entrenamientos'>
			<div className='memberships-container container padding'>
				{/* <Image
					webp={imageWebp}
					src={image}
					alt='Memberships Background'
					className='memberships-image'
				/> */}
				<img src={decoration} alt='Membership Decoration' className='membership-decoration' />
				<img src={decoration2} alt='Membership Decoration' className='membership-decoration2' />

				<div className='memberships-header'>
					<h1>
						Entrenamiento
						<br />
						<span>
							<b>Online en vivo</b>
						</span>
						<img className='convert-underline' src={line} alt='underline' />
					</h1>
				</div>
				<div className='cnt-countdown'>
					<div className='membership-countdown'>
						<h5 className='membership-countdown-title'>Inicio de clases 30 de julio</h5>
						<div className='membership-countdown-counter'>
							<div className='membership-countdown-counter-item'>
								<span>Día(s)</span>
								<p>{remainingTime.days}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Hora(s)</span>
								<p>{remainingTime.hours}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Minuto(s)</span>
								<p>{remainingTime.minutes}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Segundo(s)</span>
								<p>{remainingTime.seconds}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='memberships-content'>{membershipsList}</div>
			</div>
		</section>
	);
};

export default Memberships;
