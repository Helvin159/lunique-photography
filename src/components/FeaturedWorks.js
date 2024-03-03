import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const FeaturedWorks = () => {
	return (
		<Container fluid className='featured-works'>
			<Container className='featured-works__header'>
				<h3>Featured Works</h3>
			</Container>
			<Container className='featured-works__content'>
				<Container className='featured-works__content__item'>
					<img src='' alt='' className='img-fluid' />
					<Row className='featured-works__content__item__copy'>
						<Col md={4}>
							<h4>Art Director</h4>
						</Col>
						<Col md={2}>
							<p>2023</p>
						</Col>
					</Row>
				</Container>
				<Container className='featured-works__content__item'>
					<img src='' alt='' className='img-fluid' />
					<Row className='featured-works__content__item__copy flex-row-reverse'>
						<Col md={4}>
							<h4>Photographer</h4>
						</Col>
						<Col md={2}>
							<p>2023</p>
						</Col>
					</Row>
				</Container>
				<Container className='featured-works__content__item'>
					<img src='' alt='' className='img-fluid' />
					<Row className='featured-works__content__item__copy'>
						<Col md={4}>
							<h4>Videographer</h4>
						</Col>
						<Col md={2}>
							<p>2023</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</Container>
	);
};

export default FeaturedWorks;
