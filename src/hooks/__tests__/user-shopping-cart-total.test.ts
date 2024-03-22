import { act, renderHook } from '@testing-library/react-hooks';
import { ICartProduct } from '~/types';
import { useShoppingCartContext } from "../use-shopping-cart-context";
import useShoppingCartTotal from '../use-shopping-cart-total';

jest.mock('../use-shopping-cart-context');

describe('useShoppingCartTotal', () => {
  const mockSetTotal = jest.fn();
  const mockTotal = { productQuantity: 0, totalPrice: 0 };

  (useShoppingCartContext as jest.Mock).mockReturnValue({
    total: mockTotal,
    setTotal: mockSetTotal,
  });

  it('should calculate the total quantity and price correctly', () => {
    const { result } = renderHook(() => useShoppingCartTotal());

    const products: ICartProduct[] = [
      { id: 1, image: '', name: 'Product 1', price: 100, quantity: 1, categoryId: 1},
      { id: 2, image: '', name: 'Product 2', price: 100, quantity: 1, categoryId: 2},
    ];

    act(() => {
      result.current.updateShoppingCartTotal(products);
    });

    expect(mockSetTotal).toHaveBeenCalledWith({
      productQuantity: 2,
      totalPrice: 200,
    });
  });

  it('should initialize with zero quantity and price', () => {
    const { result } = renderHook(() => useShoppingCartTotal());

    expect(result.current.total.productQuantity).toEqual(0);
    expect(result.current.total.totalPrice).toEqual(0);
  });
});