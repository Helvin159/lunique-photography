import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<Row className='header__content'>
				<Col md={5} className='header__content__logo'>
					<h2>
						<Link to={'/'}>Lunique Photography</Link>
					</h2>
				</Col>
				<Col md={5} className='header__content__nav'>
					<nav>
						<ul>
							<li>
								<Link to={'/projects'}>Projects</Link>
							</li>
							{/* <li>
								<Link>Gallery</Link>
							</li> */}
							<li>
								<Link to={'/about-me'}>About</Link>
							</li>
							<li>
								<Link to={'/contact'}>Contact</Link>
							</li>
						</ul>
					</nav>
				</Col>
			</Row>
		</header>
	);
};

export default Header;
