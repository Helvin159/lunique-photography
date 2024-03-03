import React, { Fragment } from 'react';
import HomeHero from '../components/HomeHero';
import FeaturedWorks from '../components/FeaturedWorks';

const Home = () => {
	return (
		<Fragment>
			<HomeHero />
			<FeaturedWorks />
		</Fragment>
	);
};

export default Home;
