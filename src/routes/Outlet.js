import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

const Outlet = () => {
	return (
		<Fragment>
			<main>
				<Header />
				<MobileNav />
				<Layout />
				<Footer />
			</main>
		</Fragment>
	);
};

export default Outlet;
