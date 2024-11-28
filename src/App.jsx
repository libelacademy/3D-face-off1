import { lazy } from 'react';
import './App.css';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Header2 = lazy(() => import('./components/Header2/Header2'));
const Header = lazy(() => import('./components/Header/Header'));
const Itinerary = lazy(() => import('./components/Itinerary/Itinerary'));
const Master = lazy(() => import('./components/Master/Master'));
const Solutions = lazy(() => import('./components/Solutions/Solutions'));
// const Planning = lazy(() => import('./components/Planning/Planning'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));

// const Learn = lazy(() => import('./components/Learn/Learn'));
// const Tables = lazy(() => import('./components/Tables/Tables'));
// const Form = lazy(() => import('./components/Form/Form'));
// const InfoMid = lazy(() => import('./components/InfoMid/InfoMid'));
const Benefits = lazy(() => import('./components/Benefits/Benefits'));
// const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// const QuienesSomos = lazy(() => import('./components/QuienesSomos/QuienesSomos'));
// const ContentMaster = lazy(() => import('./components/ContentMaster/ContentMaster'));
// const StudyMethod = lazy(() => import('./components/StudyMethod/StudyMethod'));
// const Memberships = lazy(() => import('./components/Memberships/Memberships'));
// const Financing = lazy(() => import('./components/Financing/Financing'));
// const Counseling = lazy(() => import('./components/Counseling/Counseling'));

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header2 />
			<Itinerary />
			<Master />
			<Header />
			{/* <Form /> */}
			<Solutions />
			{/* <Tables /> */}
			{/* <Planning /> */}
			<Gallery />
			{/* <Learn /> */}
			{/* <InfoMid /> */}
			<Benefits />
			{/* <FAQ /> */}
			<Footer />
		</div>
	);
}

export default App;
