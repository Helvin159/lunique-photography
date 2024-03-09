import React, { Fragment } from 'react';
import GenericHero from '../components/GenericHero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
	return (
		<Fragment>
			<GenericHero heading={'Contact'} />
			<ContactForm />
		</Fragment>
	);
};

export default Contact;
