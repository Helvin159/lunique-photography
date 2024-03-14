import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

const ProjectGallery = ({ pictures }) => {
	const handleClick = (e) => console.log(e.target.dataset.index);
	return (
		<Container as='section' fluid className='project-gallery'>
			<Row className='project-gallery__grid'>
				{pictures?.map((i, k) => {
					if (!i?.fields?.file?.url) return null;

					if (i?.fields?.file?.url) {
						const { height, width } = i?.fields?.file?.details?.image;

						return (
							<Col
								className={`project-gallery__grid__content item ${
									height > width
										? 'item-tall'
										: height < width
										? 'item-short'
										: 'item-med'
								}`}
								key={i?.sys?.id}
								onClick={handleClick}>
								<img
									src={`https:${i?.fields?.file?.url}`}
									data-index={k}
									alt={i?.fields?.title}
								/>
							</Col>
						);
					}

					return null;
				})}
			</Row>
		</Container>
	);
};

export default ProjectGallery;
