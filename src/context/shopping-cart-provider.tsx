import { createContext, useMemo, useState } from 'react';
import type { ICartProduct, ICartTotal } from '~/types';

export interface IShoppingCartContext {
  isOpen: boolean;
  openCart(): void;
  closeCart(): void;
  products: ICartProduct[];
  setProducts(products: ICartProduct[]): void;
  total: ICartTotal
  setTotal(total: ICartTotal): void
}

export const ShoppingCartContext = createContext<IShoppingCartContext | undefined>(undefined);

interface IShoppingCartProviderPros {
  children: React.ReactNode;
}

const totalInitialValues = {
  productQuantity: 0,
  totalPrice: 0,
}

export default function ShoppingCartProvider({ children }: IShoppingCartProviderPros) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [total, setTotal] = useState<ICartTotal>(totalInitialValues);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const value = useMemo(
    () => ({
      isOpen,
      openCart,
      closeCart,
      products,
      setProducts,
      total,
      setTotal,
    }),
    [isOpen, products, total]
  );

  return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>;
}
