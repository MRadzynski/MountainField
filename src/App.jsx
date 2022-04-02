import breakpointsData from './data/breakpoints.json';
import classes from './styles/components/app.module.scss';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Welcome from './components/Sections/Welcome/Welcome';
import About from './components/Sections/About/About';
import Offer from './components/Sections/Offer/Offer';
import Contact from './components/Sections/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotAllowedOverlay from './components/NotAllowedOverlay/NotAllowedOverlay';
import { useEffect, useState } from 'react';
import { isAppleDevice, isMobile, isSafari } from './utils';
import smoothscroll from 'smoothscroll-polyfill';
import clsx from 'clsx';
import { useWindowDimensions } from './hooks/useWindowDimensions';

const {
  breakpoints: { tablet },
} = breakpointsData;

smoothscroll.polyfill();

const App = () => {
  const [displayArrow, setDisplayArrow] = useState(false);
  const [noSupportedOrientation, setNoSupportedOrientation] = useState(false);
  const { width, height } = useWindowDimensions();

  const orientationChangeDetector = () => {
    window.screen.orientation?.addEventListener('change', (e) => {
      console.log('change', e);
      if (
        e.currentTarget.type === 'landscape-primary' ||
        (e.currentTarget.type === 'landscape-secondary' &&
          window.screen.height < tablet)
      ) {
        document.querySelector('#app').classList.add(classes.stopScrolling);
        setNoSupportedOrientation(true);
      } else {
        document.querySelector('#app').classList.remove(classes.stopScrolling);
        setNoSupportedOrientation(false);
      }
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', displayArrowHandler);

    !isAppleDevice() && orientationChangeDetector();

    return () => document.removeEventListener('scroll', displayArrowHandler);
  }, []);

  useEffect(() => {
    if (isMobile() && isAppleDevice() && width < 1024) {
      width > height
        ? setNoSupportedOrientation(true)
        : setNoSupportedOrientation(false);
    }
  }, [width, height]);

  const displayArrowHandler = () =>
    window.scrollY > 500 ? setDisplayArrow(true) : setDisplayArrow(false);

  return (
    <div
      className={clsx(classes.appContainer, {
        ios: isSafari(),
      })}
      id='app'
    >
      <Header />
      <Welcome />
      <About />
      <Offer />
      <Contact />
      <Footer />
      {displayArrow && <ScrollToTop />}
      {noSupportedOrientation && <NotAllowedOverlay />}
    </div>
  );
};

export default App;
