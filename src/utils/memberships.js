/** @format */

import image1 from '../assets/memberships/Enmascarar grupo 7.png';
import image2 from '../assets/memberships/Enmascarar grupo 6.png';

import first from '../assets/memberships/first.png';
import diamond from '../assets/memberships/diamond.png';

const memberships = [
	{
		id: 0,
		image: image1,
		icon: first,
		title: 'Inversión por alumno',
		description: null,
		price: '499',
		price_before: '600',
		items: [
			{
				item: 'Clases online en vivo.',
				more: null,
			},
			{
				item: 'Duración 3 meses',
				more: null,
			},
			{
				item: 'Grabación de clases.',
				more: null,
			},
			{
				item: 'Acceso un año',
				more: null,
			},
			{
				item: 'Certificación UTPL',
				more: null,
			},
			{
				item: 'Certificación REALLUSION',
				more: null,
			},
			{
				item: 'Certificación Libel Academy',
				more: null,
			},
			{
				item: 'Licencia CC4 GRATIS',
				more: null,
			},
		],
		urls: [
			{
				name: 'Pagar con PayPal',
				url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B3RRUSQCRMV6U',
			},
			{
				name: 'Pagar con Tarjeta',
				url: 'https://payco.link/2033632',
			},
		],
	},
	// {
	//   id: 1,
	//   image: image2,
	//   icon: diamond,
	//   title: 'Plan Duo',
	//   description: 'Plan para dos personas. Pagas ese valor y podrás acceder tú y otra persona.',
	//   price: '199',
	//   price_before: '318',
	//   items: [
	//     {
	//       item: 'Clases online en vivo.',
	//       more: null,
	//     },
	//     {
	//       item: 'Duración 1 mes y medio.',
	//       more: null,
	//     },
	//     {
	//       item: 'Grabación de clases.',
	//       more: null,
	//     },
	//     {
	//       item: 'Acceso un año',
	//       more: null,
	//     },
	//   ],
	//   urls: [
	//     {
	//       name: 'Pagar con PayPal',
	//       url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HWKVA5Z96ERVN',
	//     },
	//     {
	//       name: 'Pagar con Tarjeta',
	//       url: 'https://checkout.payulatam.com/ppp-web-gateway-payu//pr?dlink=0c3e6bM7c37cR27c',
	//     },
	//   ],
	// },
];

export default memberships;
