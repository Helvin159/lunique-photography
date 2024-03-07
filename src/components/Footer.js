import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import wavingHandIcon from '../assets/svg/icon-waving-hand.svg';
import { FooterMenuContext } from '../context/FooterContext';

const Footer = () => {
	const { footerSocialMedia, footerStatement, footerContactEmail } =
		useContext(FooterMenuContext);

	console.log(footerContactEmail);
	return (
		<footer className='footer'>
			<Container className='footer__content'>
				<Container className='footer__content__links'>
					<Row className='footer__content__links__container'>
						<Col md={5}>
							<a href={`mailto:${footerContactEmail}`}>
								Say hello
								<span>
									<img
										src={wavingHandIcon}
										alt='waving hand'
										className='img-fluid'
									/>
								</span>
							</a>
						</Col>
						<Col md={5}>
							<ul>
								{footerSocialMedia?.map((i, k) => {
									console.log(i);
									return (
										<li>
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
