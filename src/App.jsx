import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Welcome from './components/Sections/Welcome/Welcome';
import About from './components/Sections/About/About';
import Offer from './components/Sections/Offer/Offer';
import Contact from './components/Sections/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotAllowedOverlay from './components/NotAllowedOverlay/NotAllowedOverlay';
import { smoothNavScroll } from './utils/smoothNavScroll';
import { useEffect, useState } from 'react';

import classes from './styles/components/app.module.scss';

import breakpointsData from './data/breakpoints.json';

const defaultWidth = window.innerWidth;

const App = () => {
	const [displayArrow, setDisplayArrow] = useState(false);
	const [noSupportedOrientation, setNoSupportedOrientation] = useState(false);

	const {
		breakpoints: { tablet },
	} = breakpointsData;

	useEffect(() => {
		smoothNavScroll();
		document.addEventListener('scroll', displayArrowHandler);

		window.screen.orientation.addEventListener('change', (e) => {
			if (
				e.currentTarget.type === 'landscape-primary' &&
				defaultWidth < tablet
			) {
				document.querySelector('#app').classList.add(classes.stopScrolling);
				setNoSupportedOrientation(true);
			} else {
				document.querySelector('#app').classList.remove(classes.stopScrolling);
				setNoSupportedOrientation(false);
			}
		});

		return () => document.removeEventListener('scroll', displayArrowHandler);
	}, []);

	const displayArrowHandler = (e) =>
		window.scrollY > 500 ? setDisplayArrow(true) : setDisplayArrow(false);

	return (
		<div className={classes.appContainer} id="app">
			<Header />
			<Welcome />
			<About />
			<Offer />
			<Contact />
			<Footer />
			{displayArrow && <ScrollToTop />}
			{noSupportedOrientation && <NotAllowedOverlay />}
		</div>
	);
};

export default App;
