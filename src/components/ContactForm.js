import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
	const form = useRef();

	const handleOnClick = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<Container as='section' fluid className='contact-form'>
			<Container className='contact-form__content'>
				<form ref={form} className='contact-form__content__form'>
					<Container className='contact-form__content__form__group'>
						<label htmlFor='contactName'>name</label>
						<input
							required
							type='text'
							name='contactName'
							id='contactName'
							placeholder='Your Full Name'
						/>
					</Container>
					<Container className='contact-form__content__form__group'>
						<label htmlFor='contactEmail'>email</label>
						<input
							required
							type='email'
							name='contactEmail'
							id='contactEmail'
							placeholder='Email address'
						/>
					</Container>
					<Container className='contact-form__content__form__group'>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							placeholder='Leave me a message here.'
						/>
					</Container>
				</form>
				<Container className='contact-form__content__submit-btn'>
					<Button onClick={handleOnClick}>Send</Button>
				</Container>
			</Container>
		</Container>
	);
};

export default ContactForm;
