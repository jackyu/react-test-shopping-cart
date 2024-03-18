import type { FC } from 'react';
import type { ICategory } from '~/types';
import { useCategoryContext } from '~/hooks/use-category-context';

interface IProps {
  data: ICategory[];
}

const Navigation: FC<IProps> = ({ data }): JSX.Element | null => {
  const { setCategoryId } = useCategoryContext();

  const onClickToChangeCategory = (id: number) => () => {
    setCategoryId && setCategoryId(id);
  }

  return data && data.length > 0 ? (
    <ul className="flex justify-between">
      {data.map((category: ICategory) => (
      <li key={`category_${category.id}`} className="mr-3">
        <button className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" onClick={onClickToChangeCategory(category.id)}>
          {category.name}
        </button>
      </li>
      ))}
    </ul>
  ) : null;
};

export default Navigation;