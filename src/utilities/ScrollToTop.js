import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 250);
	}, [pathname]);

	return children || null;
};

export default ScrollToTop;
