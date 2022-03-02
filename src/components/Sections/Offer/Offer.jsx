import DecorationLeaves from '../../DecorationLeaves/DecorationLeaves';
import SubscriptionPlan from '../../SubscriptionPlan/SubscriptionPlan';

import classes from '../../../styles/components/offer.module.scss';

import OrderForm from '../../Forms/OrderForm/OrderForm';

const Offer = () => {
	return (
		<section className={classes.offerContainer} id="offer">
			<div className={classes.headingContainer}>
				<h1 className={classes.heading}>OFERTY DO WYBORU</h1>
			</div>
			<div className={classes.subscriptionsContainer}>
				{/* <div className={classes.subscriptionsBox}>
					<SubscriptionPlan planType="home" />
					<SubscriptionPlan planType="standard" />
				</div> */}
				<OrderForm />
				<DecorationLeaves
					classes={classes}
					leftSrc="leavesVerticalTopLeft"
					rightSrc="leavesVerticalBottomRight"
				/>
			</div>
		</section>
	);
};

export default Offer;
