import React, { Fragment } from 'react';
import Loading from '../components/Loading';
import HomeHero from '../components/HomeHero';
import ProjectsGallery from '../components/ProjectsGallery';
import FeaturedWorks from '../components/FeaturedWorks';
import Hero from '../components/Hero';
// import { createClient } from 'contentful';

const RouteComponent = ({ page }) => {
	// const getProject = async (id) => {
	// 	const client = createClient({
	// 		space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
	// 		accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
	// 	});

	// 	const single = await client.getEntry(id);

	// 	return single;
	// };

	return (
		<Fragment>
			{page?.fields.components.map((i, k) => {
				const { sys, fields } = i;

				const componentRegistry = {
					loading: <Loading key={sys.id} />,
					homeHero: <HomeHero key={sys.id} />,
					heroComponent: <Hero title={fields.title} key={sys.id} />,
					galleryComponent: <ProjectsGallery key={sys.id} />,
					featuredWorksComponent: <FeaturedWorks key={sys.id} />,
				};

				return componentRegistry[i.sys.contentType.sys.id];
			})}
		</Fragment>
	);
};

export default RouteComponent;
