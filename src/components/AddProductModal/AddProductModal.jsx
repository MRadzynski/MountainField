import classes from '../../styles/components/addProductModal.module.scss';
import clsx from 'clsx';
import FormButton from '../FormButton/FormButton';
import useWindowWidth from '../../hooks/useWindowWidth';
import { useEffect, useState } from 'react';

const AddProductModal = ({ cartList, onClose, products, setCartList }) => {
  const [productsList, setProductsList] = useState([]);

  const { width: windowWidth } = useWindowWidth();

  useEffect(() => {
    const fetchedProducts = products.map((u) => Object.assign({}, u));

    const updatedProductsList = fetchedProducts.map((product) => {
      const modifiedProduct = cartList.find(
        (cartItem) => cartItem.id === product.id
      );

      if (modifiedProduct) return modifiedProduct;
      return product;
    });
    setProductsList(updatedProductsList);
  }, []);

  const decreaseQuantity = (e) => {
    const selectedProductId = e.target.closest('li').id;
    const selectedProduct = productsList.find(
      (product) => product.id === selectedProductId
    );

    selectedProduct.quantity =
      selectedProduct.quantity - 1 > 0 ? selectedProduct.quantity - 1 : 0;

    const updatedProducts = productsList.map((prod) =>
      prod.id !== selectedProduct.id ? prod : selectedProduct
    );

    setProductsList(updatedProducts);
  };

  const increaseQuantity = (e) => {
    const selectedProductId = e.target.closest('li').id;
    const selectedProduct = productsList.find(
      (product) => product.id === selectedProductId
    );

    selectedProduct.quantity = selectedProduct.quantity + 1;

    const updatedProducts = productsList.map((prod) =>
      prod.id !== selectedProduct.id ? prod : selectedProduct
    );

    setProductsList(updatedProducts);
  };

  const isSubmitButtonDisabled = productsList.every(
    (product) => product.quantity === 0
  );

  const submitHandler = () => {
    const selectedProducts = productsList.filter((product) => product.quantity);
    setCartList(selectedProducts);
    onClose();
  };

  return (
    <div className={classes.modalContainer}>
      <span className={classes.exitCross} onClick={onClose}>
        &#10005;
      </span>
      <div className={classes.contentContainer}>
        <h1 className={classes.modalTitle}>Wybierz Produkty</h1>
        <ul className={classes.productList}>
          {productsList.map((product, i) => (
            <li
              className={clsx(classes.productListItem, {
                [classes.selectedItem]: product.quantity,
              })}
              id={product.id}
              key={i}
            >
              <img
                alt={product.name}
                className={classes.productImg}
                src={product.photoBin}
              />
              <div className={classes.productInfoContainer}>
                <h4 className={classes.productName}>
                  {product.name}
                  {windowWidth >= 768 &&
                    ` - ${product.size} - ${product.price} PLN/szt`}
                </h4>
                <h5 className={classes.productDescription}>
                  {windowWidth >= 768
                    ? product.description
                    : `${product.size} ${
                        windowWidth > 320 ? `- ${product.price} PLN/szt` : ''
                      }`}
                </h5>
                {windowWidth <= 320 && (
                  <h5 className={classes.productPriceSmallPhone}>
                    {product.price} PLN/szt
                  </h5>
                )}
              </div>
              <div className={classes.productControls}>
                <span className={classes.minusSign} onClick={decreaseQuantity}>
                  -
                </span>
                <p className={classes.productQuantity}>{product.quantity}</p>
                <span className={classes.plusSign} onClick={increaseQuantity}>
                  +
                </span>
              </div>
            </li>
          ))}
        </ul>
        <FormButton
          classes={classes}
          disabled={isSubmitButtonDisabled}
          onClick={submitHandler}
          text='Dodaj produkty +'
        />
      </div>
    </div>
  );
};

export default AddProductModal;
