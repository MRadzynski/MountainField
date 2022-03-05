import FormButton from '../../FormButton/FormButton';
import classes from '../../../styles/components/plansForm.module.scss';
import FormInput from '../../FormInput/FormInput';
import clsx from 'clsx';

const PlansForm = ({
  data,
  handleChange,
  handleChoose,
  nextStep,
  prevStep,
}) => {
  return (
    <div className={classes.plansContainer}>
      <div
        className={clsx(classes.planTile, {
          [classes.pickedPlan]: data.homeOfficeOffer,
        })}
      >
        <h2 className={classes.planTitle}>Oferta HOME OFFICE</h2>
        <div className={classes.sliderContainer}>
          <div className={classes.sliderInfo}>
            <h3 className={classes.sliderLabel}>Liczba pracowników</h3>
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
        <h2 className={classes.planTitle}>Oferta STANDARD</h2>
        <div className={classes.inputsContainer}>
          <FormInput
            classes={classes}
            name='city'
            onChange={handleChange}
            placeholder='Miasto'
            type='text'
            value={data.address.city}
          />
          <FormInput
            classes={classes}
            name='street'
            onChange={handleChange}
            placeholder='Ulica i numer lokalu'
            type='text'
            value={data.address.street}
          />
          <FormInput
            classes={classes}
            name='zipCode'
            onChange={handleChange}
            placeholder='Kod pocztowy 04-457'
            type='text'
            value={data.address.zipCode}
          />
        </div>
        <FormButton classes={classes} onClick={handleChoose} text='Wybieram' />
      </div>

      <FormButton classes={classes} onClick={() => prevStep()} text='Wróć' />
      <FormButton classes={classes} onClick={() => nextStep()} text='Dalej' />
    </div>
  );
};

export default PlansForm;
