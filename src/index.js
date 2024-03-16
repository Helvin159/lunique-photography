import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PhotographerProvider } from './context/PhotographerContext';
import { ProjectsProvider } from './context/ProjectsContext';
import { HeaderMenuProvider } from './context/HeaderMenuContext';
import { FooterMenuProvider } from './context/FooterContext';
import ScrollToTop from './utilities/ScrollToTop';

import App from './App';
import { SiteDetailsProvider } from './context/SiteDetailsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<SiteDetailsProvider>
				<PhotographerProvider>
					<HeaderMenuProvider>
						<FooterMenuProvider>
							<ProjectsProvider>
								<ScrollToTop>
									<App />
								</ScrollToTop>
							</ProjectsProvider>
						</FooterMenuProvider>
					</HeaderMenuProvider>
				</PhotographerProvider>
			</SiteDetailsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
