import classes from '../../../styles/components/offer.module.scss';
import DecorationLeaves from '../../DecorationLeaves/DecorationLeaves';
import OrderForm from '../../Forms/OrderForm/OrderForm';

const Offer = () => (
  <section className={classes.offerContainer} id="offer">
    <div className={classes.headingContainer}>
      <h1 className={classes.heading}>OFERTY DO WYBORU</h1>
    </div>
    <div className={classes.orderFormContainer}>
      <OrderForm />
      <DecorationLeaves
        classes={classes}
        leftSrc="leavesVerticalTopLeft"
        rightSrc="leavesVerticalBottomRight"
      />
    </div>
  </section>
);

export default Offer;
