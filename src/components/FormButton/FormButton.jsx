const FormButton = ({ classes, disabled, id, onClick, text }) => {
	return (
		<div className={classes.buttonContainer}>
			<button
				className={classes.formButton}
				disabled={disabled}
				id={id}
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	);
};

export default FormButton;
