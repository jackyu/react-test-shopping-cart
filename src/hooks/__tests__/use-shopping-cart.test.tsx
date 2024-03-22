import { act, renderHook } from '@testing-library/react-hooks';
import useShoppingCart from '../use-shopping-cart';
import { useShoppingCartContext } from '../use-shopping-cart-context';
import useShoppingCartTotal from '../use-shopping-cart-total';

jest.mock('../use-shopping-cart-context');
jest.mock('../use-shopping-cart-total');

describe('useShoppingCart', () => {
  const mockProducts = [
    { id: 1, image: '', name: 'Product 1', price: 100, categoryId: 1, quantity: 2 },
    { id: 2, image: '', name: 'Product 2', price: 50, categoryId: 2, quantity: 3 },
  ];
  const mockSetProducts = jest.fn();
  const mockUpdateShoppingCartTotal = jest.fn();

  beforeEach(() => {
    (useShoppingCartContext as jest.Mock).mockReturnValue({
      isOpen: false,
      openCart: jest.fn(),
      closeCart: jest.fn(),
      products: mockProducts,
      setProducts: mockSetProducts,
    });

    (useShoppingCartTotal as jest.Mock).mockReturnValue({
      updateShoppingCartTotal: mockUpdateShoppingCartTotal,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the correct count of products', () => {
    const { result } = renderHook(() => useShoppingCart());

    expect(result.current.count()).toBe(mockProducts.length);
  });

  it('should return false if the product is not already in the cart', () => {
    const { result } = renderHook(() => useShoppingCart());

    const newProduct = { id: 3, image: '', name: 'Product 3', price: 120, categoryId: 3, quantity: 1 };

    expect(result.current.checkAlreadyInCart(newProduct)).toBe(false);
  });

  it('should return true if the product is already in the cart', () => {
    const { result } = renderHook(() => useShoppingCart());

    const existingProduct = mockProducts[0];

    expect(result.current.checkAlreadyInCart(existingProduct)).toBe(true);
  });

  it('should add a new product to the cart if it is not already in the cart', () => {
    const { result } = renderHook(() => useShoppingCart());

    const newProduct = { id: 3, image: '', name: 'Product 3', price: 120, categoryId: 3, quantity: 1 };

    act(() => {
      result.current.addProduct(newProduct);
    });

    expect(mockSetProducts).toHaveBeenCalledWith([...mockProducts, newProduct]);
    expect(mockUpdateShoppingCartTotal).toHaveBeenCalledWith([...mockProducts, newProduct]);
  });

  it('should not add a product to the cart if it is already in the cart', () => {
    const { result } = renderHook(() => useShoppingCart());

    const existingProduct = mockProducts[0];

    act(() => {
      result.current.addProduct(existingProduct);
    });

    expect(mockSetProducts).not.toHaveBeenCalled();
    expect(mockUpdateShoppingCartTotal).not.toHaveBeenCalled();
  });

  // Add more test cases for the remaining functions...

});