import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { createClient } from 'contentful-management';

const ContactForm = () => {
	const form = useRef();

	const handleSubmit = async (name, email, message) => {
		const client = createClient({
			accessToken: process.env.REACT_APP_CONTENTFUL_CMA_TOKEN_KEY,
		});

		const space = await client.getSpace(
			process.env.REACT_APP_CONTENTFUL_SPACE_ID
		);
		const env = await space.getEnvironment('master');

		env
			.createEntry('messages', {
				fields: {
					name: { 'en-US': `${name}` },
					email: { 'en-US': `${email}` },
					message: { 'en-US': `${message}` },
				},
			})
			.then((entry) => entry.publish())
			.then((entry) => console.log(entry, 'success'))
			.catch(console.error, 'error');
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
					<Container className='contact-form__content__submit-btn'>
						<Button
							onClick={() =>
								handleSubmit(
									form.current[0]?.value,
									form.current[1]?.value,
									form.current[2]?.value
								)
							}>
							Send
						</Button>
					</Container>
				</form>
			</Container>
		</Container>
	);
};

export default ContactForm;
