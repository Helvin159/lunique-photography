import { createContext, useState } from 'react';

export const ThankYouModalContext = createContext({
	tyModalIsOpen: Boolean,
	setTyModalIsOpen: () => null,
});

export const ThankYouModalProvider = ({ children }) => {
	const [tyModalIsOpen, setTyModalIsOpen] = useState(false);

	const value = { tyModalIsOpen, setTyModalIsOpen };

	return (
		<ThankYouModalContext.Provider value={value}>
			{children}
		</ThankYouModalContext.Provider>
	);
};
