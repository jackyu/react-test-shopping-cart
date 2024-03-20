import type { FC } from 'react';
import { useCallback } from 'react';
import CloseIconButton from '~/components/atoms/CloseIconButton';
import ShoppingCartList from '~/components/molecules/ShoppingCartList';
import ShoppingCartTotal from '~/components/molecules/ShoppingCartTotal';
import useShoppingCart from '~/hooks/use-shopping-cart';
import useShoppingCartTotal from '~/hooks/use-shopping-cart-total';

const ShoppingCart: FC = () => {
  const { closeCart } = useShoppingCart();
  const { total } = useShoppingCartTotal();

  const onClickCloseShoppingCart = useCallback(() => closeCart(), [closeCart]);

  return (
    <div className="bg-white w-full h-full py-4 px-0 absolute top-0 left-0 z-50">
      <div className="mx-auto px-0">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mb-4">購物車，共計 {total.productQuantity} 項商品</h2>
          <CloseIconButton onClick={onClickCloseShoppingCart} />
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-3/4">
            <div className="rounded-lg shadow-md p-6 mb-4">
              <ShoppingCartList />
            </div>
          </div>

          <div className="w-1/4">
            <ShoppingCartTotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;