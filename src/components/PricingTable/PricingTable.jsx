import React from 'react';
import style from './PricingTable.module.css';

import { BsCheckLg, BsDownload } from 'react-icons/bs';

const PricingTable = ({ content, handlerClose }) => {
	return (
		<>
			<div className={style.mainContainer}>
				<a className={style.temario} href={content.temario} target='_blank'>
					<BsDownload /> DESCARGA TEMARIO
				</a>
				<div className={style.container1}>
					<div>
						<h1>
							<span>USD</span> {content.price}
						</h1>
						<h2>{content.subTitle}</h2>
					</div>
					<span className={style.priceAfter}>/173,00 USD</span>
				</div>
				<hr />

				<ul className={style.container2}>
					{content.benefits.map((benefit, i) => (
						<li key={i}>
							<BsCheckLg />
							<span>{benefit}</span>
						</li>
					))}
				</ul>

				<div className={style.buttons}>
					<a className={style.paypal} onClick={() => handlerClose(content.paypal, 'Pagar ahora')}>
						Pagar con Paypal
					</a>
					<a className={style.card} onClick={() => handlerClose(content.card, 'Pagar ahora')}>
						Pagar con tarjeta
					</a>
				</div>
			</div>
		</>
	);
};

export default PricingTable;
