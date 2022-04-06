import { useState } from 'react';

import classes from '../../../styles/components/requestForm.module.scss';
import FormButton from '../../FormButton/FormButton';
import Loader from '../../Loader/Loader';

const RequestForm = ({ formData, prevStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const formatRequestData = async () => {
    try {
      setIsLoading(true);

      const options = {
        body: JSON.stringify(generateReqBody()),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      };

      const res = await fetch('https://mfpr.toadres.pl/send_inquiry', options);

      setIsLoading(false);

      if (res.status === 200) {
        setMessage(
          'Dziękujemy za przesłanie zapytania, odezwiemy się niezwłocznie! 👋'
        );
      } else {
        setMessage('Przepraszamy wystąpił błąd, proszę spróbować ponownie!');
      }
    } catch (err) {
      console.log(err);
    }
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

  const getContent = () => {
    if (isLoading) return <Loader />;

    return message ? (
      getMessage
    ) : (
      <FormButton
        classes={classes}
        id={classes.submit}
        onClick={handleSubmit}
        text="Wyślij Zapytanie 📧"
      />
    );
  };

  const getMessage = <p className={classes.responseMessage}>{message}</p>;

  const getSpecifiedReqObject = type => {
    const commonData = {
      companyName: formData.company,
      email: formData.email.toLowerCase()
    };

    return type === 'home'
      ? {
          ...commonData,
          type: 0,
          inquiry: {
            workersAmount: Number(formData.workersAmount),
            cart: formData.homeOfficeCart,
            sum: formData.homeOfficeSum
          }
        }
      : {
          ...commonData,
          type: 1,
          inquiry: {
            address: {
              city: formData.address.city,
              street: formData.address.street,
              zipCode: formData.address.zipCode
            },
            cart: formData.standardCart,
            sum: formData.standardSum
          }
        };
  };

  const handleSubmit = () => formatRequestData();

  return (
    <div className={classes.requestFormContainer}>
      <h1 className={classes.heading}>
        Dziękujemy za skorzystanie z naszego kreatora
      </h1>
      <div className={classes.contentContainer}>{getContent()}</div>
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
