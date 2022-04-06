import clsx from 'clsx';

import defaultStyles from '../../styles/components/formButton.module.scss';

const FormButton = ({ classes, disabled, id, onClick, text }) => (
  <div className={clsx(defaultStyles.buttonContainer, classes.buttonContainer)}>
    <button
      className={clsx(defaultStyles.formButton, classes.formButton)}
      disabled={disabled}
      id={id}
      onClick={onClick}
    >
      {text}
    </button>
  </div>
);

export default FormButton;
