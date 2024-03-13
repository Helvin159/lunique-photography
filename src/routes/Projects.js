import React, { Fragment, useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectsGallery from '../components/ProjectsGallery';
import Loading from '../components/Loading';
import GenericHero from '../components/GenericHero';

const Projects = () => {
	const { projects } = useContext(ProjectsContext);

	if (!projects) return <Loading />;

	if (projects)
		return (
			<Fragment>
				<GenericHero
					heading={'My Work'}
					subHeading={"Some previous projects I've worked on!"}
				/>
				<ProjectsGallery projects={projects} />
			</Fragment>
		);
};

export default Projects;
