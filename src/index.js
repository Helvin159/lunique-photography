import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProjectsProvider } from './context/ProjectsContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProjectsProvider>
				<App />
			</ProjectsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
