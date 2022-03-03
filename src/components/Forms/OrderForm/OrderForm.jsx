import HomeOfficeForm from '../HomeOfficeForm/HomeOfficeForm';
import PlansForm from '../PlansForm/PlansForm';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import { useState } from 'react';

import classes from '../../../styles/components/orderForm.module.scss';

const OrderForm = () => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({
		company: '',
		email: '',
		address: {
			city: '',
			street: '',
			zipCode: '',
		},
		workersAmount: 0,
		homeOfficeOffer: false,
		standardOffer: false,
		homeOfficeCart: [],
		standardOfferCart: [],
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const nextStep = () => setStep((currentStep) => currentStep + 1);

	const prevStep = () => setStep((currentStep) => currentStep - 1);

	const getFormStep = () => {
		switch (step) {
			case 0:
				return (
					<WelcomeForm
						data={formData}
						handleChange={handleFormChange}
						nextStep={nextStep}
					/>
				);
			case 1:
				return <PlansForm />;
			case 2:
				return <HomeOfficeForm />;
			default:
				return null;
		}
	};

	return <div className={classes.formContainer}>{getFormStep()}</div>;
};

export default OrderForm;
