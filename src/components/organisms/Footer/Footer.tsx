import type { FC } from 'react';
import { memo } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
  <footer className="py-10 bg-gray-100">
    <div className="flex items-center justify-center w-full px-4">
      <p className="text-gray-700">© copyright 2024</p>
    </div>
  </footer>
  );
}

const MemoizedFooter = memo(Footer);

export default MemoizedFooter;
