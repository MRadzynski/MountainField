import FormButton from '../../FormButton/FormButton';
import FormInput from '../../FormInput/FormInput';
import { useEffect, useState } from 'react';

import classes from '../../../styles/components/welcomeForm.module.scss';

const emailRegex =
	// eslint-disable-next-line no-useless-escape
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const WelcomeForm = ({ data, handleChange, nextStep }) => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [wasFormSubmitted, setWasFormSubmitted] = useState(false);

	useEffect(() => {
		isFormValid && nextStep();
	}, [isFormValid, nextStep]);

	const validate = () => {
		setWasFormSubmitted(true);
		setIsFormValid(data.company && data.email);
	};

	return (
		<div className={classes.welcomeFormContainer}>
			<h2 className={classes.formDescription}>
				Skorzystaj z naszego kreatora aby dopasować subskrypcję do potrzeb
				swojej firmy. Całość mieści się w kilku krokach i zajmuje tylko kilka
				minut.
			</h2>
			<div className={classes.formBody}>
				<div className={classes.formFieldsContainer}>
					<FormInput
						classes={classes}
						invalid={wasFormSubmitted && !data.company}
						name="company"
						onChange={handleChange}
						placeholder="Nazwa Firmy"
						type="text"
						value={data.company}
					/>
					<FormInput
						classes={classes}
						invalid={
							wasFormSubmitted && (!data.email || !emailRegex.test(data.email))
						}
						name="email"
						onChange={handleChange}
						placeholder="firma@gmail.com"
						type="email"
						value={data.email}
					/>
				</div>
				<FormButton
					classes={classes}
					onClick={validate}
					text="Rozpocznij tutaj &#8594;"
				/>
			</div>
		</div>
	);
};

export default WelcomeForm;
