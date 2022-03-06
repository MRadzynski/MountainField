import React from 'react';
import FormButton from '../../FormButton/FormButton';

import classes from '../../../styles/components/productsForm.module.scss';

const ProductsForm = ({ type, nextStep, prevStep }) => {
	return (
		<div>
			<FormButton classes={classes} onClick={prevStep} />
			<FormButton classes={classes} onClick={nextStep} />
			ProductsForm {type}
		</div>
	);
};

export default ProductsForm;
