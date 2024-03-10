import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsContext } from '../context/ProjectsContext';
import GenericHero from '../components/GenericHero';
import Loading from '../components/Loading';

const Project = () => {
	const [project, setProject] = useState(null);
	const { projects } = useContext(ProjectsContext);
	const { slug } = useParams();

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
			</Fragment>
		);
};

export default Project;
