import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import AppStore from '../AppStore/AppStore';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Home = () => {
	return (
		<div>
			<Hero />
			<Services />
			<Banner />
			<AppStore />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default Home;