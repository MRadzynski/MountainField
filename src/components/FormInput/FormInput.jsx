import clsx from 'clsx';

const FormInput = ({
	autoComplete,
	classes,
	id,
	invalid,
	name,
	onChange,
	placeholder,
	type,
}) => {
	return (
		<div className={classes.inputContainer}>
			<input
				autoComplete={autoComplete ? 'on' : 'off'}
				className={clsx(classes.inputField, { [classes.invalid]: invalid })}
				id={id}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
};

export default FormInput;
