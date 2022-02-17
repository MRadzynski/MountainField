import classes from '../../../styles/components/welcome.module.scss';

import { useEffect, useState } from 'react';

const Welcome = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setSlideIndex((slideNum) => (slideNum === 2 ? 0 : slideNum + 1));
		}, 7000);
	}, []);

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
				<div className={classes.slider} id="slider">
					<img
						alt="Highlighted product"
						className={classes.slideImage}
						src={`/assets/products/icecream${slideIndex}.png`}
					/>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
