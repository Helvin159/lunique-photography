import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import PageTransition from '../components/PageTransition';

const Outlet = () => {
	return (
		<Fragment>
			<MobileNav />

			<main>
				<Header />
				<Layout />
				<Footer />
			</main>
			<PageTransition />
		</Fragment>
	);
};

export default Outlet;
