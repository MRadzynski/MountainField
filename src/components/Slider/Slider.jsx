import { useEffect, useState } from 'react';

import classes from '../../styles/components/slider.module.scss';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setInterval(nextSlide, 7000);

    return () => clearInterval(nextSlide);
  }, []);

  const nextSlide = () =>
    setSlideIndex(slideNum => (slideNum === 2 ? 0 : slideNum + 1));

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.slider} id="slider">
        <img
          alt="Highlighted product"
          className={classes.slideImage}
          src={`/assets/products/product${slideIndex}.png`}
        />
      </div>
    </div>
  );
};

export default Slider;
