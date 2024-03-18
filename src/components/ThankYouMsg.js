import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ThankYouModalContext } from '../context/ThankYouModal';

const ThankYouMsg = () => {
	const { tyModalIsOpen } = useContext(ThankYouModalContext);

	return (
		<Container
			fluid
			className={`thank-you-msg ${tyModalIsOpen ? 'show' : 'hidden'} `}>
			<Container className='thank-you-msg__content'>
				<h1>Thank You!</h1>
				<h3>I'll be in touch as soon as possible!</h3>
			</Container>
		</Container>
	);
};

export default ThankYouMsg;
