import React, { useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FooterMenuContext } from '../context/FooterContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import wavingHandIcon from '../assets/svg/icon-waving-hand.svg';

const Footer = () => {
	const { footerSocialMedia, footerStatement, footerContactEmail } =
		useContext(FooterMenuContext);
	const { pathname } = useLocation();

	const form = useRef();

	return (
		<footer className='footer'>
			<Container className='footer__content'>
				<Container className='footer__content__links'>
					<Row className='footer__content__links__container'>
						<Col md={5}>
							<a href={`mailto:${footerContactEmail}'`}>
								Say hello
								<span>
									<img
										src={wavingHandIcon}
										alt='waving hand'
										className='img-fluid'
									/>
								</span>
							</a>

							{!pathname.includes('contact') && (
								<form ref={form}>
									<input type='email' placeholder='Email' required />
									<textarea placeholder='Leave me a message' />
									<Button>Send</Button>
								</form>
							)}
						</Col>
						<Col md={5}>
							<ul>
								{footerSocialMedia?.map((i, k) => {
									return (
										<li key={k}>
											<a
												href={`${i.fields.url}`}
												target='_blank'
												rel='noreferrer'>
												{i.fields.platform}
											</a>
										</li>
									);
								})}
							</ul>
						</Col>
					</Row>
				</Container>
				<Container className='footer__content__statement'>
					<h3>{footerStatement}</h3>
				</Container>
			</Container>
		</footer>
	);
};

export default Footer;
