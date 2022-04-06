import cardsData from '../../data/cardData.json';
import classes from '../../styles/components/cards.module.scss';
import DecorationLeaves from '../DecorationLeaves/DecorationLeaves';

const Cards = () => {
  const { cardsInfo } = cardsData;

  return cardsInfo.map((cardInfo, i) => (
    <div className={classes.cardContainer} key={i}>
      <div className={classes.card}>
        <h3 className={classes.cardHeading}>{cardInfo.heading}</h3>
        <p className={classes.cardDescription}>
          {cardInfo.description}
          {cardInfo.link && (
            <a href="/" target="_blank">
              {cardInfo.link}
            </a>
          )}
        </p>
        <img
          alt={`Offer step ${i + 1}`}
          className={classes.cardImage}
          src={`/assets/${cardInfo.imageName}.png`}
        />
      </div>
      <DecorationLeaves
        classes={classes}
        leftSrc="leavesVerticalTopLeft"
        rightSrc="leavesVerticalBottomRight"
      />
    </div>
  ));
};

export default Cards;
