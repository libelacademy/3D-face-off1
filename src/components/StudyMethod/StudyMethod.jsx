import React, { useState } from 'react';
import './StudyMethod.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import line from '../../assets/line.png';

import StudyNavigationItem from '../StudyNavigationItem/StudyNavigationItem';

import Description from '../methods/Description/Description';
import Lesson from '../methods/Lesson/Lesson';
import Material from '../methods/Material/Material';
import Requirements from '../methods/Requirements/Requirements';

const StudyMethod = () => {
	const [navigationItem, setNavigationItem] = useState(0);

	const handleNavigation = (id) => {
		setNavigationItem(id);
	};

	const handleContent = (id) => {
		if (id === 0) {
			return <Description />;
		}
		if (id === 1) {
			return <Lesson />;
		}
		if (id === 2) {
			return <Material />;
		}
		if (id === 3) {
			return <Requirements />;
		}
	};

	return (
		<section className='StudyMethod' id='study'>
			<div className='study-container container padding'>
				<div className='study-header'>
					<div className='study-title'>
						<h1>
							MÉTODO{' '}
							<span>
								<b>DE ESTUDIO</b>
								<img src={line} alt='underline' />
							</span>
						</h1>
					</div>
				</div>
				<div className='study-content'>
					<div className='study-content-navigation'>
						{/* <StudyNavigationItem
							active={navigationItem === 0 ? true : false}
							id={0}
							item={'Descripción'}
							handleNavigation={handleNavigation}
						/>
						<StudyNavigationItem
							active={navigationItem === 1 ? true : false}
							id={1}
							item={'Clases'}
							handleNavigation={handleNavigation}
						/>
						<StudyNavigationItem
							active={navigationItem === 2 ? true : false}
							id={2}
							item={'Material'}
							handleNavigation={handleNavigation}
						/>
						<StudyNavigationItem
							active={navigationItem === 3 ? true : false}
							id={3}
							item={'Requisitos'}
							handleNavigation={handleNavigation}
						/> */}
						<Swiper
							className='swiper-main'
							slidesPerView={1}
							spaceBetween={0}
							breakpoints={{
								425: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1000: {
									slidesPerView: 4,
								},
							}}
						>
							<SwiperSlide className='swiper-slide'>
								<StudyNavigationItem
									active={navigationItem === 0 ? true : false}
									id={0}
									item={'Descripción'}
									handleNavigation={handleNavigation}
								/>
							</SwiperSlide>

							<SwiperSlide className='swiper-slide'>
								<StudyNavigationItem
									active={navigationItem === 1 ? true : false}
									id={1}
									item={'Clases'}
									handleNavigation={handleNavigation}
								/>
							</SwiperSlide>

							<SwiperSlide className='swiper-slide'>
								<StudyNavigationItem
									active={navigationItem === 2 ? true : false}
									id={2}
									item={'Material'}
									handleNavigation={handleNavigation}
								/>
							</SwiperSlide>

							<SwiperSlide className='swiper-slide'>
								<StudyNavigationItem
									active={navigationItem === 3 ? true : false}
									id={3}
									item={'Requisitos'}
									handleNavigation={handleNavigation}
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<div className='study-information'>{handleContent(navigationItem)}</div>
				</div>
			</div>
		</section>
	);
};

export default StudyMethod;
