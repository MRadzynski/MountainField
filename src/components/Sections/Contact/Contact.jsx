import classes from '../../../styles/components/contact.module.scss';

const Contact = () => {
	return (
		<section className={classes.contactContainer} id="contact">
			<div className={classes.headingContainer}>
				<h1 classes={classes.heading}>
					Decyzja co do wyboru oferty już podjęta, <br />a może potrzebujesz
					pomocy?
				</h1>
			</div>
			<div className={classes.contactBox}>
				<p className={classes.emailInfo}>
					Napisz do nas na
					<a className={classes.contactLink} href="/">
						shop@mountainfield.pl
					</a>
				</p>
				<p className={classes.calendarInfo}>
					Lub umów się z nami na spotkanie przez wybór wolnego terminu w
					kalendarzu:
					<a className={classes.contactLink} href="/">
						https://calendly.com/szymonst_mf
					</a>
				</p>
			</div>
		</section>
	);
};

export default Contact;
