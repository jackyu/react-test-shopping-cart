import type { FC } from 'react';
import useShoppingCart from '~/hooks/use-shopping-cart';
import useShoppingCartTotal from '~/hooks/use-shopping-cart-total';
import { formatCurrency } from '~/utils/format-price';

const ShoppingCartTotal: FC = () => {
  const { total } = useShoppingCartTotal();
  const { closeCart } = useShoppingCart();

  const onClickCloseShoppingCart = () => closeCart();

  return (
    <div className="rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">費用</h2>
      <div className="flex justify-between mb-4">
        <span className="font-semibold">總計</span>
        <span className="font-semibold">${formatCurrency(Number(total.totalPrice))}</span>
      </div>
      <hr className="mb-2" />
      <button className="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 w-full" onClick={onClickCloseShoppingCart}>繼續點餐</button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">結帳</button>
    </div>
  )
}

export default ShoppingCartTotal;