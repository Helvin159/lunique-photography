import React, { Fragment, useContext } from 'react';
import { PhotographerContext } from '../context/PhotographerContext';
import AboutHero from '../components/AboutHero';
import AboutBody from '../components/AboutBody';

const About = () => {
	const { photographer } = useContext(PhotographerContext);
	return (
		<Fragment>
			<AboutHero photographer={photographer} />
			<AboutBody photographer={photographer} />
		</Fragment>
	);
};

export default About;
