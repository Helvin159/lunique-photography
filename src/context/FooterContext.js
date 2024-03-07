import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const FooterMenuContext = createContext({
	footerComponent: null,
	setFooterComponent: () => null,
	footerSocialMedia: null,
	setFooterSocialMedia: () => null,
	footerContactEmail: null,
	setFooterContactEmail: () => null,
});

export const FooterMenuProvider = ({ children }) => {
	const [footerComponent, setFooterComponent] = useState(null);
	const [footerContactEmail, setFooterContactEmail] = useState(null);
	const [footerStatement, setFooterStatement] = useState(null);
	const [footerSocialMedia, setFooterSocialMedia] = useState(null);

	const getFooterMenu = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const footerRes = await client.getEntries({
			content_type: 'footerComponent',
		});

		console.log(footerRes);

		setFooterComponent(footerRes);

		setFooterStatement(footerRes.items[0].fields.footerStatement);
		setFooterContactEmail(footerRes.items[0].fields.emailAddress);
		setFooterSocialMedia(footerRes.items[0].fields.socialMedia);
	};

	useEffect(() => {
		getFooterMenu();
	}, []);

	const value = {
		footerComponent,
		setFooterComponent,
		footerSocialMedia,
		setFooterSocialMedia,
		footerStatement,
		setFooterStatement,
		footerContactEmail,
		setFooterContactEmail,
	};

	return (
		<FooterMenuContext.Provider value={value}>
			{children}
		</FooterMenuContext.Provider>
	);
};
