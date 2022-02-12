import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Welcome from './components/Sections/Welcome/Welcome';
import Offer from './components/Sections/Offer/Offer';
import Contact from './components/Sections/Contact/Contact';

import classes from './styles/components/app.module.scss';

function App() {
	return (
		<div className={classes.appContainer}>
			<Header />
			<Welcome />
			<Offer />
			<Footer />
		</div>
	);
}

export default App;
