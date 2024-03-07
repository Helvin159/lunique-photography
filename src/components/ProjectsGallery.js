import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProjectsGallery = ({ projects }) => {
	const [totalPages, setTotalPages] = useState(2);
	const [currentPage, setCurrentPage] = useState(1);

	const path = window.location.pathname;

	useEffect(() => {
		setTotalPages(Math.ceil(projects?.items.length / 5));
	}, [projects]);

	const paginate = (array, pageSize, pageNumber) => {
		return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
	};

	const [page, setPage] = useState(paginate(projects?.items, 5, 1));

	// window.scrollTo(0, 0);

	const nextPage = () => {
		if (currentPage >= 1 && currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			setPage(paginate(projects.items, 5, currentPage + 1));

			// ScrollToTop();
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			setPage(paginate(projects.items, 5, currentPage - 1));

			// ScrollToTop();
		}
	};

	if (projects)
		return (
			<Container fluid className='projects'>
				<Container fluid className='projects__header'>
					<Row className='projects__header__content'>
						<Col sm={6} className='projects__header__content__item'>
							<h2>Projects</h2>
						</Col>
						{path === '/' && (
							<Col sm={4} className='projects__header__content__item text-end'>
								<Link to={'/projects'}>Show all</Link>
							</Col>
						)}
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
										{page[0] && (
											<Link
												to={
													path === '/'
														? `/projects/${page[0]?.fields.slug}`
														: page[0]?.fields.slug
												}>
												<img
													src={`https:${page[0]?.fields.featuredImage.fields.file.url}`}
													width={'100%'}
													alt='Pic one'
													className='img-fluid'
												/>
											</Link>
										)}
									</Col>
									<Col
										md={6}
										className='projects__gallery__first__content__item__row__content'>
										{page[1] && (
											<Link
												to={
													path === '/'
														? `/projects/${page[1]?.fields.slug}`
														: page[1]?.fields.slug
												}>
												<img
													src={`https:${page[1]?.fields.featuredImage.fields.file.url}`}
													width={'100%'}
													alt='Pic Two'
													className='img-fluid'
												/>
											</Link>
										)}
									</Col>
								</Row>

								{page[2] && (
									<Link
										to={
											path === '/'
												? `/projects/${page[2]?.fields.slug}`
												: page[2]?.fields.slug
										}>
										<img
											width={'100%'}
											src={`https:${page[2]?.fields.featuredImage.fields.file.url}`}
											alt='Pic Three'
											className='img-fluid'
										/>
									</Link>
								)}
							</Col>
							<Col md={4} className='projects__gallery__first__content__item'>
								{page[3] && (
									<Link
										to={
											path === '/'
												? `/projects/${page[3]?.fields.slug}`
												: page[3]?.fields.slug
										}>
										<img
											src={`https:${page[3]?.fields.featuredImage.fields.file.url}`}
											alt='Pic Four'
											width={'100%'}
											className='img-fluid'
										/>
									</Link>
								)}
							</Col>
						</Row>
					</Container>
					<Container fluid className='projects__gallery__second px-2'>
						{page[3] && (
							<Link
								to={
									path === '/'
										? `/projects/${page[4]?.fields.slug}`
										: page[4]?.fields.slug
								}>
								<img
									src={`https:${page[4]?.fields.featuredImage.fields.file.url}`}
									alt='Pic Five'
									width={'100%'}
									className='img-fluid'
								/>
							</Link>
						)}
					</Container>
				</Container>

				{path !== '/' && (
					<Container fluid className='text-center'>
						{currentPage > 1 && <Button onClick={prevPage}>prev Page</Button>}
						{currentPage < totalPages && (
							<Button onClick={nextPage}>next Page</Button>
						)}
					</Container>
				)}
			</Container>
		);
};

export default ProjectsGallery;
