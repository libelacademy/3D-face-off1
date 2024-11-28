import React, { useState } from 'react';
import style from './Tables.module.css';

import PricingTable from '../PricingTable/PricingTable';
import SimpleModal from '../SimpleModal/SimpleModal';
import VideoModal from '../modales/VideoModal/VideoModal';
import pricings from '../../utils/PricingTable';

import { FaPlay } from 'react-icons/fa';

import table1 from '../../assets/table1.jpg';
import table2 from '../../assets/table2.jpg';
import line from '../../assets/line.png';

const Tables = () => {
	const [close, setClose] = useState(true);
	const [url, setUrl] = useState('');
	const [name, setName] = useState('');
	const [openModalVideo, setOpenModalVideo] = useState(false);

	const handlerClose = (url, name) => {
		close ? setClose(false) : setClose(true);
		setUrl(url);
		setName(name);
	};

	const handleCloseModal = (event) => {
		if (event.target.className === 'Inscriptions ') {
			setClose(true);
		}
	};

	const handlerCloseVideo = () => {
		setOpenModalVideo(false);
	};

	return (
		<>
			<section className={style.mainSection} id='Table'>
				<SimpleModal
					close={close}
					handlerClose={handlerClose}
					handleCloseModal={handleCloseModal}
					url={url}
					buttonName={name}
				/>
				<VideoModal
					modal={openModalVideo}
					url='https://www.youtube.com/watch?v=7JcNPj7y1l4'
					handlerClose={handlerCloseVideo}
				/>
				<div className={style.infoContainer}>
					<h4>APRENDE A TU RITMO</h4>
					<h1>
						PACK 6X1 <br />
						<span>
							BLENDER O ZBRUSH
							<img src={line} alt='line' />
						</span>
					</h1>
					<p>Confía en el proceso y recuerda que todos iniciamos desde cero.</p>
				</div>

				<div className={style.mainContainer}>
					{pricings.map((item, i) => (
						<div key={i}>
							<div className={style.imgContainer}>
								<div className={style.playIcon} onClick={() => setOpenModalVideo(true)}>
									<FaPlay />
								</div>
								<img src={item.img} alt='table1' />
							</div>
							<PricingTable content={item} handlerClose={handlerClose} />
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Tables;
