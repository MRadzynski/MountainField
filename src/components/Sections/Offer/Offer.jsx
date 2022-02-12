import classes from '../../../styles/components/offer.module.scss';

const Offer = () => {
	return (
		<section className={classes.offerContainer} id="about">
			<h1 className={classes.heading}>JAK DZIAŁA NASZA USŁUGA?</h1>
			<div className={classes.cardsContainer}>
				<div className={classes.cardContainer}>
					<div className={classes.card}>
						<h3 className={classes.cardHeading}>Krok 1</h3>
						<p className={classes.cardDescription}>
							Wybierasz jedną z naszych ofert lub modyfikujesz jedną z nich do
							potrzeb swojej firmy z naszą pomocą. 'link do ofert'
						</p>
						<img
							alt="Offer step 1"
							className={classes.cardImage}
							src="/assets/offer.png"
						/>
					</div>
					<img
						alt="Decoration leaves - left"
						className={classes.decorationLeavesLeft}
						src="/assets/leavesSmallVerticalTopLeft.png"
					/>
					<img
						alt="Decoration leaves - right"
						className={classes.decorationLeavesRight}
						src="/assets/leavesSmallVerticalRight.png"
					/>
				</div>
				<div className={classes.cardContainer}>
					<div className={classes.card}>
						<h3 className={classes.cardHeading}>Krok 2</h3>
						<p className={classes.cardDescription}>
							Subskrybujesz wybraną ofertę, która zwróciła twoją uwagę.
						</p>
						<img
							alt="Offer step 2"
							className={classes.cardImage}
							src="/assets/subscribe.png"
						/>
					</div>
					<img
						alt="Decoration leaves - left"
						className={classes.decorationLeavesLeft}
						src="/assets/leavesSmallVerticalTopLeft.png"
					/>
					<img
						alt="Decoration leaves - right"
						className={classes.decorationLeavesRight}
						src="/assets/leavesSmallVerticalRight.png"
					/>
				</div>
				<div className={classes.cardContainer}>
					<div className={classes.card}>
						<h3 className={classes.cardHeading}>Krok 3</h3>
						<p className={classes.cardDescription}>
							Dostarczamy z wyznaczoną przez Ciebie częstotliwością nasze
							produkty do twojego biura, twoich zdalnych pracowników lub hotelu
							czy restauracji wraz z fakturą.
						</p>
						<img
							alt="Offer step 3"
							className={classes.cardImage}
							src="/assets/delivery.png"
						/>
					</div>
					<img
						alt="Decoration leaves - left"
						className={classes.decorationLeavesLeft}
						src="/assets/leavesSmallVerticalTopLeft.png"
					/>
					<img
						alt="Decoration leaves - right"
						className={classes.decorationLeavesRight}
						src="/assets/leavesSmallVerticalRight.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default Offer;
