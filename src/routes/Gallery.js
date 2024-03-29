import React, { Fragment, useContext } from 'react';
import GenericHero from '../components/GenericHero';
import ProjectGallery from '../components/ProjectGallery';
import { ProjectsContext } from '../context/ProjectsContext';
import Loading from '../components/Loading';

const Gallery = () => {
	const { projectsGallery } = useContext(ProjectsContext);

	if (!projectsGallery) return <Loading />;

	if (projectsGallery)
		return (
			<Fragment>
				<GenericHero heading={'Gallery'} subHeading={' '} />
				<ProjectGallery pictures={projectsGallery} />
			</Fragment>
		);
};

export default Gallery;
