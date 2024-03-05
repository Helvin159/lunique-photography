import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const FooterMenuContext = createContext({
	footerLinks: null,
	setFooterLinks: () => null,
});

export const FooterMenuProvider = ({ children }) => {
	const [footerLinks, setFooterLinks] = useState(null);

	const getFooterMenu = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const menuRes = await client.getEntries({
			content_type: 'footerComponent',
		});
		console.log(menuRes);

		setFooterLinks(menuRes);
	};

	useEffect(() => {
		getFooterMenu();
	}, []);

	const value = { footerLinks, setFooterLinks };

	return (
		<FooterMenuContext.Provider value={value}>
			{children}
		</FooterMenuContext.Provider>
	);
};
