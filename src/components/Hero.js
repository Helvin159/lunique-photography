import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = ({ title }) => {
	return (
		<Container>
			<h1>{title}</h1>
		</Container>
	);
};

export default Hero;
