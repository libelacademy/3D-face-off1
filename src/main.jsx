import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './features/video';
import advisoryReducer from './features/advisory';
import sideMenuReducer from './features/menu';
import bannerReducer from './features/banner';
import modalReducer from './features/modal';

const Video = lazy(() => import('./components/modales/Video/Video'));
const Whatsapp = lazy(() => import('./components/modales/Whatsapp/Whatsapp'));
const WhatsappMobile = lazy(() => import('./components/modales/WhatsappMobile/WhatsappMobile'));
const UpdateBar = lazy(() => import('./components/modales/UpdateBar/UpdateBar'));
// const Video = lazy(() => import('./components/modales/Video/Video'));
// const CloseInscriptions = lazy(() =>
// 	import('./components/modales/CloseInscriptions/CloseInscriptions')
// );

const store = configureStore({
	reducer: {
		video: videoReducer,
		advisory: advisoryReducer,
		sideMenu: sideMenuReducer,
		banner: bannerReducer,
		modal: modalReducer,
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<Video />
			<Whatsapp />
			<WhatsappMobile />
			{/* <UpdateBar /> */}
		</Provider>
	</React.StrictMode>
);
