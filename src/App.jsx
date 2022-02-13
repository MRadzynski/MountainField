import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Welcome from './components/Sections/Welcome/Welcome';
import About from './components/Sections/About/About';
import Offer from './components/Sections/Offer/Offer';
import Contact from './components/Sections/Contact/Contact';

import { useEffect } from 'react';

import classes from './styles/components/app.module.scss';

const App = () => {
	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth',
				});
			});
		});
	}, []);

	return (
		<div className={classes.appContainer}>
			<Header />
			<Welcome />
			<About />
			<Offer />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
