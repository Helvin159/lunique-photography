import { createClient } from 'contentful-management';

export const paginate = (array, pageSize, pageNumber) => {
	return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const pathName = window.location.pathname;

export const handleNewMessage = async (name, email, message, ref) => {
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
		.then((entry) => {
			console.log(entry, 'success');
			console.log(ref);

			ref.current.reset();
		})
		.catch(console.error, 'error');
};
