import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import picOne from '../assets/svg/image-1.png';
import picTwo from '../assets/svg/image-2.svg';
import picThree from '../assets/svg/image-3.svg';
import picfour from '../assets/svg/image-4.svg';

const HomeHero = () => {
	return (
		<Container fluid className='home-hero'>
			<Container fluid className='home-hero__header'>
				<h1>capturing</h1>
				<p>The moments that captivate your heart</p>
			</Container>
			<Container fluid className='home-hero__about'>
				<Row className='flex-column-reverse flex-lg-row home-hero__about__copy'>
					<Col lg={5} className='home-hero__about__copy__content'>
						<Container
							fluid
							className='home-hero__about__copy__content__flex-container'>
							<Container>
								<p>
									Amelia Allen is a lifestyle, portrait and documentary
									photographer from Somerset who now lives and works in London.
								</p>
							</Container>
							<Container>
								<Link>
									About me{' '}
									<span className='arrow'>
										<span>&#x2192;</span>
									</span>
								</Link>
							</Container>
						</Container>
					</Col>
					<Col
						lg={7}
						className='home-hero__about__img mb-3 mb-lg-0 px-0 px-lg-2'>
						<img className='img-fluid' src={picOne} alt='picone' />
					</Col>
				</Row>
				<Row className='home-hero__about__copy-secondary pt-5'>
					<Col lg={5} className='home-hero__about__copy-secondary__title'>
						<Container fluid>
							<h3>About me</h3>
						</Container>
					</Col>
					<Col
						lg={7}
						className='home-hero__about__copy-secondary__copy px-0 px-lg-2'>
						<Container className='px-0 mx-0'>
							<p className='px-0 px-lg-4'>
								Starting her career in fashion photography at the age of 18, it
								was on the sets of high end brand campaigns and fashion shows
								that Amelia learnt the technicalities of what has become her
								signature style. Having always been drawn to sociological
								documentary photography, Amelia applies her classic and
								energetic style seamlessly to her portraiture and documentary
								projects .
							</p>
						</Container>
					</Col>
				</Row>
			</Container>

			<Container fluid>
				<Row>
					<Col xs={12} sm={4}>
						<img src={picTwo} alt='' className='img-fluid mb-2 mb-md-0' />
					</Col>
					<Col xs={12} sm={4}>
						<img src={picThree} alt='' className='img-fluid mb-2 mb-md-0' />
					</Col>
					<Col xs={12} sm={4}>
						<img src={picfour} alt='' className='img-fluid' />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default HomeHero;
