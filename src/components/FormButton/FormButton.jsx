const FormButton = ({ classes, onClick, text }) => {
	return (
		<div className={classes.buttonContainer}>
			<button className={classes.formButton} onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

export default FormButton;
