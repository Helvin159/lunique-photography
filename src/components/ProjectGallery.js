import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';

const ProjectGallery = ({ pictures }) => {
	const btnStyle = {
		background: 'transparent',
		border: 'none',
		outline: '0',
		padding: '0',
		margin: '0 auto',
		minHeight: '100%',
		height: '100%',
	};

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
