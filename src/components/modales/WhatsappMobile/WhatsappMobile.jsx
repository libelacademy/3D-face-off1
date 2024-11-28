/** @format */

import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import './WhatsappMobile.css';

const WhatsappMobile = () => {
	return (
		<a href='https://wa.link/21pua3' target='_blank' rel='noreferrer' className='WhatsappMobile'>
			<IoLogoWhatsapp size={32} style={{ marginRight: 10 }} />
			<span>¡Hola! 👋 Resolvemos todas tus dudas.</span>
		</a>
	);
};

export default WhatsappMobile;
