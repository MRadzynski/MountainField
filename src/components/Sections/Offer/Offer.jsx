import SubscriptionPlan from '../../SubscriptionPlan/SubscriptionPlan';
import classes from '../../../styles/components/offer.module.scss';

const Offer = () => {
	return (
		<section className={classes.offerContainer} id="offer">
			<div className={classes.headingContainer}>
				<h1 className={classes.heading}>OFERTY DO WYBORU</h1>
			</div>
			<div className={classes.subscriptionsContainer}>
				<div className={classes.subscriptionsBox}>
					<SubscriptionPlan planType="home" />
					<SubscriptionPlan planType="standard" />
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
