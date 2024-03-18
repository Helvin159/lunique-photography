import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import { GalleryContext } from '../context/GalleryContext';

const ProjectGallery = ({ pictures }) => {
	const { modalIsOpen, setModalIsOpen, setSlideIndex } =
		useContext(GalleryContext);

	const handleOnClick = (e) => {
		setSlideIndex(e.target.dataset.index);

		if (!modalIsOpen) {
			setModalIsOpen(!modalIsOpen);
		}
	};

	return (
		<Container as='section' fluid className='project-gallery'>
			<Row className='project-gallery__grid'>
				{pictures?.map((i) => {
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
								data-index={pictures.indexOf(i)}
								onClick={handleOnClick}>
								<img
									draggable={false}
									src={`https:${i?.fields?.file?.url}`}
									data-index={pictures.indexOf(i)}
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
