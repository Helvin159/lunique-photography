import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const FeaturedWorks = ({ projects }) => {
	let count = 1;

	return (
		<Container as='section' fluid className='featured-works'>
			<Container className='featured-works__header'>
				<h3>Featured Works</h3>
			</Container>
			<Container className='featured-works__content'>
				{projects?.items.map((i) => {
					if (i?.fields?.featuredProject) {
						count = count + 1;
						const projectDate = new Date(i.fields.projectDate);
						const bgSettings = {
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						};
						const style = {
							background: `linear-gradient(0deg, rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(https:${i?.fields?.featuredImage?.fields?.file?.url})`,
						};

						return (
							<Container
								className='featured-works__content__item'
								key={i?.sys?.id}
								style={{ ...style, ...bgSettings }}>
								<Row
									className={`featured-works__content__item__copy  ${
										count % 2 === 0 && 'flex-row-reverse'
									}`}>
									<Col md={9}>
										<Link to={`/projects/${i?.fields?.slug}`}>
											<h4>{i.fields.title}</h4>
										</Link>
									</Col>
									<Col md={2}>
										<Link to={`/projects/${i?.fields?.slug}`}>
											<p>{projectDate.getFullYear()}</p>
										</Link>
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
