import type { FC } from 'react';
import { memo, useRef } from 'react';
import type { IModalRef } from '~/components/atoms/Modal';
import Modal from '~/components/atoms/Modal';
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
    <nav className="h-[var(--header-height)] py-2 fixed top-0 right-0 left-0 z-50 border-b-[1px]">
      <div className="flex items-center justify-between w-full h-full px-4">
        <span>Logo</span>
        <div className="flex gap-4">
          <button onClick={onClickCart}>購物車({count()})</button>
          <button onClick={onClickOrderHistory}>我的訂單</button>
        </div>
      </div>

      <Modal ref={modalReference}>
        <p>訂單資訊</p>
      </Modal>
    </nav>
  );
}

const MemorizedHeader = memo(Header);

export default MemorizedHeader;
