import { createContext, useMemo, useState } from 'react';
import type { ICartProduct, ICartTotal } from '~/types';

export interface IShoppingCartContext {
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
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [total, setTotal] = useState<ICartTotal>(totalInitialValues);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      total,
      setTotal,
    }),
    [products, total]
  );

  return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>;
}
