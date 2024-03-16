import { createClient } from 'contentful';
import { createContext, useEffect, useState } from 'react';

export const SiteDetailsContext = createContext({
	siteDetails: null,
	setSiteDetails: () => null,
});

export const SiteDetailsProvider = ({ children }) => {
	const [siteDetails, setSiteDetails] = useState(null);

	const getSiteDetails = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const siteDetailssRes = await client.getEntry(
			process.env.REACT_APP_CONTENTFUL_SITE_DETAILS_ID
		);

		setSiteDetails(siteDetailssRes);

		// Sets page title to Business Name in Site Details
		document.querySelector('title').innerHTML =
			siteDetailssRes?.fields?.businessName;
	};

	useEffect(() => {
		getSiteDetails();
	}, []);

	const value = { siteDetails, setSiteDetails };

	return (
		<SiteDetailsContext.Provider value={value}>
			{children}
		</SiteDetailsContext.Provider>
	);
};
