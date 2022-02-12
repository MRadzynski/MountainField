import classes from '../../../styles/components/welcome.module.scss';

const Welcome = () => {
	const getSlider = () => {
		let index = 0;
		return setInterval((index) => {
			index++;
			return <img src={`/assets/products/icecream${index - 1}.png`} />;
		}, 3000);
	};

	return (
		<section className={classes.welcomeContainer} id="home">
			<div className={classes.contentContainer}>
				<h1 className={classes.heading}>DLA KOGO JEST NASZA OFERTA?</h1>
				<div className={classes.descriptionContainer}>
					<div className={classes.descriptionBox}>
						<p className={classes.description}>
							Twoja firma to startup, lokalna kawiarnia, hotel, globalna firma,
							firma z rodzinną tradycją? Twoje biuro jest małe, duże a może
							wcale go nie potrzebujesz? Mamy doskonałą kawę, herbatę oraz yerba
							mate dla twoich pracowników i klientów, dodatkowo dbamy abyś miał
							tyle ile dokładnie potrzebujesz.
						</p>
					</div>
					<img
						alt="Decoration leaves - left"
						className={classes.decorationLeavesLeft}
						src="/assets/leavesSmallVerticalLeft.png"
					/>
					<img
						alt="Decoration leaves - right"
						className={classes.decorationLeavesRight}
						src="/assets/leavesSmallVerticalRight.png"
					/>
				</div>
			</div>
			<div className={classes.sliderContainer}>
				<div className={classes.slider}>
					<img
						alt="Highlighted product"
						src={`/assets/products/icecream0.png`}
					/>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
