import type { FC } from 'react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import useShoppingCart from '~/hooks/use-shopping-cart';
import type { IProduct } from '~/types';
import { formatCurrency } from '~/utils/format-price';

interface IProps {
  item: IProduct;
}

const DEFAULT_COUNT = 1;

const ProductCard: FC<IProps> = ({ item }): JSX.Element => {
  const {
    checkAlreadyInCart,
    addProduct,
  } = useShoppingCart();

  const isAlreadyInCart = useMemo(() => checkAlreadyInCart(item), [checkAlreadyInCart, item]);
  const buttonLabel = isAlreadyInCart ? '已加入' : '加到購物車';

  const onClickAddToCart = () => {
    if (isAlreadyInCart) return;

    addProduct({ ...item, quantity: DEFAULT_COUNT });
  }

  const { id, image, name, description, price } = item;

  return (
    <div key={`product_${id}`} className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-black-500 ring-opacity-40 max-w-sm p-1">
      <div className="relative">
        <img className="w-[280px]" src={image} alt="Product Image" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 w-[210px] line-clamp-2 min-h-[40px]">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${formatCurrency(Number(price))}</span>
          <button
            type="button"
            className={twMerge(
              'font-bold py-2 px-4 rounded min-w-[120px]',
              isAlreadyInCart ? 'bg-blue-300 hover:bg-blue-300 text-gray-500' : 'bg-blue-500 hover:bg-blue-600 text-white'
            )}
            disabled={isAlreadyInCart}
            onClick={onClickAddToCart}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
