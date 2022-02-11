import classes from '../../styles/components/hamburger.module.scss';

const Hamburger = ({ isOpen, toggleSetIsOpen }) => {
	return (
		<div
			className={`${classes.hamburgerContainer} ${isOpen && classes.open}`}
			onClick={toggleSetIsOpen}
		>
			<span className={classes.bar} />
			<span className={classes.bar} />
			<span className={classes.bar} />
		</div>
	);
};

export default Hamburger;
