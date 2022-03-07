import FormButton from '../../FormButton/FormButton';

import classes from '../../../styles/components/productsForm.module.scss';

const ProductsForm = ({ type, nextStep, prevStep }) => {
	return (
		<div className={classes.productsFormContainer}>
			<div className={classes.productsSummary}>
				<div className={classes.summaryInfo}>
					<h3 className={classes.summaryHeading}>Oferta {type}</h3>
					<h4 className={classes.summarySubHeading}>{type}</h4>
				</div>
				<div className={classes.summaryProducts}>
					<div className={classes.summaryProduct}>
						<span className={classes.productType}>KAWA</span>
						<span className={classes.productAmount}>x10</span>
					</div>
					<div className={classes.summaryProduct}>
						<span className={classes.productType}>HERBATA</span>
						<span className={classes.productAmount}>x10</span>
					</div>
					<div className={classes.summaryProduct}>
						<span className={classes.productType}>MATE</span>
						<span className={classes.productAmount}>x10</span>
					</div>
				</div>
				<p className={classes.summaryPrice}>XXX PLN/msc/os</p>
			</div>
			<div className={classes.cartContainer}>
				<h3 className={classes.cartHeading}>Koszyk</h3>
				<ul className={classes.cartList}></ul>
			</div>

			<FormButton classes={classes} onClick={prevStep} text="Wróć" />
			<FormButton classes={classes} onClick={nextStep} text="Dalej" />
		</div>
	);
};

export default ProductsForm;
