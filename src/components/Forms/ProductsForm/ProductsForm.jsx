import FormButton from '../../FormButton/FormButton';

import classes from '../../../styles/components/productsForm.module.scss';
import { useEffect, useState } from 'react';
import AddProductModal from '../../AddProductModal/AddProductModal';

const products = [
	{
		name: 'Czarna Herbata MountainField',
		description: '100g',
		imgPath: 'assets/products/icecream0.png',
	},
	{
		name: 'Czarna Herbata MountainField',
		description: '100g',
		imgPath: 'assets/products/icecream1.png',
	},
	{
		name: 'Czarna Herbata MountainField',
		description: '100g',
		imgPath: 'assets/products/icecream2.png',
	},
	{
		name: 'Czarna Herbata MountainField',
		description: '100g',
		imgPath: 'assets/products/icecream0.png',
	},
];

const ProductsForm = ({ type, nextStep, prevStep }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch('https://mfpr.toadres.pl/get_products');
			const json = await data.json();
			setProductList(json);
		};
		fetchData();
	}, []);

	const closeModal = () => setIsModalOpen(false);

	const headingText = type === 'home' ? 'Home Office' : 'Standard';
	const subHeadingText = type === 'home' ? 'Na osobę' : 'Do Twojego biura';

	return (
		<div className={classes.productsFormContainer}>
			<div className={classes.productsSummary}>
				<div className={classes.summaryInfo}>
					<h3 className={classes.summaryHeading}>Oferta {headingText}</h3>
					<h4 className={classes.summarySubHeading}>
						{subHeadingText} co miesiąc
					</h4>
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
				<ul className={classes.cartList}>
					{products.map((product, i) => (
						<li className={classes.cartListItem} key={i}>
							<img
								alt={product.name}
								className={classes.productImg}
								src={product.imgPath}
							/>
							<div className={classes.productInfoContainer}>
								<h4 className={classes.productName}>{product.name}</h4>
								<h5 className={classes.productDescription}>
									{product.description}
								</h5>
							</div>
							<div className={classes.productControls}>
								<span className={classes.minusSign}>-</span>
								<p className={classes.productQuantity}>0</p>
								<span className={classes.plusSign}>+</span>
							</div>
						</li>
					))}
					<li className={classes.addNewProductContainer}>
						<FormButton
							classes={classes}
							onClick={() => setIsModalOpen(true)}
							text="Dodaj Nowy Produkt +"
						/>
					</li>
				</ul>
			</div>

			<FormButton classes={classes} onClick={prevStep} text="Wróć" />
			<FormButton classes={classes} onClick={nextStep} text="Dalej" />
			{isModalOpen && (
				<AddProductModal onClose={closeModal} products={productList} />
			)}
		</div>
	);
};

export default ProductsForm;
