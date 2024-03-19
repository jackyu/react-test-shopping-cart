import { ICartProduct, ICartTotal } from "~/types";
import { useShoppingCartContext } from "./use-shopping-cart-context";

const DEFAULT_INITIALIZE = 0;

const useShoppingCartTotal = () => {
  const { total, setTotal } = useShoppingCartContext();

  const updateShoppingCartTotal = (products: ICartProduct[]) => {
    // 數量
    const productQuantity = products.reduce((acc: number, product: ICartProduct) => {
      acc += Number(product.quantity);
      return acc;
    }, DEFAULT_INITIALIZE);

    // 總價
    const totalPrice = products.reduce((acc: number, product: ICartProduct) => {
      acc += (Number(product.quantity) * Number(product.price));
      return acc;
    }, DEFAULT_INITIALIZE);

    const newTotal: ICartTotal = {
      productQuantity,
      totalPrice,
    }

    setTotal(newTotal);
  }

  return {
    total,
    updateShoppingCartTotal,
  }
}

export default useShoppingCartTotal;