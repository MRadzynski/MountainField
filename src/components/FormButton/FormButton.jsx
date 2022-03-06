const FormButton = ({ classes, disabled, onClick, text }) => {
	return (
		<div className={classes.buttonContainer}>
			<button
				className={classes.formButton}
				disabled={disabled}
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	);
};

export default FormButton;
