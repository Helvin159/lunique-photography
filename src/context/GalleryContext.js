import { createContext, useState } from 'react';

export const GalleryContext = createContext({
	modalIsOpen: Boolean,
	setModalIsOpen: () => null,
	slideIndex: 0,
	setSlideIndex: () => null,
});

export const GalleryProvider = ({ children }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [slideIndex, setSlideIndex] = useState(0);

	const value = {
		modalIsOpen,
		setModalIsOpen,
		slideIndex,
		setSlideIndex,
	};

	return (
		<GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
	);
};
