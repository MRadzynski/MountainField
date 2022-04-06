import { useEffect, useState } from 'react';

import classes from '../../../styles/components/orderForm.module.scss';
import PlansForm from '../PlansForm/PlansForm';
import ProductsForm from '../ProductsForm/ProductsForm';
import RequestForm from '../RequestForm/RequestForm';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import { isMobile } from '../../../utils';
import { smoothOfferFormScroll } from '../../../utils/smoothNavScroll';

const addressInfo = ['city', 'street', 'zipCode'];

const OrderForm = () => {
  const [productsList, setProductsList] = useState([]);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    address: {
      city: '',
      street: '',
      zipCode: ''
    },
    workersAmount: 15,
    homeOfficeOffer: false,
    standardOffer: false,
    homeOfficeCart: [],
    standardCart: [],
    homeOfficeSum: 0,
    standardSum: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://mfpr.toadres.pl/get_products');
        const fetchedProducts = await data.json();
        const updatedProducts = fetchedProducts.map(product => ({
          ...product,
          quantity: 0
        }));
        setProductsList(updatedProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
          <ProductsForm
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
            productsList={productsList}
            setFormData={setFormData}
            type="home"
          />
        );
      case 3:
        return (
          <ProductsForm
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
            productsList={productsList}
            setFormData={setFormData}
            type="standard"
          />
        );
      case 4:
        return <RequestForm formData={formData} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  const handleFormChange = e => {
    const { name, value } = e.target;

    addressInfo.includes(name)
      ? setFormData(formData => ({
          ...formData,
          address: {
            ...formData.address,
            [name]: value
          }
        }))
      : setFormData(formData => ({ ...formData, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.homeOfficeOffer) {
      setStep(3);
    } else if (step === 2 && !formData.standardOffer) {
      setStep(4);
    } else {
      setStep(currentStep => currentStep + 1);
    }
    isMobile() && smoothOfferFormScroll();
  };

  const prevStep = () => {
    if (step === 2 || (step === 3 && !formData.homeOfficeOffer)) {
      setStep(1);
    } else if (step === 4 && !formData.standardOffer) {
      setStep(2);
    } else {
      setStep(currentStep => currentStep - 1);
    }
    isMobile() && smoothOfferFormScroll();
  };

  const toggleOfferStatus = context =>
    context === 'home'
      ? setFormData(prevData => ({
          ...prevData,
          homeOfficeOffer: !prevData.homeOfficeOffer
        }))
      : setFormData(prevData => ({
          ...prevData,
          standardOffer: !prevData.standardOffer
        }));

  return <div className={classes.formContainer}>{getFormStep()}</div>;
};

export default OrderForm;
