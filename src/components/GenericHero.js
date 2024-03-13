import React from 'react';
import { Container } from 'react-bootstrap';

const GenericHero = ({ heading, subHeading }) => {
	return (
		<Container as='section' fluid className='generic-hero'>
			<h1>{heading ? heading : 'Hello World!'}</h1>
			<p>
				{subHeading
					? subHeading
					: "Thinking about a project, let's collaborate!"}
			</p>
		</Container>
	);
};

export default GenericHero;
