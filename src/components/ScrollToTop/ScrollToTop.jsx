import classes from '../../styles/components/scrollToTop.module.scss';
import { scrollToTop } from '../../utils/scrollToTop';

const ScrollToTop = () => {
  return (
    <div className={classes.scrollArrowContainer} onClick={scrollToTop}>
      <img
        alt="Scroll top arrow"
        className={classes.scrollArrow}
        src="/assets/topArrow.svg"
      />
    </div>
  );
};

export default ScrollToTop;
