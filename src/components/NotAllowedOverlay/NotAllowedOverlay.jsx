import classes from '../../styles/components/notAllowedOverlay.module.scss';

const NotAllowedOverlay = () => {
	return (
		<div className={classes.overlayContainer}>
			<h1 className={classes.notAllowedMessage}>
				Obróć urządzenie, aby moć swobodnie korzystać ze strony
			</h1>
		</div>
	);
};

export default NotAllowedOverlay;
