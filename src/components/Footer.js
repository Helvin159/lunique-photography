import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { emailRegex, handleNewMessage } from '../utilities/utils';
import { FooterMenuContext } from '../context/FooterContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import wavingHandIcon from '../assets/svg/icon-waving-hand.svg';
import { SiteDetailsContext } from '../context/SiteDetailsContext';

const Footer = () => {
	const [name, setName] = useState('');

	const [showEmailError, setShowEmailError] = useState(false);

	const { footerSocialMedia, footerContactEmail } =
		useContext(FooterMenuContext);

	const { siteDetails } = useContext(SiteDetailsContext);

	const { pathname } = useLocation();

	const navigate = useNavigate();

	const form = useRef();

	const handleEmailChange = () => {
		setName(document.getElementById('footerEmail').value);

		if (
			!emailRegex.test(document.getElementById('footerEmail').value) ||
			null ||
			''
		) {
			setShowEmailError(true);
		} else {
			setShowEmailError(false);
		}
	};

	const handleOnClick = () => {
		const { current } = form;

		if (current[0].value !== null) {
			if (
				emailRegex.test(current[0].value) ||
				current[0].value !== ('' || null)
			) {
				handleNewMessage(
					current[0]?.value.toString(),
					current[1]?.value.toString(),
					current[2].value.toString(),
					form,
					navigate,
					pathname
				);
			}
		}
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
										draggable={false}
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
										onChange={handleEmailChange}
									/>

									<p
										className={`email-error-message ${
											showEmailError ? 'show' : ''
										}`}>
										Email is invalid. Please enter correct email!
									</p>

									<input
										type='text'
										id='footerName'
										name='name'
										hidden
										value={name}
										onChange={() => null}
									/>
									<textarea
										name='message'
										id='footerMessage'
										placeholder='Leave me a message'
									/>
									<Button onClick={handleOnClick}>Send</Button>
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
					<h3>{siteDetails?.fields?.businessName}</h3>
				</Container>
			</Container>
		</footer>
	);
};

export default Footer;
