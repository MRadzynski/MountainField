import classes from '../../../styles/components/header.module.scss';
import MobileNav from '../../MobileNav/MobileNav';
import Navbar from '../../Navbar/Navbar';

import breakpointsData from '../../../data/breakpoints.json';

const Header = () => {
	const { breakpoints } = breakpointsData;

	return (
		<header className={classes.headerContainer}>
			<div className={classes.logoContainer}>
				<img
					alt="Mountain Field"
					className={classes.logo}
					src="/assets/logo/logoMF.png"
				/>
			</div>
			{window.innerWidth < breakpoints.xsLaptop ? <MobileNav /> : <Navbar />}
		</header>
	);
};

export default Header;
