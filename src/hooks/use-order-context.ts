import { useContext } from 'react';
import type { IOrderContext } from '~/context/order-provider';
import { OrderContext } from '~/context/order-provider';

export const useOrderContext = (): IOrderContext => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      'useOrderContext must be used within a OrderProvider'
    );
  }

  return context;
}
