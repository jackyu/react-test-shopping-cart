import type { FC } from 'react';
import { memo } from 'react';

const Header: FC = (): JSX.Element => {
  return (
    <nav className="h-[var(--header-height)] py-2 fixed top-0 right-0 left-0 z-50 border-b-[1px]">
      <div className="flex items-center justify-between w-full h-full px-4">
        <span>Logo</span>
        <button>購物車</button>
      </div>
    </nav>
  );
}

const MemorizedHeader = memo(Header);

export default MemorizedHeader;
