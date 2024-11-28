import event1 from '../assets/itinerary/aventureros.png';
import event2 from '../assets/itinerary/exploradores.png';
import event3 from '../assets/itinerary/conquistadores.png';

const itineraryEvents = [
	{
		image: event1,
		event: 'Aventureros',
		subTitle: '(Categoría para novatos en Blender)',
		description: [
			{
				title: '1er puesto: ',
				description: '300 USD en efectivo',
			},
			{
				title: '2do puesto: ',
				description: 'Beca 100% Vacacional en Blender Estándar',
			},
			{
				title: '3er puesto: ',
				description: 'Tableta Gráfica Wacom Intuos Ctl4100 Small',
			},
		],
	},
	{
		image: event2,
		event: 'Exploradores',
		subTitle: '(Categoría para intermedio/avanzado en Blender)',
		description: [
			{
				title: '1er puesto: ',
				description: '400 USD en efectivo',
			},
			{
				title: '2do puesto: ',
				description: '200 USD en un Bono de regalo en Amazon',
			},
			{
				title: '3er puesto: ',
				description: 'Tableta Gráfica Wacom Intuos Ctl4100 Small',
			},
		],
	},
	{
		image: event3,
		event: 'Conquistadores',
		subTitle: '(Categoría para intermedio/avanzado ZBrush+CC4)',
		description: [
			{
				title: '1er puesto: ',
				description: '500 USD en efectivo',
			},
			{
				title: '2do puesto: ',
				description: 'Licencia vitalicia de CC4',
			},
			{
				title: '3er puesto: ',
				description: '200 USD en un Bono de regalo en Amazon',
			},
		],
	},
];

export default itineraryEvents;
