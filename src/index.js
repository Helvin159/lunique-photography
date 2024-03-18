import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SiteDetailsProvider } from './context/SiteDetailsContext';
import { PhotographerProvider } from './context/PhotographerContext';
import { ProjectsProvider } from './context/ProjectsContext';
import { HeaderMenuProvider } from './context/HeaderMenuContext';
import { FooterMenuProvider } from './context/FooterContext';
import { GalleryProvider } from './context/GalleryContext';
import { ThankYouModalProvider } from './context/ThankYouModal';
import ScrollToTop from './utilities/ScrollToTop';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<SiteDetailsProvider>
				<PhotographerProvider>
					<HeaderMenuProvider>
						<FooterMenuProvider>
							<ProjectsProvider>
								<GalleryProvider>
									<ThankYouModalProvider>
										<ScrollToTop>
											<App />
										</ScrollToTop>
									</ThankYouModalProvider>
								</GalleryProvider>
							</ProjectsProvider>
						</FooterMenuProvider>
					</HeaderMenuProvider>
				</PhotographerProvider>
			</SiteDetailsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
