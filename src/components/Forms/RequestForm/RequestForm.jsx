import FormButton from '../../FormButton/FormButton';
import classes from '../../../styles/components/requestForm.module.scss';

const RequestForm = () => {
	return (
		<div className={classes.requestFormContainer}>
			<h1 className={classes.heading}>
				Dziękujemy za skorzystanie z naszego kreatora
			</h1>
			<FormButton classes={classes} text="Wyślij Zapytanie" />
		</div>
	);
};

export default RequestForm;
