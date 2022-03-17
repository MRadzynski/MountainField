import classes from '../../../styles/components/requestForm.module.scss';
import FormButton from '../../FormButton/FormButton';
import { useState } from 'react';

const RequestForm = ({ formData, prevStep }) => {
	const [message, setMessage] = useState('');

	const getSpecifiedReqObject = (type) => {
		const commonData = {
			companyName: formData.company,
			email: formData.email.toLowerCase(),
		};

		return type === 'home'
			? {
					...commonData,
					type: 0,
					inquiry: {
						workersAmount: Number(formData.workersAmount),
						cart: formData.homeOfficeCart,
						sum: formData.homeOfficeSum,
					},
			  }
			: {
					...commonData,
					type: 1,
					inquiry: {
						address: {
							city: formData.address.city,
							street: formData.address.street,
							zipCode: formData.address.zipCode,
						},
						cart: formData.standardCart,
						sum: formData.standardSum,
					},
			  };
	};

	const generateReqBody = () => {
		if (formData.homeOfficeOffer && formData.standardOffer) {
			return [getSpecifiedReqObject('home'), getSpecifiedReqObject('standard')];
		} else if (formData.homeOfficeOffer) {
			return [getSpecifiedReqObject('home')];
		} else {
			return [getSpecifiedReqObject('standard')];
		}
	};

	const formatRequestData = async () => {
		const options = {
			body: JSON.stringify(generateReqBody()),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		};

		const res = await fetch('https://mfpr.toadres.pl/send_inquiry', options);

		if (res.status === 200) {
			setMessage(
				'Dziękujemy za przesłanie zapytania, odezwiemy się niezwłocznie! 👋'
			);
		} else {
			setMessage('Przepraszamy wystąpił błąd, proszę spróbować ponownie!');
		}
	};

	const handleSubmit = () => formatRequestData();

	const getMessage = <p className={classes.responseMessage}>{message}</p>;

	return (
		<div className={classes.requestFormContainer}>
			<h1 className={classes.heading}>
				Dziękujemy za skorzystanie z naszego kreatora
			</h1>
			{message ? (
				getMessage
			) : (
				<FormButton
					classes={classes}
					id={classes.submit}
					onClick={handleSubmit}
					text="Wyślij Zapytanie ✉"
				/>
			)}
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
