import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { HeaderMenuContext } from '../context/MenuContext';

const Header = () => {
	const { headerLinks } = useContext(HeaderMenuContext);

	return (
		<header className='header'>
			<Row className='header__content'>
				<Col md={5} className='header__content__logo'>
					<h2>
						<Link to={'/'}>Lunique Photography</Link>
					</h2>
				</Col>
				<Col md={6} className='header__content__nav'>
					<nav>
						<ul>
							{headerLinks?.map((i, k) => (
								<li key={k}>
									<Link to={`${i.fields.slug}`}>{i.fields.title}</Link>
								</li>
							))}
						</ul>
					</nav>
				</Col>
			</Row>
		</header>
	);
};

export default Header;
