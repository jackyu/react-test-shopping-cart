import { useShoppingCartContext } from './use-shopping-cart-context';
import { ICartProduct } from '~/types';

const EMPTY_LENGTH = 0;

const useShoppingCart = () => {
  const { products, setProducts, setTotal } = useShoppingCartContext();

  const checkAlreadyInCart = (newProduct: ICartProduct): boolean => {
    if (products.length === EMPTY_LENGTH) return false;

    return products.some((product: ICartProduct) => product.id === newProduct.id);
  }

  const addProduct = (newProduct: ICartProduct) => {
    const isAlreadyInCart = checkAlreadyInCart(newProduct);

    if (!isAlreadyInCart) {
      setProducts([...products, newProduct]);
      setTotal
    }
  }

  return {
    checkAlreadyInCart,
    addProduct,
  }
}

export default useShoppingCart;