import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { emailRegex, handleNewMessage } from '../utilities/utils';

const ContactForm = () => {
	const [showEmailError, setShowEmailError] = useState(false);
	const form = useRef();

	const handleEmailChange = () => {
		if (
			!emailRegex.test(document.getElementById('contactEmail').value) ||
			null ||
			''
		) {
			setShowEmailError(true);
		} else {
			setShowEmailError(false);
		}
	};

	const navigate = useNavigate();
	const { pathname } = useLocation();

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
							onChange={handleEmailChange}
						/>
						<p
							className={`email-error-message text-center mt-4 mx-auto  ${
								showEmailError ? 'show' : ''
							}`}>
							Email is invalid. Please enter correct email!
						</p>
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
								handleNewMessage(
									form.current[0]?.value,
									form.current[1]?.value,
									form.current[2]?.value,
									form,
									navigate,
									pathname
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
