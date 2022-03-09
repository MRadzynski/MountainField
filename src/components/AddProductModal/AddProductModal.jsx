import classes from '../../styles/components/addProductModal.module.scss';

const AddProductModal = ({ onClose }) => {
	return (
		<div className={classes.modalContainer}>
			<span className={classes.exitCross} onClick={onClose}>
				&#10005;
			</span>
		</div>
	);
};

export default AddProductModal;
