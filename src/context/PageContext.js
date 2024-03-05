import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const PageContext = createContext({
	pages: null,
	setPages: () => null,
});

export const PageProvider = ({ children }) => {
	const [pages, setPages] = useState(null);

	const getPages = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const pagesRes = await client.getEntries({
			content_type: process.env.REACT_APP_CONTENTFUL_PAGE_CONTENT_TYPE,
		});

		setPages(pagesRes);
	};

	useEffect(() => {
		getPages();
	}, []);

	const value = { pages, setPages };

	return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
