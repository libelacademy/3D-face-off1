import React, { useRef, useState } from 'react';
import style from './ContentMaster.module.css';

import Carousel, { consts } from 'react-elastic-carousel';

import contentMaster, { contentMaster2 } from '../../utils/contentMaster';
import MasterItem from '../MaterItem/MaterItem';
import VideoModal from '../modales/VideoModal/VideoModal';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import line from '../../assets/line.png';
import decoration1 from '../../assets/decorations/02.png';
import decoration2 from '../../assets/decorations/04.png';

const ContentMaster = () => {
	const carousel = useRef(null);
	const [openModal, setOpenModal] = useState(false);
	const [url, setUrl] = useState('false');

	const handlerOpen = (url) => {
		setOpenModal(true);
		setUrl(url);
	};

	const handlerClose = () => {
		setOpenModal(false);
	};

	const customArrows = ({ type, onClick, isEdge }) => {
		const pointer = type === consts.PREV ? <IoChevronBack /> : <IoChevronForward />;
		return (
			<button
				onClick={onClick}
				disabled={isEdge}
				style={{
					fontSize: 36,
					border: 'none',
					backgroundColor: 'transparent',
					color: '#6000de',
					position: 'relative',
				}}
			>
				{pointer}
			</button>
		);
	};

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 460, itemsToShow: 2, itemsToScroll: 1 },
		{ width: 768, itemsToShow: 3, itemsToScroll: 1, showArrows: false },
		{ width: 1200, itemsToShow: 3, itemsToScroll: 1, showArrows: false },
	];

	return (
		<section className={style.master} id='contenido'>
			<div className={style.masterContainer}>
				<img src={decoration1} alt='Master Decoration' className={style.decoration1} />
				<img src={decoration2} alt='Master Decoration' className={style.decoration2} />

				<div className={style.masterHeader}>
					<h1 className={style.masterTitle}>
						CONTENIDO{' '}
						<span>
							CC4
							<img src={line} alt='underline' />
						</span>
					</h1>
					<p className={style.headerParagraph}>
						Estudia online con FEEDBACK en vivo y en Discord y tendrás cursos PREMIUM de distintos
						niveles <span>por 1 año</span> para que puedas pulir tu técnica.
					</p>
				</div>
				<div className={style.masterBody}>
					<Carousel
						ref={carousel}
						breakPoints={breakPoints}
						pagination={false}
						renderArrow={customArrows}
						className='master-carousel'
					>
						{contentMaster2.map((item, index) => (
							<MasterItem key={index} content={item} handlerOpen={handlerOpen} />
						))}
					</Carousel>
					<button
						className={`${style.resultsButtons} ${style.masterPrevious}`}
						onClick={() => {
							carousel.current.slidePrev();
						}}
					>
						<IoChevronBack />
					</button>
					<button
						className={`${style.resultsButtons} ${style.masterNext}`}
						onClick={() => {
							carousel.current.slideNext();
						}}
					>
						<IoChevronForward />
					</button>
				</div>
			</div>
			<VideoModal modal={openModal} url={url} handlerClose={handlerClose} />
		</section>
	);
};

export default ContentMaster;
