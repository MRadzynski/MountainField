import classes from '../../../styles/components/offer.module.scss';

const Offer = () => {
	return (
		<section className={classes.offerContainer} id="offer">
			<div className={classes.headingContainer}>
				<h1 className={classes.heading}>OFERTY DO WYBORU</h1>
			</div>

			<div className={classes.subscriptionsContainer}>
				<div className={classes.subscriptionsBox}>
					<div className={classes.subscriptionHome}>
						<div className={classes.subscriptionTitleContainer}>
							<h2 className={classes.subscriptionTitle}>HOME OFFICE</h2>
						</div>
						<div className={classes.subscriptionBox}>
							<h3 className={classes.subscriptionPrice}>XX PLN/os./mies.</h3>
							<p className={classes.subscriptionWorkers}>
								Liczba pracowników
								<div className={classes.workersAmount}>
									<img
										alt="People icon"
										className={classes.peopleImage}
										src="assets/people.png"
									/>
									<span className={classes.subscriptionPeople}> x15</span>
								</div>
							</p>
							<input
								className={classes.inputSlider}
								type="range"
								step="1"
								min="0"
							/>
							<p className={classes.productsHeading}>Dla każdego pracownika:</p>
							<div className={classes.subscriptionsAmounts}>
								<div className={classes.subscriptionAmount}>
									<p className={classes.productType}>KAWA 250g</p>
									<div className={classes.productControls}>
										<div className={classes.minusButton}>-</div>
										<span className={classes.amountPlaceholder}>1</span>
										<div className={classes.plusButton}>+</div>
									</div>
								</div>
								<div className={classes.subscriptionAmount}>
									<p className={classes.productType}>HERBATA 100g</p>
									<div className={classes.productControls}>
										<div className={classes.minusButton}>-</div>
										<span className={classes.amountPlaceholder}>2</span>
										<div className={classes.plusButton}>+</div>
									</div>
								</div>
								<div className={classes.subscriptionAmount}>
									<p className={classes.productType}>MATE 300g</p>
									<div className={classes.productControls}>
										<div className={classes.minusButton}>-</div>
										<span className={classes.amountPlaceholder}>3</span>
										<div className={classes.plusButton}>+</div>
									</div>
								</div>
							</div>
							<button className={classes.submitButtonHome}>
								WYŚLIJ ZAPYTANIE
							</button>
						</div>
					</div>

					<div className={classes.subscriptionStandard}>
						<div className={classes.subscriptionTitleContainer}>
							<h2 className={classes.subscriptionTitle}>STANDARD</h2>
						</div>
						<div className={classes.subscriptionBox}>
							<h3 className={classes.subscriptionPrice}>XX PLN+VAT/mies.</h3>
							<div className={classes.subscriptionsAmountsContainer}>
								<div className={classes.sliderContainer}>
									<div className={classes.sliderText}>
										<span className={classes.productTypeSlider}>KAWA</span>
										<span className={classes.productAmountSlider}>~10x☕</span>
									</div>
									<input
										className={classes.inputSlider}
										type="range"
										step="1"
										min="0"
									/>
								</div>
								<div className={classes.sliderContainer}>
									<div className={classes.sliderText}>
										<span className={classes.productTypeSlider}>HERBATA</span>
										<span className={classes.productAmountSlider}>~15x☕</span>
									</div>
									<input
										className={classes.inputSlider}
										type="range"
										step="1"
										min="0"
									/>
								</div>
								<div className={classes.sliderContainer}>
									<div className={classes.sliderText}>
										<span className={classes.productTypeSlider}>MATE</span>
										<span className={classes.productAmountSlider}>~20x☕</span>
									</div>
									<input
										className={classes.inputSlider}
										type="range"
										step="1"
										min="0"
									/>
								</div>
							</div>
							<button className={classes.submitButton}>WYŚLIJ ZAPYTANIE</button>
						</div>
					</div>
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
		</section>
	);
};

export default Offer;
