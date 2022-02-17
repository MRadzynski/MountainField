import { scrollToTop } from '../../../utils/scrollToTop';

import classes from '../../../styles/components/footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footerContainer}>
			<div className={classes.logoContainer}>
				<img
					alt="Mountain Field"
					className={classes.logo}
					src="assets/logo/logo.svg"
					onClick={scrollToTop}
				/>
			</div>
		</footer>
	);
};

export default Footer;
