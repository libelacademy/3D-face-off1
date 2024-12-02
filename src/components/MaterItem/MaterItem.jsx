/** @format */

import React, { useState } from 'react';
import './MaterItem.css';

import { IoCheckmarkCircle, IoChevronDown, IoPlay } from 'react-icons/io5';
import { BiDownload } from 'react-icons/bi';
import { AiFillQuestionCircle } from 'react-icons/ai';

import Image from 'react-image-webp';

import { openVideo } from '../../features/video';
import { useDispatch } from 'react-redux';
import SupportInitiative from '../modales/SupportInitiative2/SupportInitiative2';
import SimpleModal2 from '../SimpleModal/SimpleModal2';

const MasterItem = ({ content, handlerClose }) => {
	const dispatch = useDispatch();
	const [select, setSelect] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState({ paypal: null, card: null });
	const [modal, setModal] = useState(false);
	const [close, setClose] = useState(true);

	const handlerClose2 = () => {
		close ? setClose(false) : setClose(true);
	};

	const handleCloseModal = (event) => {
		if (event.target.className === 'Inscriptions ') {
			setClose(true);
		}
	};

	const closeModal = () => setModal(false);
	let headerClass = content.video ? 'item-header' : 'item-header nopointer';

	// const handleChange = (option) => {
	//   const item = content.options.find(
	//     (e) => e.title === option.target.value
	//   );
	//   setValue(item.urls);
	// };

	return (
		<div className='MasterItem'>
			<div className='ribbon ribbon-top-left'>
				<span>{content.level}</span>
			</div>

			<div
				className={headerClass}
				style={{ cursor: 'pointer' }}
				onClick={() => {
					if (content.video) {
						dispatch(
							openVideo({
								modal: true,
								url: '',
								type: 'common',
								img: content.image,
							})
						);
					}
				}}
			>
				{/* {content.video !== '' && (
					<div className='item-play'>
						<IoPlay />
					</div>
				)} */}
				<div className='item-filter'></div>
				<Image webp={content.imageWebp} src={content.image} className='item-image' loading='lazy' />
			</div>
			<div className='item-content'>
				<div className='item-information'>
					<h2 className='item-title'>{content.title}</h2>

					<div className='price-container'>
						<h2>
							{' '}
							{content.priceOff}{' '}
							<AiFillQuestionCircle
								onClick={() => handlerClose2()}
								style={{
									cursor: 'pointer',
								}}
								className='description-question'
							/>
						</h2>
						<h3>
							70% DTO <span> {content.priceBase} </span>{' '}
						</h3>
					</div>
					<a href={content.temario} target='_blank' className='button-temario'>
						Descargar temario <BiDownload style={{ fontSize: '20px' }} />
					</a>
					{/* <div className='flechas-container'>
						<h3 className='item-price'>Inscríbete</h3>
						<img className='flecha-izq' src={flecha} alt='flecha' />
						<img className='flecha-der' src={flecha} alt='flecha' />
					</div> */}

					{/* <div className='item-option'>
						<div
							className='item-select-custom'
							style={isOpen ? { backgroundColor: '#6000de', color: 'white' } : {}}
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							<p className='item-select-custom-selected'>
								<span>{content.options.find((opt) => opt.id === select).title}</span>
								<IoChevronDown />
							</p>
							<ul
								className='item-select-custom-options'
								style={isOpen ? { display: 'block' } : { display: 'none' }}
							>
								{content.options.map((opt) => (
									<li
										style={{ listStyle: 'none' }}
										onClick={() => {
											setSelect(opt.id);
											setValue(opt.urls);
											// setIsOpen(false);
										}}
									>
										{opt.title}
									</li>
								))}
							</ul>
						</div>
					</div> */}
					{content.pack ? (
						<a
							onClick={() => {
								setModal(true);
							}}
							className='warning'
						>
							IMPORTANTE <AiFillQuestionCircle className='description-question' />
						</a>
					) : null}

					{/* <p className="item-desc">{content.description}</p> */}
					{content.pack ? null : (
						<ul className='item-card-items'>
							{content.items.map((e, i) => (
								<li key={i}>
									<IoCheckmarkCircle style={{ fontSize: 20, marginRight: 8 }} />
									<span>{e.item}</span>
								</li>
							))}
						</ul>
					)}

					<div className='item-button'>
						<a
							// href={content.registrate}
							onClick={() => handlerClose(content.registrate, 'Pagar ahora')}
							// target='_blank'
							rel='noreferrer'
							className='card'
						>
							Regístrate
						</a>

						{/* {value.paypal ? (
							<a
								onClick={() => handlerClose(value.paypal, 'Pagar ahora')}
								// href={value.paypal}
								target='_blank'
								rel='noreferrer'
								className='paypal'
								style={{ margin: '10px 0px' }}
							>
								Pagar con PayPal
							</a>
						) : (
							<div
								style={{ cursor: 'not-allowed', margin: '10px 0px' }}
								target='_blank'
								rel='noreferrer'
								className='disable'
							>
								Pagar con PayPal
							</div>
						)}
						{value.card ? (
							<a
								onClick={() => handlerClose(value.card, 'Pagar ahora')}
								// href={value.card}
								target='_blank'
								rel='noreferrer'
								className='card'
							>
								Pagar con Tarjeta
							</a>
						) : (
							<div
								style={{ cursor: 'not-allowed' }}
								target='_blank'
								rel='noreferrer'
								className='disable'
							>
								Pagar con Tarjeta
							</div>
						)} */}
					</div>
				</div>
				{content.tech !== '' && (
					<div className='item-blender'>
						{content.tech.map((image, index) => (
							<img key={index} src={image} alt='Blender' height={35} />
						))}
					</div>
				)}
			</div>
			<SupportInitiative modal={modal} closeModal={closeModal} />
			<SimpleModal2
				close={close}
				handlerClose={handlerClose2}
				handleCloseModal={handleCloseModal}
			/>
		</div>
	);
};

export default MasterItem;
