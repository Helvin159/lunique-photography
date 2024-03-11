import React, { useContext } from 'react';
import { PhotographerContext } from '../context/PhotographerContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const HomeHero = () => {
	const { photographer } = useContext(PhotographerContext);

	return (
		<Container as='section' fluid className='home-hero px-0 px-md-2'>
			<Container fluid className='home-hero__header'>
				<h1>{photographer?.fields.headline}</h1>
				<p>{photographer?.fields.subHeadline}</p>
			</Container>
			<Container fluid className='home-hero__about'>
				<Row className='flex-column-reverse flex-lg-row home-hero__about__copy'>
					<Col lg={5} className='home-hero__about__copy__content'>
						<Container
							fluid
							className='home-hero__about__copy__content__flex-container'>
							<Container>
								<p>{photographer?.fields.photographyStyle}</p>
							</Container>
							<Container>
								<Link to={'/about-me'}>
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
						className='home-hero__about__img mb-3 mb-lg-0 px-0 px-md-2'>
						<img
							loading='lazy'
							className='img-fluid'
							src={`https:${photographer?.fields?.proPhoto?.fields?.file?.url}`}
							alt='picone'
						/>
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
							<p className='px-0 pb-5 px-lg-4'>
								{photographer?.fields.bioExcerpt}
							</p>
						</Container>
					</Col>
				</Row>
			</Container>

			<Container fluid className='home-hero__fav-pics px-2 px-sm-4 pb-5'>
				<Row>
					{photographer?.fields?.favoriteShots?.slice(0, 3).map((i) => {
						return (
							<Col xs={12} sm={4} key={i?.sys?.id}>
								<img
									loading='lazy'
									src={`https:${i?.fields.file.url}`}
									alt={i?.fields.fileName}
									className='img-fluid mb-2 mb-md-0'
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</Container>
	);
};

export default HomeHero;
