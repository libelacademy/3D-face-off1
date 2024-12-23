/** @format */

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';

import SlideShow from '../SlideShow/SlideShow';
import Image from 'react-image-webp';

import { IoArrowBack, IoCaretDown, IoCaretUp, IoChevronForward, IoMenu } from 'react-icons/io5';

import logo from '../../assets/logo.png';

import lo3dCamp from '../../assets/3d-camp-logo.png';
import lo3dCampWebp from '../../assets/3d-camp-logo.webp';

import bulletPoint1 from '../../assets/courses-list/002-gantt chart.png';
import bulletPoint2 from '../../assets/courses-list/021-mail.png';
import bulletPoint3 from '../../assets/courses-list/029-video marketing.png';
import bulletPoint4 from '../../assets/courses-list/040-Branching.png';
import bulletPoint5 from '../../assets/courses-list/063-heart.png';
import bulletPoint6 from '../../assets/courses-list/078-internet.png';
import bulletPoint7 from '../../assets/courses-list/093-idea.png';

import coursesPreviewList from '../../utils/previewCourses';
import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';

import { closeSideMenu, showSideMenu } from '../../features/menu';

const defaultRemainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00',
};

const coursesDetail = {
	title: 'Cursos',
	content: [
		{
			id: 0,
			name: 'Todos los cursos',
			url: 'https://cursos.libel.academy/',
		},
		{
			id: 1,
			name: 'Curso de Rigging',
			url: 'https://cursos.libel.academy/collections?q=Rigging',
		},
		{
			id: 2,
			name: 'Curso de Blender',
			url: 'https://libel.academy/escuela-domina-blender',
		},
		{
			id: 3,
			name: 'Curso de ZBrush',
			url: 'https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush',
		},
		{
			id: 4,
			name: 'Curso de Ilustración',
			url: 'https://cursos.libel.academy/collections?q=concep',
		},
	],
};

const mastersDetails = {
	title: 'Masters',
	content: [
		{
			id: 0,
			name: 'Todos los masters',
			url: 'https://libel.academy/master',
		},
		{
			id: 1,
			name: 'Blender para Videojuegos',
			url: 'https://libel.academy/master-blender',
		},
		{
			id: 2,
			name: 'Personajes para Videojuegos AAA',
			url: 'https://libel.academy/master-personajes-para-videojuegos/',
		},
		{
			id: 3,
			name: 'Escultura para Impresión',
			url: 'https://libel.academy/master-escultura-para-impresion/',
		},
		{
			id: 4,
			name: 'Rigging para Videojuegos',
			url: 'https://libel.academy/master-rigging/',
		},
	],
};

const schoolsDetails = {
	title: 'Escuelas',
	content: [
		{
			id: 0,
			name: 'Escuela ZBrush',
			url: 'https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush',
		},
		{
			id: 1,
			name: 'Escuela Blender',
			url: 'https://libel.academy/escuela-domina-blender',
		},
		{
			id: 2,
			name: 'Escuela Rigging',
			url: 'https://cursos.libel.academy/collections?q=Rigging',
		},
		{
			id: 3,
			name: 'Escuela Ilustración',
			url: 'https://cursos.libel.academy/collections?q=concep',
		},
	],
};

const Navbar = () => {
	const dispatch = useDispatch();
	const sideMenu = useSelector((state) => state.sideMenu.value.menu);
	const bannerTop = useSelector((state) => state.banner.value.banner);

	const [menu, setMenu] = useState(false);
	const [itemDetail, setItemDetail] = useState(coursesDetail);
	const [shortcutsDetail, setShortcutsDetail] = useState(false);

	const [courses, setCourses] = useState(false);
	const [coursesMenu, setCoursesMenu] = useState({
		visibility: 'hidden',
		opacity: 0,
	});
	const [courseColor, setCourseColor] = useState('#ffffff');
	const [top, setTop] = useState('-100%');
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

	const countdownTimestampMs = 'Sun, 20 Oct 2024 16:00:00 GMT-5';

	const menuContainerTop = bannerTop
		? { top: 80, height: 'calc(100vh - 80px)' }
		: { top: 80, height: 'calc(100ch - 80px)' };

	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		let mainPosition = window.scrollY;
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			if (mainPosition >= currentPosition || currentPosition < 100) {
				setShowNavbar(true);
			} else {
				setShowNavbar(false);
			}
			mainPosition = currentPosition;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (menu) {
			dispatch(showSideMenu());
		} else {
			dispatch(closeSideMenu());
		}
	}, [menu, dispatch]);

	useEffect(() => {
		if (courses) {
			setCoursesMenu({ visibility: 'visible', opacity: 1 });
			setCourseColor('#8f8f8f');
			setTop('0');
		} else {
			setCoursesMenu({ visibility: 'hidden', opacity: 0 });
			setCourseColor('#ffffff');
			setTop('-100%');
		}
	}, [courses]);

	const handleCloseCourseMenu = (event) => {
		if (event.target.className === 'courses-menu-container') {
			setCourses(false);
		}
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	return (
		<nav
			className={`${menu ? 'Navbar Navbar-mobile-open' : 'Navbar'}`}
			id='navbar'
			style={showNavbar ? { top: 0 } : { top: '-100%' }}
		>
			{/* <BannerTop /> */}
			<div className='navbar-container'>
				<div className='home'>
					<a className='logo' href='https://libel.academy'>
						<img src={logo} alt='Libel Academy' />
					</a>
				</div>
				<div className='navigation'>
					<a href='https://libel.academy/master' style={{ marginRight: 20 }}>
						Masters
					</a>
					{/* <a href='https://libel.academy/3d-camp' style={{ marginRight: 20 }}>
						3D Camp
					</a> */}
					<a href='https://libel.academy/3d-camp' style={{ marginRight: 20 }}>
						3D Face Off
					</a>
					<a href='https://libel.academy/membresia' style={{ marginRight: 20 }}>
						Membresía
					</a>
					<a
						href='https://libel.academy/licencias-character-creator-iclone'
						style={{ marginRight: 20 }}
					>
						Licencias
					</a>
					<button
						style={{ color: `${courseColor}` }}
						className='nav-courses'
						onClick={() => {
							setCourses(!courses);
						}}
					>
						Explorar
						{courses ? (
							<IoCaretUp
								style={{
									marginLeft: '10px',
									fontSize: '12 px',
								}}
							/>
						) : (
							<IoCaretDown
								style={{
									marginLeft: '10px',
									fontSize: '12 px',
								}}
							/>
						)}
					</button>
					{/* <div className="shortcuts">
                    </div> */}
				</div>
				<div className='academy'>
					{/* <a
						href='https://cursos.libel.academy/users/sign_up'
						target={'_blank'}
						rel='noreferrer'
						className='register'
					>
						Crear cuenta
					</a> */}
					<a href='https://libel.academy/campus/' rel='noreferrer' className='login'>
						Acceso a Campus
					</a>
					<div
						className={`${menu ? 'menu-icon' : 'menu-icon menu-icon-close'}`}
						// className={'menu-icon'}
					>
						<IoMenu
							onClick={() => {
								setMenu(!menu);
							}}
						/>
					</div>
				</div>
				<ul
					className='menu-list'
					style={
						sideMenu
							? {
									transform: 'translateX(0)',
									visibility: 'visible',
									opacity: 1,
							  }
							: {
									transform: 'translateX(100%)',
									visibility: 'hidden',
									opacity: 1,
							  }
					}
				>
					<li className='menu-countdown'>
						<a href='https://libel.academy/3d-camp' className='menu-countdown-image'>
							<Image
								webp={lo3dCampWebp}
								src={lo3dCamp}
								alt='3D Camp'
								className='navbar-3d-camp-logo'
							/>
						</a>
						<div
							style={{
								width: '50%',
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div className='menu-countdown-timer' style={{ width: '100%', height: 'auto' }}>
								<div className='menu-countdown-segment'>
									<div className='menu-countdown-letters'>DIA</div>
									<div className='menu-countdown-numbers'>{remainingTime.days}</div>
								</div>
								<div className='menu-countdown-segment'>
									<div className='menu-countdown-letters'>HOR</div>
									<div className='menu-countdown-numbers'>{remainingTime.hours}</div>
								</div>
								<div className='menu-countdown-segment'>
									<div className='menu-countdown-letters'>MIN</div>
									<div className='menu-countdown-numbers'>{remainingTime.minutes}</div>
								</div>
								<div className='menu-countdown-segment'>
									<div className='menu-countdown-letters'>SEG</div>
									<div className='menu-countdown-numbers'>{remainingTime.seconds}</div>
								</div>
							</div>
							<b style={{ fontSize: 12 }}>- 20 OCTUBRE 2024 -</b>
						</div>
					</li>

					<li className='menu-shortcuts'>
						<span
							className='menu-shortcuts-item'
							onClick={() => {
								setItemDetail(mastersDetails);
								setShortcutsDetail(true);
							}}
						>
							Masters <IoChevronForward />
						</span>
						<span
							className='menu-shortcuts-item'
							onClick={() => {
								setItemDetail(coursesDetail);
								setShortcutsDetail(true);
							}}
						>
							Cursos <IoChevronForward />
						</span>
						<span
							className='menu-shortcuts-item'
							onClick={() => {
								setItemDetail(schoolsDetails);
								setShortcutsDetail(true);
							}}
						>
							Escuelas <IoChevronForward />
						</span>
						<a href='https://libel.academy/3d-camp' className='menu-shortcuts-item'>
							3D Face Off
						</a>
						<a
							href='https://libel.academy/personajes-para-videojuegos'
							className='menu-shortcuts-item'
						>
							ZBrush + Unreal 5
						</a>
						<a href='https://libel.academy/membresia/' className='menu-shortcuts-item'>
							Membresías
						</a>
						<a
							href='https://libel.academy/licencias-character-creator-iclone'
							className='menu-shortcuts-item'
						>
							Licencias CC4 + iCLONE
						</a>
						<a href='https://libel.academy/resultados' className='menu-shortcuts-item'>
							Resultados Alumnos
						</a>
						<div
							className='menu-shortcut-detail'
							style={
								shortcutsDetail
									? {
											transform: 'translateX(0)',
											visibility: 'visible',
									  }
									: {
											transform: 'translateX(100%)',
											visibility: 'hidden',
									  }
							}
						>
							<span
								onClick={() => {
									setShortcutsDetail(false);
								}}
							>
								{itemDetail.title} <IoArrowBack />
							</span>
							<div className='menu-shortcut-detail-items'>
								{itemDetail.content.map(({ id, name, url }) => (
									<a key={id} href={url}>
										{name}
									</a>
								))}
							</div>
						</div>
					</li>

					<li className='menu-academy'>
						{/* <a
							href='https://cursos.libel.academy/users/sign_up'
							className='menu-sign-up'
						>
							Crear Cuenta
						</a> */}
						<a href='https://libel.academy/campus/' className='menu-log-in'>
							Acceso a Campus
						</a>
					</li>
				</ul>
			</div>
			<div
				className='courses-menu-container'
				style={{ ...coursesMenu, ...menuContainerTop }}
				onClick={handleCloseCourseMenu}
			>
				<div className='courses-menu' style={{ top: `${top}` }}>
					<div className='courses-list'>
						<div className='courses-column'>
							<h3>TODOS LOS CURSOS</h3>
							<ul>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint7} alt='bullet point' />
									</div>
									<a href='https://libel.academy/master-blender' target={'_blank'} rel='noreferrer'>
										Máster en Blender
									</a>
								</li>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint6} alt='bullet point' />
									</div>
									<a
										href='https://libel.academy/master-escultura-en-zbrush'
										target={'_blank'}
										rel='noreferrer'
									>
										Máster en ZBrush
									</a>
								</li>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint5} alt='bullet point' />
									</div>
									<a
										href='https://libel.academy/master-personajes-estilizados'
										target={'_blank'}
										rel='noreferrer'
									>
										ZBrush + CC4
									</a>
								</li>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint4} alt='bullet point' />
									</div>
									<a
										href='https://libel.academy/impresion-3d-con-blender'
										target={'_blank'}
										rel='noreferrer'
									>
										Blender para impresión
									</a>
								</li>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint1} alt='bullet point' />
									</div>
									<a
										href='https://libel.academy/personajes-para-videojuegos'
										target={'_blank'}
										rel='noreferrer'
									>
										ZBrush + Unreal 5
									</a>
								</li>
							</ul>
						</div>
						<div className='courses-column'>
							<h3>ENTRENAMIENTOS</h3>
							<ul>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint1} alt='bullet point' />
									</div>
									<a href='https://libel.academy/master/'>Masters</a>
								</li>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint2} alt='bullet point' />
									</div>
									<a href='https://cursos.libel.academy/collections?category=membresias'>
										Membresías
									</a>
								</li>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint3} alt='bullet point' />
									</div>
									<a href='https://libel.academy/3d-camp/'>3D Camp</a>
								</li>
								{/* <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint4}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="https://cursos.libel.academy/collections?category=courses">
                                        Aprende a tu ritmo
                                    </a>
                                </li> */}
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint5} alt='bullet point' />
									</div>
									<a
										href='https://libel.academy/licencias-character-creator-iclone'
										target={'_blank'}
										rel='noreferrer'
									>
										Licencias CC4 + iCLONE
									</a>
								</li>
								<li>
									<div className='corses-bullet-point'>
										<img src={bulletPoint6} alt='bullet point' />
									</div>
									<a href='https://libel.academy/asesoria' target={'_blank'} rel='noreferrer'>
										Charla informativa
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='courses-preview'>
						{courses ? <SlideShow courses={coursesPreviewList} /> : <></>}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
