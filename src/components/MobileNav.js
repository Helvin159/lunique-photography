import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { HeaderMenuContext } from '../context/HeaderMenuContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MobileNav = () => {
	const { menuIsOpen, setMenuIsOpen } = useContext(HeaderMenuContext);

	const handleClose = (e) => {
		e.preventDefault();

		if (menuIsOpen) {
			setMenuIsOpen(!menuIsOpen);
		}
	};

	return (
		<Container fluid className={`mobile-nav ${menuIsOpen ? 'show' : ''}`}>
			<Button className='mobile-nav__close-btn' onClick={handleClose}>
				<span>&#x2715;</span>
			</Button>
			<ul>
				<li>
					<Link to={'/projects'}>Projects</Link>
				</li>
				<li>
					<Link to={'/gallery'}>Gallery</Link>
				</li>
				<li>
					<Link to={'/about-me'}>About</Link>
				</li>
				<li>
					<Link to={'/contact'}>Contact</Link>
				</li>
			</ul>
		</Container>
	);
};

export default MobileNav;
