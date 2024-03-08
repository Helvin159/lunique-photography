import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutHero = ({ photographer }) => {
	const { pathname } = useLocation();

	useEffect(() => {}, [pathname]);

	return (
		<Container fluid className='about-hero'>
			<Container className='about-hero__header'>
				<h1>About me</h1>
			</Container>
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
						className='img-fluid'
						src={`https:${photographer?.fields?.proPhoto?.fields?.file?.url}`}
						alt='picone'
					/>
				</Col>
			</Row>
			{/* <Row className='home-hero__about__copy-secondary pt-5'>
				<Col
					lg={12}
					className='home-hero__about__copy-secondary__copy px-0 px-lg-2'>
					<Container className='px-0 mx-0'>
						<div className='px-0 pb-5 px-lg-4'>
							{documentToReactComponents(photographer?.fields.bio)}
						</div>
						<Link className='d-sm-none'>About Me </Link>
					</Container>
				</Col>
			</Row> */}
			{/* <Container fluid className='px-2 px-sm-4 pb-5'>
				<Row>
					{photographer?.fields?.favoriteShots?.map((i, k) => {
						return (
							<Col xs={12} sm={4}>
								<img
									src={`https:${i?.fields.file.url}`}
									alt={i?.fields.fileName}
									className='img-fluid mb-2 mb-md-0'
								/>
							</Col>
						);
					})}
				</Row>
			</Container> */}
		</Container>
	);
};

export default AboutHero;
