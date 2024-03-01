import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const HomeHero = () => {
	return (
		<Container fluid className='home-hero'>
			<Container className='home-hero__content'>
				<h1>capturing</h1>
				<p>The moments that captivate your heart</p>
			</Container>
			<Container fluid className='home-hero__about'>
				<Row>
					<Col md={5}>
						<Container>
							<p>
								Amelia Allen is a lifestyle, portrait and documentary
								photographer from Somerset who now lives and works in London.
							</p>
						</Container>
					</Col>
					<Col md={7}></Col>
				</Row>
			</Container>
		</Container>
	);
};

export default HomeHero;
