import clsx from 'clsx';
import defaultStyles from '../../styles/components/formInput.module.scss';

const FormInput = ({
	autoComplete,
	classes,
	id,
	name,
	onChange,
	placeholder,
	title,
	type,
	value,
}) => {
	return (
		<div className={clsx(defaultStyles.inputContainer, classes.inputContainer)}>
			<input
				autoComplete={autoComplete ? 'on' : 'off'}
				className={clsx(defaultStyles.inputField, classes.inputField)}
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
