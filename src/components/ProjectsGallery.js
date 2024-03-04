import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ProjectsGallery = ({ projects }) => {
	return (
		<Container fluid className='projects'>
			<Container fluid className='projects__header'>
				<Row className='projects__header__content'>
					<Col sm={6} className='projects__header__content__item'>
						<h2>Projects</h2>
					</Col>
					<Col sm={4} className='projects__header__content__item text-end'>
						<Link to={'/projects'}>Show all</Link>
					</Col>
				</Row>
			</Container>
			<Container fluid className='projects__gallery'>
				<Container fluid className='projects__gallery__first'>
					<Row className='projects__gallery__first__content'>
						<Col md={8} className='projects__gallery__first__content__item'>
							<Row className='projects__gallery__first__content__item__row'>
								<Col
									md={6}
									className='projects__gallery__first__content__item__row__content'>
									<Link>
										<img
											src={`https:${projects.items[0].fields.featuredImage.fields.file.url}`}
											width={'100%'}
											alt='Pic one'
											className='img-fluid'
										/>
									</Link>
								</Col>
								<Col
									md={6}
									className='projects__gallery__first__content__item__row__content'>
									<Link>
										<img
											src={`https:${projects.items[1].fields.featuredImage.fields.file.url}`}
											width={'100%'}
											alt='Pic one'
											className='img-fluid'
										/>
									</Link>
								</Col>
							</Row>

							<Link>
								<img
									width={'100%'}
									src={`https:${projects.items[2].fields.featuredImage.fields.file.url}`}
									alt='Pic one'
									className='img-fluid'
								/>
							</Link>
						</Col>
						<Col md={4} className='projects__gallery__first__content__item'>
							<Link>
								<img
									src={`https:${projects.items[3].fields.featuredImage.fields.file.url}`}
									alt='Pic one'
									width={'100%'}
									className='img-fluid'
								/>
							</Link>
						</Col>
					</Row>
				</Container>
				<Container fluid className='projects__gallery__second'>
					<Link>
						<img
							src={`https:${projects.items[4].fields.featuredImage.fields.file.url}`}
							alt='Pic one'
							width={'100%'}
							className='img-fluid'
						/>
					</Link>
				</Container>
			</Container>
		</Container>
	);
};

export default ProjectsGallery;
