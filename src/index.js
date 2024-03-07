import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProjectsProvider } from './context/ProjectsContext';
import { HeaderMenuProvider } from './context/MenuContext';

import App from './App';
import { FooterMenuProvider } from './context/FooterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HeaderMenuProvider>
				<FooterMenuProvider>
					<ProjectsProvider>
						<App />
					</ProjectsProvider>
				</FooterMenuProvider>
			</HeaderMenuProvider>
		</BrowserRouter>
	</React.StrictMode>
);
