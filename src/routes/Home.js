import React, { Fragment, useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';
import HomeHero from '../components/HomeHero';
import FeaturedWorks from '../components/FeaturedWorks';
import ProjectsGallery from '../components/ProjectsGallery';
import Loading from '../components/Loading';

const Home = () => {
	const { projects } = useContext(ProjectsContext);

	if (!projects) return <Loading />;

	if (projects)
		return (
			<Fragment>
				<HomeHero />
				<FeaturedWorks projects={projects} />
				<ProjectsGallery projects={projects} />
			</Fragment>
		);
};

export default Home;
