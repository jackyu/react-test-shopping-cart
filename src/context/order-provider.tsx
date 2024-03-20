import { createContext, useMemo, useState } from 'react';
import type { IOrder } from '~/types';

export interface IOrderContext {
  orders: IOrder[];
  setOrders(orders: IOrder[]): void;
}

export const OrderContext = createContext<IOrderContext | undefined>(undefined);

type OrderProviderPros = {
  children: React.ReactNode;
};

export default function OrderProvider({ children }: OrderProviderPros) {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const value: IOrderContext = useMemo(
    () => ({
      orders,
      setOrders,
    }),
    [orders]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
