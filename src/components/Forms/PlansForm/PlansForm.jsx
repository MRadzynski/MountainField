import clsx from 'clsx';
import FormButton from '../../FormButton/FormButton';
import FormInput from '../../FormInput/FormInput';

import classes from '../../../styles/components/plansForm.module.scss';
import { useEffect, useState } from 'react';

const zipCodeRegex = /^[0-9]{2}-[0-9]{3}$/;

const PlansForm = ({
  data,
  handleChange,
  handleChoose,
  nextStep,
  prevStep,
}) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  useEffect(() => {
    if (
      !data.standardOffer &&
      data.homeOfficeOffer &&
      Number(data.workersAmount) > 0
    ) {
      setIsNextButtonDisabled(false);
    } else if (
      !data.homeOfficeOffer &&
      data.standardOffer &&
      data.address.city.length > 2 &&
      data.address.street.length > 2 &&
      zipCodeRegex.test(data.address.zipCode)
    ) {
      setIsNextButtonDisabled(false);
    } else if (
      data.homeOfficeOffer &&
      data.standardOffer &&
      data.address.city.length > 2 &&
      data.address.street.length > 2 &&
      zipCodeRegex.test(data.address.zipCode) &&
      Number(data.workersAmount) > 0
    ) {
      setIsNextButtonDisabled(false);
    } else {
      setIsNextButtonDisabled(true);
    }
  }, [data]);

  return (
    <div className={classes.plansContainer}>
      <h2 className={classes.stepTitle}>WYBIERZ SUBSKRYPCJE</h2>
      <div
        className={clsx(classes.planTile, {
          [classes.pickedPlan]: data.homeOfficeOffer,
        })}
      >
        <h2 className={classes.planTitle}>
          {window.innerWidth >= 1280 && 'Oferta'} HOME OFFICE 🏡
        </h2>
        <div className={classes.sliderContainer}>
          <div className={classes.sliderInfo}>
            <h3 className={classes.sliderLabel}>Liczba pracowników 👥</h3>
            <span className={classes.sliderValue}>x{data.workersAmount}</span>
          </div>
          <input
            className={classes.inputSlider}
            defaultValue={data.workersAmount}
            max='30'
            min='0'
            name='workersAmount'
            onChange={handleChange}
            step='1'
            type='range'
          />
          <p className={classes.inputSliderDescription}>
            Podaj liczbę pracowników, którzy pracują w trybie zdalnym a co
            miesiąc otrzymasz daną liczbę kodów do realizacji zamówień na adresy
            pracowników.
          </p>
        </div>
        <FormButton
          classes={classes}
          onClick={() => handleChoose('home')}
          text='Wybieram'
        />
      </div>
      <div
        className={clsx(classes.planTile, {
          [classes.pickedPlan]: data.standardOffer,
        })}
      >
        <h2 className={classes.planTitle}>
          {window.innerWidth >= 1280 && 'Oferta'} STANDARD 🏢
        </h2>
        <div className={classes.inputsContainer}>
          <FormInput
            classes={classes}
            name='city'
            onChange={handleChange}
            placeholder='Miasto'
            title='Miasto'
            type='text'
            value={data.address.city}
          />
          <FormInput
            classes={classes}
            name='street'
            onChange={handleChange}
            placeholder='Ulica i numer lokalu'
            title='Ulica'
            type='text'
            value={data.address.street}
          />
          <FormInput
            classes={classes}
            name='zipCode'
            onChange={handleChange}
            placeholder='Kod pocztowy 04-457'
            title='Kod pocztowy'
            type='text'
            value={data.address.zipCode}
          />
        </div>
        <FormButton classes={classes} onClick={handleChoose} text='Wybieram' />
      </div>
      <FormButton classes={classes} onClick={prevStep} text='Wróć' />
      <FormButton
        classes={classes}
        disabled={isNextButtonDisabled}
        onClick={nextStep}
        text='Dalej'
      />
    </div>
  );
};

export default PlansForm;
