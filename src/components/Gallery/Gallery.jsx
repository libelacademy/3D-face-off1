import React, { useState } from 'react';
import style from './Gallery.module.css';
import img1 from '../../assets/info-mid2.jpg';

import VideoModal from '../modales/VideoModal/VideoModal';

import { FaPlay } from 'react-icons/fa';
import shin from '../../assets/shin.svg';
import thunder from '../../assets/thunder.svg';
import stars from '../../assets/stars.svg';

import centerImage from '../../assets/Gallery/w1.jpg';
import chile from '../../assets/Gallery/w6.jpg';
import ecuador from '../../assets/Gallery/w7.jpg';
import mexico from '../../assets/Gallery/w3.jpg';
import mexico2 from '../../assets/Gallery/w5.jpg';
import italia from '../../assets/Gallery/w2.jpg';
import colombia from '../../assets/Gallery/w4.jpg';

const Gallery = () => {
	const [modal, setModal] = useState(false);
	const [url, setUrl] = useState('');

	const handlerClose = () => setModal(false);
	const handlerOpen = (url) => {
		setUrl(url);
		setModal(true);
	};

	return (
		<>
			<section className={style.sectionMain}>
				<div className={style.titleContainer}>
					<h1>
						<img className={style.shin} src={shin} alt='shin' />
						Resultados
						<img className={style.thunder} src={thunder} alt='thunder' />
						De nuestros alumnos <br />
						<span> Que Aprendieron 3D </span> Desde Cero.
						<img className={style.thunder} src={stars} alt='stars' />
					</h1>
				</div>

				<div className={style.imageMainContainer}>
					<div className={style.imageContainer}>
						<div
							className={style.playButton}
							onClick={() => handlerOpen('https://www.youtube.com/watch?v=zz2SuYtzxks')}
						>
							<FaPlay />
						</div>
						<img src={italia} alt='italia' />
						<div className={style.textContainer}>
							<h2>Alumno de Italia</h2>
							<h1>Alessio Rossi</h1>
						</div>
					</div>

					<div className={style.images2}>
						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/shorts/meY_5taw8Z0')}
							>
								<FaPlay />
							</div>
							<img src={colombia} alt='colombia' />
							<div className={style.textContainer}>
								<h2>Alumno de Colombia</h2>
								<h1>Miguel Pacheco</h1>
							</div>
						</div>
						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=YvFOKq7z4pA')}
							>
								<FaPlay />
							</div>
							<img src={mexico2} alt='mexico2' />
							<div className={style.textContainer}>
								<h2>Alumno de México</h2>
								<h1>Ivan Herrera</h1>
							</div>
						</div>
					</div>

					<div className={style.imageContainerCenter}>
						<div
							className={style.playButton}
							onClick={() => handlerOpen('https://www.youtube.com/watch?v=xmZPVoRM3cA')}
						>
							<FaPlay />
						</div>
						<img src={centerImage} alt='center' />
						<div className={style.textContainer}>
							<h2>Alumno de Colombia</h2>
							<h1>John Alexander</h1>
						</div>
					</div>

					<div className={style.images2}>
						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=WZ0Mb8xgSB8')}
							>
								<FaPlay />
							</div>
							<img src={chile} alt='chile' />
							<div className={style.textContainer}>
								<h2>Alumno de Chile</h2>
								<h1>Iván Gallardo</h1>
							</div>
						</div>
						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=sQedvXz0cOU')}
							>
								<FaPlay />
							</div>
							<img src={ecuador} alt='ecuador' />
							<div className={style.textContainer}>
								<h2>Alumno de Ecuador</h2>
								<h1>Bryan Cachipuendo</h1>
							</div>
						</div>
					</div>

					<div className={style.imageContainer}>
						<div
							className={style.playButton}
							onClick={() => handlerOpen('https://www.youtube.com/watch?v=nAITulnQY8I')}
						>
							<FaPlay />
						</div>
						<img src={mexico} alt='mexico' />
						<div className={style.textContainer}>
							<h2>Alumno de México</h2>
							<h1>Jose Octavio</h1>
						</div>
					</div>
				</div>

				<VideoModal modal={modal} url={url} handlerClose={handlerClose} />
				{/* ---------------------------------- Gallería responsive, > 1000px ---------------------------------- */}

				<div className={style.imageMainContainerMobile}>
					<div className={style.layoutImageContainerMobile}>
						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=zz2SuYtzxks')}
							>
								<FaPlay />
							</div>
							<img src={italia} alt='italia' />
							<div className={style.textContainer}>
								<h2>Alumno de Italia</h2>
								<h1>Alessio Rossi</h1>
							</div>
						</div>

						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=nAITulnQY8I')}
							>
								<FaPlay />
							</div>
							<img src={mexico} alt='mexico' />
							<div className={style.textContainer}>
								<h2>Alumno de México</h2>
								<h1>Jose Octavio</h1>
							</div>
						</div>
					</div>
					<div className={style.layoutImageContainerMobile}>
						<div className={style.images2}>
							<div className={style.imageContainer}>
								<div
									className={style.playButton}
									onClick={() => handlerOpen('https://www.youtube.com/shorts/meY_5taw8Z0')}
								>
									<FaPlay />
								</div>
								<img src={colombia} alt='colombia' />
								<div className={style.textContainer}>
									<h2>Alumno de Colombia</h2>
									<h1>Miguel Pacheco</h1>
								</div>
							</div>
							<div className={style.imageContainer}>
								<div
									className={style.playButton}
									onClick={() => handlerOpen('https://www.youtube.com/watch?v=YvFOKq7z4pA')}
								>
									<FaPlay />
								</div>
								<img src={mexico2} alt='mexico2' />
								<div className={style.textContainer}>
									<h2>Alumno de México</h2>
									<h1>Ivan Herrera</h1>
								</div>
							</div>
						</div>

						<div className={style.imageContainerCenter}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=xmZPVoRM3cA')}
							>
								<FaPlay />
							</div>
							<img src={centerImage} alt='center' />
							<div className={style.textContainer}>
								<h2>Alumno de Colombia</h2>
								<h1>John Alexander</h1>
							</div>
						</div>
					</div>
					<div className={style.layoutImageContainerMobile}>
						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=WZ0Mb8xgSB8')}
							>
								<FaPlay />
							</div>
							<img src={chile} alt='chile' />
							<div className={style.textContainer}>
								<h2>Alumno de Chile</h2>
								<h1>Iván Gallardo</h1>
							</div>
						</div>

						<div className={style.imageContainer}>
							<div
								className={style.playButton}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=sQedvXz0cOU')}
							>
								<FaPlay />
							</div>
							<img src={ecuador} alt='ecuador' />
							<div className={style.textContainer}>
								<h2>Alumno de Ecuador</h2>
								<h1>Bryan Cachipuendo</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
