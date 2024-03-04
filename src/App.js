import { Route, Routes } from 'react-router-dom';
import Outlet from './routes/Outlet';
import Home from './routes/Home';
import Projects from './routes/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
				<Route path='/about' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/projects/:slug' element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
