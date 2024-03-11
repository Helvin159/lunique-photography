import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';
import { PhotographerContext } from '../context/PhotographerContext';
import HomeHero from '../components/HomeHero';
import FeaturedWorks from '../components/FeaturedWorks';
import ProjectsGallery from '../components/ProjectsGallery';
import Loading from '../components/Loading';

const Home = () => {
	const { projects } = useContext(ProjectsContext);
	const { photographer } = useContext(PhotographerContext);

	if (!projects) return <Loading />;

	if (projects)
		return (
			<Fragment>
				<HomeHero photographer={photographer} />
				<FeaturedWorks projects={projects} />
				<ProjectsGallery projects={projects} />
			</Fragment>
		);
};

export default Home;
