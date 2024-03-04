import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import wavingHandIcon from '../assets/svg/icon-waving-hand.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<Container className='footer__content'>
				<Container className='footer__content__links'>
					<Row className='footer__content__links__container'>
						<Col md={5}>
							<a href='mailto:helvin159@gmail.com'>
								Say hello
								<span>
									<img
										src={wavingHandIcon}
										alt='waving hand'
										className='img-fluid'
									/>
								</span>
								Helvin159@gmail.com
							</a>
						</Col>
						<Col md={5}>
							<ul>
								<li>
									<a href='linkedin.com' target='_blank' rel='noreferrer'>
										LinkedIn
									</a>
								</li>
								<li>
									<a href='instagram.com' target='_blank' rel='noreferrer'>
										Instagram
									</a>
								</li>
								<li>
									<a href='x.com' target='_blank' rel='noreferrer'>
										Twitter
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
				<Container className='footer__content__statement'>
					<h3>Lunique Photog</h3>
				</Container>
			</Container>
		</footer>
	);
};

export default Footer;
