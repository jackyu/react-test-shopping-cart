import { ICartProduct, IOrder } from '~/types';
import { useOrderContext } from './use-order-context';
import useShoppingCartTotal from './use-shopping-cart-total';

const today = new Date();

const useOrder = () => {
  const { orders, setOrders } = useOrderContext();
  const { total } = useShoppingCartTotal();

  const createOrder = (products: ICartProduct[]): void => {
    const orderNumber = orders.length + 1;
    const { productQuantity, totalPrice } = total;

    const order: IOrder = {
      id: orderNumber,
      products,
      createdDate: today,
      productQuantity,
      totalPrice,
    }

    setOrders([...orders, order]);
  }

  const removeAllOrder = (): void => {
    setOrders([]);
  }

  return {
    orders,
    createOrder,
    removeAllOrder,
  }
}

export default useOrder;