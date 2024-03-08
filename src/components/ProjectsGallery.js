import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { paginate } from '../utilities/utils';

const ProjectsGallery = ({ projects }) => {
	const [totalPages, setTotalPages] = useState(2);
	const [currentPage, setCurrentPage] = useState(1);
	const [page, setPage] = useState(paginate(projects?.items, 5, 1));

	const { pathname } = useLocation();

	// Sets total pages needed for pagination, and reffreshes pathname
	// when path changes in order to include or remove necessary elements
	// or components
	useEffect(() => {
		setTotalPages(Math.ceil(projects?.items.length / 5));
	}, [projects, pathname]);

	// Page Numbers array generated to use as buttons
	const pageNums = [];

	for (let i = 0; i < totalPages; i++) {
		pageNums.push(i + 1);
	}

	// Get position info on the Header Element
	const headerEl = document
		.querySelector('.projects__header__content__item')
		?.getBoundingClientRect();

	// Next Page onClick function
	const nextPage = () => {
		if (currentPage >= 1 && currentPage < totalPages) {
			window.scrollTo(0, headerEl?.top);

			setCurrentPage(currentPage + 1);
			setPage(paginate(projects.items, 5, currentPage + 1));
		}
	};

	// Previous Page onClick function
	const prevPage = () => {
		if (currentPage > 1) {
			window.scrollTo(0, headerEl?.top);
			setCurrentPage(currentPage - 1);
			setPage(paginate(projects.items, 5, currentPage - 1));
		}
	};

	// Switch Page by clicking on page number function
	const switchByPageNum = (selectedPage) => {
		window.scrollTo(0, headerEl?.top);
		setCurrentPage(selectedPage);
		setPage(paginate(projects.items, 5, selectedPage));
	};

	if (projects)
		return (
			<Container fluid className='projects'>
				<Container fluid className='projects__header'>
					<Row className='projects__header__content'>
						<Col sm={6} className='projects__header__content__item'>
							<h2>Projects</h2>
						</Col>
						{pathname === '/' && (
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
													pathname === '/'
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
													pathname === '/'
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
											pathname === '/'
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
											pathname === '/'
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
									pathname === '/'
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

				{pathname !== '/' && (
					<Container fluid className='text-center'>
						{currentPage > 1 && <Button onClick={prevPage}>prev Page</Button>}
						{pageNums.map((i, k) => (
							<Button
								onClick={() => switchByPageNum(parseInt(i))}
								value={parseInt(i)}
								className={`${i === currentPage ? 'active-page' : ''} mx-1`}
								key={k}>
								{i}
							</Button>
						))}
						{currentPage < totalPages && (
							<Button onClick={nextPage}>next Page</Button>
						)}
					</Container>
				)}
			</Container>
		);
};

export default ProjectsGallery;
