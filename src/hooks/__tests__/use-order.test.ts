import { act, renderHook } from '@testing-library/react-hooks';
import { ICartProduct } from '~/types';
import useOrder from '../use-order';
import { useOrderContext } from '../use-order-context';
import useShoppingCart from '../use-shopping-cart';
import useShoppingCartTotal from '../use-shopping-cart-total';

jest.mock('../use-order-context');
jest.mock('../use-shopping-cart');
jest.mock('../use-shopping-cart-total');

describe('useOrder', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should create an order correctly', () => {
    const mockSetOrders = jest.fn();
    const mockClean = jest.fn();
    const mockTotal = { productQuantity: 2, totalPrice: 200 };

    (useOrderContext as jest.Mock).mockReturnValue({
      orders: [],
      setOrders: mockSetOrders,
    });

    (useShoppingCart as jest.Mock).mockReturnValue({
      clean: mockClean,
    });

    (useShoppingCartTotal as jest.Mock).mockReturnValue({
      total: mockTotal,
    });

    const { result } = renderHook(() => useOrder());

    const products: ICartProduct[] = [
      { id: 1, image: '', name: 'Product 1', price: 100, quantity: 1, categoryId: 1},
      { id: 2, image: '', name: 'Product 2', price: 100, quantity: 1, categoryId: 2},
    ];

    act(() => {
      result.current.createOrder(products);
    });

    expect(mockSetOrders).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({
      id: 1,
      products,
      productQuantity: mockTotal.productQuantity,
      totalPrice: mockTotal.totalPrice,
    })]));
  });

  it('should remove all orders correctly', () => {
    const mockSetOrders = jest.fn();
    const mockTotal = { productQuantity: 2, totalPrice: 200 };

    (useShoppingCartTotal as jest.Mock).mockReturnValue({
      total: mockTotal,
    });

    (useOrderContext as jest.Mock).mockReturnValue({
      orders: [],
      setOrders: mockSetOrders,
    });

    const { result } = renderHook(() => useOrder());

    act(() => {
      result.current.removeAllOrder();
    });

    expect(mockSetOrders).toHaveBeenCalledWith([]);
  });
});