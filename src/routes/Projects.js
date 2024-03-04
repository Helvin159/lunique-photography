import React, { Fragment, useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectsGallery from '../components/ProjectsGallery';

const Projects = () => {
	const { projects } = useContext(ProjectsContext);

	if (!projects) return 'Loading...';

	if (projects)
		return (
			<Fragment>
				<ProjectsGallery projects={projects} />
			</Fragment>
		);
};

export default Projects;
