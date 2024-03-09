import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeaturedWorks = ({ projects }) => {
	let count = 1;

	return (
		<Container as='section' fluid className='featured-works'>
			<Container className='featured-works__header'>
				<h3>Featured Works</h3>
			</Container>
			<Container className='featured-works__content'>
				{projects?.items.map((i, k) => {
					if (i.fields.featuredProject) {
						count = count + 1;
						const projectDate = new Date(i.fields.projectDate);

						return (
							<Container className='featured-works__content__item' key={k}>
								<img src='' alt='' className='img-fluid' />
								<Row
									className={`featured-works__content__item__copy ${
										count % 2 === 0 && 'flex-row-reverse'
									}`}>
									<Col md={9}>
										<h4>{i.fields.title}</h4>
									</Col>
									<Col md={2}>
										<p>{projectDate.getFullYear()}</p>
									</Col>
								</Row>
							</Container>
						);
					} else {
						return null;
					}
				})}
			</Container>
		</Container>
	);
};

export default FeaturedWorks;
