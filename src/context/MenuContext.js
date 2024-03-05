import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const HeaderMenuContext = createContext({
	menuIsOpen: null,
	links: null,
	setMenuIsOpen: () => null,
	setLinks: () => null,
});

export const HeaderMenuProvider = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [headerLinks, setHeaderLinks] = useState(null);

	const getMenu = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const menuRes = await client.getEntries({
			content_type: 'headerMenu',
		});
		console.log(menuRes);

		let headerMenu;
		let footerMenu;

		for (let i = 0; i < menuRes.items.length; i++) {
			if (menuRes.items[i].fields.isHeader) {
				headerMenu = menuRes.items[i].fields.links;
			} else {
				footerMenu = menuRes.items[i].fields.links;
			}
		}

		console.log(footerMenu);

		setHeaderLinks(headerMenu);
	};

	useEffect(() => {
		getMenu();
	}, []);

	const value = { menuIsOpen, setMenuIsOpen, headerLinks, setHeaderLinks };

	return (
		<HeaderMenuContext.Provider value={value}>
			{children}
		</HeaderMenuContext.Provider>
	);
};
