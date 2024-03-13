import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutIntro = ({ photographer }) => {
	const { pathname } = useLocation();

	useEffect(() => {}, [pathname]);

	return (
		<Container fluid className='about-hero'>
			<Row className='flex-column-reverse flex-lg-row home-hero__about__copy'>
				<Col lg={5} className='home-hero__about__copy__content'>
					<Container
						fluid
						className='home-hero__about__copy__content__flex-container'>
						<Container>
							<p>{photographer?.fields.photographyStyle}</p>
						</Container>
						{pathname === '/' && (
							<Container>
								<Link>
									About me{' '}
									<span className='arrow'>
										<span>&#x2192;</span>
									</span>
								</Link>
							</Container>
						)}
					</Container>
				</Col>
				<Col lg={7} className='home-hero__about__img mb-3 mb-lg-0 px-0 px-lg-2'>
					<img
						loading='lazy'
						className='img-fluid'
						src={`https:${photographer?.fields?.proPhoto?.fields?.file?.url}`}
						alt='picone'
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutIntro;
