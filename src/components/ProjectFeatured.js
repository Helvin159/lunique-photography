import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Container from 'react-bootstrap/Container';
import ImageSlider from './ImageSlider';
import ProjectGallery from './ProjectGallery';

const ProjectFeatured = ({ project }) => {
	const [date, setDate] = useState('Jan 27th, 2001');

	const projectDate = new Date(project?.fields.projectDate);
	const projectDay = projectDate.getDate();
	const projectMonth = projectDate.getMonth();
	const projectYear = projectDate.getFullYear();

	useEffect(() => {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		setDate(`${months[projectMonth]}, ${projectDay} ${projectYear}`);
	}, [projectMonth, projectDay, projectYear]);

	return (
		<Container as='section' fluid className='project-featured'>
			<Container className='project-featured__date mx-auto px-5'>
				<p className='mx-auto px-5'>{date}</p>
			</Container>
			{project?.fields?.featuredImage && (
				<Container className='project-featured__featured-img mx-auto text-center'>
					<img
						src={`https:${project?.fields?.featuredImage?.fields?.file?.url}`}
						alt={project?.fields?.title}
						className='img-fluid'
					/>
				</Container>
			)}
			{project?.fields?.projectInformationOrStory && (
				<Container className='project-featured__description mx-auto p-5'>
					{documentToReactComponents(
						project?.fields?.projectInformationOrStory
					)}
				</Container>
			)}
		</Container>
	);
};

export default ProjectFeatured;
