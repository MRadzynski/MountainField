import React from 'react';

import classes from '../../../styles/components/welcomeForm.module.scss';

const WelcomeForm = ({ handleChange, nextStep }) => {
	return (
		<div className={classes.welcomeFormContainer}>
			<h2 className={classes.formDescription}>
				Skorzystaj z naszego kreatora aby dopasować subskrypcję do potrzeb
				swojej firmy. Całość mieści się w kilku krokach i zajmuje tylko kilka
				minut.
			</h2>
			<div className={classes.formBody}>
				<input
					className={classes.inputField}
					name="email"
					onChange={handleChange}
				/>
				<button className={classes.startButton} onClick={nextStep}>
					Rozpocznij tutaj &#8594;
				</button>
			</div>
		</div>
	);
};

export default WelcomeForm;
