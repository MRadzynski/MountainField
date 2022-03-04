import FormButton from '../../FormButton/FormButton';
import classes from '../../../styles/components/plansForm.module.scss';

const PlansForm = ({
  data,
  handleChange,
  handleChoose,
  nextStep,
  prevStep,
}) => {
  return (
    <div className={classes.plansContainer}>
      <div className={classes.planTile}>
        <h2 className={classes.planTitle}>Oferta HOME OFFICE</h2>
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
        <FormButton
          classes={classes}
          onClick={() => handleChoose('home')}
          text='Wybieram'
        />
      </div>
      <div className={classes.planTile}></div>

      <FormButton classes={classes} onClick={() => prevStep()} text='Wróć' />
      <FormButton classes={classes} onClick={() => nextStep()} text='Dalej' />
    </div>
  );
};

export default PlansForm;
