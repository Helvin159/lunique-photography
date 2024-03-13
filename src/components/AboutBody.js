import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ImageSlider from './ImageSlider';

const AboutBody = ({ photographer }) => {
	return (
		<Container as='section' fluid className='about-body'>
			<Row className='home-hero__about__copy-secondary pt-5'>
				<Col
					lg={12}
					className='home-hero__about__copy-secondary__copy px-0 px-lg-2'>
					<Container className='px-0 mx-0'>
						<div className='px-0 pb-5 px-lg-4'>
							{documentToReactComponents(photographer?.fields.bio)}
						</div>
					</Container>
				</Col>
			</Row>
			<Container fluid>
				<ImageSlider pictures={photographer?.fields?.favoriteShots} />
			</Container>
		</Container>
	);
};

export default AboutBody;
