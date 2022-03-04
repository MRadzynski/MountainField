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
        return <HomeOfficeForm />;
      default:
        return null;
    }
  };

  return <div className={classes.formContainer}>{getFormStep()}</div>;
};

export default OrderForm;
