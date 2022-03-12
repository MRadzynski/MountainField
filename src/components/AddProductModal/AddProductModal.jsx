import classes from '../../styles/components/addProductModal.module.scss';
import FormButton from '../FormButton/FormButton';

import { useState } from 'react';

const AddProductModal = ({ onClose, products }) => {
	const [selectedProducts, setSelectedProducts] = useState([]);

	const clickHandler = (e) => {
		const selectedProductId = e.target.closest('li').id;
		const selectedProduct = products.find(
			(product) => product.Id === selectedProductId
		);

		setSelectedProducts((prevData) => [...prevData, selectedProduct]);
	};

	return (
		<div className={classes.modalContainer}>
			<span className={classes.exitCross} onClick={onClose}>
				&#10005;
			</span>
			<div className={classes.contentContainer}>
				<h1 className={classes.modalTitle}>Wybierz Produkty</h1>
				<ul className={classes.productList}>
					{products.map((product, i) => (
						<li
							className={classes.productListItem}
							id={product.Id}
							key={i}
							onClick={clickHandler}
						>
							<img
								alt={product.Name}
								className={classes.productImg}
								src={product.PhotoBin}
							/>
							<div className={classes.productInfoContainer}>
								<h4 className={classes.productName}>{product.Name}</h4>
								<h5 className={classes.productDescription}>
									{product.Description}
								</h5>
							</div>
							<div className={classes.productControls}>
								<span className={classes.minusSign}>-</span>
								<p className={classes.productQuantity}>0</p>
								<span className={classes.plusSign}>+</span>
							</div>
						</li>
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
