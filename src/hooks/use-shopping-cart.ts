import useShoppingCartTotal from '~/hooks/use-shopping-cart-total';
import { ICartProduct, IProduct } from '~/types';
import { useShoppingCartContext } from './use-shopping-cart-context';

const EMPTY_LENGTH = 0;
const MINIMUM_NUMBER = 1;
const INCREASE_NUMBER = +1;
const DECREASE_NUMBER = -1;

const useShoppingCart = () => {
  const { isOpen, openCart, closeCart, products, setProducts } = useShoppingCartContext();
  const { updateShoppingCartTotal } = useShoppingCartTotal();

  const count = (): number => products ? products.length : EMPTY_LENGTH;

  const checkAlreadyInCart = (newProduct: IProduct): boolean => {
    if (products.length === EMPTY_LENGTH) return false;

    return products.some((product: ICartProduct) => product.id === newProduct.id);
  }

  const addProduct = (newProduct: ICartProduct): void => {
    const isAlreadyInCart = checkAlreadyInCart(newProduct);

    const updatedProducts = [...products, newProduct];

    if (!isAlreadyInCart) {
      setProducts(updatedProducts);
      updateShoppingCartTotal(updatedProducts);
    }
  }

  const removeProduct = (removedProduct: ICartProduct): void => {
    const updatedProducts = products.filter((product: ICartProduct) => product.id !== removedProduct.id);

    setProducts(updatedProducts);
    updateShoppingCartTotal(updatedProducts);
  }

  const _updateQuantity = (
    currentProduct: ICartProduct,
    targetProduct: ICartProduct,
    quantity: number
  ): ICartProduct => {
    if (currentProduct.id === targetProduct.id) {
      const newQuantity = currentProduct.quantity + quantity;

      return ({ ...currentProduct, quantity: newQuantity < MINIMUM_NUMBER ? MINIMUM_NUMBER : newQuantity });
    } else {
      return currentProduct;
    }
  }

  const increaseProductQuantity = (currentProduct: ICartProduct): void => {
    const updatedProducts = products.map((product: ICartProduct) => {
      return _updateQuantity(product, currentProduct, INCREASE_NUMBER);
    })

    setProducts(updatedProducts);
    updateShoppingCartTotal(updatedProducts);
  }

  const decreaseProductQuantity = (currentProduct: ICartProduct): void => {
    const updatedProducts = products.map((product: ICartProduct) => {
      return _updateQuantity(product, currentProduct, DECREASE_NUMBER);
    })

    setProducts(updatedProducts);
    updateShoppingCartTotal(updatedProducts);
  }

  return {
    isOpen,
    openCart,
    closeCart,
    products,
    count,
    checkAlreadyInCart,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  }
}

export default useShoppingCart;