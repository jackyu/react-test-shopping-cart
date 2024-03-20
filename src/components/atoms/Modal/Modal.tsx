import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CloseIconButton from '../CloseIconButton';

interface IProps {
  title?: string;
  children: React.ReactNode;
  offsetY?: number;
}

export interface IModalRef {
  open: () => void,
  close: () => void,
}

/**
 * @param {string} title - 標題
 * @param {number} offsetY - Modal 距離上方的偏移量，預設為 46px
 * @returns {JSX.Element}
 */
const Modal = forwardRef<IModalRef, IProps>(function Modal({ title = '標題', children, offsetY = 46 }: IProps, ref) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickCloseHandler = (): void => {
    setIsOpen(false);
  }

  // 透過 useImperativeHandle 可以讓父層透過 ref 操作子層的方法
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return isOpen && (
    <div className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div
        className={twMerge(
          'hidden relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4',
          isOpen && 'block',
          offsetY && `mt-[${offsetY}px]`,
        )}
      >
        <div className="flex flex-row justify-between items-center px-6 py-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900"> {title} </h3>
          <CloseIconButton onClick={onClickCloseHandler} size={24} />
        </div>
        <div className="prose max-w-screen-md min-h-[280px] max-h-[480px] p-6 overflow-y-auto">
          {children}
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
            onClick={onClickCloseHandler}
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  )
});

export default Modal;