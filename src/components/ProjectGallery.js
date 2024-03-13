import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const ProjectGallery = ({ pictures }) => {
	return (
		<Container as='section' fluid className='project-gallery'>
			<Row>
				{pictures?.map((i) => {
					if (!i?.fields?.file?.url) return null;

					if (i?.fields?.file?.url)
						return (
							<Col md={4} className='my-1' key={i?.sys?.id}>
								<img
									src={`https:${i?.fields?.file?.url}`}
									alt={i?.fields?.title}
									className='img-fluid'
								/>
							</Col>
						);

					return null;
				})}
			</Row>
		</Container>
	);
};

export default ProjectGallery;
