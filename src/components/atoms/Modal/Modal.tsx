import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { twMerge } from 'tailwind-merge';

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
    <div
      className={twMerge(
        'hidden absolute z-[1] w-full min-h-[200px] overflow-auto border rounded-md border-solid border-[#ccc] left-0 top-0',
        isOpen && 'block',
        offsetY && `mt-[${offsetY}px]`,
      )}
    >
      <div className="flex flex-row justify-between items-center pl-4 pr-2 py-2">
        <h3 className="text-base font-medium text-black m-0 p-0">{title}</h3>
        <button
          type="button"
          className="cursor-pointer text-base font-medium text-black m-0 p-2 border-[none] background: transparent"
          onClick={onClickCloseHandler}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            style={{
              display: "inline-block",
              userSelect: "none",
              verticalAlign: "text-bottom",
              overflow: "visible"
            }}
          >
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-start items-start px-4 py-2">
        {children}
      </div>
    </div>
  )
});

export default Modal;