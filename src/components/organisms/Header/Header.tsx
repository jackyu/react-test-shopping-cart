import type { FC } from 'react';
import { memo, useRef } from 'react';
import type { IModalRef } from '~/components/atoms/Modal';
import Modal from "~/components/atoms/Modal";
import OrderList from "~/components/molecules/OrderList";
import useShoppingCart from '~/hooks/use-shopping-cart';

const Header: FC = (): JSX.Element => {
  const { isOpen, openCart, closeCart, count } = useShoppingCart();
  const modalReference = useRef<IModalRef | null>(null);

  const onClickCart = (): void => {
    if (!isOpen) {
      openCart()
    } else {
      closeCart();
    }
  }

  const onClickOrderHistory = (): void => {
    modalReference.current?.open();
  }

  return (
    <>
      <nav className="h-[var(--header-height)] py-2 fixed top-0 right-0 left-0 z-50 border-b-[1px]">
        <div className="flex items-center justify-between w-full h-full px-4">
          <span>Logo</span>
          <div className="flex gap-4">
            <button type="button" onClick={onClickCart}>購物車({count()})</button>
            <button type="button" onClick={onClickOrderHistory}>我的訂單</button>
          </div>
        </div>
      </nav>

      <Modal ref={modalReference} title="訂單詳細資訊">
        <OrderList />
      </Modal>
    </>
  );
}

const MemorizedHeader = memo(Header);

export default MemorizedHeader;
