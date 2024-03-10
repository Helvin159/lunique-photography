import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import hamburgerIcon from '../assets/svg/icon-bars.svg';
import { HeaderMenuContext } from '../context/HeaderMenuContext';

const Header = () => {
	const { menuIsOpen, setMenuIsOpen } = useContext(HeaderMenuContext);

	const handleOpenNav = (e) => {
		e.preventDefault();

		if (!menuIsOpen) {
			setMenuIsOpen(!menuIsOpen);
		}
	};
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

			<Container className='header__open-mobile-nav'>
				<Button onClick={handleOpenNav}>
					<span>
						<img src={hamburgerIcon} alt='Close Button' />
					</span>
				</Button>
			</Container>
		</header>
	);
};

export default Header;
