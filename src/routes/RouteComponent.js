import React, { Fragment } from 'react';
import Loading from '../components/Loading';
import HomeHero from '../components/HomeHero';
import ProjectsGallery from '../components/ProjectsGallery';
import FeaturedWorks from '../components/FeaturedWorks';
import Hero from '../components/Hero';

const RouteComponent = ({ components }) => {
	const componentRegistry = {
		loading: Loading,
		homeHero: HomeHero,
		heroComponent: Hero,
		projectsGallery: ProjectsGallery,
		featuredWorks: FeaturedWorks,
	};
	return (
		<Fragment>
			<h1>Route Component</h1>
		</Fragment>
	);
};

export default RouteComponent;
