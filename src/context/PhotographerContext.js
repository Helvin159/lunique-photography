import { createClient } from 'contentful';
import { createContext, useEffect, useState } from 'react';

export const PhotographerContext = createContext({
	photographer: null,
	setPhotographer: () => null,
});

export const PhotographerProvider = ({ children }) => {
	const [photographer, setPhotographer] = useState(null);

	const getPhotographer = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const photographerRes = await client.getEntry('6V7RxXQZGgJ4eerJdllnmL');

		setPhotographer(photographerRes);
	};

	useEffect(() => {
		getPhotographer();
	}, []);

	const value = { photographer, setPhotographer };
	return (
		<PhotographerContext.Provider value={value}>
			{children}
		</PhotographerContext.Provider>
	);
};
