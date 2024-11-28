import React, { useState } from 'react';
import style from './Solutions.module.css';

import ref1 from '../../assets/ref1.png';

import { FaPlus, FaMinus } from 'react-icons/fa';

const Solutions = () => {
	const [active, setActive] = useState({
		c1: false,
		c2: true,
		c3: false,
	});

	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<h1 className={style.title}>
					¡Prepárate para el <br /> 3D Face Off!
				</h1>
				<p>
					Descubre todo lo que necesitas saber sobre nuestro emocionante evento online
					<br />
					desde cómo participar hasta los increíbles premios que puedes ganar.
				</p>
				<div className={style.container1}>
					<div className={style.cardsContainer}>
						<div className={`${style.card} ${active.c1 ? style.cardActive : style.cardDisable} `}>
							<div
								className={style.titleCard}
								onClick={() => setActive({ c1: true, c2: false, c3: false })}
							>
								<h1>¿Qué es el 3D Face Off?</h1>
								{active.c1 ? <FaMinus /> : <FaPlus />}
							</div>
							<p>
								Es un desafío online de 45 días en el que aprenderás junto a expertos en 3D a crear
								proyectos increíbles y tendrás la oportunidad de competir por más de $2,600 USD en
								premios, repartidos entre los ganadores.
							</p>
						</div>

						<div className={`${style.card} ${active.c2 ? style.cardActive : style.cardDisable} `}>
							<div
								className={style.titleCard}
								onClick={() => setActive({ c1: false, c2: true, c3: false })}
							>
								<h1>¿Cómo puedo participar en el 3D FACE OFF?</h1>
								{active.c2 ? <FaMinus /> : <FaPlus />}
							</div>
							<p>
								Explora la página a fondo y no te pierdas el video de lanzamiento. Únete a uno de
								nuestros entrenamientos y participa por los premios en efectivo.
							</p>
						</div>

						<div className={`${style.card} ${active.c3 ? style.cardActive : style.cardDisable} `}>
							<div
								className={style.titleCard}
								onClick={() => setActive({ c1: false, c2: false, c3: true })}
							>
								<h1>¿Qué premios puedo ganar?</h1>
								{active.c3 ? <FaMinus /> : <FaPlus />}
							</div>
							<p>
								Hay más de $2,600 USD en premios en efectivo y recompensas para los mejores trabajos
								en las categorías de aventureros, exploradores y conquistadores. Podrás recibir
								premios en efectivo, productos increíbles o distinciones excepcionales.
							</p>
						</div>
					</div>
					<div className={style.imageContainer}>
						<img src={ref1} alt='ref1' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Solutions;
