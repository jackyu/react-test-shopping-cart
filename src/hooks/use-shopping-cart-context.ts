import { ShoppingCartContext } from '~/context/shopping-cart-provider';
import { useContext } from 'react';
import type { IShoppingCartContext } from '~/context/shopping-cart-provider';

export const useShoppingCartContext = (): IShoppingCartContext => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      'useShoppingCartContext must be used within a ShoppingCartProvider'
    );
  }

  return context;
}
