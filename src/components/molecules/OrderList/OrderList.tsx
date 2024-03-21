import type { FC } from 'react';
import useOrder from '~/hooks/use-order';
import { ICartProduct, IOrder } from '~/types';
import { timestampFormat } from '~/utils/date';
import { formatCurrency } from '~/utils/format-price';
import { pad } from '~/utils/number';

const OrderList: FC = () => {
  const { orders, removeAllOrder } = useOrder();
  const isNotEmpty = orders && orders.length !== 0;

  const onClickRemoveAllOrderHandler = () => {
    removeAllOrder();
  }

  const renderProductsOfOrder = (orderId: number, products: ICartProduct[]) => {
    return products.map(({ id, name, image,  price, quantity }) => {
      const total = price * quantity;

      return (
        <div key={`order_${orderId}_product_${id}`} className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 w-full border-b">
          <div className="flex flex-row justify-start items-start w-full">
            <img className="w-[54px] mr-4 block" src={image} alt="product image" />
            <div className="border-gray-200 flex-col flex justify-between items-start w-full space-y-4">
              <div className="w-full flex flex-col justify-start items-start space-y-8">
                <h3 className="text-xl font-semibold leading-6 text-gray-800">
                  {name}
                </h3>
              </div>
              <div className="flex justify-between space-x-8 items-start w-full">
                <p className="text-base leading-6">單價: ${formatCurrency(price)}</p>
                <p className="text-base leading-6 text-gray-800">數量: {quantity}</p>
                <p className="text-base font-semibold leading-6 text-gray-800">小計: ${formatCurrency(total)}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })
  };

  return isNotEmpty ? (
    <>
      {orders.map(({ id, createdDate, products, totalPrice, productQuantity }: IOrder) => {
        return (
          <div key={`order_${id}`} className="mx-auto mb-10 last:mb-0">
            <div className="flex flex-row justify-between items-end w-full">
              <div className="flex justify-start item-start space-y-2 flex-col">
                <h2 className="text-2xl text-black font-semibold leading-7">訂單編號: {pad(id, 3, '0')}</h2>
                <p className="text-base text-gray-600 font-medium leading-6">下單日期: {timestampFormat(createdDate.getTime(), 'YYYYMMDD MMSS')}</p>
              </div>
              <p className="text-lg text-gray-600 leading-6">總計: 共 <span className="text-2xl text-black font-semibold leading-6">{productQuantity}</span> 件商品 / <span className="text-2xl text-black font-semibold leading-6">${formatCurrency(totalPrice)}</span> 元</p>
            </div>
            <div className="mt-4 flex flex-col justify-start items-start w-full">
              {renderProductsOfOrder(id, products)}
            </div>
          </div>
        )
      })}
      <p>
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700"
          onClick={onClickRemoveAllOrderHandler}
        >
          清除所有訂單歷史記錄
        </button>
      </p>
    </>
  ) : (
    <div className="text-center">
      <p className="text-xl text-black font-semibold leading-7">目前無任何訂單明細</p>
    </div>
  );
}

export default OrderList;
