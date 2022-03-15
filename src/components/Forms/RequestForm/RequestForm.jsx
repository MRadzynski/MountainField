import FormButton from '../../FormButton/FormButton';
import classes from '../../../styles/components/requestForm.module.scss';

const RequestForm = ({ formData, prevStep }) => {
	const handleSubmit = () => console.log('submitted');

	return (
		<div className={classes.requestFormContainer}>
			<h1 className={classes.heading}>
				Dziękujemy za skorzystanie z naszego kreatora
			</h1>
			<FormButton
				classes={classes}
				id={classes.submit}
				onClick={handleSubmit}
				text="Wyślij Zapytanie"
			/>
			<FormButton
				classes={classes}
				id={classes.back}
				onClick={prevStep}
				text="Wróć"
			/>
		</div>
	);
};

export default RequestForm;
