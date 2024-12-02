import { lazy } from 'react';
import './App.css';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Header2 = lazy(() => import('./components/Header2/Header2'));
const Header = lazy(() => import('./components/Header/Header'));
const Itinerary = lazy(() => import('./components/Itinerary/Itinerary'));
const Master = lazy(() => import('./components/Master/Master'));
const Solutions = lazy(() => import('./components/Solutions/Solutions'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Benefits = lazy(() => import('./components/Benefits/Benefits'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header2 />
			<Itinerary />
			<Master />
			<Header />
			<Solutions />
			<Gallery />
			<Benefits />
			<Footer />
		</div>
	);
}

export default App;
