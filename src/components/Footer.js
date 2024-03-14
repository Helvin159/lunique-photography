import React, { useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FooterMenuContext } from '../context/FooterContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import wavingHandIcon from '../assets/svg/icon-waving-hand.svg';
import { createClient } from 'contentful-management';

const Footer = () => {
	const { footerSocialMedia, footerStatement, footerContactEmail } =
		useContext(FooterMenuContext);
	const { pathname } = useLocation();

	const form = useRef();

	const handleSubmit = async (name, email, message) => {
		const client = createClient({
			accessToken: process.env.REACT_APP_CONTENTFUL_CMA_TOKEN_KEY,
		});

		const space = await client.getSpace(
			process.env.REACT_APP_CONTENTFUL_SPACE_ID
		);
		const env = await space.getEnvironment('master');

		env
			.createEntry('messages', {
				fields: {
					name: { 'en-US': `${name}` },
					email: { 'en-US': `${email}` },
					message: { 'en-US': `${message}` },
				},
			})
			.then((entry) => entry.publish())
			.then((entry) => console.log(entry, 'success'))
			.catch(console.error, 'error');
	};

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
										loading='eager'
										src={wavingHandIcon}
										alt='waving hand'
										className='img-fluid'
									/>
								</span>
							</a>

							{!pathname.includes('contact') && (
								<form ref={form}>
									<input
										type='email'
										name='email'
										id='footerEmail'
										placeholder='Email'
										required
									/>
									<textarea
										name='message'
										id='footerMessage'
										placeholder='Leave me a message'
									/>
									<Button
										onClick={() => {
											console.log(form);
											handleSubmit(
												form.current[0]?.value.toString(),
												form.current[0]?.value.toString(),
												form.current[1].value.toString()
											);
										}}>
										Send
									</Button>
								</form>
							)}
						</Col>
						<Col md={5}>
							<ul>
								{footerSocialMedia?.map((i) => {
									return (
										<li key={i?.sys?.id}>
											<a
												href={`${i?.fields?.url}`}
												target='_blank'
												rel='noreferrer'>
												{i?.fields?.platform}
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
