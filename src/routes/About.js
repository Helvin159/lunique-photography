import React, { Fragment, useContext } from 'react';
import { PhotographerContext } from '../context/PhotographerContext';
import AboutIntro from '../components/AboutIntro';
import AboutBody from '../components/AboutBody';
import GenericHero from '../components/GenericHero';

const About = () => {
	const { photographer } = useContext(PhotographerContext);
	return (
		<Fragment>
			<GenericHero heading={'About me'} subHeading={' '} />
			<AboutIntro photographer={photographer} />
			<AboutBody photographer={photographer} />
		</Fragment>
	);
};

export default About;
