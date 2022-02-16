import classes from '../../../styles/components/contact.module.scss';

const Contact = () => {
	return (
		<section className={classes.contactContainer} id="contact">
			<div className={classes.headingContainer}>
				<h2 className={classes.heading}>
					Decyzja co do wyboru oferty już podjęta,
				</h2>
				<h2 className={classes.heading}>a może potrzebujesz pomocy?</h2>
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
			<img
				alt="Decoration leaves - right"
				className={classes.decorationLeavesLeft}
				src="/assets/leavesTopLeft.png"
			/>
			<img
				alt="Decoration leaves - left"
				className={classes.decorationLeavesRight}
				src="/assets/leavesBottomRight.png"
			/>
		</section>
	);
};

export default Contact;
