import classes from '../../../styles/components/welcomeForm.module.scss';
import FormButton from '../../FormButton/FormButton';
import FormInput from '../../FormInput/FormInput';

const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const WelcomeForm = ({ data, handleChange, nextStep }) => {
  const isNextButtonDisabled =
    !data.company || !data.email || !emailRegex.test(data.email);

  return (
    <div className={classes.welcomeFormContainer}>
      <h2 className={classes.formDescription}>
        Skorzystaj z naszego kreatora aby dopasować subskrypcję do potrzeb
        swojej firmy. Całość mieści się w kilku krokach i zajmuje tylko kilka
        minut.
      </h2>
      <div className={classes.formBody}>
        <div className={classes.formFieldsContainer}>
          <FormInput
            classes={classes}
            name="company"
            onChange={handleChange}
            placeholder="Nazwa Firmy"
            title="Nazwa Firmy"
            type="text"
            value={data.company}
          />
          <FormInput
            classes={classes}
            name="email"
            onChange={handleChange}
            placeholder="firma@gmail.com"
            title="Adres e-mail"
            type="email"
            value={data.email}
          />
        </div>
        <FormButton
          classes={classes}
          disabled={isNextButtonDisabled}
          onClick={nextStep}
          text="Rozpocznij tutaj &#8594;"
        />
      </div>
    </div>
  );
};

export default WelcomeForm;
