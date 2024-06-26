import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import '../node_modules/animate.css/animate.min.css';
import LayoutContextProvider from './contexts/LayoutContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import AssetsManifestProvider from './contexts/AssetsManifestContext.jsx';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Analytics />
		<BrowserRouter>
			<AssetsManifestProvider>
				<LayoutContextProvider>
					<App />
				</LayoutContextProvider>
			</AssetsManifestProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
