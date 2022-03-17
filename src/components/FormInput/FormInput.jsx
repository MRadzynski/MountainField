import clsx from 'clsx';

const FormInput = ({
	autoComplete,
	classes,
	id,
	invalid,
	name,
	onChange,
	placeholder,
	title,
	type,
	value,
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
				title={title}
				type={type}
				value={value}
			/>
		</div>
	);
};

export default FormInput;
