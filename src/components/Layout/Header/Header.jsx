import classes from '../../../styles/components/header.module.scss';
import MobileNav from '../../MobileNav/MobileNav';
import Navbar from '../../Navbar/Navbar';
import { isMobile } from '../../../utils';

const Header = () => {
	return (
		<header className={classes.headerContainer}>
			<div className={classes.logoContainer}>
				<img
					alt="Mountain Field"
					className={classes.logo}
					src="/assets/logo/logo.svg"
				/>
			</div>
			{isMobile() ? <MobileNav /> : <Navbar />}
		</header>
	);
};

export default Header;
