import ProductsForm from '../ProductsForm/ProductsForm';
import PlansForm from '../PlansForm/PlansForm';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import { useState } from 'react';

import classes from '../../../styles/components/orderForm.module.scss';
import RequestForm from '../RequestForm/RequestForm';

const addressInfo = ['city', 'street', 'zipCode'];

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
		workersAmount: 15,
		homeOfficeOffer: false,
		standardOffer: false,
		homeOfficeCart: [],
		standardOfferCart: [],
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;

		addressInfo.includes(name)
			? setFormData((formData) => ({
					...formData,
					address: {
						...formData.address,
						[name]: value,
					},
			  }))
			: setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const nextStep = () => {
		if (step === 1 && !formData.homeOfficeOffer) {
			setStep(3);
		} else if (step === 2 && !formData.standardOffer) {
			setStep(4);
		} else {
			setStep((currentStep) => currentStep + 1);
		}
	};

	const prevStep = () => {
		if (step === 2 || (step === 3 && !formData.homeOfficeOffer)) {
			setStep(1);
		} else {
			setStep((currentStep) => currentStep - 1);
		}
	};

	const toggleOfferStatus = (context) =>
		context === 'home'
			? setFormData((prevData) => ({
					...prevData,
					homeOfficeOffer: !prevData.homeOfficeOffer,
			  }))
			: setFormData((prevData) => ({
					...prevData,
					standardOffer: !prevData.standardOffer,
			  }));

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
				return (
					<PlansForm
						data={formData}
						handleChange={handleFormChange}
						handleChoose={toggleOfferStatus}
						nextStep={nextStep}
						prevStep={prevStep}
					/>
				);
			case 2:
				return (
					<ProductsForm type="home" nextStep={nextStep} prevStep={prevStep} />
				);
			case 3:
				return (
					<ProductsForm
						type="standard"
						nextStep={nextStep}
						prevStep={prevStep}
					/>
				);
			case 4:
				return <RequestForm />;
			default:
				return null;
		}
	};

	return <div className={classes.formContainer}>{getFormStep()}</div>;
};

export default OrderForm;

//step 0
//step 1
// if(home) step 2 <ProductsForm type="home" />
// if(standard) step 3 <ProductsForm type="standard" />
// step 4 <SummaryForm />
