import Cards from '../../Cards/Cards';
import classes from '../../../styles/components/about.module.scss';

const About = () => (
  <section className={classes.aboutContainer} id="about">
    <h1 className={classes.heading}>JAK DZIAŁA NASZA USŁUGA?</h1>
    <div className={classes.cardsContainer}>
      <Cards />
    </div>
  </section>
);

export default About;
