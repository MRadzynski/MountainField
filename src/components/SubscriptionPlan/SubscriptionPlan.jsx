import { useState, useEffect } from 'react';
import subscriptionData from '../../data/subscriptionData.json';

import classes from '../../styles/components/subscription.module.scss';

const SubscriptionPlan = ({ planType }) => {
	const [homeSum, setHomeSum] = useState(0);
	const [standardSum, setStandardSum] = useState(0);
	const [homePlanData, setHomePlanData] = useState({
		people: 15,
		coffee: 1,
		tea: 1,
		mate: 1,
	});
	const [standardPlanData, setStandardPlanData] = useState({
		coffee: 10,
		tea: 15,
		mate: 20,
	});

	const {
		plans: { home, standard },
	} = subscriptionData;

	useEffect(() => {
		const sum = home.products.reduce(
			(acc, product) => (acc += homePlanData[product.dataName] * product.price),
			0
		);

		setHomeSum(sum);
	}, [homePlanData, home]);

	useEffect(() => {
		const sum = standard.products.reduce(
			(acc, product) =>
				(acc += standardPlanData[product.dataName] * product.price),
			0
		);

		setStandardSum(sum);
	}, [standardPlanData, standard]);

	const handleChangeHomePlanData = (e) => {
		const operation = e.target?.attributes?.operation?.value;

		if (operation) {
			const name = e.target.attributes.name.value;

			let newAmount =
				operation === 'increment'
					? homePlanData[name] + 1
					: homePlanData[name] - 1;

			if (newAmount < 0) {
				newAmount = 0;
			}

			setHomePlanData((prevData) => ({
				...prevData,
				[name]: newAmount,
			}));
		} else {
			setHomePlanData((prevData) => ({
				...prevData,
				[e.target.name]: Number(e.target.value),
			}));
		}
	};

	const handleChangeStandardPlanData = (e) => {
		setStandardPlanData((prevData) => ({
			...prevData,
			[e.target.name]: Number(e.target.value),
		}));
	};

	const sendData = () => {
		const planData = planType === 'home' ? homePlanData : standardPlanData;
		const planSum = planType === 'home' ? homeSum : standardSum;

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				products: { ...planData },
				sum: planSum,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	};

	const getPlan =
		planType === 'home' ? (
			<div className={classes.subscriptionHome}>
				<div className={classes.subscriptionTitleContainer}>
					<h2 className={classes.subscriptionTitle}>{home.name}</h2>
				</div>
				<div className={classes.subscriptionBox}>
					<h3
						className={classes.subscriptionPrice}
					>{`${homeSum} ${home.priceFormat}`}</h3>
					<div className={classes.subscriptionWorkers}>
						<p>Liczba pracowników</p>
						<div className={classes.workersAmount}>
							<img
								alt="People icon"
								className={classes.peopleImage}
								src="assets/people.png"
							/>
							<span
								className={classes.subscriptionPeople}
							>{` x${homePlanData.people}`}</span>
						</div>
					</div>
					<input
						className={classes.inputSlider}
						defaultValue={homePlanData.people}
						max="30"
						min="0"
						name="people"
						onChange={handleChangeHomePlanData}
						step="1"
						type="range"
					/>
					<p className={classes.productsHeading}>Dla każdego pracownika:</p>
					<div className={classes.subscriptionsAmounts}>
						{home.products.map((product) => (
							<div
								className={classes.subscriptionAmount}
								key={product.dataName}
							>
								<p
									className={classes.productType}
								>{`${product.name} ${product.amount}`}</p>
								<div className={classes.productControls}>
									<div
										className={classes.minusButton}
										name={product.dataName}
										operation="decrement"
										onClick={handleChangeHomePlanData}
									>
										-
									</div>
									<span className={classes.amountPlaceholder}>
										{homePlanData[product.dataName]}
									</span>
									<div
										className={classes.plusButton}
										name={product.dataName}
										operation="increment"
										onClick={handleChangeHomePlanData}
									>
										+
									</div>
								</div>
							</div>
						))}
					</div>
					<button className={classes.submitButtonHome} onClick={sendData}>
						WYŚLIJ ZAPYTANIE
					</button>
				</div>
			</div>
		) : (
			<div className={classes.subscriptionStandard}>
				<div className={classes.subscriptionTitleContainer}>
					<h2 className={classes.subscriptionTitle}>{standard.name}</h2>
				</div>
				<div className={classes.subscriptionBox}>
					<h3 className={classes.subscriptionPrice}>
						{`${standardSum} ${standard.priceFormat}`}
					</h3>
					<div className={classes.subscriptionsAmountsContainer}>
						{standard.products.map((product) => (
							<div className={classes.sliderContainer} key={product.dataName}>
								<div className={classes.sliderText}>
									<span className={classes.productTypeSlider}>
										{product.name}
									</span>
									<span className={classes.productAmountSlider}>{`~${
										standardPlanData[product.dataName]
									}x☕`}</span>
								</div>
								<input
									className={classes.inputSlider}
									defaultValue={product.defaultValue}
									max="30"
									min="0"
									name={product.dataName}
									onChange={handleChangeStandardPlanData}
									step="1"
									type="range"
								/>
							</div>
						))}
					</div>
					<button className={classes.submitButton} onClick={sendData}>
						WYŚLIJ ZAPYTANIE
					</button>
				</div>
			</div>
		);

	return getPlan;
};

export default SubscriptionPlan;
