import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { HeaderMenuContext } from '../context/HeaderMenuContext';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MobileNav = () => {
	const { menuIsOpen, setMenuIsOpen } = useContext(HeaderMenuContext);

	const navigate = useNavigate();

	const handleClose = (e) => {
		e.preventDefault();

		if (menuIsOpen) {
			setMenuIsOpen(!menuIsOpen);
		}
	};

	const handleNav = (url) => {
		navigate(url);

		setTimeout(() => {
			if (menuIsOpen) {
				setMenuIsOpen(!menuIsOpen);
			}
		}, 50);
	};

	return (
		<Container fluid className={`mobile-nav ${menuIsOpen ? 'show' : 'hidden'}`}>
			<Button className='mobile-nav__close-btn' onClick={handleClose}>
				<span>&#x2715;</span>
			</Button>
			<ul>
				<li
					onClick={() => {
						handleNav('/');
					}}>
					<Link>Home</Link>
				</li>
				<li
					onClick={() => {
						handleNav('/projects');
					}}>
					<Link>Projects</Link>
				</li>
				<li
					onClick={() => {
						handleNav('/gallery');
					}}>
					<Link>Gallery</Link>
				</li>
				<li
					onClick={() => {
						handleNav('/about-me');
					}}>
					<Link>About</Link>
				</li>
				<li
					onClick={() => {
						handleNav('/contact');
					}}>
					<Link>Contact</Link>
				</li>
			</ul>
		</Container>
	);
};

export default MobileNav;
