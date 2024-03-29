import { Route, Routes } from 'react-router-dom';
import Outlet from './routes/Outlet';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Projects from './routes/Projects';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './css/style.css'; // Custom CSS
import Gallery from './routes/Gallery';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/about-me' element={<About />} />
				<Route path='/contact' element={<Contact />} />

				<Route path='/projects' element={<Projects />} />
				<Route path='/projects/:slug' element={<Project />} />
			</Route>
		</Routes>
	);
}

export default App;
