import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Outlet from './routes/Outlet';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
