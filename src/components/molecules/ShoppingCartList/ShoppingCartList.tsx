import type { FC } from 'react';
import CloseIconButton from '~/components/atoms/CloseIconButton';
import useShoppingCart from '~/hooks/use-shopping-cart';
import type { ICartProduct } from '~/types';
import { formatCurrency } from '~/utils/format-price';

const DEFAULT_QUANTITY = 1;

const ShoppingCartList: FC = () => {
  const {
    products,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
  } = useShoppingCart();

  const renderProductsOfCart = () => {
    return products.map((product: ICartProduct) => {
      const { id, name, price, image, quantity } = product;

      const productPrice = Number(price);
      const productQuantity = Number(quantity || DEFAULT_QUANTITY);
      const productSum = productPrice * productQuantity;

      const onClickDecreaseQuantity = () => decreaseProductQuantity(product);

      const onClickIncreaseQuantity = () => increaseProductQuantity(product);

      const onClickRemoveProduct = () => removeProduct(product);

      return (
        <tr key={`shopping_item_${id}`}>
          <td className="py-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src={image} alt="Product image" />
              <span className="font-semibold">{name}</span>
            </div>
          </td>
          <td className="py-4">${formatCurrency(Number(price))}</td>
          <td className="py-4">
            <div className="flex items-center">
              <button
                className="border rounded-md py-2 px-4 mr-2"
                onClick={onClickDecreaseQuantity}
              >
                -
              </button>
              <span className="text-center w-8">{productQuantity}</span>
              <button
                className="border rounded-md py-2 px-4 ml-2"
                onClick={onClickIncreaseQuantity}
              >
                +
              </button>
            </div>
          </td>
          <td className="py-4 min-w-16">${productSum}</td>
          <td className="py-4 min-w-4">
            <CloseIconButton onClick={onClickRemoveProduct} size={16} />
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left font-semibold">商品</th>
          <th className="text-left font-semibold">單價</th>
          <th className="text-left font-semibold">數量</th>
          <th className="text-left font-semibold">總價</th>
          <th className="text-left font-semibold">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {renderProductsOfCart()}
      </tbody>
    </table>
  )
}

export default ShoppingCartList;