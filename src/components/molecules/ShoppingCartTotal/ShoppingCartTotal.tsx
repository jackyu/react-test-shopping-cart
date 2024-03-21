import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import useOrder from '~/hooks/use-order';
import useShoppingCart from '~/hooks/use-shopping-cart';
import useShoppingCartTotal from '~/hooks/use-shopping-cart-total';
import { formatCurrency } from '~/utils/format-price';

const ShoppingCartTotal: FC = () => {
  const { total } = useShoppingCartTotal();
  const { products, closeCart, clean } = useShoppingCart();
  const { createOrder } = useOrder();

  const onClickCloseShoppingCart = () => closeCart();

  const onClickCheckout = () => {
    if (!products || products.length === 0) return;

    createOrder(products);
    clean();
    closeCart();
  }

  const isEmpty = products.length === 0;

  return (
    <div className="rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">費用</h2>
      <div className="flex justify-between mb-4">
        <span className="font-semibold">總計</span>
        <span className="font-semibold">${formatCurrency(Number(total.totalPrice))}</span>
      </div>
      <hr className="mb-2" />
      <button
        type="button"
        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mt-4 w-full"
        onClick={onClickCloseShoppingCart}
      >
        繼續點餐
      </button>
      <button
        type="button"
        className={twMerge(
          'py-2 px-4 rounded-lg mt-4 w-full',
          isEmpty ? 'bg-blue-100 text-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600',
        )}
        onClick={onClickCheckout}
        disabled={isEmpty}
      >
        結帳
      </button>
    </div>
  )
}

export default ShoppingCartTotal;