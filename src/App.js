import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageContext } from './context/PageContext';

import Outlet from './routes/Outlet';
import Home from './routes/Home';
import Projects from './routes/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import RouteComponent from './routes/RouteComponent';

function App() {
	const routeComponentRegistry = {
		home: Home,
		projects: Projects,
		routeComponent: RouteComponent,
	};

	const { pages } = useContext(PageContext);

	console.log(pages, 'pages');

	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<routeComponentRegistry.home />} />
				<Route path='/about-me' element={<Home />} />
				<Route
					path='/contact'
					element={<routeComponentRegistry.routeComponent />}
				/>
				<Route path='/projects' element={<routeComponentRegistry.projects />} />
				<Route path='/projects/:slug' element={<Home />} />
				{/* 
				{pages?.items.map((i, k) => {
					if (i.fields.homePage) {
						return (
							<Route index element={<routeComponentRegistry.home />} key={k} />
						);
					} else {
						return (
							<Route
								index={i.fields.homePage}
								path={`${i.fields.slug}`}
								element={<routeComponentRegistry />}
								key={k}
							/>
						);
					}
				})} */}

				<Route path='/projects/:slug' element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
