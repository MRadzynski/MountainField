import classes from '../../../styles/components/welcome.module.scss';

const Welcome = () => {
	return (
		<section className={classes.welcomeContainer}>
			<div className={classes.contentContainer}>
				<h1 className={classes.heading}>DLA KOGO JEST NASZA OFERTA?</h1>
				<div className={classes.descriptionBox}>
					<p className={classes.description}>
						Twoja firma to startup, lokalna kawiarnia, hotel, globalna firma,
						firma z rodzinną tradycją? Twoje biuro jest małe, duże a może wcale
						go nie potrzebujesz? Mamy doskonałą kawę, herbatę oraz yerba mate
						dla twoich pracowników i klientów, dodatkowo dbamy abyś miał tyle
						ile dokładnie potrzebujesz.
					</p>
				</div>
			</div>
			<div className={classes.slider}></div>
		</section>
	);
};

export default Welcome;
