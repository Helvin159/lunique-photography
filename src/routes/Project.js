import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsContext } from '../context/ProjectsContext';
import GenericHero from '../components/GenericHero';
import Loading from '../components/Loading';
import ProjectFeatured from '../components/ProjectFeatured';
import ProjectGallery from '../components/ProjectGallery';
import { Container } from 'react-bootstrap';
import ImageSlider from '../components/ImageSlider';

const Project = () => {
	const { projects } = useContext(ProjectsContext);
	const { slug } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		if (projects) {
			let foundProject = projects.items.find(
				({ fields }) => fields.slug === slug
			);

			setProject(foundProject);
		}
	}, [projects, slug]);

	if (!projects) return <Loading />;

	if (projects)
		return (
			<Fragment>
				<GenericHero heading={project?.fields.title} subHeading={' '} />
				<ProjectFeatured project={project} />
				{project?.fields?.pictures && project?.fields?.pictures.length > 1 && (
					<Container fluid className='p-5'>
						<ImageSlider pictures={project?.fields?.pictures} />
					</Container>
				)}
				{project?.fields?.pictures && (
					<ProjectGallery pictures={project?.fields?.pictures} />
				)}
			</Fragment>
		);
};

export default Project;
