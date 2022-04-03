import AddProductModal from '../../AddProductModal/AddProductModal';
import classes from '../../../styles/components/productsForm.module.scss';
import FormButton from '../../FormButton/FormButton';
import { useEffect, useState } from 'react';
import useWindowWidth from '../../../hooks/useWindowWidth';

const ProductsForm = ({
  formData,
  nextStep,
  prevStep,
  productsList,
  setFormData,
  type,
}) => {
  const formDataField = type === 'home' ? 'homeOfficeCart' : 'standardCart';
  const formDataSum = type === 'home' ? 'homeOfficeSum' : 'standardSum';
  const headingText = type === 'home' ? 'Home Office' : 'Standard';
  const subHeadingText = type === 'home' ? 'Na osobę' : 'Do Twojego biura';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartList, setCartList] = useState(formData[formDataField]);
  const [summaryData, setSummaryData] = useState({
    coffee: 0,
    tea: 0,
    mate: 0,
    sum: 0,
  });

  const { width: windowWidth } = useWindowWidth();

  useEffect(() => {
    setCartList(formData[formDataField]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    const newSummaryData = cartList.reduce(
      (acc, cartItem) => {
        acc[cartItem.category] += cartItem.quantity;
        acc.sum += Number((cartItem.quantity * cartItem.price).toFixed(2));
        acc.sum = Number(acc.sum.toFixed(2));

        return acc;
      },
      {
        coffee: 0,
        tea: 0,
        mate: 0,
        sum: 0,
      }
    );

    setSummaryData(newSummaryData);
    setFormData((prevData) => ({
      ...prevData,
      [formDataField]: cartList,
      [formDataSum]: newSummaryData.sum,
    }));
  }, [cartList, formDataField, formDataSum, setFormData]);

  const closeModal = () => setIsModalOpen(false);

  const decreaseQuantity = (e) => {
    const selectedProductId = e.target.closest('li').id;
    const selectedProduct = cartList.find(
      (cartItem) => cartItem.id === selectedProductId
    );

    selectedProduct.quantity =
      selectedProduct.quantity - 1 > 0 ? selectedProduct.quantity - 1 : 0;

    let updatedProducts;

    if (!selectedProduct.quantity) {
      updatedProducts = cartList.filter(
        (cartItem) => cartItem.id !== selectedProduct.id
      );
    } else {
      updatedProducts = cartList.map((cartItem) =>
        cartItem.id !== selectedProduct.id ? cartItem : selectedProduct
      );
    }

    setCartList(updatedProducts);
  };

  const increaseQuantity = (e) => {
    const selectedProductId = e.target.closest('li').id;
    const selectedProduct = cartList.find(
      (cartItem) => cartItem.id === selectedProductId
    );

    selectedProduct.quantity = selectedProduct.quantity + 1;

    const updatedProducts = cartList.map((cartItem) =>
      cartItem.id !== selectedProduct.id ? cartItem : selectedProduct
    );

    setCartList(updatedProducts);
  };

  const isNextButtonDisabled =
    type === 'home'
      ? formData.homeOfficeCart.length === 0
      : formData.standardCart.length === 0;

  return (
    <div className={classes.productsFormContainer}>
      <div className={classes.productsSummary}>
        <div className={classes.summaryInfo}>
          <h3 className={classes.summaryHeading}>
            {window.innerWidth >= 1280 && 'Oferta'} {headingText}
          </h3>
          <h4 className={classes.summarySubHeading}>
            {subHeadingText} co miesiąc
          </h4>
        </div>
        <div className={classes.summaryProducts}>
          <div className={classes.summaryProduct}>
            <span className={classes.productType}>KAWA ☕</span>
            <span className={classes.productAmount}>x{summaryData.coffee}</span>
          </div>
          <div className={classes.summaryProduct}>
            <span className={classes.productType}>HERBATA 🍵</span>
            <span className={classes.productAmount}>x{summaryData.tea}</span>
          </div>
          <div className={classes.summaryProduct}>
            <span className={classes.productType}>MATE 🧉</span>
            <span className={classes.productAmount}>x{summaryData.mate}</span>
          </div>
        </div>
        <p className={classes.summaryPrice}>
          {summaryData.sum} PLN/msc{type === 'home' && `/os`}
        </p>
      </div>
      <div className={classes.cartContainer}>
        <h3 className={classes.cartHeading}>Koszyk &#128722;</h3>
        <ul className={classes.cartList}>
          {cartList.map((cartItem, i) => (
            <li className={classes.cartListItem} id={cartItem.id} key={i}>
              <img
                alt={cartItem.name}
                className={classes.productImg}
                src={cartItem.photoBin}
              />
              <div className={classes.productInfoContainer}>
                <h4 className={classes.productName}>{cartItem.name}</h4>
                <h5 className={classes.productDescription}>
                  {cartItem.size}
                  {windowWidth > 375 && ` - ${cartItem.price} PLN/szt`}
                </h5>
                {windowWidth <= 375 && (
                  <h5 className={classes.productPriceSmallPhone}>
                    {cartItem.price} PLN/szt
                  </h5>
                )}
              </div>
              <div className={classes.productControls}>
                <span className={classes.minusSign} onClick={decreaseQuantity}>
                  -
                </span>
                <p className={classes.productQuantity}>{cartItem.quantity}</p>
                <span className={classes.plusSign} onClick={increaseQuantity}>
                  +
                </span>
              </div>
            </li>
          ))}
          <li className={classes.addNewProductContainer}>
            <FormButton
              classes={classes}
              onClick={() => setIsModalOpen(true)}
              text='Dodaj Nowy Produkt +'
            />
          </li>
        </ul>
      </div>

      <FormButton classes={classes} onClick={prevStep} text='Wróć' />
      <FormButton
        classes={classes}
        disabled={isNextButtonDisabled}
        onClick={nextStep}
        text='Dalej'
      />
      {isModalOpen && (
        <AddProductModal
          cartList={cartList}
          onClose={closeModal}
          products={productsList}
          setCartList={setCartList}
        />
      )}
    </div>
  );
};

export default ProductsForm;
