import classes from '../../../styles/components/footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footerContainer}>
			<div className={classes.logoContainer}>
				<img
					alt="Mountain Field"
					className={classes.logo}
					src="assets/logo/logo.svg"
					// onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
				/>
			</div>
		</footer>
	);
};

export default Footer;
