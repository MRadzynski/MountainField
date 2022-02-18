import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Welcome from './components/Sections/Welcome/Welcome';
import About from './components/Sections/About/About';
import Offer from './components/Sections/Offer/Offer';
import Contact from './components/Sections/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { smoothNavScroll } from './utils/smoothNavScroll';
import { useEffect, useState } from 'react';

import classes from './styles/components/app.module.scss';

const App = () => {
	const [displayArrow, setDisplayArrow] = useState(0);

	useEffect(() => {
		smoothNavScroll();
		document.addEventListener('scroll', displayArrowHandler);

		return () => document.removeEventListener('scroll', displayArrowHandler);
	}, []);

	const displayArrowHandler = () =>
		window.scrollY > 500 ? setDisplayArrow(true) : setDisplayArrow(false);

	return (
		<div className={classes.appContainer}>
			<Header />
			<Welcome />
			<About />
			<Offer />
			<Contact />
			<Footer />
			{displayArrow && <ScrollToTop />}
		</div>
	);
};

export default App;
