import creditCard from '../assets/payments-method/credit-card.png';
import transfers from '../assets/payments-method/transfer.png';
import paypal from '../assets/payments-method/paypal.png';
import westernUnion from '../assets/payments-method/western-union.png';
import baloto from '../assets/payments-method/baloto.png';
import daviPlata from '../assets/payments-method/daviplata.png';
import nequi from '../assets/payments-method/nequi.png';
import bancolombia from '../assets/payments-method/bancolombia.png';
import efecty from '../assets/payments-method/efecty.png';
import cash from '../assets/payments-method/money.png';

const paymentMethods = [
	{ id: 0, image: creditCard, name: 'Tarjeta de Crédito' },
	{ id: 1, image: transfers, name: 'Transferencias Internacionales' },
	{ id: 2, image: transfers, name: 'Transferencias Nacionales' },
	{ id: 3, image: paypal, name: 'PayPal' },
	{ id: 4, image: westernUnion, name: 'Western Union' },
	{ id: 5, image: baloto, name: 'Baloto' },
	{ id: 6, image: daviPlata, name: 'Davi Plata' },
	{ id: 7, image: nequi, name: 'Nequi' },
	{ id: 8, image: bancolombia, name: 'Bancolombia' },
	{ id: 9, image: efecty, name: 'Efecty' },
	{ id: 10, image: cash, name: 'Efectivo' },
];

export default paymentMethods;
