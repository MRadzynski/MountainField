import navLinksData from '../../data/nav.json';
import classes from '../../styles/components/navbar.module.scss';
import { smoothNavScroll } from '../../utils/smoothNavScroll';

const Navbar = ({ closeMobileMenu }) => {
  const { navLinks } = navLinksData;

  return (
    <nav className={classes.navContainer}>
      <ul className={classes.navList}>
        {navLinks.map((link) => (
          <a
            alt={`${link.label} section`}
            className={classes.navLink}
            href={link.path}
            key={link.label}
            onClick={closeMobileMenu ? closeMobileMenu : smoothNavScroll}
          >
            <li className={classes.navItem}>{link.label}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
