import React, { Fragment } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutBody = ({ photographer }) => {
	return (
		<Container fluid className='about-body'>
			<Row className='home-hero__about__copy-secondary pt-5'>
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
			</Row>
			<Container fluid className='px-2 px-sm-4 pb-5'>
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
			</Container>
		</Container>
	);
};

export default AboutBody;
