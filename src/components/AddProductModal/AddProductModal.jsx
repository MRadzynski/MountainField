import classes from '../../styles/components/addProductModal.module.scss';
import FormButton from '../FormButton/FormButton';

const AddProductModal = ({ onClose, products }) => {
	console.log(products);
	return (
		<div className={classes.modalContainer}>
			<span className={classes.exitCross} onClick={onClose}>
				&#10005;
			</span>
			<div className={classes.contentContainer}>
				<h1 className={classes.modalTitle}>Wybierz Produkty</h1>
				<ul className={classes.productList}>
					{products.map((product) => (
						<li className={classes.productListItem}>{product.Category}</li>
					))}
				</ul>
				<FormButton
					classes={classes}
					onClick={() => console.log('xd')}
					text="Dodaj produkty +"
				/>
			</div>
		</div>
	);
};

export default AddProductModal;
